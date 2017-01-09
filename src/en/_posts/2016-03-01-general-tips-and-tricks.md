---
layout: "post"
title: "General Tips and Tricks"
date: "2016-03-01 23:27"
modified_at: "2016 Apr 05"
tags: tip
---

_Personal collection of useful tips and tricks._

**Table of contents**

* TOC
{:toc}


Download chrome off-line installer
----------------------------------

Don't use Chrome main address, use this link to instead

```
https://www.google.com/chrome/browser/desktop/index.html?standalone=1
```

Notice the `standalone=1` as the end of the link.

You could also apply that variable to the link to download Chrome
Beta/Dev/Canary channels.


Fix Github pages updating problem
---------------------------------

If you working under a proxy, and your physical local timestamp is not match
with the proxy timestamp, Github page may not update your content, as it is
posts from future. You can fix it by adding `future: true` into your
`_config.yml`.

More detail about the option here: [Jekyll Configuration](https://jekyllrb.com/docs/configuration/)


Regex performance tips
----------------------

Related to this [problem](https://www.hackerrank.com/challenges/find-substring) on hackerrank. To match a subword:

```java
// This works,  but so slow. To many things to check.
Pattern compile = Pattern.compile("(?<=\\w+)" + st + "(?=\\w+)");

// This fast, but not correct.
Pattern compile = Pattern.compile("(?<![\\W])" + st + "(?![\\W])");

// This is the correct answer
Pattern compile = Pattern.compile("(?<=[^\\W])" + st + "(?=[^\\W])");
```
