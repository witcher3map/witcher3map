FROM node:0.12

MAINTAINER Sighne <laura.lebbah@gmail.com>

RUN apt-get update && apt-get -y install unzip

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@2.11.3

ENV HOME=/home/app
ENV PORT=8080

# Download maps
ADD https://dl.dropboxusercontent.com/s/xwf2wyl1tokhnqy/maps_pngquant.zip $HOME

ADD . $HOME
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME
RUN npm install
RUN npm cache clean

RUN unzip $HOME/maps_pngquant.zip -d $HOME/dist/files

RUN export PORT=$PORT
EXPOSE $PORT

CMD [ "npm", "start" ]
