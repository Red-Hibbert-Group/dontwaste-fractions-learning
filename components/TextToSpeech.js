'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * TextToSpeech Component
 *
 * Features:
 * - Speaks text aloud with start/stop controls
 * - No looping (speaks once and stops)
 * - Can start from a specific word position
 * - Visual feedback while speaking
 * - Stop button to cancel speech
 *
 * Props:
 * - text: string - The text to speak
 * - startFrom: string (optional) - Word/phrase to start from
 * - rate: number (optional) - Speech rate (0.1-10, default 0.85)
 * - pitch: number (optional) - Voice pitch (0-2, default 1)
 * - autoPlay: boolean (optional) - Start speaking automatically
 * - onStart: function (optional) - Callback when speech starts
 * - onEnd: function (optional) - Callback when speech ends
 * - className: string (optional) - Custom CSS classes
 */
export default function TextToSpeech({
  text,
  startFrom = null,
  rate = 0.85,
  pitch = 1,
  autoPlay = false,
  onStart = () => {},
  onEnd = () => {},
  className = ''
}) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const utteranceRef = useRef(null)
  const hasSpokenRef = useRef(false)

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
      setIsSupported(false)
      console.warn('Speech synthesis not supported in this browser')
    }

    // Cleanup on unmount
    return () => {
      stopSpeaking()
    }
  }, [])

  useEffect(() => {
    // Auto-play if requested and hasn't spoken yet
    if (autoPlay && !hasSpokenRef.current && text) {
      handleSpeak()
      hasSpokenRef.current = true
    }
  }, [autoPlay, text])

  const handleSpeak = () => {
    if (!isSupported || !text) return

    // Stop any ongoing speech
    if (isSpeaking) {
      stopSpeaking()
      return
    }

    // Determine the text to speak
    let textToSpeak = text

    // If startFrom is specified, find that position and start from there
    if (startFrom) {
      const startIndex = text.toLowerCase().indexOf(startFrom.toLowerCase())
      if (startIndex !== -1) {
        textToSpeak = text.substring(startIndex)
        console.log('🎤 Starting speech from:', startFrom)
      }
    }

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utterance.rate = rate
    utterance.pitch = pitch
    utterance.lang = 'en-US'

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
      onStart()
      console.log('🔊 Speech started')
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
      onEnd()
      console.log('✅ Speech completed')
    }

    utterance.onerror = (event) => {
      console.error('❌ Speech error:', event.error)
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
    }

    utterance.onpause = () => {
      setIsPaused(true)
      console.log('⏸️ Speech paused')
    }

    utterance.onresume = () => {
      setIsPaused(false)
      console.log('▶️ Speech resumed')
    }

    // Store reference and speak
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel() // This stops and clears the queue
      setIsSpeaking(false)
      setIsPaused(false)
      utteranceRef.current = null
      console.log('⏹️ Speech stopped')
    }
  }

  const pauseSpeaking = () => {
    if (window.speechSynthesis && isSpeaking && !isPaused) {
      window.speechSynthesis.pause()
    }
  }

  const resumeSpeaking = () => {
    if (window.speechSynthesis && isSpeaking && isPaused) {
      window.speechSynthesis.resume()
    }
  }

  if (!isSupported) {
    return null // Don't render if not supported
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Single Toggle Button - Minimal Design */}
      {!isSpeaking ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSpeak}
          className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 transition-colors"
          aria-label="Listen to text"
          title="Listen"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        </motion.button>
      ) : (
        <div className="inline-flex items-center gap-2">
          {/* Animated Waveform Indicator */}
          <div className="flex items-center gap-1 px-3 py-2 bg-purple-50 rounded-full">
            <div className="flex gap-0.5">
              <motion.div
                className="w-0.5 bg-purple-500 rounded-full"
                animate={{ height: isPaused ? 8 : [6, 12, 6] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-0.5 bg-purple-500 rounded-full"
                animate={{ height: isPaused ? 8 : [12, 6, 12] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.div
                className="w-0.5 bg-purple-500 rounded-full"
                animate={{ height: isPaused ? 8 : [6, 12, 6] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
            </div>
          </div>

          {/* Pause/Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isPaused ? resumeSpeaking : pauseSpeaking}
            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-600 transition-colors"
            aria-label={isPaused ? 'Resume' : 'Pause'}
            title={isPaused ? 'Resume' : 'Pause'}
          >
            {isPaused ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </motion.button>

          {/* Stop Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={stopSpeaking}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
            aria-label="Stop"
            title="Stop"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="6" width="12" height="12" rx="1" />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  )
}

/**
 * Hook version for programmatic control
 */
export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const utteranceRef = useRef(null)

  const speak = (text, options = {}) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported')
      return
    }

    // Stop any ongoing speech
    stop()

    const {
      startFrom = null,
      rate = 0.85,
      pitch = 1,
      onStart = () => {},
      onEnd = () => {}
    } = options

    let textToSpeak = text
    if (startFrom) {
      const startIndex = text.toLowerCase().indexOf(startFrom.toLowerCase())
      if (startIndex !== -1) {
        textToSpeak = text.substring(startIndex)
      }
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utterance.rate = rate
    utterance.pitch = pitch
    utterance.lang = 'en-US'

    utterance.onstart = () => {
      setIsSpeaking(true)
      onStart()
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      utteranceRef.current = null
      onEnd()
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      utteranceRef.current = null
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      utteranceRef.current = null
    }
  }

  return { speak, stop, isSpeaking }
}
