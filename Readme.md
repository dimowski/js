# js
Second task is Client-Side logging library.
### Directories 
* **app** - Main directory
* **appenders** - Build-in appenders
* **logger** - Contains main script Logger.js

### Appenders
All appenders located in `app/appenders` directory. There are four build-in appenders: 
* **AlertWindowAppender** - logs into alert window
* **ConsoleAppender** -  logs into console
* **WebApiAppender** - logs into abstract WebApi endpoint (http method and uri must be passed to the constructor)
* **WindowAppender** - logs into window (by default it is html element with id='log-message')

Also this folder contains `GenericAppender` which is prototype for all appenders. In order to create custom
appender you must extend `GenericAppender` and override `log` function.

### Log levels
There are four log levels:
* **Debug**
* **Info**
* **Warning**
* **Error**

### Usage
Use requrejs to improt logging library as module. This repo contains app.js and index.html file as an example of usage.