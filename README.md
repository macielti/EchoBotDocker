# EchoBotDocker
A simple dockerized version of EchoBot built with Node.js and Telegraf.

## Deployment

#### REQUIREMENTS

You need to have docker and docker-compose instaled, this are the requirements. They need to be in the most latest version, download using the convenience script and use the test version. It's nesvessary because of the docker compose file version.

If you need to set a different subnet IP address for your docker0 interface, here you can see how to do it https://dev.to/macielti/custom-subnet-ip-for-docker0-interface-1jod.

---

1. Create a `.env` file inside `./bot/` with the content (you can use `.env.example` as a model to your .env file):

```
BOT_TOKEN=123456789:abcdejkedjsahkdshdjkash
```
2. Build the docker image:

`docker build -t echo_bot_docker:latest .`

3. Create the container from the builded image:

`docker container create --name echo_bot_docker --net bridge --restart always echo_bot_docker:latest`