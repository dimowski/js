require(['./logger/Logger', './appenders/BrokenAppender'], function (Logger, BrokenAppender) {
    let logger = new Logger();

    /*** Build-in appenders ***/
    logger.addAppender(new logger.AlertWindowAppender());
    logger.addAppender(new logger.ConsoleAppender());
    logger.addAppender(new logger.WebApiAppender());
    logger.addAppender(new logger.WindowAppender());

    /*** Error in case of violating contract ***/
    logger.addAppender(new BrokenAppender()); // Appender without method log
    logger.addAppender({}); // Appender don't extend GenericAppender

    logger.debug('This is DEBUG message');
    logger.info('This is INFO message');
    logger.warn('This is WARN message');
    logger.error('This is ERROR message');

    /*** Handling exceptions ***/
    throw new Error('TEST ERROR');
});
