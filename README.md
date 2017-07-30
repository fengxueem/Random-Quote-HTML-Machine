# Random-Quote-HTML-Machine
A HTML webpage that quotes randomly.

## Intro
This is a practice project from [FCC](https://www.freecodecamp.org/challenges/build-a-random-quote-machine) written in HTML, CSS and JavaScript.
## How to solve CORS(Cross Origin Resource Sharing) problem?
https://quotesondesign.com/api-v4-0/ provides a free API to fetch some random quotes from https://quotesondesign.com/archives/. But when we deploy this API in local js file, we are facing one problem, the XHR object considers by default that accessing resources from other domain is a risky action and is usually not allowed. There is a open online project that uses backend program to fetch the quotes from the URL given above and resend its content to the our local client with this 
" Access-Control-Allow-Origin : "*" " key-value pair in the response header, which tells the XHR object that it's okay to access this resource.