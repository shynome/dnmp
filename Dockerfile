FROM alpine as base
RUN set -xe && \
  apk add --no-cache git nodejs openssh docker && \
  echo finished

FROM alpine
WORKDIR /web
VOLUME [ /web ]
EXPOSE 24
COPY --from=base / /

COPY . /web
RUN npm i --production

