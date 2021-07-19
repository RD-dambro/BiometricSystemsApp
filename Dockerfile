FROM node:14 as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# ENV API_KEY="remote"

RUN npm install
# RUN npm install -g @angular/cli@latest
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# # RUN ng build --configuration production --optimization=false
# # CMD [ "npm", "start" ]
# CMD ng serve --host 0.0.0.0
# EXPOSE 4200

RUN npm run build

FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/dist/angapp /usr/share/nginx/html

# Expose port 80
EXPOSE 80
