FROM node:18-slim

WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

#RUN apt-get update -y && apt-get install --no-install-recommends -y wget
#RUN npm install

RUN npm install

COPY . /app

ENTRYPOINT ["npm", "start"]
#CMD ["npm", "run", "start"]