# Use Node.js official image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port (use the one your app runs on, e.g. 3000)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
