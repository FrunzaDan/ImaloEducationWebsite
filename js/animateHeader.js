var headersToAnimate = ["vorbească germană?", "se joace?", "se dezvolte?"];
var startReversAnimationAfter = 500; //ms

function animateHeaders(headerIndex) {
  var i = 0;
  if (headerIndex == headersToAnimate.length) {
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    var string = headersToAnimate[headerIndex][i];
    setTimeout(
      'document.getElementById("WelcomeTitle").innerHTML += \'' + string + "';",
      100 * i
    );
  }

  setTimeout(function () {
    reverseAnimation(headerIndex);
  }, 100 * i + startReversAnimationAfter);
}

function reverseAnimation(headerIndex) {
  var i = headersToAnimate[headerIndex].length - 1,
    delay = 0;
  for (; i >= 0; i--, delay++) {
    var string = headersToAnimate[headerIndex].substring(0, i);
    setTimeout(
      'document.getElementById("WelcomeTitle").innerHTML = \'' + string + "';",
      100 * delay
    );
  }

  setTimeout(function () {
    animateHeaders(headerIndex + 1);
  }, 100 * delay + startReversAnimationAfter);
}

//------------------------------------------------

animateHeaders(0);

//------------------------------------------------
