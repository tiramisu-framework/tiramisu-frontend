/**
 * Types para integração com API Tiramisu
 */

export type AnalysisType = 
  | "post_social"
  | "email_marketing"
  | "landing_page"
  | "ad_copy"
  | "strategy"
  | "pitch"
  | "video_script"
  | "other";

export interface AnalysisRequest {
  type: AnalysisType;
  content: string;
  context?: string;
}

export interface ThreeTreesAnalysis {
  roots: string;
  trunk: string;
  branches: string;
}

export interface TriadInsights {
  kotler: string;
  gary_vee: string;
  martha: string;
}

export interface Proposal {
  improved_version?: string;
  action_plan: string[];
  key_recommendations: string[];
  expected_results: string;
}

export interface AnalysisResponse {
  summary: string;
  three_trees: ThreeTreesAnalysis;
  triad_insights: TriadInsights;
  proposal: Proposal;
  rag_sources: string[];
}

export interface AnalysisTypeOption {
  id: AnalysisType;
  name: string;
  description: string;
  icon: string;
}

// ============================================================
// TIPOS PARA CONVERSAS CONTÍNUAS
// ============================================================

export interface ConversationCreateResponse {
  conversation_id: string;
  created_at: string;
}

export interface ConversationAnalysisRequest {
  type: AnalysisType;
  content: string;
  context?: string;
}

export interface ConversationAnalysisResponse {
  conversation_id: string;
  message_count: number;
  analysis: AnalysisResponse;
  timestamp: string;
}

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ConversationSummary {
  conversation_id: string;
  message_count: number;
  key_points: string[];
  last_interaction: string;
}
