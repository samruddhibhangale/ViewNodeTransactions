FROM alpine:latest
RUN apk add --no-cache nodejs npm
RUN apt-get install -y mysql-server
RUN mysql -u root -p block_transactions < dbexport.sql 
WORKDIR /home/Ethereum/NodeTransactions
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1919
CMD [ "node", "app.js" ]
