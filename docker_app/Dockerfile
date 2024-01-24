FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash
RUN apt-get update
RUN apt-get install -y nodejs
#RUN apt-get install -y npm

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "main.js"]