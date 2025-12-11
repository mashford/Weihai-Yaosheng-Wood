import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '您好！我是威海耀晟的智能顾问。无论是出口包装箱标准，还是托盘选型建议，我都可以为您解答。请问有什么可以帮您？',
      timestamp: Date.now()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input);
      const botMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error", error);
      const errorMsg: ChatMessage = {
        role: 'model',
        text: '抱歉，网络连接似乎有点问题，请稍后再试或直接拨打我们的电话。',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-gray-700 rotate-90' : 'bg-amber-600 hover:bg-amber-700 hover:scale-110'
        }`}
      >
        {isOpen ? <X color="white" size={24} /> : <MessageSquare color="white" size={28} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl z-40 flex flex-col transition-all duration-300 origin-bottom-right border border-gray-100 overflow-hidden ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 p-4 flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot className="text-white" size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">包装选型顾问</h3>
            <p className="text-amber-100 text-xs flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
              Gemini AI 在线中
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-gray-200' : 'bg-amber-100'
                }`}
              >
                {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-amber-700" />}
              </div>
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-amber-600 text-white rounded-br-none'
                    : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-start gap-2.5">
               <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <Bot size={16} className="text-amber-700" />
               </div>
               <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                  <Loader2 size={16} className="animate-spin text-amber-600" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="请问有什么可以帮您？..."
              className="w-full bg-gray-100 text-gray-800 placeholder-gray-400 border-none rounded-full py-3 pl-4 pr-12 focus:ring-2 focus:ring-amber-500/50 focus:bg-white transition-all text-sm"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-gray-400">AI回复仅供参考，具体报价请以人工确认准</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIConsultant;