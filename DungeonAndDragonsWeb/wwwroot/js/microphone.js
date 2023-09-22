let sensitivity = 10;
var listen = function (delegate) {
    var db = 4096; 
    audioCtx = new AudioContext;
    navigator.getUserMedia({ audio: true }, function (stream) {
        var source = audioCtx.createMediaStreamSource(stream);
        source.node = source.context.createScriptProcessor.call(source.context, db, 1);
        source.node.onaudioprocess = function (e) {

            let index = Math.min(Math.floor(Math.abs(100 * e.inputBuffer.getChannelData(0)[0] * sensitivity)), 99);
            let volume = index > 10 ? index : 0;
            delegate(volume)
        }
        source.connect(source.node);
        source.node.connect(source.context.destination);
    }, function () {});
}