'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * EnhancedFeedback Component
 * Provides multi-level hints, step-by-step solutions, and detailed explanations
 *
 * Props:
 * - isCorrect: boolean - whether the answer was correct
 * - hints: array - multiple levels of hints (e.g., ['Hint 1', 'Hint 2', 'Show solution'])
 * - explanation: string - detailed explanation of why the answer is right/wrong
 * - steps: array - step-by-step solution breakdown
 * - concept: string - the concept being tested (for tracking mistakes)
 * - onUseHint: function - callback when hint is used (for analytics)
 * - onClose: function - callback when feedback is dismissed
 */
export default function EnhancedFeedback({
  isCorrect,
  hints = [],
  explanation = '',
  steps = [],
  concept = '',
  onUseHint = () => {},
  onClose = () => {}
}) {
  const [currentHintLevel, setCurrentHintLevel] = useState(0)
  const [showSteps, setShowSteps] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleNextHint = () => {
    if (currentHintLevel < hints.length - 1) {
      setCurrentHintLevel(prev => prev + 1)
      onUseHint(concept, currentHintLevel + 1)
    } else {
      // Show full solution
      setShowSteps(true)
      onUseHint(concept, 'full_solution')
    }
  }

  const hasMoreHints = currentHintLevel < hints.length - 1 || !showSteps

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl mx-auto border-2"
      style={{
        borderColor: isCorrect ? '#10b981' : '#ef4444'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">
            {isCorrect ? '🎉' : '💡'}
          </div>
          <div>
            <h3 className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-orange-600'}`}>
              {isCorrect ? 'Correct!' : 'Not Quite...'}
            </h3>
            <p className="text-gray-600 text-sm">
              {isCorrect ? 'Great job! Let\'s see why.' : 'Let\'s work through this together.'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
      </div>

      {/* Explanation - Always shown first */}
      {explanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-4 mb-4 ${
            isCorrect
              ? 'bg-green-50 border-2 border-green-200'
              : 'bg-orange-50 border-2 border-orange-200'
          }`}
        >
          <div className="flex items-start gap-2">
            <div className="text-xl mt-1">{isCorrect ? '✓' : '⚠️'}</div>
            <p className={`${isCorrect ? 'text-green-800' : 'text-orange-800'} leading-relaxed`}>
              {explanation}
            </p>
          </div>
        </motion.div>
      )}

      {/* For incorrect answers - show progressive hints */}
      {!isCorrect && hints.length > 0 && (
        <div className="mb-4">
          <div className="mb-3">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span>💭</span>
              <span>Hints to Help You</span>
            </h4>
            <div className="flex gap-2 mb-3">
              {hints.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    index <= currentHintLevel
                      ? 'bg-blue-500'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Current Hint */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHintLevel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-3"
            >
              <div className="flex items-start gap-2">
                <div className="text-2xl">💡</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-blue-600 mb-1">
                    Hint {currentHintLevel + 1} of {hints.length}
                  </div>
                  <p className="text-blue-900">{hints[currentHintLevel]}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Hint Button */}
          {hasMoreHints && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNextHint}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg mb-3"
            >
              {currentHintLevel < hints.length - 1
                ? `Show Next Hint (${currentHintLevel + 2}/${hints.length})`
                : 'Show Me How to Solve It'}
            </motion.button>
          )}
        </div>
      )}

      {/* Step-by-Step Solution */}
      {((isCorrect && showExplanation) || (!isCorrect && showSteps)) && steps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 mb-4"
        >
          <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
            <span>📝</span>
            <span>Step-by-Step Solution</span>
          </h4>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 text-purple-900 pt-1">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Show Solution Button (for correct answers) */}
      {isCorrect && !showExplanation && steps.length > 0 && (
        <button
          onClick={() => setShowExplanation(true)}
          className="w-full bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-6 rounded-xl border-2 border-green-300 mb-3"
        >
          📖 Show How It Works
        </button>
      )}

      {/* Try Again / Continue Buttons */}
      <div className="flex gap-3">
        {!isCorrect && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg"
          >
            Try Again 🔄
          </motion.button>
        )}
        {isCorrect && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg"
          >
            Continue →
          </motion.button>
        )}
      </div>

      {/* Learning Tip */}
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-2">
          <div className="text-lg">🌟</div>
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Learning Tip:</span>{' '}
            {isCorrect
              ? 'You got it right! Understanding why helps you remember better.'
              : 'Mistakes help us learn! Take your time to understand each step.'}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Helper function to generate hints for common fraction problems
 */
export const generateFractionHints = (problemType, problem) => {
  const hintTemplates = {
    equivalent: [
      'Look at the numerator and denominator. What number can you multiply or divide both by?',
      'Try finding the greatest common factor (GCF) of the numerator and denominator.',
      'Divide both the top and bottom by the same number to simplify.'
    ],
    comparison: [
      'Try converting both fractions to have the same denominator.',
      'Which fraction has more parts when you imagine them visually?',
      'Find a common denominator to make comparison easier.'
    ],
    addition: [
      'Do the fractions have the same denominator? If not, find a common denominator first.',
      'Once denominators match, add only the numerators.',
      'Keep the denominator the same and simplify if possible.'
    ],
    word_problem: [
      'What is the question asking you to find?',
      'What information do you have? Write it as fractions.',
      'What operation do you need: addition, subtraction, multiplication, or division?'
    ]
  }

  return hintTemplates[problemType] || [
    'Break the problem into smaller steps.',
    'Try drawing a picture to visualize the problem.',
    'Check your work by working backwards.'
  ]
}
