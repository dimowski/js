define(['GenericAppender'], function (GenericAppender) {
    WebApiAppender.prototype = GenericAppender;

    function WebApiAppender() {
        this.log = function(level, msg) {
            let xhttp = new XMLHttpRequest();
            xhttp.open('POST', 'http://localhost:8080/test/log', false);
            xhttp.setRequestHeader("Content-type", "application/text");
            xhttp.send('[' + level.label + '] ' + msg);
        }
    }
    return WebApiAppender;
});
