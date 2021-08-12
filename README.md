# UpdateWorld
post tweets using a publicly available api

## Environment variables

- ### Twitter API Configs
_TWITTER_APP_NAME_: your twitter api app name  
_TWITTER_CONSUMER_KEY_: twitter api consumer key  
_TWITTER_CONSUMER_SECRET_: twitter api consumer secret  
_TWITTER_ACCESS_TOKEN_KEY_: twitter api access token  
_TWITTER_ACCESS_TOKEN_SECRET_: twitter api access token secret    
 - ### API Configs  
_REQUEST_CONFIG_: request configuration matching to use with nodejs request library  
_TWEET_FIELD_: content field name in the response body

### Sample _REQUEST_CONFIG_
```
{"method":"GET","url":"your-api-url"}
```

## Build Docker
```
sudo docker build . -t tweet-1.0.0
```

## Execute
```
sudo sh ./cron.js
```
