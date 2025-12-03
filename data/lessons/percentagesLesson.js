export const percentagesLesson = {
  id: 'percentages-intro',
  title: 'Understanding Percentages',
  subtitle: 'Learn what percentages mean and how to use them',
  duration: '10 minutes',
  xp: 20,

  slides: [
    {
      type: 'concept',
      icon: '📊',
      title: 'What is a Percentage?',
      content: 'A percentage is a special way of expressing a fraction where the denominator is always 100! The word "percent" means "per hundred" or "out of 100". When you see 75%, it means 75 out of 100. Percentages help us compare things easily and are used everywhere - test scores, discounts, statistics, and more!',
      visual: (
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-pink-600 mb-4">75%</div>
            <div className="text-2xl text-gray-700 mb-2">=</div>
            <div className="text-3xl font-bold text-blue-600">75/100</div>
          </div>
          <div className="grid grid-cols-10 gap-1 max-w-md">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-6 border border-gray-300 ${
                  i < 75 ? 'bg-pink-500' : 'bg-white'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700 text-center">
            <span className="font-bold">75 out of 100</span> squares are filled
          </p>
        </div>
      )
    },

    {
      type: 'concept',
      icon: '🔄',
      title: 'Converting Between Forms',
      content: 'Percentages, fractions, and decimals are all related! You can convert between them easily. To change a percentage to a decimal, divide by 100 (or move the decimal point 2 places left). To change a decimal to a percentage, multiply by 100 (or move the decimal point 2 places right).',
      visual: (
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-center font-bold text-purple-600 mb-3">
              Percentage ↔ Decimal ↔ Fraction
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-pink-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-pink-600">50%</div>
                <div className="text-xs text-gray-600">Percentage</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">0.50</div>
                <div className="text-xs text-gray-600">Decimal</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-600">1/2</div>
                <div className="text-xs text-gray-600">Fraction</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-sm space-y-1">
              <div>• 25% = 0.25 = 1/4</div>
              <div>• 75% = 0.75 = 3/4</div>
              <div>• 10% = 0.10 = 1/10</div>
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'example',
      title: 'Example: Finding a Percentage of a Number',
      problem: 'What is 20% of 80?',
      steps: [
        'Method 1: Convert to decimal',
        '  20% = 0.20',
        '  0.20 × 80 = 16',
        'Method 2: Use fractions',
        '  20% = 20/100 = 1/5',
        '  80 ÷ 5 = 16',
        'Both methods work!'
      ],
      solution: '20% of 80 = 16'
    },

    {
      type: 'concept',
      icon: '🛍️',
      title: 'Percentage Discounts',
      content: 'One of the most common uses of percentages is calculating discounts when shopping! If something is 30% off, you\'re saving 30% of the original price. To find the sale price, you can either: (1) Find 30% and subtract it from the original, or (2) Realize 30% off means you pay 70%, so multiply by 0.70!',
      visual: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border-2 border-red-300">
            <div className="text-center mb-3">
              <div className="text-lg font-bold">🏷️ 30% OFF SALE!</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Original Price:</span>
                <span className="font-bold text-gray-600 line-through">$50.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Discount (30%):</span>
                <span className="font-bold text-red-600">-$15.00</span>
              </div>
              <div className="border-t-2 border-gray-300 pt-2 flex justify-between items-center">
                <span className="font-bold">You Pay:</span>
                <span className="font-bold text-green-600 text-xl">$35.00</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'example',
      title: 'Example: Percentage Increase',
      problem: 'A plant was 20 cm tall. It grew by 15%. How tall is it now?',
      steps: [
        'Find 15% of 20 cm',
        '  15% = 0.15',
        '  0.15 × 20 = 3 cm',
        'Add the growth to the original height',
        '  20 + 3 = 23 cm',
        'Or use a shortcut: 115% of 20 = 1.15 × 20 = 23 cm'
      ],
      solution: 'The plant is now 23 cm tall'
    },

    {
      type: 'realworld',
      title: 'Percentages Everywhere!',
      scenario: 'You scored 18 out of 20 on a quiz. Your friend scored 22 out of 25. Who did better?',
      visual: (
        <div className="flex justify-center gap-4 my-4">
          <div className="bg-blue-100 rounded-lg p-4 text-center flex-1">
            <div className="text-4xl mb-2">👤</div>
            <div className="font-semibold">You</div>
            <div className="text-lg font-bold">18/20</div>
            <div className="text-2xl font-bold text-blue-600">90%</div>
          </div>
          <div className="flex items-center text-2xl">vs</div>
          <div className="bg-purple-100 rounded-lg p-4 text-center flex-1">
            <div className="text-4xl mb-2">👥</div>
            <div className="font-semibold">Friend</div>
            <div className="text-lg font-bold">22/25</div>
            <div className="text-2xl font-bold text-purple-600">88%</div>
          </div>
        </div>
      ),
      explanation: 'Convert both to percentages to compare! You: 18/20 = 0.90 = 90%. Friend: 22/25 = 0.88 = 88%. You scored slightly higher! Percentages make it easy to compare different fractions.'
    },

    {
      type: 'concept',
      icon: '🎓',
      title: 'Key Takeaways',
      content: 'Great job mastering percentages! Remember: (1) Percent means "per hundred" or "out of 100", (2) To convert % to decimal: divide by 100, (3) To convert decimal to %: multiply by 100, (4) 50% = 1/2, 25% = 1/4, 75% = 3/4, (5) To find a percentage of a number, multiply, (6) Percentages help us compare and understand data. You\'ll see percentages everywhere - grades, sales, statistics, tips, taxes, and more!',
      visual: (
        <div className="bg-white rounded-lg p-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Common Percentages</div>
              <div className="text-sm text-gray-600">50%=½, 25%=¼, 75%=¾, 10%=1/10</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Quick Conversions</div>
              <div className="text-sm text-gray-600">Move decimal 2 places to convert</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Real-World Uses</div>
              <div className="text-sm text-gray-600">Discounts, grades, statistics, tips</div>
            </div>
          </div>
        </div>
      )
    }
  ],

  miniQuiz: {
    question: 'A video game is on sale for 40% off. If it originally costs $60, how much will you pay?',
    options: [
      '$24 - You save this much',
      '$36 - This is the sale price',
      '$40 - This is the discount percentage',
      '$20 - Incorrect calculation'
    ],
    correctIndex: 1,
    explanation: '40% off means you pay 60% of the price. 60% of $60 = 0.60 × $60 = $36. Or calculate: 40% of $60 = $24 saved, so $60 - $24 = $36 to pay.'
  }
}
