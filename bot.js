var twit = require('twit');
var config = require('./config.js');

var T = new twit(config);
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//    console.log(`Our app is running on port ${ PORT }`);
//});


var stream = T.stream('statuses/filter', { track: ['@FreeSpeech4You fosscad'] });
stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {

    // Who sent the tweet?
    var name = tweet.user.screen_name;
	var nameID  = tweet.id_str;
	var quotedText = tweet.text;
	var split = quotedText.split(" ");
	var handles = [];
	
	//console.log(quotedText);
	for(var i = 0; i < split.length-1; i++){
		//console.log('split[i]: ' + split[i]);
		if(split[i].startsWith("@")){
			if(split[i] == '@freespeech4you'){
			
			}
			else{
				if(split[i] == '@FreeSpeech4You'){
					
				}else{
				handles.push(split[i]);
				}
			}
			//console.log('handles.tostring: ' + handles.toString());
		}
	}
	
    // What is the text?
    // var txt = tweet.text;
    // the status update or tweet ID in which we will reply
    

     // Get rid of the @ mention
    // var txt = txt.replace(/@FreeSpeech4You/g, "");

    // Start a reply back to the sender
	var stringify = handles.toString();
    var reply = "Ask, and you shall receive! @" + name + ' ' + '\nDownload A bump stock, an AR15, a 30 round mag - it\'s all here baby: https://github.com/maduce/fosscad-repo ' + stringify;
    var params             = {
                              status: reply,
                              in_reply_to_status_id: nameID
                             };

    T.post('statuses/update', params, function(err, data, response) {
      if (err !== undefined) {
        console.log(err);
      } else {
        console.log('Tweeted: ' + params.status);
      }
    })
};
