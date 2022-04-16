FROM cypress/included:9.4.1
RUN mkdir /cypress-docker-test
WORKDIR /cypress-docker-test
COPY ./package.json ./package.json 
COPY package-lock.json  ./package-lock.json 
COPY ./cypress.json ./cypress.json
COPY ./cypress ./cypress
RUN npm install uuid@latest
ENTRYPOINT ["npm", "run"]