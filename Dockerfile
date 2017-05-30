FROM alpine:3.3
MAINTAINER Alexis Tyler <xo@wvvw.me>

RUN apk --no-cache add git openssh-client \
    && apk --no-cache add --virtual devs tar curl

# Install Caddy Server, and All Middleware
RUN curl "https://caddyserver.com/download/linux/amd64?plugins=http.git" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy

# Remove build devs
RUN apk del devs

RUN mkdir -p /var/www/html

WORKDIR /var/www/html

ADD Caddyfile /etc/Caddyfile

EXPOSE 5000

CMD ["caddy", "--conf", "/etc/Caddyfile"]
