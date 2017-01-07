---
layout: "post"
title: "Learn XText - Part 0 - Goals"
date: "2016-06-21 20:46"
modified_at: "2017 Jan 07"
tags: xtext learning
---

_The goals of mine when I start learning [XText](https://www.eclipse.org/xtext) for
my next tooling project_

**Update** As development on mentioned project stop, I move on,
and no longer work on Xtext. The reason: after first working prototype, customer
say that they need some time to evaluate it. Then they took the code, and never
come back. It's fine. I just feel sad that once again, I don't have chance to
learn in depth in a technology. After all, Xtext is nice to know.

----------------------------------------------------------------------
<br>

> Note: This post is the first of a series, and this is still a work in progress.

Why learning XText?
-------------------

My next company project is a tool for automated testing with hardware.
The testers will use that tool to write test script, then connect with
hardware, and execute that script. The tool should also be able to show
tests status and generate report in an easy to read format (propably an
XLS or HTML file). This lead to me think about making an custom DSL,
and IDE for it, which support syntax highlighting, checking; content
assistent...

After research on the Internet, I found
[XText](https://wwww.eclipse.org/xtext), an [Eclipse
Foundation](https://www.eclipse.org/) project. It is a framework to
build programming language, well integrated with Eclipse IDE. It's even
support for IntellJ IDEA and web base text editor.

XText seems perfect for my task, but there some problem I need to solve.

Problems
--------

### Lacking of document

On their site, I cannot found any document related to:

- Build a standalone jar compiler, or interpreter.

- Auto generate artifact in the background when changing language model.

### Not support for IntelliJ IDEA as the development tool.

IDEA is my favorite IDE. But some legacy code depend on Eclipse Platform (and
I don't have the option to rewrite those thigns). So I have to build and ship my
tool as an Eclipse RCP product. So, I guess that I have to stick with Eclipse
some times.

My plan is to use maven to organize project, use IDEA whenever I can, and only
use Eclipse when develop GUI stuff.


Goals
-----

Despite the problems listed above, I still want to try for myself. Hope that
I could accomplish the following goals.

- Learn the basic of Xtext.

- Build a standalone compiler/interpreter.

- Apply TDD.

- Use IntelliJ IDEA as development tool.

- Config multiple modules maven project, in which some modules is native jar,
  some modules will related to Eclipse RCP and XText.

I will update this post or write follow up post to share my experience in this
adventure.
