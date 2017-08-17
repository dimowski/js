define(['GenericAppender'], function (GenericAppender) {
    WindowAppender.prototype = GenericAppender.prototype;

    function WindowAppender() {
        this.log = function (level, msg) {
            let field = document.getElementById('log-message');
            field.innerHTML += '[' + level.label + '] ' + msg + '<br>';
        }
    }
    return WindowAppender;
});
