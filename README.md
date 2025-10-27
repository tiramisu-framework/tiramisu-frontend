# 🍰 Tiramisu Frontend

Modern React/Next.js interface for the Tiramisu Marketing AI Framework - an AI-powered marketing consultant combining insights from strategic marketing principles, practical execution methods, and digital transformation concepts.

## ✨ Features

- **8 Analysis Types**: Social posts, emails, landing pages, ads, strategies, pitches, scripts, and more
- **Three Trees Framework**: Roots (diagnosis), Trunk (execution), Branches (improvements)
- **Expert Insights**: Powered by knowledge from marketing authorities
- **Real-time Analysis**: Get results in 10-30 seconds
- **Responsive Design**: Works on desktop, tablet, and mobile

## 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/tiramisu-framework/tiramisu-frontend.git
cd tiramisu-frontend

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# Edit .env.local and set your API URL

# Run development server
npm run dev
```

Open http://localhost:3000

## 🔧 Configuration

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 📦 Prerequisites

- Node.js 18+
- npm or yarn
- [Tiramisu Backend](https://github.com/tiramisu-framework/tiramisu-framework) running

## 🏗️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: Lucide React

## 📁 Project Structure
```
tiramisu-frontend/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utilities and types
└── public/          # Static assets
```

## 🎯 Usage

1. Select analysis type (8 options available)
2. Paste your marketing content
3. Add context (optional)
4. Click "Analyze"
5. Get comprehensive AI analysis

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file

## 🔗 Links

- [Backend Repository](https://github.com/tiramisu-framework/tiramisu-framework)
- [Live Demo](#) - Coming soon
- [Documentation](#) - Coming soon

## 👨‍💻 Author

Developed by Jony Wolff

---

**Tiramisu Framework** - Three minds, one solution 🍰

## 📚 Setup Data

Users need to provide their own marketing knowledge sources:

1. **Add documents to data/ folder**
   - Place your marketing PDFs/documents in the backend's `data/` directory

2. **Run indexing to create FAISS vectors**
   - Follow backend instructions to index your content

3. **Configure OpenAI API key**
   - Set up your API key in the backend configuration

For complete setup instructions, see the backend repository:
https://github.com/tiramisu-framework/tiramisu-framework
