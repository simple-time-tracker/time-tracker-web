# Time tracker web

## Launching application

Start [time-tracker-api](https://github.com/dovydasvenckus/time-tracker-api) first
Then execute:

    npm install
    npm run


## Run using docker
Start time-tracker-api container:

    docker run -it --rm -e ACTIVE_PROFILES=dev -p 8080:8080 --name time-tracker-api dovydasvenckus/time-tracker
    
Visit [time-tracker-api](https://github.com/dovydasvenckus/time-tracker-api) for more info about api container customization.
    

Then start time-tracker-web docker container:

    docker run --rm -p 80:9000 -e API_URL='http://localhost:8080/api' --name time-tracker-web dovydasvenckus/time-tracker-web