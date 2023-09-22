let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
let workNow = false;
recognition.lang = 'uk-UA';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var speakRecognition = function (delegate) {
    if (workNow == false) {
        workNow = true;
        recognition.start();
    }
    recognition.onresult = function (event) {
        let speechResult = event.results[event.results.length - 1][0].transcript;
        delegate(speechResult);
    };
}

recognition.onspeechend = function () {
    setTimeout(() => {
        workNow = false;
    }, 1000)
};
recognition.onerror = function (event) {
    console.log('ERROR: ' + event.error);
    console.log('RESTART...');
    setTimeout(() => workNow = false, 1000)
};
