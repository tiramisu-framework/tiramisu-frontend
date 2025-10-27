/**
 * Client para API Tiramisu
 */
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface AnalysisRequest {
  content: string;
  type: string;
  context?: string;
}

export interface ConversationRequest {
  title?: string;
  metadata?: Record<string, unknown>;
}

export interface ContinueConversationRequest {
  message: string;
  analysis_type?: string;
}

export class TiramisuAPI {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE;
  }

  async checkHealth() {
    const response = await fetch(`${this.baseURL}/api/health`);
    if (!response.ok) {
      throw new Error('API is not healthy');
    }
    return response.json();
  }

  async getTypes() {
    const response = await fetch(`${this.baseURL}/api/types`);
    if (!response.ok) {
      throw new Error('Failed to fetch types');
    }
    const data = await response.json();
    
    // CORREÇÃO CRÍTICA: Extrair o array do objeto { types: [...] }
    if (data.types && Array.isArray(data.types)) {
      return data.types;
    }
    
    // Fallback seguro
    console.error("Unexpected types format:", data);
    return [];
  }

  async analyze(request: AnalysisRequest) {
    const response = await fetch(`${this.baseURL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Analysis failed');
    }
    
    return response.json();
  }

  async createConversation(request: ConversationRequest = {}) {
    const response = await fetch(`${this.baseURL}/api/conversations/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: request.title || 'Nova Conversa',
        metadata: request.metadata || {}
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create conversation');
    }
    
    return response.json();
  }

  async continueConversation(conversationId: string, request: ContinueConversationRequest) {
    const response = await fetch(`${this.baseURL}/api/conversations/continue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conversation_id: conversationId,
        message: request.message,
        analysis_type: request.analysis_type || 'strategy'
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to continue conversation');
    }
    
    return response.json();
  }

  async getConversationHistory(conversationId: string) {
    const response = await fetch(`${this.baseURL}/api/conversations/${conversationId}/history`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch conversation history');
    }
    
    return response.json();
  }

  async listConversations() {
    const response = await fetch(`${this.baseURL}/api/conversations`);
    
    if (!response.ok) {
      throw new Error('Failed to list conversations');
    }
    
    return response.json();
  }

  async analyzeWithConversation(conversationId: string, request: AnalysisRequest) {
    const response = await fetch(`${this.baseURL}/api/conversations/${conversationId}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Analysis with conversation failed');
    }
    
    return response.json();
  }

  async deleteConversation(conversationId: string) {
    const response = await fetch(`${this.baseURL}/api/conversations/${conversationId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete conversation');
    }
    
    return response.json();
  }
}

export const tiramisuAPI = new TiramisuAPI();
