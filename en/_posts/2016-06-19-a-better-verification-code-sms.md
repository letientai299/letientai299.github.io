---
layout: "post"
title: "A better verification code SMS message"
date: "2016-06-19 12:42"
modified_at:
tags: ux
---

_"6969 is your Uber code..."_ is a better SMS than _"Enter the following code in the
app..."_

Recently, I have registered a new Uber account, with my email and mobile
number. Of course, they need to verify that number. The usual way is
send an verification code via SMS to the mobile phone.

There are just something I notice about their SMS message. Here is it
(the real code has been changed):

    Enter the following code in the app, and you're all set! Code: 6969

There are several UX problems with the message:

The most important information is at very end of the message
------------------------------------------------------------

Android notification only be able to show a part of the message, and
that doesn't contains the code. I was inside Uber app as the time.
Therefor, I have to go into the Message app to read the full message,
and then go back into Uber again to process next step.

If the code is at the beginning, I would be able to pull-down
notification, get it, and enter it into Uber app. Faster. Easier.


Lack of useful information
--------------------------

The first lengthy sentence in the message is a nice welcome, but not
what I need as the time I read it. Also, which app you are saying? What
if during waiting, I also try to active other apps using my number, and
they also send me code via SMS?


Suggestion
----------

How about the following message:

    6969 is your Uber activation code. Thanks for using our app.

Well, I'm not native English speaker. I just want to make clear the concept:

- Important thing go first.
- Keep it short and simple.

**Disclaimer**: I'm not an UX expert, just a very lazy programmer.
