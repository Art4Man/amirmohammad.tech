# Personal Portfolio Website

This is my personal portfolio website built with Next.js and Tailwind CSS.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- Git
- Docker (optional)

### Local Development

1. Clone the repository
```bash
git clone https://github.com/Art4Man/amirmohammad.tech.git
cd amirmohammad.tech
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Running with Docker

#### Using Docker Compose (Recommended)

1. Build and start the container:
```bash
docker-compose up --build
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. To stop the container:
```bash
docker-compose down
```

#### Using Docker directly

1. Build the image:
```bash
docker build -t portfolio .
```

2. Run the container:
```bash
docker run -p 3000:3000 portfolio
```

### Making Changes

1. Make your changes in the code
2. Test locally using `npm run dev`
3. Commit and push your changes:
```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

The website will automatically redeploy on Vercel when changes are pushed to the main branch.

## Project Structure

```
amirmohammad.tech/
├── app/
│   └── page.tsx      # Main portfolio component
├── public/           # Static files
├── Dockerfile        # Docker configuration
├── docker-compose.yml# Docker Compose configuration
├── .dockerignore     # Docker ignore file
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Lucide React](https://lucide.dev/) - For icons
- [Vercel](https://vercel.com/) - For deployment
- [Docker](https://www.docker.com/) - For containerization

## Deployment

The site is automatically deployed using Vercel when changes are pushed to the main branch.

## Development Features

- Hot-reload in development
- TypeScript support
- Docker containerization
- Automatic deployment
- Responsive design
- Modern UI components

## Notes

Created with ❤️ at 4:00 AM in the morning :)