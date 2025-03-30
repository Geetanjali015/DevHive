import React, { useState } from 'react';
import { Send, Minimize2, Bot, X, Loader } from 'lucide-react';

const HiveHelper = () => {
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: "Hi! I'm HiveHelper, your DevHive assistant. How can I assist you today?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBotResponse = async (userMessage) => {
    setIsLoading(true);
    try {
        const response = await fetch("http://127.0.0.1:8000/api/chatbot/chat/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: [{ type: "user", content: userMessage }] }),
        });

        const textData = await response.text();  // Get raw text response
        const jsonMatch = textData.match(/\{.*\}/s); // Extract JSON part from SSE

        if (jsonMatch) {
            const data = JSON.parse(jsonMatch[0]); // Parse JSON from extracted text
            setMessages(prev => [...prev, { type: 'bot', content: data.response, timestamp: new Date() }]);
        } else {
            console.error("Invalid JSON response format:", textData);
        }
    } catch (error) {
        console.error("Error fetching bot response:", error);
    }
    setIsLoading(false);
};


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { type: 'user', content: input, timestamp: new Date() }]);
        fetchBotResponse(input);
        setInput('');
    };

    if (isMinimized) {
        return (
            <div className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg cursor-pointer p-3" onClick={() => setIsMinimized(false)}>
                <Bot className="w-8 h-8 text-amber-600" />
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl flex flex-col h-[500px]">
            <div className="p-4 bg-amber-600 text-white rounded-t-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Bot className="w-6 h-6" />
                    <h3 className="font-semibold">HiveHelper</h3>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setIsMinimized(true)} className="hover:bg-amber-500 text-amber-600 p-1 rounded">
                        <Minimize2 className="w-5 h-5" />
                    </button>
                    <button onClick={() => setIsMinimized(true)} className="hover:bg-amber-500  text-amber-600 p-1 rounded">
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-lg p-3 ${message.type === 'user' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                            <p className="whitespace-pre-line">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-center gap-2 text-gray-500">
                        <Loader className="w-4 h-4 animate-spin" />
                        <span>HiveHelper is typing...</span>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask HiveHelper anything..."
                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-amber-600"
                    />
                    <button type="submit" className="bg-amber-600 text-amber-600 p-2 rounded-lg hover:bg-amber-700">
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HiveHelper;