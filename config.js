//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
module.exports = {
  consumer_key = process.env.access_token;
  consumer_secret = process.env.access_token_secret;
  access_token = process.env.consumer_key;
  access_token_secret = process.env.consumer_secret;
}