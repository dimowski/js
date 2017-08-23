define(['GenericAppender'], function (GenericAppender) {
    WebApiAppender.prototype = GenericAppender.prototype;

    function WebApiAppender(method, uri) {
        this.log = function(level, msg) {
            let xhttp = new XMLHttpRequest();
            xhttp.open(method, uri, false);
            xhttp.setRequestHeader("Content-type", "application/text");
            xhttp.send('[' + level.label + '] ' + msg);
        }
    }
    return WebApiAppender;
});
