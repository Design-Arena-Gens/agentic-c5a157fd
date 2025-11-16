'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cpu, Mic, Cloud, Lock, Zap } from 'lucide-react'

export default function TechStack() {
  const technologies = [
    {
      category: "Speech Recognition",
      icon: Mic,
      color: "text-purple-400",
      items: [
        {
          name: "Vosk",
          description: "Offline speech recognition with 50+ language support",
          pros: ["Completely offline", "Fast", "Lightweight"],
          cons: ["Lower accuracy than cloud"],
          useCase: "Privacy-focused, low-latency applications"
        },
        {
          name: "Whisper (OpenAI)",
          description: "State-of-the-art multilingual speech recognition",
          pros: ["Highest accuracy", "Multilingual", "Robust to accents"],
          cons: ["Requires GPU for speed", "Larger models"],
          useCase: "When accuracy is paramount"
        },
        {
          name: "Google Speech-to-Text",
          description: "Cloud-based STT with real-time streaming",
          pros: ["Very accurate", "Real-time", "Good noise handling"],
          cons: ["Requires internet", "Usage costs"],
          useCase: "Production apps with internet connectivity"
        },
        {
          name: "Porcupine",
          description: "Wake word detection engine",
          pros: ["Custom wake words", "Low CPU usage", "Cross-platform"],
          cons: ["Paid for custom words"],
          useCase: "Always-listening trigger words"
        }
      ]
    },
    {
      category: "Natural Language Processing",
      icon: Cpu,
      color: "text-blue-400",
      items: [
        {
          name: "spaCy",
          description: "Industrial-strength NLP library",
          pros: ["Fast", "Production-ready", "Good entity extraction"],
          cons: ["Limited to predefined models"],
          useCase: "Entity extraction, POS tagging"
        },
        {
          name: "Hugging Face Transformers",
          description: "Pre-trained transformer models",
          pros: ["State-of-the-art", "Many models", "Easy fine-tuning"],
          cons: ["Resource intensive"],
          useCase: "Intent classification, text generation"
        },
        {
          name: "NLTK",
          description: "Comprehensive NLP toolkit",
          pros: ["Educational", "Complete toolkit", "Free"],
          cons: ["Slower than spaCy"],
          useCase: "Learning, prototyping, text preprocessing"
        },
        {
          name: "Rasa",
          description: "Open source conversational AI",
          pros: ["Built for assistants", "Dialog management", "Active learning"],
          cons: ["Steeper learning curve"],
          useCase: "Complex conversation flows"
        }
      ]
    },
    {
      category: "Large Language Models",
      icon: Database,
      color: "text-green-400",
      items: [
        {
          name: "GPT-4 / GPT-3.5 (OpenAI)",
          description: "Most capable language models via API",
          pros: ["Best performance", "Easy integration", "Function calling"],
          cons: ["Usage costs", "Internet required", "Privacy concerns"],
          useCase: "Complex reasoning, natural conversation"
        },
        {
          name: "Claude (Anthropic)",
          description: "Advanced AI with strong reasoning",
          pros: ["Large context window", "Safe", "Accurate"],
          cons: ["API costs", "Requires internet"],
          useCase: "Long-context tasks, complex queries"
        },
        {
          name: "LLaMA 2 / Mistral",
          description: "Open source models for local deployment",
          pros: ["Free", "Offline", "Customizable"],
          cons: ["Requires powerful hardware", "Lower than GPT-4"],
          useCase: "Privacy-first, local deployment"
        },
        {
          name: "GPT4All",
          description: "Run LLMs locally on consumer hardware",
          pros: ["Easy setup", "Multiple models", "Privacy"],
          cons: ["Limited capabilities vs cloud"],
          useCase: "Quick local LLM integration"
        }
      ]
    },
    {
      category: "Desktop Integration",
      icon: Code,
      color: "text-yellow-400",
      items: [
        {
          name: "Electron",
          description: "Build cross-platform apps with web tech",
          pros: ["Web tech stack", "Cross-platform", "Rich ecosystem"],
          cons: ["Large app size", "Memory usage"],
          useCase: "Web developers building desktop apps"
        },
        {
          name: "PyQt / PySide",
          description: "Python bindings for Qt framework",
          pros: ["Native performance", "Python integration", "Mature"],
          cons: ["Complex UI code", "Licensing (PyQt)"],
          useCase: "Python-based desktop applications"
        },
        {
          name: "Tauri",
          description: "Lightweight alternative to Electron",
          pros: ["Small bundle size", "Fast", "Secure"],
          cons: ["Younger ecosystem"],
          useCase: "Performance-critical desktop apps"
        },
        {
          name: "Native APIs",
          description: "Direct OS integration (win32, Cocoa, X11)",
          pros: ["Full control", "Best performance", "Deep integration"],
          cons: ["Platform-specific", "More code"],
          useCase: "Maximum control and performance"
        }
      ]
    },
    {
      category: "Backend & APIs",
      icon: Cloud,
      color: "text-cyan-400",
      items: [
        {
          name: "FastAPI",
          description: "Modern Python web framework",
          pros: ["Fast", "Async support", "Auto documentation"],
          cons: ["Python ecosystem only"],
          useCase: "Building API backends for assistant"
        },
        {
          name: "Flask",
          description: "Lightweight Python web framework",
          pros: ["Simple", "Flexible", "Large ecosystem"],
          cons: ["Manual async setup"],
          useCase: "Simple API endpoints, webhooks"
        },
        {
          name: "Express.js",
          description: "Node.js web framework",
          pros: ["JavaScript", "Fast", "Minimal"],
          cons: ["Callback complexity"],
          useCase: "JS-based backends, real-time features"
        }
      ]
    },
    {
      category: "Databases & Storage",
      icon: Database,
      color: "text-pink-400",
      items: [
        {
          name: "SQLite",
          description: "Embedded SQL database",
          pros: ["No setup", "Lightweight", "Reliable"],
          cons: ["Limited concurrency"],
          useCase: "Local data storage, settings"
        },
        {
          name: "Pinecone / Weaviate",
          description: "Vector databases for semantic search",
          pros: ["Semantic search", "Scalable", "Fast"],
          cons: ["Cloud service", "Costs"],
          useCase: "Knowledge retrieval, RAG systems"
        },
        {
          name: "Redis",
          description: "In-memory data store",
          pros: ["Very fast", "Caching", "Pub/sub"],
          cons: ["Memory-based"],
          useCase: "Caching, session management"
        },
        {
          name: "ChromaDB",
          description: "Open source vector database",
          pros: ["Free", "Local or cloud", "Easy setup"],
          cons: ["Smaller community"],
          useCase: "Local vector storage for embeddings"
        }
      ]
    },
    {
      category: "Orchestration & Tools",
      icon: Zap,
      color: "text-orange-400",
      items: [
        {
          name: "LangChain",
          description: "Framework for LLM applications",
          pros: ["Abstractions", "Many integrations", "Agent support"],
          cons: ["Fast-changing API", "Overhead"],
          useCase: "Complex LLM workflows, agents"
        },
        {
          name: "LlamaIndex",
          description: "Data framework for LLM apps",
          pros: ["RAG focus", "Data connectors", "Good docs"],
          cons: ["Overlaps with LangChain"],
          useCase: "Document Q&A, knowledge bases"
        },
        {
          name: "Haystack",
          description: "NLP framework for search and QA",
          pros: ["Production-ready", "Pipeline architecture", "Modular"],
          cons: ["Steeper learning curve"],
          useCase: "Search and QA systems"
        }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text">Technology Stack</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Comprehensive comparison of technologies for each component of your AI assistant.
          Choose based on your priorities: accuracy, privacy, cost, or performance.
        </p>
      </motion.div>

      <div className="space-y-8">
        {technologies.map((tech, techIndex) => (
          <motion.div
            key={techIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: techIndex * 0.1 }}
            className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 overflow-hidden"
          >
            <div className="bg-jarvis-light/30 p-6 border-b border-jarvis-blue/20">
              <div className="flex items-center gap-4">
                <tech.icon className={`w-8 h-8 ${tech.color}`} />
                <h3 className="text-2xl font-bold">{tech.category}</h3>
              </div>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-6">
              {tech.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.1 + itemIndex * 0.05 }}
                  className="bg-jarvis-darker/50 p-5 rounded-lg border border-jarvis-blue/20 hover:border-jarvis-blue/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-2 text-jarvis-blue">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-green-400 mb-2">
                        ✓ Pros
                      </div>
                      <ul className="space-y-1">
                        {item.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-red-400 mb-2">
                        ✗ Cons
                      </div>
                      <ul className="space-y-1">
                        {item.cons.map((con, conIndex) => (
                          <li key={conIndex} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-jarvis-blue/20">
                      <div className="text-xs font-semibold text-jarvis-blue mb-1">
                        Best For
                      </div>
                      <p className="text-sm text-gray-400 italic">{item.useCase}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-jarvis-blue/10 rounded-lg border border-jarvis-blue/30 p-8"
      >
        <h3 className="text-2xl font-bold mb-4 text-center">Recommended Stack</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-jarvis-blue">For Beginners</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Speech:</strong> Google Speech-to-Text API</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>NLP:</strong> spaCy + OpenAI GPT-3.5</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Framework:</strong> Python + Flask</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Storage:</strong> SQLite</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-jarvis-blue">For Privacy-Focused</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Speech:</strong> Vosk + Porcupine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>NLP:</strong> spaCy + LLaMA 2 (local)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Framework:</strong> Python + FastAPI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Storage:</strong> SQLite + ChromaDB</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-jarvis-blue">For Production</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Speech:</strong> Whisper + Porcupine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>NLP:</strong> Transformers + Claude/GPT-4</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Framework:</strong> FastAPI + LangChain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Storage:</strong> PostgreSQL + Pinecone</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-jarvis-blue">For Rapid Prototyping</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Speech:</strong> Web Speech API</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>NLP:</strong> OpenAI API (GPT-3.5)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Framework:</strong> Electron + Node.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-jarvis-blue">•</span>
                <span><strong>Storage:</strong> LocalStorage + Redis</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
