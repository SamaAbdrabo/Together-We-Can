var speech;
var isSpeaking = false;

function initTextToSpeech(element) {
  var text = element.innerText;

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    return;
  }

  speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US';

  speech.onstart = function() {
    isSpeaking = true;
  };

  speech.onend = function() {
    isSpeaking = false;
  };

  window.speechSynthesis.speak(speech);
}

var textToReadElements = document.getElementsByClassName('text-to-read');
for (var i = 0; i < textToReadElements.length; i++) {
  textToReadElements[i].addEventListener('click', function() {
    initTextToSpeech(this);
  });
}
