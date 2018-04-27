FROM alpine as base
RUN set -xe && \
  apk add --no-cache git nodejs openssh docker && \
  echo finished

FROM alpine
COPY --from=base / /
WORKDIR /web
VOLUME [ /web ]
EXPOSE 24

COPY . /web
RUN npm i --production

