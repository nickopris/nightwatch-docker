# Nightwatch on Docker example

This is an example of using Nightwatch with Cucumber on Docker.

## Requirements
Docker, Docker Compose

## How to run

First time run

    docker-compose up -d
    docker exec -it nightwatch npm install
     
Then

    docker-compose up -d
    bash nightwatch-tests.sh
    
Nightwatch will run headless and report to terminal.

Check the `reports` directory for the latest cucumber report.

Built with inspiration from:
- https://stackoverflow.com/questions/49859869/nightwatch-in-docker-selenium-server-cant-find-chromedriver (for the dockerfile)
- https://github.com/nightwatchjs/nightwatch/issues/2196 (for headless)
- https://nightwatch.io
