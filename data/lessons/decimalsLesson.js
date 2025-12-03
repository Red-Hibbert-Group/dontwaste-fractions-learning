export const decimalsLesson = {
  id: 'decimals-intro',
  title: 'Understanding Decimals',
  subtitle: 'Learn about decimal numbers and place value',
  duration: '10 minutes',
  xp: 20,

  slides: [
    {
      type: 'concept',
      icon: '💠',
      title: 'What is a Decimal?',
      content: 'A decimal is another way to write fractions! Instead of writing 1/2, we can write 0.5. Decimals use a dot (called a decimal point) to separate whole numbers from parts of a whole. The numbers after the decimal point represent tenths, hundredths, and thousandths.',
      visual: (
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-4">3.75</div>
            <div className="flex gap-8 justify-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Whole number</div>
              </div>
              <div className="text-3xl">.</div>
              <div>
                <div className="text-3xl font-bold text-green-600">7</div>
                <div className="text-sm text-gray-600">Tenths</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">5</div>
                <div className="text-sm text-gray-600">Hundredths</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-gray-700">
              3.75 means <span className="font-bold">3 wholes + 7 tenths + 5 hundredths</span>
            </p>
          </div>
        </div>
      )
    },

    {
      type: 'concept',
      icon: '🔢',
      title: 'Place Value in Decimals',
      content: 'Just like whole numbers have ones, tens, and hundreds places, decimals have tenths, hundredths, and thousandths places. Each place is 10 times bigger than the one to its right. Understanding place value helps us read, write, and compare decimals.',
      visual: (
        <div className="space-y-4">
          <div className="text-center text-2xl font-bold text-blue-600 mb-4">
            2.468
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="bg-blue-100 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">2</div>
              <div className="text-xs text-gray-600 mt-1">Ones</div>
            </div>
            <div className="bg-gray-200 rounded-lg p-3 text-center flex items-center justify-center">
              <div className="text-2xl">.</div>
            </div>
            <div className="bg-green-100 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">4</div>
              <div className="text-xs text-gray-600 mt-1">Tenths (1/10)</div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">6</div>
              <div className="text-xs text-gray-600 mt-1">Hundredths (1/100)</div>
            </div>
            <div className="bg-purple-100 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">8</div>
              <div className="text-xs text-gray-600 mt-1">Thousandths (1/1000)</div>
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'example',
      title: 'Example: Converting Fractions to Decimals',
      problem: 'Convert 3/4 to a decimal',
      steps: [
        'Think: 3/4 means 3 divided by 4',
        'Divide: 3 ÷ 4 = 0.75',
        'Or remember: 1/4 = 0.25, so 3/4 = 0.25 × 3 = 0.75',
        'Check: 0.75 = 75/100 = 3/4 ✓'
      ],
      solution: '3/4 = 0.75'
    },

    {
      type: 'concept',
      icon: '⚖️',
      title: 'Comparing Decimals',
      content: 'To compare decimals, line up the decimal points and compare digit by digit from left to right. Start with the whole number, then tenths, then hundredths. Add zeros if needed to make the comparison easier!',
      visual: (
        <div className="space-y-4">
          <div className="text-center font-semibold text-gray-700 mb-3">
            Which is larger: 0.5 or 0.47?
          </div>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <div className="flex gap-4 items-center justify-center">
              <div className="text-2xl font-mono">0.50</div>
              <div className="text-xl text-blue-600">&gt;</div>
              <div className="text-2xl font-mono">0.47</div>
            </div>
            <div className="text-center text-sm text-gray-600">
              Compare tenths: 5 tenths &gt; 4 tenths
            </div>
            <div className="text-center font-bold text-green-600">
              So 0.5 is larger! ✓
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'example',
      title: 'Example: Adding Decimals',
      problem: 'What is 3.45 + 2.8?',
      steps: [
        'Line up the decimal points:',
        '  3.45',
        '+ 2.80  (add a zero to make it easier)',
        '------',
        '  6.25',
        'Add like normal numbers, keeping the decimal point in place'
      ],
      solution: '3.45 + 2.8 = 6.25'
    },

    {
      type: 'realworld',
      title: 'Decimals in Real Life',
      scenario: 'You\'re shopping and find a shirt for $19.99 and pants for $24.50. How much will you spend in total?',
      visual: (
        <div className="flex justify-center gap-4 my-4">
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">👕</div>
            <div className="font-semibold">Shirt</div>
            <div className="text-xl font-bold text-blue-600">$19.99</div>
          </div>
          <div className="flex items-center text-2xl font-bold">+</div>
          <div className="bg-purple-100 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">👖</div>
            <div className="font-semibold">Pants</div>
            <div className="text-xl font-bold text-purple-600">$24.50</div>
          </div>
          <div className="flex items-center text-2xl font-bold">=</div>
          <div className="bg-green-100 rounded-lg p-4 text-center">
            <div className="text-4xl mb-2">💵</div>
            <div className="font-semibold">Total</div>
            <div className="text-xl font-bold text-green-600">$44.49</div>
          </div>
        </div>
      ),
      explanation: 'We use decimals for money every day! Line up the decimal points: $19.99 + $24.50 = $44.49. This helps us keep track of dollars and cents accurately.'
    },

    {
      type: 'concept',
      icon: '🎓',
      title: 'Key Takeaways',
      content: 'Excellent work learning about decimals! Remember: (1) Decimals are another way to write fractions, (2) The decimal point separates wholes from parts, (3) Place value matters - tenths, hundredths, thousandths, (4) Line up decimal points when adding or subtracting, (5) To compare decimals, compare digit by digit from left to right. Decimals are everywhere in real life - money, measurements, sports statistics, and more!',
      visual: (
        <div className="bg-white rounded-lg p-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">0.1 = 1/10 (one tenth)</div>
              <div className="text-sm text-gray-600">First digit after decimal</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">0.01 = 1/100 (one hundredth)</div>
              <div className="text-sm text-gray-600">Second digit after decimal</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Line up the decimal points!</div>
              <div className="text-sm text-gray-600">When adding or subtracting</div>
            </div>
          </div>
        </div>
      )
    }
  ],

  miniQuiz: {
    question: 'Which decimal is largest: 0.8, 0.75, or 0.805?',
    options: [
      '0.8 is largest',
      '0.75 is largest',
      '0.805 is largest',
      'They are all equal'
    ],
    correctIndex: 2,
    explanation: '0.805 is largest! When we line them up: 0.800, 0.750, 0.805. Comparing the hundredths place, 0.805 has the most (80.5 hundredths).'
  }
}
