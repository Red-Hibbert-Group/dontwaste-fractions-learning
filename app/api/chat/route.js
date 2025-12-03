import { NextResponse } from 'next/server'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// System prompts for each chapter
const CHAPTER_CONTEXTS = {
  fractions: `You are a friendly, patient math tutor helping students learn about fractions.
Your role is to:
- Explain fraction concepts in simple, relatable terms
- Use real-world examples (pizza, chocolate bars, sharing)
- Break down complex problems into smaller steps
- Encourage students with positive reinforcement
- Ask guiding questions rather than giving direct answers
- Use visual language and suggest mental images
- Keep responses concise (2-3 sentences max for simple questions)
- For complex questions, break into numbered steps

Topics you can help with:
- Understanding numerators and denominators
- Equivalent fractions
- Comparing fractions
- Adding and subtracting fractions
- Real-world applications
- Visual representations

Always be encouraging and patient. If the student is stuck, provide a hint first, then a more detailed explanation if needed.`,

  decimals: `You are a friendly math tutor helping students understand decimals.
Focus on:
- Place value (tenths, hundredths, thousandths)
- Converting between fractions and decimals
- Comparing and ordering decimals
- Adding, subtracting decimals
- Real-world uses (money, measurements)
- Relationship to fractions

Keep explanations simple and use relatable examples.`,

  percentages: `You are a helpful math tutor teaching percentages.
Focus on:
- Understanding "percent" means "out of 100"
- Converting fractions/decimals to percentages
- Finding percentages of numbers
- Real-world applications (discounts, grades, statistics)
- Percentage increase/decrease

Use practical examples students encounter daily.`,

  numbersense: `You are an engaging math tutor building number sense.
Focus on:
- Mental math strategies
- Estimation techniques
- Number patterns and relationships
- Rounding and approximation
- Breaking numbers apart
- Quick calculation tricks

Make math feel intuitive and fun!`
}

export async function POST(request) {
  try {
    const { message, chapterId, studentName, conversationHistory } = await request.json()

    console.log('Chat API called:', { message, chapterId, studentName, hasHistory: !!conversationHistory })

    if (!OPENAI_API_KEY) {
      console.error('OpenAI API key is not configured')
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your .env.local file.' },
        { status: 500 }
      )
    }

    if (!OPENAI_API_KEY.startsWith('sk-')) {
      console.error('Invalid OpenAI API key format')
      return NextResponse.json(
        { error: 'Invalid OpenAI API key format. Key should start with "sk-"' },
        { status: 500 }
      )
    }

    // Get chapter-specific system prompt
    const systemPrompt = CHAPTER_CONTEXTS[chapterId] || CHAPTER_CONTEXTS.fractions

    // Build messages array
    const messages = [
      {
        role: 'system',
        content: systemPrompt + `\n\nStudent name: ${studentName || 'Student'}`
      },
      ...(conversationHistory || []),
      {
        role: 'user',
        content: message
      }
    ]

    // Call OpenAI API
    console.log('Calling OpenAI API with', messages.length, 'messages')

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Using GPT-4 mini for cost efficiency
        messages: messages,
        max_tokens: 300,
        temperature: 0.7,
        presence_penalty: 0.6,
        frequency_penalty: 0.3
      })
    })

    console.log('OpenAI API response status:', response.status)

    if (!response.ok) {
      const error = await response.json()
      console.error('OpenAI API Error:', error)

      let errorMessage = 'Failed to get response from AI'
      if (response.status === 401) {
        errorMessage = 'Invalid OpenAI API key. Please check your API key in .env.local'
      } else if (response.status === 429) {
        errorMessage = 'Rate limit exceeded or no credits available. Please check your OpenAI account.'
      } else if (error.error?.message) {
        errorMessage = error.error.message
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('OpenAI API success, tokens used:', data.usage?.total_tokens)

    const aiMessage = data.choices[0].message.content

    return NextResponse.json({
      message: aiMessage,
      usage: data.usage
    })

  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
