/* eslint-disable */

// Set the date we're counting down to
// var countDownDate = new Date(Date.UTC(2017, 10, 22, 16, 0, 0)).getTime();
const { getPrice } = require('./price')
var setting = getPrice(new Date().getTime());

var countDownDate = setting.countDownDate;
// var value = setting.price;
// let  kickstarter = require('../data/kickstarter');
// var countDownDate = kickstarter.launchDate.getTime();
// var countDownDate = new Date(Date.UTC(2019, 4, 2, 13, 58, 20)).getTime();


function addPreZero(num){
    return ('000000000'+num).slice(-2);
}

function countdownTimer() {
    // Update the count down every 1 second
    const handle = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;


      // If the count down is finished, write some text, refresh the page to get kickstarter link
      if (distance < 0 && distance > -2000) {
        clearInterval(handle);
        document.getElementById('countdown-day').innerHTML = addPreZero(0);
        document.getElementById('countdown-hour').innerHTML = addPreZero(0);
        document.getElementById('countdown-minute').innerHTML = addPreZero(0);
        document.getElementById('countdown-second').innerHTML = addPreZero(0);
        document.location.reload();
      }


      // 如果倒计时到了, 那么
      if (distance < 0) {
         distance = 0;
      }

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("countdown-text").innerHTML = addPreZero(days) + "&nbsp;&nbsp;" + addPreZero(hours) + "&nbsp;&nbsp;"
      // + addPreZero(minutes) + "&nbsp;&nbsp;" + addPreZero(seconds);

      //if have multi countdown, change getElementById to getElementsByClassName, and using foreach
      document.getElementById('countdown-day').innerHTML = addPreZero(days);
      document.getElementById('countdown-hour').innerHTML = addPreZero(hours);
      document.getElementById('countdown-minute').innerHTML = addPreZero(minutes);
      document.getElementById('countdown-second').innerHTML = addPreZero(seconds);


    }, 1000);
    return handle;
}

module.exports = countdownTimer;
