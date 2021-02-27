FROM node:alpine  
WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
# -----------------------------------

FROM nginx
# next line doesn't do anything in local env
# Elasticbeanstalk will map to this port in the container
EXPOSE 80 
# Copy only the static files that were built by npm run build
# from=0 is a reference to the FROM instruction at index 0 i.e.
# the first FROM instruction (the first container build in the multi-
# step build)
COPY --from=0 /app/build /usr/share/nginx/html 

# *** the nginx container's default run command starts nginx
