FROM node:20
WORKDIR /opt/frames
COPY . .
EXPOSE 3000
CMD [ "sleep", "infinity" ]