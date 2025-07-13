# Vibe - AI-Powered Code Generation Platform

<div align="center">
  <img src="public/logo.svg" alt="Vibe Logo" width="80" height="80">
  <h3>Build something with Vibe</h3>
  <p>Create apps and websites by chatting with AI</p>
</div>

## Overview

Vibe is a modern AI-powered code generation platform that transforms natural language descriptions into fully functional Next.js applications. Simply describe what you want to build, and Vibe's intelligent AI agent will generate complete, production-ready code with live preview capabilities.

## ✨ Key Features

### 🤖 AI-Powered Code Generation

- **Advanced AI Agent**: Powered by OpenAI GPT-4 for intelligent code generation
- **Natural Language Processing**: Describe your app idea in plain English
- **Production-Ready Code**: Generates complete, deployable Next.js applications
- **Context-Aware**: Maintains conversation history for iterative development

### 🎯 Pre-Built Templates

- **Netflix Clone**: Streaming platform with hero banners and movie sections
- **Admin Dashboard**: Complete dashboard with charts, tables, and analytics
- **Kanban Board**: Drag-and-drop task management with local state
- **File Manager**: Full-featured file explorer with CRUD operations
- **YouTube Clone**: Video platform with thumbnails and category sidebar
- **E-commerce Store**: Shopping platform with cart and product management
- **Airbnb Clone**: Property listings with filters and detailed views
- **Spotify Clone**: Music player with playlists and playback controls

### 🔧 Development Features

- **Live Preview**: Instant preview of generated applications in secure sandboxes
- **Code Explorer**: Browse and examine generated source code
- **File Management**: Complete file tree with syntax highlighting
- **Real-time Updates**: Live reload and instant feedback
- **Responsive Design**: Mobile-first, accessible UI components

### 👥 User Management

- **Authentication**: Secure user authentication via Clerk
- **Project Management**: Save, organize, and revisit your projects
- **Usage Tracking**: Credit-based system with free and pro tiers
- **Real-time Collaboration**: Message-based interaction with AI agent

### 🎨 Modern UI/UX

- **Dark Mode Support**: Beautiful dark and light themes
- **Responsive Design**: Works seamlessly on all devices
- **Accessible Components**: Built with accessibility in mind
- **Smooth Animations**: Polished interactions and transitions

## 🚀 Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI + Radix UI
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation

### Backend

- **API Layer**: tRPC for type-safe APIs
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Background Jobs**: Inngest for async processing
- **AI Integration**: OpenAI GPT-4 via Inngest Agent Kit

### Infrastructure

- **Code Execution**: E2B sandboxes for secure code execution
- **File Storage**: Database-backed file management
- **Rate Limiting**: Credit-based usage tracking
- **Deployment**: Vercel-ready configuration

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- OpenAI API key
- E2B API key
- Clerk authentication setup
- Inngest account

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/vibe.git
cd vibe
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Configure the following environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/vibe"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# AI Integration
OPENAI_API_KEY=your_openai_api_key

# E2B Sandboxes
E2B_API_KEY=your_e2b_api_key

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma migrate deploy
```

5. **Seed the database (optional)**

```bash
npm run db:seed
```

## 🔥 Development

### Start the development server

```bash
npm run dev
```

### Run background job processing

```bash
npx inngest-cli@latest dev
```

### Development Database Commands

Apply schema changes in development:

```bash
npx prisma migrate dev
```

Open Prisma Studio for database management:

```bash
npx prisma studio
```

Reset database (⚠️ This will delete all data):

```bash
npx prisma migrate reset
```

## 📁 Project Structure

```
vibe/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (home)/            # Home page and auth routes
│   │   ├── projects/          # Project-specific pages
│   │   └── api/               # API routes (tRPC, Inngest)
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Shadcn/UI components
│   │   └── ...               # Custom components
│   ├── modules/              # Feature-based modules
│   │   ├── home/             # Home page functionality
│   │   ├── projects/         # Project management
│   │   ├── messages/         # Messaging system
│   │   └── usage/            # Usage tracking
│   ├── lib/                  # Utility functions
│   ├── hooks/                # Custom React hooks
│   ├── inngest/              # Background job functions
│   └── trpc/                 # tRPC router and client setup
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── sandbox-templates/        # E2B sandbox configurations
```

## 🎯 Usage

### Creating Your First Project

1. **Sign up/Sign in** to your Vibe account
2. **Describe your app** in the main input field
3. **Choose a template** or write a custom description
4. **Submit** and watch the AI generate your application
5. **Preview** the live result in the embedded sandbox
6. **Explore** the generated code using the file explorer

### Example Prompts

- "Build a modern todo app with drag-and-drop functionality"
- "Create a social media dashboard with user posts and analytics"
- "Build a restaurant website with menu and online ordering"
- "Create a fitness tracker with workout logging and progress charts"

### Advanced Features

- **Iterative Development**: Continue conversations to refine your app
- **Code Exploration**: Browse generated files and understand the structure
- **Live Preview**: Test your application in real-time
- **Project Management**: Save and organize multiple projects

## 🔒 Authentication & Authorization

Vibe uses Clerk for authentication with the following features:

- **Multiple Sign-in Methods**: Email, social logins
- **User Management**: Profile management and preferences
- **Plan-based Access**: Free and Pro tier limitations
- **Secure Sessions**: JWT-based authentication

## 💳 Usage & Billing

### Free Tier

- 2 credits per month
- Basic AI generation
- Standard templates
- Community support

### Pro Tier

- 100 credits per month
- Priority generation
- Advanced templates
- Premium support

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**

```bash
npm run build
vercel --prod
```

2. **Configure environment variables** in Vercel dashboard
3. **Set up database** connection
4. **Configure webhooks** for Inngest

### Docker

```bash
docker build -t vibe .
docker run -p 3000:3000 vibe
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write comprehensive tests for new features
- Update documentation for any API changes
- Follow semantic commit messages

## 📝 API Documentation

### tRPC Routes

- `projects.*` - Project management
- `messages.*` - Messaging system
- `usage.*` - Usage tracking

### Inngest Functions

- `code-agent/run` - Main AI code generation
- Background processing for sandbox management

## 🐛 Troubleshooting

### Common Issues

**Database Connection Issues**

- Verify DATABASE_URL is correct
- Ensure PostgreSQL is running
- Check network connectivity

**AI Generation Failures**

- Verify OpenAI API key is valid
- Check API usage limits
- Ensure proper error handling

**Sandbox Issues**

- Verify E2B API key
- Check sandbox quotas
- Review security settings

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com) for GPT-4 AI capabilities
- [E2B](https://e2b.dev) for secure code execution sandboxes
- [Inngest](https://inngest.com) for reliable background job processing
- [Clerk](https://clerk.com) for authentication infrastructure
- [Vercel](https://vercel.com) for seamless deployment platform

## 📞 Support

- **Documentation**: [docs.vibe.dev](https://docs.vibe.dev)
- **Community**: [discord.gg/vibe](https://discord.gg/vibe)
- **Issues**: [GitHub Issues](https://github.com/your-username/vibe/issues)
- **Email**: support@vibe.dev

---

<div align="center">
  <p>Made with ❤️ by the Vibe team</p>
  <p>
    <a href="https://vibe.dev">Website</a> •
    <a href="https://twitter.com/vibe_dev">Twitter</a> •
    <a href="https://github.com/your-username/vibe">GitHub</a>
  </p>
</div>
