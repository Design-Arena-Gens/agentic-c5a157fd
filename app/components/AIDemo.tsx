'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, Volume2, Cpu, MessageSquare, Zap, Clock } from 'lucide-react'

export default function AIDemo() {
  const [isListening, setIsListening] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [conversation, setConversation] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const exampleCommands = [
    "What's the weather like?",
    "Set a reminder for 3 PM",
    "Open my email",
    "Search for AI research papers",
    "Tell me a joke",
    "What's on my calendar today?"
  ]

  const simulateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes('weather')) {
      return "I'm analyzing current weather data... It's currently 72°F and sunny in your location. Perfect day to go outside!"
    }
    if (lowerInput.includes('reminder')) {
      return "Reminder set for 3 PM. I'll notify you when it's time."
    }
    if (lowerInput.includes('email')) {
      return "Opening your default email client... You have 5 unread messages."
    }
    if (lowerInput.includes('search') || lowerInput.includes('research')) {
      return "Searching for AI research papers... Found 127 recent publications. Would you like me to summarize the top results?"
    }
    if (lowerInput.includes('joke')) {
      return "Why did the AI go to therapy? It had too many artificial feelings! 😄"
    }
    if (lowerInput.includes('calendar')) {
      return "Checking your calendar... You have 3 meetings today: Team standup at 10 AM, lunch with Sarah at 12 PM, and project review at 3 PM."
    }

    return `I understand you said: "${input}". In a real implementation, I would process this using NLP models to understand your intent and execute the appropriate action. This demo simulates that behavior!`
  }

  const handleSubmit = async (input: string) => {
    if (!input.trim()) return

    setConversation(prev => [...prev, { role: 'user', content: input }])
    setUserInput('')
    setIsProcessing(true)

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const response = simulateResponse(input)
    setConversation(prev => [...prev, { role: 'assistant', content: response }])
    setIsProcessing(false)
  }

  const handleVoiceInput = () => {
    setIsListening(!isListening)

    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        const randomCommand = exampleCommands[Math.floor(Math.random() * exampleCommands.length)]
        setUserInput(randomCommand)
        setIsListening(false)
      }, 2000)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text">Interactive AI Assistant Demo</h2>
        <p className="text-gray-400 text-lg">
          Experience a simulated Jarvis-like assistant. Try voice commands or type your requests!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chat Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Conversation Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 p-6 h-96 overflow-y-auto"
          >
            {conversation.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Cpu className="w-16 h-16 mx-auto mb-4 text-jarvis-blue/50" />
                  <p>Start a conversation with your AI assistant</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence>
                  {conversation.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-jarvis-blue text-jarvis-darker'
                            : 'bg-jarvis-light text-white border border-jarvis-blue/30'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {message.role === 'assistant' ? (
                            <Cpu className="w-4 h-4" />
                          ) : (
                            <MessageSquare className="w-4 h-4" />
                          )}
                          <span className="text-xs font-semibold opacity-70">
                            {message.role === 'assistant' ? 'Jarvis' : 'You'}
                          </span>
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-jarvis-light text-white border border-jarvis-blue/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-jarvis-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-jarvis-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-jarvis-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-sm">Processing...</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>

          {/* Input Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 p-4"
          >
            <div className="flex gap-3">
              <button
                onClick={handleVoiceInput}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-jarvis-blue text-jarvis-darker hover:bg-jarvis-blue/90'
                }`}
              >
                <Mic className="w-5 h-5" />
              </button>

              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(userInput)}
                placeholder={isListening ? "Listening..." : "Type your command or use voice input..."}
                className="flex-1 bg-jarvis-darker border border-jarvis-blue/30 rounded-lg px-4 py-3 focus:outline-none focus:border-jarvis-blue transition-colors"
                disabled={isListening || isProcessing}
              />

              <button
                onClick={() => handleSubmit(userInput)}
                disabled={!userInput.trim() || isProcessing}
                className="bg-jarvis-blue text-jarvis-darker px-6 py-3 rounded-lg font-semibold hover:bg-jarvis-blue/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </motion.div>

          {/* Quick Commands */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Quick Commands:</h3>
            <div className="flex flex-wrap gap-2">
              {exampleCommands.map((cmd, index) => (
                <button
                  key={index}
                  onClick={() => handleSubmit(cmd)}
                  className="text-sm bg-jarvis-light px-3 py-2 rounded-lg hover:bg-jarvis-blue hover:text-jarvis-darker transition-all duration-300"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar - Features */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-jarvis-blue" />
              Active Features
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Voice Recognition', status: isListening },
                { name: 'NLP Processing', status: isProcessing },
                { name: 'Context Memory', status: conversation.length > 0 },
                { name: 'Task Execution', status: true }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{feature.name}</span>
                  <div className={`w-2 h-2 rounded-full ${feature.status ? 'bg-green-400' : 'bg-gray-600'}`} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-jarvis-blue" />
              How It Works
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-jarvis-blue font-bold">1.</span>
                <p>Voice input is captured using Web Speech API</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-jarvis-blue font-bold">2.</span>
                <p>Text is processed through NLP models to understand intent</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-jarvis-blue font-bold">3.</span>
                <p>Appropriate actions are executed based on command type</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-jarvis-blue font-bold">4.</span>
                <p>Response is generated and spoken back to user</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-jarvis-blue/10 rounded-lg border border-jarvis-blue/30 p-6"
          >
            <h3 className="text-lg font-bold mb-2 text-jarvis-blue">Demo Limitations</h3>
            <p className="text-sm text-gray-300">
              This is a simulated demo. A real implementation would include actual voice recognition,
              ML-powered NLP, system integration, and persistent memory. See the guide for full implementation details.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
