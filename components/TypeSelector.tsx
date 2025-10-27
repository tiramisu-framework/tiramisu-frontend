'use client';

import { AnalysisType, AnalysisTypeOption } from '@/lib/types';

interface TypeSelectorProps {
  types: AnalysisTypeOption[];
  selected: AnalysisType;
  onSelect: (type: AnalysisType) => void;
}

export default function TypeSelector({ types, selected, onSelect }: TypeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {types.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className={`
            p-4 rounded-lg border-2 transition-all hover:scale-105
            ${selected === type.id 
              ? 'border-purple-500 bg-purple-50 shadow-lg' 
              : 'border-gray-200 bg-white hover:border-purple-300'
            }
          `}
        >
          <div className="text-3xl mb-2">{type.icon}</div>
          <div className="font-semibold text-sm">{type.name}</div>
          <div className="text-xs text-gray-500 mt-1">{type.description}</div>
        </button>
      ))}
    </div>
  );
}
