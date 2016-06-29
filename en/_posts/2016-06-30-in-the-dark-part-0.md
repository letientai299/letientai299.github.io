---
layout: "post"
title: "Living in the dark - Part 0"
date: "2016-05-30 12:20"
modified_at: ""
tags: terminal tip
---

_Make my self a plan to working almost completely in the terminal_

**Table of contents**

* TOC
{:toc}

Current status
--------------

Since I get comfortable with [Vim](https://vim.org), I became want to do
almost every thing using vim-like key binding. For example:

- Browsing web with
[VimFx](https://addons.mozilla.org/en-US/firefox/addon/vimfx/) installed
- Manage files using [ranger](https://github.com/ranger/ranger)
- Play Manage music by [cmus](https://github.com/cmus/cmus/)
- Read PDF file with [zathura](https://pwmt.org/projects/zathura/)

But it's not enough for me. There a lot of things still need to be done
using the mouse and GUI tool:

- Browsing Youtube.
- Checking and reply email.
- Extract only a part of a zip file.
- ...


Goal
----

- Minimize the need of using GUI application.
- Get comfortable with seeing the terminal all day.
- Become a hacker (just kidding, hacking is not my interesting for now)


Why?
----

Many reasons:

- It's usually faster to use the keyboard than the mouse because you always know
  where your key is.
- Text-based application renders much faster the requires less resources than
  the GUI alternatives. Of course, it's not as pretty as GUI application, but
  who care? As a developer, I mainly work with text.
- In some contexts, you can only use terminal applications (work over
  SSH, use some git advanced command or maybe just fix your broken OS).

Last but not least, I love the feeling that my fingers are dancing on the keyboard.


The list
--------

Basically, I want to replace my current application with their
text-based alternatives. For each category, there are a lot of choices.
So, it's will take time to try and settle down the one to use. In this
post, I'll list the top interesting tool, and then, after trying all of
them, I will show you my setup for daily usage in subsequent posts.

Here are some criteria for my final decision:

- Fast and lightweight
- Extensible
- Customizable
- Work well inside tmux
- Cross platform (although I'm mostly using Linux)
- Vim-like key binding is a plus


### Web browser

- w3m
- lynx
- elinks
- links(2)

### File manager

- Ranger

### Mail client

- Mutt

### Todo manager

- Vim with vimwiki.
- Task warrior (show number of task on the tmux status bar?)

### Messaging client.

- https://github.com/irssi/irssi (twitter, viber?)
- finch

### Music player and library manager

- cmus + lyvi


### Archive manager

- tar (very hard to remember all of the options, and how do I extract a single
  file.)
