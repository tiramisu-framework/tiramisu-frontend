'use client';

import AnalysisResult from './AnalysisResult';

export interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  analysis?: any;
  timestamp: string;
}

interface ConversationHistoryProps {
  messages: ConversationMessage[];
  onNewAnalysis: () => void;
}

export default function ConversationHistory({ 
  messages, 
  onNewAnalysis 
}: ConversationHistoryProps) {
  
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <div key={message.id} className="animate-fadeIn">
          {message.role === 'user' ? (
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 font-semibold">👤 VOCÊ</span>
                <span className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <p className="text-gray-800">{message.content}</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-pink-600 font-semibold">🍰 TIRAMISU</span>
                <span className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
              {message.analysis && (
                <AnalysisResult 
                  result={message.analysis}
                  onNewAnalysis={onNewAnalysis}
                />
              )}
            </div>
          )}
          
          {index < messages.length - 1 && (
            <div className="border-t border-gray-200 my-6"></div>
          )}
        </div>
      ))}
    </div>
  );
}
