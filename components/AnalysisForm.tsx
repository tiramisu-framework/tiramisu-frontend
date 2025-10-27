'use client';

import { useState } from 'react';
import { AnalysisType, AnalysisTypeOption } from '@/lib/types';
import TypeSelector from './TypeSelector';

interface AnalysisFormProps {
  types: AnalysisTypeOption[];
  onSubmit: (type: AnalysisType, content: string, context: string) => void;
  isLoading: boolean;
}

export default function AnalysisForm({ types, onSubmit, isLoading }: AnalysisFormProps) {
  const [selectedType, setSelectedType] = useState<AnalysisType>('post_social');
  const [content, setContent] = useState('');
  const [context, setContext] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(selectedType, content, context);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          📋 Tipo de Análise
        </label>
        <TypeSelector
          types={types}
          selected={selectedType}
          onSelect={setSelectedType}
        />
      </div>

      {/* Content Textarea */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          📝 Conteúdo para Análise *
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Cole aqui o conteúdo que você quer analisar (post, email, landing page, etc)..."
          rows={8}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Context Textarea */}
      <div>
        <label htmlFor="context" className="block text-sm font-medium text-gray-700 mb-2">
          📌 Contexto Adicional (opcional)
        </label>
        <textarea
          id="context"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Objetivo, público-alvo, canais, timing, etc..."
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || !content.trim()}
        className={`
          w-full py-4 px-6 rounded-lg font-semibold text-white text-lg
          transition-all transform hover:scale-105
          ${isLoading || !content.trim()
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg'
          }
        `}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analisando com Tiramisu...
          </span>
        ) : (
          '🍰 Analisar com Tiramisu'
        )}
      </button>
    </form>
  );
}
