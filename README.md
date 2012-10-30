SimpleLog
===========================

SimpleLog is for logging messages on mobile web browsers.

This module needs jQuery.
Also it works with jQuery Mobile.

You can easily use this module like following examples.


1. with only jQuery (see nojqm.html)
 slog("hello, world.", 1);
 slog("this is just for testing slog.");

2. with jQuery Mobile (see jqm.html)
 slog("hello, world.", 1);
 slog("this is just for testing slog.");


Yes, they are same. :)

First input parameter : log message which will be printed.
Second input parameter : log level. actually this string will be class. so, you can color them later or hide.