# EchoBotDocker
A simple dockerized version of EchoBot built with Node.js and Telegraf.

## Deployment

1. Create a `.env` file inside `./bot/` with the content (you can use `.env.example` as a model to your .env file):

```
BOT_TOKEN=123456789:abcdejkedjsahkdshdjkash
```
2. Build the docker image:

`docker build -t echo_bot_docker:latest .`

3. Create the container from the builded image:

`docker container create --name echo_bot_docker --net bridge --restart always echo_bot_docker:latest`