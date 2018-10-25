    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "fr-BE";
    recognition.onresult = function(event){
        var t = event.results[event.results.length-1][0].transcript ;
        console.log(t);
    }
    recognition.start();
    recognition.onend = function(event){
        recognition.start();
    };