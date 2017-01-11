---
layout: "post"
title: "Learn XText - Part 0 - Goals"
date: "2016-06-21 20:46"
modified_at: "2017 Jan 12"
tags: xtext learning
---

_The goals of mine when I start learning
[XText](https://www.eclipse.org/xtext) for my next tooling project.
See the follow up post [Update on learning Xtext][update_on_xtext]
for more detail about what I've learnt during working on that project._

Update
------

As development on mentioned project stop, I move on, and no longer work
on Xtext. The end user is not ready yet to give up on Excel test spec
and using a scripting language instead.

----------------------------------------------------------------------
<br>


**Table of contents**

* TOC
{:toc}


Why learning Xtext?
-------------------

My next company project is a tool for automated testing with hardware.
The testers will use that tool to write test script, then connect with
hardware, and execute that script. The tool should also be able to show
tests status and generate report in an easy to read format (probably an
XLS or HTML file). This lead to me think about making an custom DSL,
and IDE for it, which support syntax highlighting, checking; content
assistant...

After research on the Internet, I found
[Xtext](https://wwww.eclipse.org/xtext), an [Eclipse
Foundation](https://www.eclipse.org/) project. It is a framework to
build programming language, well integrated with Eclipse IDE. It's even
support for IntelliJ IDEA and web base text editor.

Xtext seems perfect for my task, but there some problem I need to solve.

Problems
--------

### Lacking of document

On their site, I cannot found any document related to:

- Build a standalone jar compiler, or interpreter.

- Auto generate artifact in the background when changing language model.

### Not support for IntelliJ IDEA as the development tool.

IDEA is my favorite IDE. But some legacy code depend on Eclipse Platform (and
I don't have the option to rewrite those things). So I have to build and ship my
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
  some modules will related to Eclipse RCP and Xtext.

I will update this post or write follow up post to share my experience in this
adventure.



[update_on_xtext]: {% post_url en/2017-01-07-Update-on-learning-XText %}
