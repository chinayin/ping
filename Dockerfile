#
#
#--------------------------------------------------------------------------
#  ping @node16
#--------------------------------------------------------------------------
#

FROM chinayin/node:16 AS builder
RUN set -eux \
    ## install packages
    && install_packages tree \
    && mkdir /app
WORKDIR /app
COPY . /app
RUN set -eux \
    && yarn install --frozen-lockfile \
    && yarn build

FROM chinayin/nginx:1.24.0
RUN set -eux \
    && rm -f /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
