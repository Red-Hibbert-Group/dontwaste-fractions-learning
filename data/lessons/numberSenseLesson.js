export const numberSenseLesson = {
  id: 'number-sense-intro',
  title: 'Building Number Sense',
  subtitle: 'Develop your understanding of numbers and patterns',
  duration: '10 minutes',
  xp: 20,

  slides: [
    {
      type: 'concept',
      icon: '🔢',
      title: 'What is Number Sense?',
      content: 'Number sense is like having a "feel" for numbers! It means understanding how numbers work, how they relate to each other, and being able to use them flexibly. People with good number sense can estimate, recognize patterns, understand place value, and solve problems in creative ways. It\'s not about memorizing - it\'s about truly understanding numbers!',
      visual: (
        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold">Estimation</div>
              <div className="text-sm text-gray-600">Quick approximations</div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔍</div>
              <div className="font-semibold">Patterns</div>
              <div className="text-sm text-gray-600">See relationships</div>
            </div>
            <div className="bg-purple-100 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-semibold">Flexibility</div>
              <div className="text-sm text-gray-600">Multiple strategies</div>
            </div>
            <div className="bg-orange-100 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">Mental Math</div>
              <div className="text-sm text-gray-600">Calculate quickly</div>
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'concept',
      icon: '📍',
      title: 'Place Value Mastery',
      content: 'Understanding place value is the foundation of number sense! Each digit in a number has a value based on its position. Moving one place to the left makes a digit 10 times bigger. Moving one place to the right makes it 10 times smaller. This pattern continues infinitely in both directions!',
      visual: (
        <div className="space-y-4">
          <div className="text-center text-3xl font-bold text-blue-600 mb-4">
            3,456,789
          </div>
          <div className="grid grid-cols-7 gap-1">
            <div className="bg-red-100 rounded-lg p-2 text-center">
              <div className="text-xl font-bold">3</div>
              <div className="text-xs mt-1">Millions</div>
              <div className="text-xs text-gray-600">3,000,000</div>
            </div>
            <div className="bg-orange-100 rounded-lg p-2 text-center">
              <div className="text-xl font-bold">4</div>
              <div className="text-xs mt-1">Hundred Thousands</div>
              <div className="text-xs text-gray-600">400,000</div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-2 text-center">
              <div className="text-xl font-bold">5</div>
              <div className="text-xs mt-1">Ten Thousands</div>
              <div className="text-xs text-gray-600">50,000</div>
            </div>
            <div className="bg-green-100 rounded-lg p-2 text-center">
              <div className="text-xl font-bold">6</div>
              <div className="text-xs mt-1">Thousands</div>
              <div className="text-xs text-gray-600">6,000</div>
            </div>
            <div className="bg-blue-100 rounded-lg p-2 text-center">
              <div className="text-xl font-bold">7</div>
              <div className="text-xs mt-1">Hundreds</div>
              <div className="text-xs text-gray-600">700</div>
            </div>
            <div className="bg-purple-100 rounded-lg p-2 text-center">
              <div className="text-xl font-bold">8</div>
              <div className="text-xs mt-1">Tens</div>
              <div className="text-xs text-gray-600">80</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-2 text-center">
              <div className="text-xl font-bold">9</div>
              <div className="text-xs mt-1">Ones</div>
              <div className="text-xs text-gray-600">9</div>
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'example',
      title: 'Example: Rounding Numbers',
      problem: 'Round 3,847 to the nearest hundred',
      steps: [
        'Find the hundreds place: 8 (represents 800)',
        'Look at the digit to the right (tens place): 4',
        'If it\'s 5 or more, round up. If it\'s less than 5, round down',
        'Since 4 < 5, round down',
        '3,847 rounds down to 3,800'
      ],
      solution: '3,847 ≈ 3,800'
    },

    {
      type: 'concept',
      icon: '🎯',
      title: 'Estimation Strategies',
      content: 'Estimation is a superpower in math! Instead of calculating exactly, you can quickly approximate to check if your answer makes sense. Round numbers to friendly values, use benchmarks like 10, 100, or 1000, and think about whether your answer should be bigger or smaller. Estimation helps you catch mistakes and solve real-world problems faster!',
      visual: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <div className="text-center font-bold mb-3">Estimate: 48 × 22</div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="text-2xl">1️⃣</div>
                <div>Round: 48 ≈ 50, and 22 ≈ 20</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl">2️⃣</div>
                <div>Multiply: 50 × 20 = 1,000</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl">3️⃣</div>
                <div className="font-bold text-green-600">Estimate ≈ 1,000</div>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                (Actual answer: 1,056 - very close!)
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      type: 'example',
      title: 'Example: Number Patterns',
      problem: 'Find the next number: 2, 6, 18, 54, ___?',
      steps: [
        'Look for the pattern between numbers',
        '2 → 6: multiply by 3 (2 × 3 = 6)',
        '6 → 18: multiply by 3 (6 × 3 = 18)',
        '18 → 54: multiply by 3 (18 × 3 = 54)',
        'Pattern: multiply by 3 each time',
        '54 × 3 = 162'
      ],
      solution: 'The next number is 162'
    },

    {
      type: 'realworld',
      title: 'Mental Math Tricks',
      scenario: 'You\'re buying 4 items that cost $19.95 each. Can you quickly estimate the total?',
      visual: (
        <div className="flex flex-col items-center gap-4 my-4">
          <div className="bg-blue-100 rounded-lg p-4 text-center w-full max-w-md">
            <div className="text-2xl mb-2">🤔 The Problem</div>
            <div className="text-xl font-bold">4 × $19.95 = ?</div>
          </div>
          <div className="text-3xl">↓</div>
          <div className="bg-green-100 rounded-lg p-4 text-center w-full max-w-md">
            <div className="text-2xl mb-2">💡 Smart Strategy</div>
            <div className="space-y-2">
              <div>Think: $19.95 ≈ $20</div>
              <div className="font-bold text-lg">4 × $20 = $80</div>
              <div className="text-sm text-gray-700">
                (Actual: $79.80 - only 20¢ off!)
              </div>
            </div>
          </div>
        </div>
      ),
      explanation: 'Round to friendly numbers for quick mental math! $19.95 is almost $20, so 4 × $20 = $80. This gives you a very close estimate in seconds. With practice, you can do this instantly!'
    },

    {
      type: 'concept',
      icon: '🎓',
      title: 'Key Takeaways',
      content: 'Amazing work building your number sense! Remember: (1) Number sense is understanding how numbers work and relate, (2) Place value is the foundation - each position is 10× the next, (3) Rounding helps with estimation (look at the digit to the right), (4) Estimate before calculating to check if answers make sense, (5) Look for patterns to solve problems creatively, (6) Round to friendly numbers (10, 50, 100) for mental math. Strong number sense makes all of math easier!',
      visual: (
        <div className="bg-white rounded-lg p-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Place Value Power</div>
              <div className="text-sm text-gray-600">Each place is 10× bigger or smaller</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Rounding Rules</div>
              <div className="text-sm text-gray-600">5 or more? Round up! Less than 5? Round down!</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Estimation First</div>
              <div className="text-sm text-gray-600">Always estimate to check your work</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <div className="font-semibold">Pattern Recognition</div>
              <div className="text-sm text-gray-600">Look for +, -, ×, ÷ patterns</div>
            </div>
          </div>
        </div>
      )
    }
  ],

  miniQuiz: {
    question: 'Estimate the answer: 297 + 418. Which is closest?',
    options: [
      '500 - Too low',
      '600 - This is too low',
      '700 - This is the best estimate',
      '800 - Too high'
    ],
    correctIndex: 2,
    explanation: 'Round to friendly numbers: 297 ≈ 300 and 418 ≈ 400. So 300 + 400 = 700. The actual answer is 715, so 700 is a great estimate!'
  }
}
