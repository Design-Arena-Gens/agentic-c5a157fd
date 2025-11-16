'use client'

import { motion } from 'framer-motion'
import { Layers, ArrowRight, Database, Cpu, Mic, Volume2, Zap, Settings, Cloud } from 'lucide-react'

export default function Architecture() {
  const layers = [
    {
      name: "Input Layer",
      icon: Mic,
      color: "bg-purple-500/20 border-purple-500",
      components: [
        {
          name: "Voice Input",
          description: "Microphone capture, wake word detection, noise filtering"
        },
        {
          name: "Text Input",
          description: "Keyboard input, clipboard monitoring, file drag-and-drop"
        },
        {
          name: "System Events",
          description: "Scheduled triggers, notifications, system hooks"
        }
      ]
    },
    {
      name: "Processing Layer",
      icon: Cpu,
      color: "bg-blue-500/20 border-blue-500",
      components: [
        {
          name: "Speech Recognition",
          description: "Convert audio to text using Vosk/Whisper"
        },
        {
          name: "Intent Classification",
          description: "Understand user's goal from input text"
        },
        {
          name: "Entity Extraction",
          description: "Parse specific data (names, dates, locations)"
        },
        {
          name: "Context Management",
          description: "Maintain conversation history and state"
        }
      ]
    },
    {
      name: "Intelligence Layer",
      icon: Database,
      color: "bg-green-500/20 border-green-500",
      components: [
        {
          name: "Language Model",
          description: "GPT/Claude for reasoning and generation"
        },
        {
          name: "Knowledge Base",
          description: "Vector database for semantic search and RAG"
        },
        {
          name: "Learning System",
          description: "Track patterns, preferences, and feedback"
        },
        {
          name: "Decision Engine",
          description: "Choose appropriate actions and responses"
        }
      ]
    },
    {
      name: "Execution Layer",
      icon: Zap,
      color: "bg-yellow-500/20 border-yellow-500",
      components: [
        {
          name: "System Controller",
          description: "Execute OS commands, launch applications"
        },
        {
          name: "API Integrations",
          description: "Call external services (weather, calendar, etc.)"
        },
        {
          name: "Automation Engine",
          description: "Run workflows and multi-step tasks"
        },
        {
          name: "Plugin Manager",
          description: "Load and execute custom extensions"
        }
      ]
    },
    {
      name: "Output Layer",
      icon: Volume2,
      color: "bg-cyan-500/20 border-cyan-500",
      components: [
        {
          name: "Text-to-Speech",
          description: "Convert responses to voice output"
        },
        {
          name: "Visual Interface",
          description: "Display results, notifications, confirmations"
        },
        {
          name: "System Feedback",
          description: "Status indicators, progress bars, alerts"
        }
      ]
    }
  ]

  const dataFlow = [
    {
      step: 1,
      title: "User speaks or types command",
      description: "Wake word detected, audio captured"
    },
    {
      step: 2,
      title: "Speech converted to text",
      description: "STT engine processes audio"
    },
    {
      step: 3,
      title: "Text analyzed for intent",
      description: "NLP models classify purpose"
    },
    {
      step: 4,
      title: "Context retrieved",
      description: "Previous conversation loaded"
    },
    {
      step: 5,
      title: "LLM generates response",
      description: "Based on intent and context"
    },
    {
      step: 6,
      title: "Actions executed",
      description: "System commands or API calls"
    },
    {
      step: 7,
      title: "Response delivered",
      description: "TTS and visual feedback"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text">System Architecture</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Understand the layered architecture and data flow of your AI assistant
        </p>
      </motion.div>

      {/* Architecture Layers */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Layers className="w-7 h-7 text-jarvis-blue" />
          Component Layers
        </h3>

        {layers.map((layer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${layer.color} rounded-lg border-2 p-6`}
          >
            <div className="flex items-center gap-4 mb-4">
              <layer.icon className="w-8 h-8 text-white" />
              <h4 className="text-2xl font-bold">{layer.name}</h4>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {layer.components.map((component, compIndex) => (
                <div
                  key={compIndex}
                  className="bg-jarvis-darker/80 p-4 rounded-lg"
                >
                  <h5 className="font-semibold mb-2 text-jarvis-blue">
                    {component.name}
                  </h5>
                  <p className="text-sm text-gray-400">{component.description}</p>
                </div>
              ))}
            </div>

            {index < layers.length - 1 && (
              <div className="flex justify-center mt-6">
                <ArrowRight className="w-6 h-6 text-jarvis-blue rotate-90" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Data Flow */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Zap className="w-7 h-7 text-jarvis-blue" />
          Data Flow
        </h3>

        <div className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 p-6">
          <div className="space-y-4">
            {dataFlow.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-jarvis-blue text-jarvis-darker font-bold flex items-center justify-center">
                  {flow.step}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-1">{flow.title}</h5>
                  <p className="text-gray-400 text-sm">{flow.description}</p>
                </div>
                {index < dataFlow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-jarvis-blue mt-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Example */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Settings className="w-7 h-7 text-jarvis-blue" />
          Implementation Example
        </h3>

        <div className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 p-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-jarvis-blue mb-2">
              Main Assistant Class
            </h4>
            <p className="text-gray-400 text-sm">
              Core orchestrator that connects all components
            </p>
          </div>

          <pre className="code-block overflow-x-auto">
            <code className="text-sm">{`import asyncio
from voice_input import VoiceInput
from nlp_processor import NLPProcessor
from llm_engine import LLMEngine
from execution_engine import ExecutionEngine
from tts import TextToSpeech

class JarvisAssistant:
    def __init__(self, config):
        # Initialize all components
        self.voice_input = VoiceInput(
            wake_word="jarvis",
            model_path="models/vosk"
        )
        self.nlp = NLPProcessor(
            intent_model="intent-classifier",
            entity_model="en_core_web_sm"
        )
        self.llm = LLMEngine(
            model="gpt-3.5-turbo",
            api_key=config.openai_key
        )
        self.executor = ExecutionEngine()
        self.tts = TextToSpeech(voice="en-US-Neural")

        # State management
        self.conversation_history = []
        self.context = {}

    async def run(self):
        """Main event loop"""
        print("Jarvis is ready. Say the wake word to start.")

        while True:
            # Wait for wake word
            if await self.voice_input.detect_wake_word():
                await self.handle_command()

    async def handle_command(self):
        """Process a single command"""
        try:
            # 1. Capture audio and convert to text
            audio_data = await self.voice_input.listen()
            text = await self.voice_input.transcribe(audio_data)

            if not text:
                return

            print(f"You: {text}")

            # 2. NLP processing
            intent = await self.nlp.classify_intent(text)
            entities = await self.nlp.extract_entities(text)

            # 3. Build context
            context = {
                'intent': intent,
                'entities': entities,
                'history': self.conversation_history[-5:],
                'user_preferences': self.context.get('preferences', {})
            }

            # 4. Generate response with LLM
            response = await self.llm.generate(
                prompt=text,
                context=context,
                system_prompt=self.get_system_prompt()
            )

            # 5. Execute actions if needed
            if intent.requires_action:
                action_result = await self.executor.execute(
                    action_type=intent.action_type,
                    parameters=entities
                )
                response = self.incorporate_action_result(
                    response, action_result
                )

            # 6. Speak response
            print(f"Jarvis: {response}")
            await self.tts.speak(response)

            # 7. Update conversation history
            self.conversation_history.append({
                'user': text,
                'assistant': response,
                'timestamp': datetime.now()
            })

        except Exception as e:
            error_msg = "I encountered an error. Please try again."
            print(f"Error: {e}")
            await self.tts.speak(error_msg)

    def get_system_prompt(self):
        return """You are Jarvis, an intelligent AI assistant.
        You are helpful, concise, and occasionally witty.
        Provide clear answers and offer to help with tasks."""

    def incorporate_action_result(self, response, result):
        """Add action results to response"""
        if result.success:
            return f"{response}\\n\\n{result.message}"
        return f"I tried to {result.action}, but encountered an issue: {result.error}"


# Entry point
if __name__ == "__main__":
    config = load_config("config.yaml")
    assistant = JarvisAssistant(config)

    try:
        asyncio.run(assistant.run())
    except KeyboardInterrupt:
        print("\\nJarvis shutting down. Goodbye!")
`}</code>
          </pre>
        </div>

        <div className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 p-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-jarvis-blue mb-2">
              Configuration File (config.yaml)
            </h4>
            <p className="text-gray-400 text-sm">
              Centralized configuration for easy customization
            </p>
          </div>

          <pre className="code-block overflow-x-auto">
            <code className="text-sm">{`# Jarvis Configuration

# API Keys
openai_key: "your-openai-key"
weather_api_key: "your-weather-key"

# Voice Settings
voice:
  wake_word: "jarvis"
  stt_engine: "vosk"  # Options: vosk, whisper, google
  tts_voice: "en-US-Neural"
  language: "en-US"

# Model Paths
models:
  vosk_model: "models/vosk-model-en-us"
  intent_classifier: "models/intent-model"
  spacy_model: "en_core_web_sm"

# LLM Settings
llm:
  provider: "openai"  # Options: openai, anthropic, local
  model: "gpt-3.5-turbo"
  temperature: 0.7
  max_tokens: 500

# Preferences
preferences:
  response_style: "balanced"  # Options: concise, balanced, detailed
  proactive_suggestions: true
  voice_output: true
  notifications: true

# Security
security:
  require_confirmation: ["system_shutdown", "file_delete"]
  allowed_commands: ["open", "search", "weather", "reminder"]

# Integrations
integrations:
  calendar: true
  email: true
  smart_home: false
  web_search: true
`}</code>
          </pre>
        </div>
      </motion.div>

      {/* Deployment Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-jarvis-blue/10 rounded-lg border border-jarvis-blue/30 p-8"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Cloud className="w-7 h-7 text-jarvis-blue" />
          Deployment Architecture
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-jarvis-darker/50 p-5 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-green-400">
              Local Only
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>All processing on your machine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Maximum privacy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>No internet required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Requires powerful hardware</span>
              </li>
            </ul>
          </div>

          <div className="bg-jarvis-darker/50 p-5 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-blue-400">
              Hybrid
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Local for basic tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Cloud for complex reasoning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Balanced cost and performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Recommended for most users</span>
              </li>
            </ul>
          </div>

          <div className="bg-jarvis-darker/50 p-5 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-purple-400">
              Cloud-Based
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>All processing in cloud</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Best accuracy and features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Works on any device</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Ongoing API costs</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
