'use client';

interface ModeToggleProps {
  mode: 'simple' | 'conversation';
  onChange: (mode: 'simple' | 'conversation') => void;
}

export default function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="flex items-center justify-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
      <button
        onClick={() => onChange('simple')}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all
          ${mode === 'simple' 
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }
        `}
      >
        🎯 Análise Simples
      </button>
      
      <button
        onClick={() => onChange('conversation')}
        className={`
          px-6 py-3 rounded-lg font-medium transition-all
          ${mode === 'conversation' 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }
        `}
      >
        💬 Conversa Contínua
      </button>
    </div>
  );
}
