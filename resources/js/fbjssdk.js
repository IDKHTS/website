/* eslint-disable */
function main() {
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1639038506107669";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // https://stackoverflow.com/questions/8961567/render-like-button-after-ajax-call
  FB.XFBML.parse();
}

module.exports = main;
