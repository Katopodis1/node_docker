FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
#  RUN npm install
COPY . /usr/src/app
#   RUN chmod +x //bin//sh/entrypoint.sh
#   CMD ["//bin//sh","./entrypoint.sh"]
  RUN ["chmod", "+x", "entrypoint.sh"]
#  CMD ["npm","start"]
#  ENTRYPOINT [ "./entrypoint.sh" ]
ENTRYPOINT ["//bin//sh","./entrypoint.sh"]