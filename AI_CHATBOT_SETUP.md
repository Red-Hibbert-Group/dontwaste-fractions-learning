# AI Chatbot Setup Guide

## Overview
The TimeBack Learning platform now includes an AI-powered chatbot that helps students understand math concepts in real-time using OpenAI's GPT-4o-mini model.

## Features
- **Context-Aware**: Understands which chapter the student is studying
- **Personalized**: Addresses students by name
- **Educational**: Uses Socratic method - asks guiding questions rather than giving direct answers
- **Real-time Help**: Instant responses to student doubts
- **Conversation Memory**: Maintains context across multiple questions
- **Quick Questions**: Preset questions for common doubts

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)
5. **Important**: Save this key securely - you won't see it again!

### 2. Configure Environment Variables

1. Create a `.env.local` file in the project root:
   ```bash
   touch .env.local
   ```

2. Add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 3. Verify Setup

1. Start the app and navigate to any chapter
2. Look for the floating blue robot button (🤖) in the bottom-right corner
3. Click it to open the chatbot
4. Try asking a question like "How do I compare fractions?"
5. If you see a response, it's working!

## Usage

### For Students

**Opening the Chatbot:**
- Click the floating robot button (🤖) in any chapter

**Asking Questions:**
- Type your question in natural language
- Example: "Why is 1/2 equal to 2/4?"
- Example: "I'm stuck on adding fractions with different denominators"
- Example: "Can you explain this with a pizza example?"

**Quick Questions:**
- Click the preset questions for common topics
- Great for getting started!

**Tips for Best Results:**
- Be specific about what you don't understand
- Mention the problem you're working on
- Ask follow-up questions if something is still unclear

### For Teachers/Developers

**Chapter-Specific Contexts:**
Each chapter has a tailored system prompt in `app/api/chat/route.js`:
- **Fractions**: Focus on visual representations, equivalent fractions
- **Decimals**: Place value, conversions, real-world examples
- **Percentages**: "Out of 100" concept, practical applications
- **Number Sense**: Mental math strategies, estimation

**Customizing Prompts:**
Edit `CHAPTER_CONTEXTS` in `app/api/chat/route.js` to adjust:
- Teaching style
- Response length
- Topics covered
- Example types

**API Usage:**
The chatbot uses OpenAI's GPT-4o-mini model:
- **Cost**: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- **Response Time**: Typically 1-3 seconds
- **Max Tokens**: Limited to 300 per response (keeps answers concise)

## File Structure

```
app/
  api/
    chat/
      route.js          # OpenAI API endpoint with chapter contexts
components/
  AIChatbot.js          # Main chatbot UI component
  ChapterFlow.js        # Integrated with floating button
.env.local              # Your API key (DO NOT commit!)
.env.local.example      # Template for API key setup
```

## Cost Management

### Estimated Costs (GPT-4o-mini)
- Per student conversation (~10 questions): $0.001 - $0.003
- Per 100 students per day: $0.10 - $0.30
- Per month (100 students, 20 days): $2 - $6

### Cost Optimization Tips
1. **Set Usage Limits**: Configure monthly spending limits in OpenAI dashboard
2. **Monitor Usage**: Check usage at https://platform.openai.com/usage
3. **Adjust Max Tokens**: Reduce `max_tokens` in route.js for shorter responses
4. **Cache Responses**: Consider caching common question-answer pairs

## Troubleshooting

### "OpenAI API key not configured"
- Ensure `.env.local` file exists in project root
- Verify the key is correct and starts with `sk-`
- Restart the development server after adding the key

### "Failed to get response from AI"
- Check your OpenAI account has available credits
- Verify API key is active at https://platform.openai.com/api-keys
- Check browser console for detailed error messages
- Ensure you have internet connection

### Chatbot Not Appearing
- Verify you're in a chapter view (not landing page)
- Check browser console for JavaScript errors
- Ensure `AIChatbot.js` is properly imported in `ChapterFlow.js`

### Slow Responses
- GPT-4o-mini typically responds in 1-3 seconds
- Check your internet connection
- Try reducing `max_tokens` in `route.js` for faster responses
- Consider using a lighter model if speed is critical

## Security Notes

⚠️ **IMPORTANT**: Never commit your `.env.local` file to Git!

- The `.env.local` file is in `.gitignore` by default
- API keys should be kept secret
- For production, use environment variables in your hosting platform
- Rotate API keys regularly
- Set usage limits to prevent unexpected charges

## Future Enhancements

Potential improvements:
- **Voice Input**: Allow students to ask questions by voice
- **Image Understanding**: Let students upload pictures of problems
- **Progress Tracking**: Log which topics students ask about most
- **Feedback Loop**: Allow students to rate responses
- **Multilingual**: Support multiple languages
- **Offline Mode**: Fallback to cached responses when no internet

## Support

If you encounter issues:
1. Check this documentation first
2. Review the troubleshooting section
3. Check OpenAI API status: https://status.openai.com/
4. Create an issue on GitHub with:
   - Error messages from browser console
   - Steps to reproduce
   - Your Node.js and Next.js versions

## API Reference

### POST /api/chat

**Request Body:**
```json
{
  "message": "How do I compare fractions?",
  "chapterId": "fractions",
  "studentName": "John",
  "conversationHistory": [
    {"role": "user", "content": "Previous question"},
    {"role": "assistant", "content": "Previous answer"}
  ]
}
```

**Response:**
```json
{
  "message": "Great question! To compare fractions...",
  "usage": {
    "prompt_tokens": 150,
    "completion_tokens": 80,
    "total_tokens": 230
  }
}
```

## Credits

Built with:
- [OpenAI GPT-4o-mini](https://platform.openai.com/docs/models)
- [Next.js 14](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/) for animations
