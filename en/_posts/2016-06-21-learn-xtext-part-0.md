---
layout: "post"
title: "Learn XText - Part 0 - Goals"
date: "2016-06-21 20:46"
modified_at: "2017 Jan 07"
tags: xtext learning
---

_**Deprecated** (see Update). The goals of mine when I start learning
[XText](https://www.eclipse.org/xtext) for my next tooling project_

Update
------

As development on mentioned project stop, I move on, and no longer work
on Xtext. The reason: after first working prototype, customer say that
they need some time to evaluate it. Then they took the code, and never
come back. It's fine. I just feel sad that once again, I don't have
chance to learn in depth in a technology. After all, Xtext is nice to
know.

Things I'd done within 4 months for that project:

- Read and do exercise 60% of the book
 [Implementing Domain-Specific Languages with Xtext and Xtend](https://www.packtpub.com/application-development/implementing-domain-specific-languages-xtext-and-xtend)
- Learn and use [Xtend](https://eclipse.org/xtend/) in production. It's a
  nice JVM functional language, but I would prefer Scala over it.

- Learn Scala, read 32/35 chapters in the book [Programming in Scala, 2nd
  Edition](http://booksites.artima.com/programming_in_scala_2ed). Honestly,
  I can't remember everything I learnt in that book. But, the way the authors
  teaching the language design, practice, and programming princicles is
  enlightened. That's a much read.

- Learn about Property-based testing and use
  [ScalaCheck](https://www.scalacheck.org/) for test the core library of my
  project. Actually, I was first read about Property-based testing, then
  ScalaCheck, and finally decided to give Scala a try.

----------------------------------------------------------------------
<br>

> Note: This post is the first of a series, and this is still a work in progress.

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
