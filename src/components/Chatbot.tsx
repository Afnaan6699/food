import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: 'Hi! I am the ResQMeal Assistant. How can I help you regarding food donations today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    const currentInput = input;
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: `Thanks for asking! While I'm just a demo agent for the hackathon UI right now, your input: "${currentInput}" has been logged. Let's save some meals! 🍏` 
      }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full gradient-primary text-white shadow-elegant hover:scale-110 transition-smooth z-[100] ${isOpen ? 'hidden' : 'block animate-bounce'}`}
        aria-label="Toggle Chatbot"
      >
        <MessageCircle size={28} />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[340px] sm:w-[380px] glass rounded-3xl shadow-glow overflow-hidden z-[100] animate-fade-up border border-white/20 flex flex-col" style={{ height: '500px', maxHeight: '80vh' }}>
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-soft">R</div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">ResQMeal AI</h3>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">● Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white/30 to-white/10 dark:from-black/30 dark:to-black/10">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[20px] p-3.5 text-sm ${msg.role === 'user' ? 'gradient-primary text-white rounded-tr-sm shadow-soft' : 'glass-dark text-foreground shadow-sm rounded-tl-sm border border-white/40 dark:border-white/10 text-black dark:text-white bg-white/70 dark:bg-black/50 backdrop-blur-md'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-t border-white/20 dark:border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..." 
              className="flex-1 bg-white/50 dark:bg-black/50 border border-white/30 dark:border-white/10 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground shadow-inner"
            />
            <button onClick={handleSend} className="p-3 rounded-full gradient-primary text-white hover:opacity-90 transition-opacity focus:ring-2 focus:ring-primary/50 shadow-soft">
              <Send size={18} className="-ml-0.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
