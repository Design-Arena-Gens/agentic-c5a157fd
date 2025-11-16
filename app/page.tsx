'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Cpu,
  Code,
  Brain,
  Mic,
  Zap,
  Settings,
  BookOpen,
  Hammer,
  CheckCircle,
  AlertCircle,
  Terminal,
  Layers,
  Database,
  MessageSquare
} from 'lucide-react'
import AIDemo from './components/AIDemo'
import GuideSection from './components/GuideSection'
import TechStack from './components/TechStack'
import Architecture from './components/Architecture'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-jarvis-blue/20">
        <div className="absolute inset-0 bg-gradient-to-b from-jarvis-blue/10 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-16 h-16 text-jarvis-blue" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Build Your Own Jarvis
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive guide to creating your personal AI assistant with voice recognition,
              natural language processing, and machine learning capabilities
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setActiveTab('demo')}
                className="btn-primary"
              >
                Try Interactive Demo
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className="bg-jarvis-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-jarvis-light/80 transition-all duration-300"
              >
                View Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-jarvis-dark/95 backdrop-blur-sm border-b border-jarvis-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'demo', label: 'Live Demo', icon: Zap },
              { id: 'guide', label: 'Development Guide', icon: Code },
              { id: 'architecture', label: 'Architecture', icon: Layers },
              { id: 'tech', label: 'Tech Stack', icon: Terminal },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-jarvis-blue text-jarvis-blue'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'demo' && <AIDemo />}
        {activeTab === 'guide' && <GuideSection />}
        {activeTab === 'architecture' && <Architecture />}
        {activeTab === 'tech' && <TechStack />}
      </div>

      {/* Footer */}
      <footer className="border-t border-jarvis-blue/20 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>Built with Next.js, React, and AI technologies • Open Source Guide</p>
        </div>
      </footer>
    </main>
  )
}

function OverviewSection() {
  const features = [
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'Process voice commands using speech-to-text APIs and wake word detection'
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Understand user intent with advanced NLP models and context awareness'
    },
    {
      icon: Zap,
      title: 'Task Automation',
      description: 'Execute system commands, control applications, and automate workflows'
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'Personalize responses, commands, and behaviors to match your preferences'
    },
    {
      icon: Database,
      title: 'Knowledge Base',
      description: 'Store and retrieve information with vector databases and RAG systems'
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Engage in natural dialogue with context memory and personality'
    }
  ]

  const keyPoints = [
    {
      icon: CheckCircle,
      text: 'Step-by-step implementation guide',
      color: 'text-green-400'
    },
    {
      icon: CheckCircle,
      text: 'Complete code examples and templates',
      color: 'text-green-400'
    },
    {
      icon: CheckCircle,
      text: 'Best practices for ML integration',
      color: 'text-green-400'
    },
    {
      icon: CheckCircle,
      text: 'Hardware requirements and optimization',
      color: 'text-green-400'
    },
    {
      icon: AlertCircle,
      text: 'Common challenges and solutions',
      color: 'text-yellow-400'
    },
    {
      icon: Hammer,
      text: 'Testing and deployment strategies',
      color: 'text-blue-400'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center glow-text">
          What You'll Build
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-jarvis-dark/50 p-6 rounded-lg border border-jarvis-blue/30 card-glow hover:border-jarvis-blue/60 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-jarvis-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What's Included */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-jarvis-dark/30 p-8 rounded-lg border border-jarvis-blue/30"
      >
        <h2 className="text-3xl font-bold mb-6 glow-text">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <point.icon className={`w-6 h-6 ${point.color} flex-shrink-0 mt-1`} />
              <span className="text-gray-300">{point.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Start */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 glow-text">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          This guide covers everything from basic setup to advanced ML integration.
          Whether you're a beginner or experienced developer, you'll find actionable
          insights to build your own intelligent assistant.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary">
            Start Building
          </button>
          <button className="bg-jarvis-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-jarvis-light/80 transition-all duration-300">
            View Examples
          </button>
        </div>
      </motion.div>
    </div>
  )
}
