'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Rocket,
  Settings,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Cpu,
  Layers,
  Database,
  Mic
} from 'lucide-react'

export default function GuideSection() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0)

  const sections = [
    {
      title: "1. Planning & Architecture",
      icon: Layers,
      color: "text-blue-400",
      content: {
        overview: "Define your assistant's scope and design the system architecture",
        steps: [
          {
            title: "Define Core Capabilities",
            description: "Determine what your AI assistant should do",
            details: [
              "Voice command processing (wake word detection, speech recognition)",
              "Natural language understanding (intent classification, entity extraction)",
              "Task execution (system control, application launching, web searches)",
              "Conversational abilities (context awareness, personality)",
              "Knowledge retrieval (information lookup, question answering)",
              "Customization and learning (user preferences, behavioral adaptation)"
            ]
          },
          {
            title: "Choose Architecture Pattern",
            description: "Select the right architecture for your needs",
            details: [
              "Modular Architecture: Separate components for speech, NLP, execution, and learning",
              "Pipeline Architecture: Sequential processing from input to output",
              "Event-Driven: React to triggers and events asynchronously",
              "Microservices: Independent services that communicate via APIs",
              "Recommended: Hybrid approach with modular design and event-driven components"
            ]
          }
        ]
      }
    },
    {
      title: "2. Programming Languages & Frameworks",
      icon: Code,
      color: "text-green-400",
      content: {
        overview: "Select the best technologies for each component",
        steps: [
          {
            title: "Core Language Selection",
            description: "Primary languages for development",
            details: [
              "Python: Best for ML/AI, extensive libraries (TensorFlow, PyTorch, spaCy)",
              "JavaScript/TypeScript: Great for cross-platform desktop apps (Electron)",
              "C++: Optimal for performance-critical components",
              "Rust: Memory-safe alternative for system-level operations"
            ],
            code: `# Python - Recommended for AI/ML components
import speech_recognition as sr
from transformers import pipeline
import openai

# JavaScript - For desktop integration
const { app, BrowserWindow } = require('electron')
const vosk = require('vosk')`
          },
          {
            title: "Essential Frameworks",
            description: "Key frameworks for different components",
            details: [
              "Speech Recognition: Vosk, Whisper (OpenAI), Mozilla DeepSpeech",
              "NLP: Hugging Face Transformers, spaCy, NLTK",
              "ML Framework: PyTorch or TensorFlow for custom models",
              "Desktop App: Electron, Qt (PyQt/PySide), or native frameworks",
              "API Integration: FastAPI, Flask for backend services",
              "Database: SQLite, PostgreSQL, or vector DBs (Pinecone, Weaviate)"
            ]
          }
        ]
      }
    },
    {
      title: "3. Voice Recognition Setup",
      icon: Mic,
      color: "text-purple-400",
      content: {
        overview: "Implement speech-to-text and wake word detection",
        steps: [
          {
            title: "Wake Word Detection",
            description: "Trigger your assistant with a custom phrase",
            details: [
              "Use Porcupine for custom wake word creation",
              "Alternatives: Snowboy (legacy), PocketSphinx",
              "Train on your own voice for better accuracy",
              "Implement always-listening background service with low CPU usage"
            ],
            code: `import pvporcupine
import pyaudio

# Initialize Porcupine with custom wake word
porcupine = pvporcupine.create(
    keywords=['jarvis'],
    sensitivities=[0.5]
)

# Audio stream setup
pa = pyaudio.PyAudio()
audio_stream = pa.open(
    rate=porcupine.sample_rate,
    channels=1,
    format=pyaudio.paInt16,
    input=True,
    frames_per_buffer=porcupine.frame_length
)

while True:
    pcm = audio_stream.read(porcupine.frame_length)
    pcm = struct.unpack_from("h" * porcupine.frame_length, pcm)

    keyword_index = porcupine.process(pcm)
    if keyword_index >= 0:
        print("Wake word detected!")
        # Trigger speech recognition`
          },
          {
            title: "Speech-to-Text Implementation",
            description: "Convert voice to text accurately",
            details: [
              "Local: Vosk (offline, fast, 90%+ accuracy)",
              "Cloud: Whisper API (best accuracy), Google Speech-to-Text",
              "Hybrid: Use local for privacy, cloud for complex queries",
              "Implement noise cancellation and audio preprocessing"
            ],
            code: `from vosk import Model, KaldiRecognizer
import json

# Load Vosk model
model = Model("model")
rec = KaldiRecognizer(model, 16000)

# Process audio
while True:
    data = audio_stream.read(4000)
    if rec.AcceptWaveform(data):
        result = json.loads(rec.Result())
        text = result.get('text', '')
        if text:
            process_command(text)`
          }
        ]
      }
    },
    {
      title: "4. Natural Language Processing",
      icon: Database,
      color: "text-yellow-400",
      content: {
        overview: "Understand user intent and extract information",
        steps: [
          {
            title: "Intent Classification",
            description: "Determine what the user wants to do",
            details: [
              "Use pre-trained models: BERT, DistilBERT, RoBERTa",
              "Fine-tune on your command dataset",
              "Create intent categories: control, query, schedule, communicate",
              "Implement confidence thresholds and fallback handling"
            ],
            code: `from transformers import pipeline

# Intent classification
classifier = pipeline(
    "zero-shot-classification",
    model="facebook/bart-large-mnli"
)

def classify_intent(text):
    candidate_labels = [
        "system_control",
        "information_query",
        "schedule_task",
        "communication",
        "entertainment"
    ]

    result = classifier(text, candidate_labels)
    intent = result['labels'][0]
    confidence = result['scores'][0]

    return intent, confidence`
          },
          {
            title: "Entity Extraction",
            description: "Extract specific information from commands",
            details: [
              "Use spaCy for named entity recognition",
              "Extract: dates, times, locations, names, applications",
              "Custom entity training for domain-specific needs",
              "Implement slot filling for complex commands"
            ],
            code: `import spacy
from datetime import datetime
import dateparser

nlp = spacy.load("en_core_web_sm")

def extract_entities(text):
    doc = nlp(text)
    entities = {
        'time': None,
        'app': None,
        'location': None,
        'person': None
    }

    # Extract time-related entities
    time_text = ' '.join([token.text for token in doc
                          if token.pos_ in ['NUM', 'TIME']])
    if time_text:
        entities['time'] = dateparser.parse(time_text)

    # Extract named entities
    for ent in doc.ents:
        if ent.label_ == 'PERSON':
            entities['person'] = ent.text
        elif ent.label_ == 'GPE':
            entities['location'] = ent.text

    return entities`
          },
          {
            title: "Context Management",
            description: "Maintain conversation context and memory",
            details: [
              "Store conversation history with timestamps",
              "Use vector databases for semantic search",
              "Implement short-term (session) and long-term (persistent) memory",
              "Reference resolution: handle 'it', 'that', 'them' pronouns"
            ]
          }
        ]
      }
    },
    {
      title: "5. Task Execution Engine",
      icon: Zap,
      color: "text-red-400",
      content: {
        overview: "Execute commands and integrate with system",
        steps: [
          {
            title: "System Control",
            description: "Control OS and applications",
            details: [
              "Use subprocess for command execution",
              "PyAutoGUI for GUI automation",
              "Platform-specific APIs (win32api, AppKit, X11)",
              "Security: whitelist commands, require confirmation for sensitive operations"
            ],
            code: `import subprocess
import pyautogui
import platform

class SystemController:
    def __init__(self):
        self.os = platform.system()

    def open_application(self, app_name):
        commands = {
            'Windows': f'start {app_name}',
            'Darwin': f'open -a "{app_name}"',
            'Linux': f'{app_name.lower()} &'
        }

        cmd = commands.get(self.os)
        if cmd:
            subprocess.Popen(cmd, shell=True)

    def adjust_volume(self, level):
        if self.os == 'Darwin':
            subprocess.run(['osascript', '-e',
                          f'set volume output volume {level}'])
        elif self.os == 'Windows':
            # Use pycaw library
            pass

    def type_text(self, text):
        pyautogui.typewrite(text, interval=0.05)`
          },
          {
            title: "API Integrations",
            description: "Connect to external services",
            details: [
              "Weather: OpenWeatherMap, WeatherAPI",
              "Calendar: Google Calendar API, Outlook API",
              "Email: Gmail API, SMTP",
              "Smart Home: Home Assistant, IFTTT",
              "Web Search: SerpAPI, Google Custom Search"
            ],
            code: `import requests
from googleapiclient.discovery import build

class ServiceIntegrations:
    def __init__(self, api_keys):
        self.api_keys = api_keys

    def get_weather(self, location):
        url = "http://api.openweathermap.org/data/2.5/weather"
        params = {
            'q': location,
            'appid': self.api_keys['weather'],
            'units': 'imperial'
        }
        response = requests.get(url, params=params)
        data = response.json()
        return f"It's {data['main']['temp']}°F and {data['weather'][0]['description']}"

    def add_calendar_event(self, event_details):
        service = build('calendar', 'v3',
                       credentials=self.credentials)
        event = service.events().insert(
            calendarId='primary',
            body=event_details
        ).execute()
        return event.get('htmlLink')`
          }
        ]
      }
    },
    {
      title: "6. Machine Learning Integration",
      icon: Cpu,
      color: "text-cyan-400",
      content: {
        overview: "Add intelligence and personalization",
        steps: [
          {
            title: "Conversational AI",
            description: "Implement natural dialogue",
            details: [
              "Use GPT models via OpenAI API or local alternatives (GPT4All, LLaMA)",
              "LangChain for conversation chains and agents",
              "System prompts to define personality and behavior",
              "Temperature and sampling parameters for response variety"
            ],
            code: `from langchain.llms import OpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

class ConversationalAssistant:
    def __init__(self, api_key):
        self.llm = OpenAI(
            temperature=0.7,
            openai_api_key=api_key
        )

        self.memory = ConversationBufferMemory()

        self.conversation = ConversationChain(
            llm=self.llm,
            memory=self.memory,
            verbose=False
        )

        # Set personality
        self.system_prompt = """You are Jarvis, a helpful
        and intelligent AI assistant. You're professional,
        concise, and occasionally witty."""

    def respond(self, user_input):
        response = self.conversation.predict(
            input=user_input
        )
        return response`
          },
          {
            title: "Learning & Personalization",
            description: "Adapt to user preferences",
            details: [
              "Track user patterns: frequent commands, preferences, schedule",
              "Collaborative filtering for recommendations",
              "Reinforcement learning from feedback",
              "A/B testing different response styles"
            ],
            code: `import json
from collections import defaultdict

class UserPreferences:
    def __init__(self, user_id):
        self.user_id = user_id
        self.load_preferences()

    def load_preferences(self):
        try:
            with open(f'user_{self.user_id}.json', 'r') as f:
                self.prefs = json.load(f)
        except FileNotFoundError:
            self.prefs = {
                'command_frequency': defaultdict(int),
                'preferred_services': {},
                'response_style': 'balanced',
                'voice_settings': {}
            }

    def update_command_frequency(self, command):
        self.prefs['command_frequency'][command] += 1
        self.save()

    def get_suggestions(self):
        # Return frequently used commands
        freq = self.prefs['command_frequency']
        return sorted(freq.items(),
                     key=lambda x: x[1],
                     reverse=True)[:5]

    def save(self):
        with open(f'user_{self.user_id}.json', 'w') as f:
            json.dump(self.prefs, f, indent=2)`
          }
        ]
      }
    },
    {
      title: "7. Hardware Requirements",
      icon: Settings,
      color: "text-orange-400",
      content: {
        overview: "Optimal hardware specifications for smooth performance",
        steps: [
          {
            title: "Minimum Requirements",
            description: "Basic setup for local AI assistant",
            details: [
              "CPU: Intel i5 or AMD Ryzen 5 (quad-core)",
              "RAM: 8GB minimum, 16GB recommended",
              "Storage: 50GB free (for models and data)",
              "Microphone: Quality USB mic or headset",
              "Internet: For cloud API calls (optional with local models)"
            ]
          },
          {
            title: "Recommended Setup",
            description: "For advanced features and better performance",
            details: [
              "CPU: Intel i7/i9 or AMD Ryzen 7/9 (8+ cores)",
              "RAM: 32GB for running large local models",
              "GPU: NVIDIA RTX 3060+ with 8GB+ VRAM (for local LLMs)",
              "Storage: 256GB SSD for fast model loading",
              "Microphone: Rode NT-USB or Blue Yeti for clarity",
              "Speakers: Quality output for text-to-speech"
            ]
          },
          {
            title: "Performance Optimization",
            description: "Tips for efficient resource usage",
            details: [
              "Use quantized models (4-bit, 8-bit) to reduce memory",
              "Implement lazy loading for models",
              "GPU acceleration with CUDA for inference",
              "Batch processing for multiple requests",
              "Model caching to avoid reloading",
              "Async operations to prevent blocking"
            ],
            code: `import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

# Load quantized model for efficiency
model = AutoModelForCausalLM.from_pretrained(
    "model-name",
    load_in_8bit=True,  # 8-bit quantization
    device_map="auto",   # Auto GPU/CPU mapping
    torch_dtype=torch.float16
)

# Enable GPU if available
device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)`
          }
        ]
      }
    },
    {
      title: "8. Common Challenges & Solutions",
      icon: AlertTriangle,
      color: "text-pink-400",
      content: {
        overview: "Overcome typical obstacles in development",
        steps: [
          {
            title: "Accuracy Issues",
            description: "Improving recognition and understanding",
            details: [
              "Challenge: Poor speech recognition accuracy",
              "Solution: Use noise cancellation, quality microphone, fine-tune on your voice",
              "",
              "Challenge: Misunderstood commands",
              "Solution: Add confirmation dialogs, expand training data, use context clues",
              "",
              "Challenge: Language ambiguity",
              "Solution: Ask clarifying questions, maintain context, use confidence thresholds"
            ]
          },
          {
            title: "Performance Problems",
            description: "Handling latency and resource usage",
            details: [
              "Challenge: Slow response times",
              "Solution: Use smaller models, implement caching, async processing",
              "",
              "Challenge: High memory usage",
              "Solution: Quantized models, model unloading, streaming responses",
              "",
              "Challenge: CPU/GPU bottlenecks",
              "Solution: Optimize inference, use batch processing, consider cloud APIs"
            ]
          },
          {
            title: "Integration Issues",
            description: "Connecting with systems and services",
            details: [
              "Challenge: API rate limits",
              "Solution: Implement caching, request queuing, use multiple API keys",
              "",
              "Challenge: Cross-platform compatibility",
              "Solution: Abstract platform-specific code, use compatibility layers",
              "",
              "Challenge: Security and permissions",
              "Solution: Principle of least privilege, OAuth for services, sandboxing"
            ]
          }
        ]
      }
    },
    {
      title: "9. Testing & Quality Assurance",
      icon: Shield,
      color: "text-emerald-400",
      content: {
        overview: "Ensure reliability and performance",
        steps: [
          {
            title: "Testing Strategy",
            description: "Comprehensive testing approach",
            details: [
              "Unit Tests: Test individual components (speech recognition, NLP, execution)",
              "Integration Tests: Verify component interactions",
              "End-to-End Tests: Full command pipeline testing",
              "Voice Testing: Record test phrases, measure accuracy",
              "Performance Testing: Measure latency, resource usage",
              "User Acceptance Testing: Real-world usage scenarios"
            ],
            code: `import unittest
from unittest.mock import Mock, patch

class TestVoiceAssistant(unittest.TestCase):
    def setUp(self):
        self.assistant = VoiceAssistant()

    def test_intent_classification(self):
        text = "Set an alarm for 7 AM"
        intent, confidence = self.assistant.classify_intent(text)

        self.assertEqual(intent, "schedule_task")
        self.assertGreater(confidence, 0.8)

    def test_entity_extraction(self):
        text = "What's the weather in New York"
        entities = self.assistant.extract_entities(text)

        self.assertEqual(entities['location'], "New York")

    @patch('subprocess.Popen')
    def test_application_launch(self, mock_popen):
        self.assistant.open_application("Chrome")
        mock_popen.assert_called_once()

    def test_response_time(self):
        import time
        start = time.time()

        self.assistant.process_command("Hello")

        elapsed = time.time() - start
        self.assertLess(elapsed, 2.0)  # < 2 seconds

if __name__ == '__main__':
    unittest.main()`
          },
          {
            title: "Metrics & Monitoring",
            description: "Track performance and errors",
            details: [
              "Accuracy: Command recognition rate, intent classification F1 score",
              "Latency: Time from speech to response (target < 2 seconds)",
              "Availability: Uptime percentage, error rates",
              "User Satisfaction: Success rate, retry frequency",
              "Resource Usage: CPU, memory, network bandwidth",
              "Logging: Structured logs for debugging and analysis"
            ]
          }
        ]
      }
    },
    {
      title: "10. Customization & Extensions",
      icon: TrendingUp,
      color: "text-indigo-400",
      content: {
        overview: "Personalize and extend functionality",
        steps: [
          {
            title: "Custom Commands",
            description: "Add your own command handlers",
            details: [
              "Create plugin system for extensibility",
              "Define command schemas with parameters",
              "Implement command registration and discovery",
              "Support regex patterns and fuzzy matching"
            ],
            code: `class CommandPlugin:
    def __init__(self):
        self.commands = {}

    def register_command(self, pattern, handler, description):
        self.commands[pattern] = {
            'handler': handler,
            'description': description
        }

    def execute(self, text):
        for pattern, cmd in self.commands.items():
            if re.match(pattern, text, re.IGNORECASE):
                return cmd['handler'](text)
        return None

# Usage
plugin = CommandPlugin()

def handle_lights(text):
    # Custom smart home control
    if 'on' in text.lower():
        return turn_lights_on()
    else:
        return turn_lights_off()

plugin.register_command(
    r'turn (the )?lights (on|off)',
    handle_lights,
    'Control smart home lights'
)`
          },
          {
            title: "Personality Customization",
            description: "Define assistant's character",
            details: [
              "Adjust response formality: casual, professional, playful",
              "Add humor and personality traits",
              "Custom greetings and phrases",
              "Voice selection for text-to-speech",
              "Response length preferences"
            ]
          },
          {
            title: "Advanced Features",
            description: "Take your assistant to the next level",
            details: [
              "Multi-user support with voice recognition",
              "Proactive suggestions based on patterns",
              "Context-aware reminders and notifications",
              "Integration with IoT devices",
              "Custom skills marketplace",
              "Visual interface with dashboard",
              "Mobile app companion",
              "Multi-language support"
            ]
          }
        ]
      }
    }
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 glow-text">
          Complete Development Guide
        </h2>
        <p className="text-gray-400 text-lg">
          Step-by-step instructions for building your AI assistant from scratch
        </p>
      </motion.div>

      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-jarvis-dark/50 rounded-lg border border-jarvis-blue/30 overflow-hidden"
        >
          <button
            onClick={() => setExpandedSection(expandedSection === index ? null : index)}
            className="w-full p-6 flex items-center justify-between hover:bg-jarvis-light/20 transition-colors"
          >
            <div className="flex items-center gap-4">
              <section.icon className={`w-8 h-8 ${section.color}`} />
              <h3 className="text-2xl font-bold text-left">{section.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: expandedSection === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="w-6 h-6 text-jarvis-blue" />
            </motion.div>
          </button>

          {expandedSection === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-jarvis-blue/20"
            >
              <div className="p-6 space-y-6">
                <p className="text-gray-300 text-lg">{section.content.overview}</p>

                {section.content.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="bg-jarvis-darker/50 p-5 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-jarvis-blue">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 mb-4">{step.description}</p>

                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          {detail && (
                            <>
                              <span className="text-jarvis-blue mt-1">•</span>
                              <span className="text-gray-300">{detail}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    {step.code && (
                      <div className="mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="w-4 h-4 text-jarvis-blue" />
                          <span className="text-sm font-semibold text-jarvis-blue">
                            Code Example
                          </span>
                        </div>
                        <pre className="code-block overflow-x-auto">
                          <code className="text-sm">{step.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-jarvis-blue/10 rounded-lg border border-jarvis-blue/30 p-8 text-center"
      >
        <Rocket className="w-12 h-12 text-jarvis-blue mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-3">Ready to Start Building?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          You now have a comprehensive roadmap for creating your AI assistant. Start with the
          basics, iterate rapidly, and add advanced features as you progress. The key is to
          build incrementally and test continuously.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary">
            Download Code Templates
          </button>
          <button className="bg-jarvis-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-jarvis-light/80 transition-all duration-300">
            Join Community
          </button>
        </div>
      </motion.div>
    </div>
  )
}
