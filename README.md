# BestWife™ Website

A beautiful React + Vite website showcasing the best wife features and services.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Docker

### Build and run with Docker Compose (recommended)

```bash
# Build and run the container
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop the container
docker-compose down
```

The application will be available at `http://localhost:8080`

### Build and run manually

```bash
# Build the Docker image
docker build -t wife-website .

# Run the container
docker run -p 8080:80 wife-website
```

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Docker** - Containerization
- **Nginx** - Production web server

## Features

- Responsive design
- Custom fonts and styling
- Circular text animations
- Premium wife service showcase
- Testimonials section
- Google Fonts integration

## Project Structure

```
src/
├── assets/          # Images and static assets
├── App.jsx          # Main application component
├── CircularText.jsx # Circular text animation component
├── main.jsx         # Application entry point
└── *.css            # Styling files
```

## Deployment

The application is containerized and ready for deployment on any platform that supports Docker:

- Docker Hub
- AWS ECS/Fargate
- Google Cloud Run
- Kubernetes
- Any VPS with Docker

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
