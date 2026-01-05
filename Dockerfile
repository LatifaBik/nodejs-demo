# Use the official Node.js LTS image as the base
FROM node:24

# Set the working directory inside the container
WORKDIR /app

# Copy the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the Node.js app
CMD ["node", "index.js"]
