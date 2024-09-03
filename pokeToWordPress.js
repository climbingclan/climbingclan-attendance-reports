var apidomain="climbingclan.com"
var apiusername="ck_3f8cd172e7aed36533d434e04e8c0b2affe19075"
var apipassword="cs_817f3cd22ae28bc33fa716a6fdfd707188c0409b"




function pokeToWordpress(data, user_id) {

  //console.log("Wordpress " + data);

  var encodedAuthInformation = Utilities.base64Encode(apiusername + ":" + apipassword);
  var headers = { "Authorization": "Basic " + encodedAuthInformation };
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'headers': headers,  // Convert the JavaScript object to a JSON string.
    'payload': JSON.stringify(data)
  };
  apiurl = "https://www." + apidomain + "/wp-json/wc/v3/customers/" + user_id

  var response = UrlFetchApp.fetch(apiurl, options);
 // console.log(response);
}
