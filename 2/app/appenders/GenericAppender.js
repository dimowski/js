define(function () {
    function GenericAppender(){
    }

    GenericAppender.prototype.log = function () {
        throw 'You must implement method log() in your Appender!'
    };
    return GenericAppender;
});
