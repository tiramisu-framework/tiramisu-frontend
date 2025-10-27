'use client';

import { Download } from 'lucide-react';

interface AnalysisResponse {
  summary: string;
  three_trees: {
    roots: string;
    trunk: string;
    branches: string;
  };
  triad_insights: {
    strategic: string;
    execution: string;
    technology: string;
  };
  proposal: {
    improved_version: string;
    action_plan: string[];
    key_recommendations: string[];
    expected_results: string;
  };
  sources: string[];
}

interface AnalysisResultProps {
  result: AnalysisResponse;
  onNewAnalysis: () => void;
  hideActions?: boolean;
}

export default function AnalysisResult({ 
  result, 
  onNewAnalysis,
  hideActions = false 
}: AnalysisResultProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          🍰 Análise da Tiramisu
        </h2>
        <p className="text-sm text-gray-600">
          Strategic Analysis × Execution × Technology
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          📊 Resumo Executivo
        </h3>
        <div className="max-h-64 overflow-y-auto bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {result.summary}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🌳 Análise das 3 Árvores
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-green-700 mb-2">
              🌱 RAÍZES - Diagnóstico Profundo
            </h4>
            <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.three_trees.roots}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-green-700 mb-2">
              🌲 TRONCO - Execução Atual
            </h4>
            <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.three_trees.trunk}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-green-700 mb-2">
              �� GALHOS - Melhorias e Alternativas
            </h4>
            <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.three_trees.branches}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          👥 Visão da Tríade
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-blue-700 mb-2">
              🎓 STRATEGIC PERSPECTIVE
            </h4>
            <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.triad_insights.strategic}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-orange-700 mb-2">
              🔥 EXECUTION PERSPECTIVE
            </h4>
            <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.triad_insights.execution}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-700 mb-2">
              🤖 TECHNOLOGY PERSPECTIVE
            </h4>
            <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.triad_insights.technology}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🎯 Proposta de Solução
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-indigo-700 mb-2">
              ✨ Versão Melhorada
            </h4>
            <div className="max-h-96 overflow-y-auto bg-gradient-to-br from-indigo-50 to-white rounded-lg p-4 border border-indigo-200">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {result.proposal.improved_version}
              </p>
            </div>
          </div>

          {result.proposal.action_plan && result.proposal.action_plan.length > 0 && (
            <div>
              <h4 className="text-lg font-medium text-indigo-700 mb-2">
                📋 Plano de Ação
              </h4>
              <ul className="space-y-2 max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4">
                {result.proposal.action_plan.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">▶</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.proposal.key_recommendations && result.proposal.key_recommendations.length > 0 && (
            <div>
              <h4 className="text-lg font-medium text-indigo-700 mb-2">
                💡 Recomendações-Chave
              </h4>
              <ul className="space-y-2 max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4">
                {result.proposal.key_recommendations.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.proposal.expected_results && (
            <div>
              <h4 className="text-lg font-medium text-indigo-700 mb-2">
                🎯 Resultados Esperados
              </h4>
              <div className="max-h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {result.proposal.expected_results}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {result.sources && result.sources.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            📚 Fontes Consultadas (RAG)
          </h3>
          <ul className="space-y-1">
            {result.sources.map((source, index) => (
              <li key={index} className="text-sm text-gray-600">
                {source}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!hideActions && (
        <div className="flex gap-4 pt-6 border-t">
          <button
            onClick={onNewAnalysis}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
          >
            🍰 Nova Análise
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors"
          >
            <Download size={20} />
            Exportar
          </button>
        </div>
      )}
    </div>
  );
}
