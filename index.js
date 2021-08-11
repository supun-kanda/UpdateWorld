const request = require('request');
const Twitter = require('twitter');

const requestConfig = JSON.parse(process.env.REQUEST_CONFIG);
const TWEET_FIELD = process.env.TWEET_FIELD;

// connect to the twitter client
const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


/**
 * Post tweet in your account designated by the client
 * @param {String} status message to be tweeted
 */
function tweetJoke(status) {
    client.post('statuses/update', { status }, function (error, result, response) {
        if (error) {
            console.error("Error whilte posting the tweet.", error);
        }
        console.log("Tweeting Successful");
    });
}

exports.handler = async (event) => {

    // make request to the public joke api
    request(requestConfig, (error, response, body) => {
        let jokeContent, tweet;

        if (!error) {
            try {
                jokeContent = JSON.parse(body);
            } catch (jsonError) {
                error = jsonError;
            }
        }

        if (error || !jokeContent[TWEET_FIELD]) {
            console.error("Error while getting the joke.", error);
            tweet = 'No jokes this time. The Joke API gave an error. Sorry y\'all'
        } else {
            tweet = jokeContent[TWEET_FIELD];
        }

        // post the tweet
        tweetJoke(tweet);
    });

    return null;
};
