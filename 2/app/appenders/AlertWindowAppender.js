define(['GenericAppender'], function (GenericAppender) {
    AlertWindowAppender.prototype = GenericAppender.prototype;

    function AlertWindowAppender() {
        this.log = function (level, msg) {
            alert('[' + level.label + '] ' + msg);
        }
    }
    return AlertWindowAppender;
});
