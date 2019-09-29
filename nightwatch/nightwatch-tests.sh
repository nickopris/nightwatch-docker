#!/bin/bash

docker exec -it nightwatch npm test
docker exec -it nightwatch node generatereport.js
