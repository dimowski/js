requirejs.config({
    baseUrl: 'app/appenders',
    paths: {
        alertWindowAppender: 'AlertWindowAppender',
        consoleAppender: 'ConsoleAppender',
        webApiAppender: 'WebApiAppender',
        windowAppender: 'WindowAppender'
    }
});

define(['AlertWindowAppender', 'ConsoleAppender', 'WebApiAppender', 'WindowAppender', 'GenericAppender'],
    function (AlertWindowAppender, ConsoleAppender, WebApiAppender, WindowAppender, GenericAppender) {

        let levels = {
            DEBUG: {
                label: 'DEBUG',
                color: 'blue'
            },
            INFO: {
                label: 'INFO',
                color: 'green'
            },
            WARN: {
                label: 'WARN',
                color: 'orange'
            },
            ERROR: {
                label: 'ERROR',
                color: 'red'
            }
        };

        Logger.prototype = {
            /******* Build-in default appenders *******/
            AlertWindowAppender: AlertWindowAppender,
            ConsoleAppender: ConsoleAppender,
            WebApiAppender: WebApiAppender,
            WindowAppender: WindowAppender,

            appenders: [],

            debug: function (msg) {
                this.logMessage(levels.DEBUG, msg);
            },
            info: function (msg) {
                this.logMessage(levels.INFO, msg);
            },
            warn: function (msg) {
                this.logMessage(levels.WARN, msg);
            },
            error: function (msg) {
                this.logMessage(levels.ERROR, msg);
            },

            addAppender: function (appender) {
                try {
                    if (appender instanceof GenericAppender)
                        this.appenders.push(appender);
                    else throw new Error("Appender must extend GenericAppender!");
                } catch (e) {
                    this.handleException(e);
                }
            },

            logMessage: function logMessage(level, msg) {
                for (let i in this.appenders) {
                    try {
                        this.appenders[i].log(level, msg);
                    } catch (e) {
                        this.handleException(e)
                    }
                }
            },

            handleException: function (exc) {
                console.log("%c[Unhandled error]: " + exc, 'color: red');
            }
        };

        function Logger() {
            window.onerror = (errorMsg, url, lineNumber) => {
                this.logMessage(levels.ERROR, errorMsg + ' at ' + url + ':' + lineNumber);
                return true;
            }
        }

        return Logger;
    });
