FROM node:22 AS development-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM node:22 AS development-env
WORKDIR /app
COPY --from=development-dependencies-env /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

FROM node:22-alpine AS production-dependencies-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --omit=dev

FROM node:22 AS build-env
WORKDIR /app
COPY --from=development-dependencies-env /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:22-alpine AS production-env
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=production-dependencies-env /app/node_modules ./node_modules
COPY --from=build-env /app/build ./build
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]