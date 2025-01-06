import React from 'react';
import { Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-white text-xl font-semibold">HyperMind</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        <main className="py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Welcome to HyperMind Technologies
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-light mb-12">
              Built to Innovate
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-500 text-white rounded-lg hover:border-blue-400 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px]" />
        </div>
      </div>
    </div>
  );
}

export default App;