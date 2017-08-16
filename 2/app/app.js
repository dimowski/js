require(['./logger/Logger'], function (Logger) {
    let logger = new Logger();

    /*** Build-in appenders ***/
    logger.addAppender(new logger.AlertWindowAppender());
    logger.addAppender(new logger.ConsoleAppender());
    logger.addAppender(new logger.WebApiAppender());
    logger.addAppender(new logger.WindowAppender());

    logger.debug('This is DEBUG level');
    logger.info('This is INFO level');
    logger.warn('This is WARN level');
    logger.error('This is ERROR level');

    throw new Error('TEST ERROR');
});
