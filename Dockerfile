FROM node:lts-alpine as build

WORKDIR /usr/app
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

ENV NODE_ENV production
RUN npm  install --omit=dev


FROM node:lts-alpine As production

RUN mkdir -p ./.postgresql
RUN wget "https://storage.yandexcloud.net/cloud-certs/CA.pem" \
    --output-document ./.postgresql/root.crt
RUN chmod 0600 ./.postgresql/root.crt

COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/dist ./dist
COPY --from=build /usr/app/package.json ./

USER node

CMD ["npm", "run", "start:prod"]
