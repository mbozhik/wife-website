#!/bin/bash

# Docker build and run script for BestWife website

set -e

echo "🐳 Building BestWife Docker image..."

# Build the Docker image
docker build -t wife-website .

echo "✅ Build complete!"

echo "🚀 Starting container on port 8080..."

# Run the container
docker run -d \
  --name wife-website-container \
  -p 8080:80 \
  wife-website

echo "🎉 BestWife website is now running!"
echo "🌐 Visit: http://localhost:8080"
echo ""
echo "To stop the container: docker stop wife-website-container"
echo "To remove the container: docker rm wife-website-container"
