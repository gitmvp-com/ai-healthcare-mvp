# AI Healthcare MVP

An AI-powered healthcare platform built with Next.js that helps users track symptoms, manage medications, monitor mental wellness, and chat with an AI health assistant.

## Features

✅ **User Authentication** - Secure authentication with Clerk
✅ **User Profile & Health Data** - Manage personal health information
✅ **Symptom Tracking** - Log and monitor symptoms with intensity and frequency
✅ **Medication Management** - Track medications, dosage, and adherence
✅ **Mental Wellness Tracking** - Monitor mood, sleep, stress, and anxiety levels
✅ **AI Chat/Diagnostics** - Chat with Google Gemini AI for health insights
✅ **Payment Integration** - Stripe integration for subscriptions (ready to implement)
✅ **Database** - PostgreSQL with Prisma ORM
✅ **Modern UI** - Beautiful interface with Radix UI and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14.2.6 (App Router)
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **AI**: Google Generative AI (Gemini)
- **Payments**: Stripe
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database (local or cloud like Neon, Supabase)
- Clerk account
- Google AI API key
- Stripe account (for payments)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gitmvp-com/ai-healthcare-mvp.git
cd ai-healthcare-mvp
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Set up environment variables:

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - From Clerk dashboard
- `CLERK_SECRET_KEY` - From Clerk dashboard
- `NEXT_PUBLIC_GOOGLE_API_KEY` - Google AI API key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

4. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-healthcare-mvp/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   ├── dashboard/        # Dashboard pages
│   │   ├── sign-in/          # Authentication pages
│   │   ├── sign-up/
│   │   ├── layout.tsx
│   │   └── page.tsx          # Landing page
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── dashboard/        # Dashboard components
│   │   ├── symptoms/         # Symptom tracking
│   │   ├── medications/      # Medication management
│   │   ├── wellness/         # Mental wellness
│   │   └── ai-chat/          # AI chat interface
│   ├── lib/
│   │   ├── prisma.ts         # Prisma client
│   │   └── utils.ts          # Utility functions
│   └── middleware.ts         # Auth middleware
├── .env.example              # Environment variables template
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json
```

## Key Features Implementation

### Authentication

Using Clerk for secure authentication with automatic user creation in the database via webhooks.

### Database Schema

The Prisma schema includes:

- **User**: Core user profile and health data
- **Symptom**: Symptom tracking with intensity and frequency
- **Medication**: Medication management with adherence tracking
- **MentalWellness**: Mental health tracking (mood, sleep, stress)
- **Message**: AI chat conversation history

### AI Integration

Integrated Google Gemini AI for:

- Health question answering
- Symptom analysis
- General health guidance

### UI/UX

- Responsive design
- Dark mode support
- Smooth animations with Framer Motion
- Toast notifications with Sonner

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Database Setup

For production, use:

- [Neon](https://neon.tech) - Serverless PostgreSQL
- [Supabase](https://supabase.com) - Open source alternative
- [Railway](https://railway.app) - Simple PostgreSQL hosting

## Environment Variables

Make sure to set up these in your deployment platform:

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_GOOGLE_API_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues and questions, please open an issue on GitHub.

## Acknowledgments

This MVP is based on the [ai-healthcare](https://github.com/duggal1/ai-healthcare) project, simplified and optimized for quick deployment.
