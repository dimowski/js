define(['GenericAppender'], function (GenericAppender) {
    BrokenAppender.prototype = GenericAppender.prototype;

    function BrokenAppender() {
    }
    return BrokenAppender;
});
