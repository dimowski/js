define(['GenericAppender'], function (GenericAppender) {
    ConsoleAppender.prototype = GenericAppender.prototype;

    function ConsoleAppender() {
        this.log = function (level, msg) {
            console.log('%c[' + level.label + '] ' + '%c' + msg, 'color:' + level.color, 'color: black');
        }
    }
    return ConsoleAppender;
});
