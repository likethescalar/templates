FROM node:latest as build

WORKDIR /usr/svc
COPY  index.ts *.json ./src ./config ./
RUN yarn
RUN yarn build

FROM node:latest as runtime
COPY --from=build ./dist . 

CMD ["node". "./dist/index.js"]
