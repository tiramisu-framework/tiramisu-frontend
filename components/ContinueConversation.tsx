'use client';

import { useState } from 'react';

interface ContinueConversationProps {
  onSubmit: (content: string) => Promise<void>;
  isLoading: boolean;
  messageCount: number;
}

export default function ContinueConversation({ 
  onSubmit, 
  isLoading, 
  messageCount 
}: ContinueConversationProps) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && !isLoading) {
      await onSubmit(content);
      setContent('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          💬 Continuar Conversa
          <span className="text-sm font-normal text-gray-500">
            ({messageCount} mensagens na conversa)
          </span>
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Faça uma nova pergunta mantendo o contexto da conversa anterior
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite sua próxima pergunta ou peça ajustes na análise anterior..."
          className="w-full p-4 border rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-pink-500"
          disabled={isLoading}
          autoFocus
        />
        
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={!content.trim() || isLoading}
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span>
                Processando...
              </>
            ) : (
              <>
                🍰 Continuar Análise
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => setContent('')}
            disabled={!content || isLoading}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Limpar
          </button>
        </div>
      </form>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-700">
          💡 Dica: O sistema mantém o contexto das últimas 5 mensagens. 
          Você pode pedir ajustes, fazer novas perguntas ou explorar diferentes aspectos do mesmo tema.
        </p>
      </div>
    </div>
  );
}
