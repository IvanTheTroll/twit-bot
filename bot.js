var twit = require('twit');
var config = require('./config.js');

var T = new twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//    console.log(`Our app is running on port ${ PORT }`);
//});
console.log("bot has started");

var stream = T.stream('statuses/filter', { track: ['@FreeSpeech4You'] });
//var stream2 = T.stream('statuses/filter', { track: ['@FreeSpeech4You magazine'] });
stream.on('tweet', tweetEvent);
//stream2.on('tweet', tweetEvent2);

function tweetEvent(tweet) {


    // Who sent the tweet?
    var name = tweet.user.screen_name;
	var nameID  = tweet.id_str;
	var quotedText = tweet.text;
	var split = quotedText.split(" ");
	var handles = [];
	
	
	if(quotedText.includes('beep')){
		

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
    var reply = "@" + name + ' boop';
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
	}
	
	
	
	if(quotedText.includes('fosscad'||'Fosscad')){
		

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
	}
	if(quotedText.includes('magazine'||'Magazine')){
		

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
    var reply = "You want files to print a STANDARD CAPCAITY Magazine @" + name + ' ?' + '\nHere are the files: https://github.com/maduce/fosscad-repo/tree/master/Rifles/AR-15_30_Round_Magazine-Ivanthetroll \n Along with proof of the mag in action: https://www.bitchute.com/video/VBzL8nKCCDzM/' + stringify;
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
	}
	if(quotedText.includes('explosive'||'Explosive')){
		

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
    var reply = "@" + name + ' is rolling out the heavy stuff!' + '\nHere are a couple manuals on making explsoives: http://www.gunfreezone.net/wp-content/uploads/2016/03/improvised-munitions-handbook.pdf \n https://the-eye.eu/public/murdercube.com/Explosives%20%26%20Incendiaries/CIA%20Field%20Expedient%20Incendiaries.pdf \n How about flashbangs?: https://the-eye.eu/public/murdercube.com/Explosives%20%26%20Incendiaries/how_to_build_flash__and_stun_grenades_-_dmitrieff_george.pdf' + stringify;
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
	}
};