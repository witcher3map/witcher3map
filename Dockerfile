FROM node:0.12

MAINTAINER Sighne <laura.lebbah@gmail.com>

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@2.11.3

ENV HOME=/home/app
ENV PORT=8080

ADD . $HOME
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME
RUN npm install
RUN npm cache clean

RUN export PORT=$PORT
EXPOSE $PORT

CMD [ "npm", "start" ]
