---
layout: "post"
title: "Update on learning XText"
date: "2017-01-07 12:50:16"
modified_at: "2017 Jan 08"
tags: note
---


_Things I have learnt when working on a XText project.
Follow up post for [Learning XText - part 0]({% post_url en/2016-06-21-learn-xtext-part-0 %})_

Within 3 months, I:

- Read and do exercise 60% of the book
 [Implementing Domain-Specific Languages with Xtext and Xtend](https://www.packtpub.com/application-development/implementing-domain-specific-languages-xtext-and-xtend)

- Learn and use [Xtend](https://eclipse.org/xtend/) in production. It's a
  nice JVM functional language. But, for daily usage, I would prefer Scala
  over it. Xtend has too much magic.

- Learn Scala, read 32/35 chapters in the book [Programming in Scala, 2nd
  Edition](http://booksites.artima.com/programming_in_scala_2ed). Honestly,
  I can't remember everything I learnt in that book. But, the way the authors
  teaching the language design, practice, and programming principles is
  enlightened. That's a much read.

- Learn about Property-based testing and use
  [ScalaCheck](https://www.scalacheck.org/) for test the core library of my
  project. (Actually, I was first read about Property-based testing, then
  ScalaCheck, and finally decided to give Scala a try.)

- Setup maven site to generate javadoc, test report and even user guide,
  documentation. For the documentation, I used [Doxia](https://maven.apache.org/doxia/)
  with its [Markdown module](http://maven.apache.org/doxia/modules/index.html#Markdown).

- Setup and integrate [Jenkins](https://jenkins.io) with
  [Gerrit](https://www.gerritcodereview.com/) to build on any new commit,
  then generate maven site, and publish it in our internal server.

- Learn about [NSIS](https://sourceforge.net/projects/nsis/), and write script
  to build the installer for Window. I also configured maven `pom.xml` so that
  the installer could be generated on all machines I touched (custom's PC, my
  Ubuntu and the headless server).

- Use [java-simple-serial-connector](https://github.com/scream3r/java-simple-serial-connector)
  to replace the unmaintained, buggy, confusing APIs and hard to use
  [rxtx](http://rxtx.qbang.org/wiki/index.php/Main_Page).

- Develop a small library that fulfil a custom serial port communication
  protocol, base on customer's spec.

- Develop a command line utility base on above library to communicate
  with hardware, works perfectly on the hardware that fulfil protocol
  specification. (Yes, I've discover flaws on some implementation on
  hardware side during testing this CLI util)

- Develop IDE-like application based on [Eclipse Rich Client Platform](https://wiki.eclipse.org/Rich_Client_Platform)
  and Xtext with following features:
  - IDE features: syntax highlighting, auto-completion, outline, project
    management, template...
  - Built-in standard libraries to communicate via serial port. One is mentioned
    above, and one is extracted from anther project, and then modified to work
    with this application.
  - Execute the script and generate report in HTML or Markdown [^md_render_library] format.
  - Run on both Linux and Window.



<br>

[^md_render_library]: For that task, I have looking for a library that generate Markdown from Java object (see this [question](http://softwarerecs.stackexchange.com/questions/35087/java-libraray-to-produce-plain-text-markdown-or-asciidoc)). No such thing as the time.
