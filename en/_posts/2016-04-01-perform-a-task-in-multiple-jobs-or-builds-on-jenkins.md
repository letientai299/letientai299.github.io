---
layout: "post"
title: "Perform a task in multiple jobs or builds on Jenkins"
date: "2016-04-01 16:13"
modified_at: "2016 Apr 01"
tags: jenkins tip
---

_Sometimes, during trying to setup a new Job on Jenkins, you will end up with a
lot of try and fail builds. When the setup is done, you properly want to clean
up the build history, delete all the dummy builds. This post show you how to do
it quickly._

* On Jenkins home page, navigate to Manage Jenkins >> Scrip Console
  (alternative, in the browser address, just type `<server-url>/script`). The UI
  will look some how similar like this[^jenkins_theme]:

  ![Jenkins Script Console image](/images/2016-04-01/jenkins-script-console.png)


* Now, insert the following code snippet. It's is [Groovy](http://www.groovy-lang.org/) script.

{% highlight groovy %}
Jenkins.instance.getItemByFullName("JobName")
  .builds.findAll { // Notice that this is a curly bracket
    it.number > 0   // Provide your filter conditions.
  }.each{
    println it      // Use it.delete() if you want to clean up your build history.
  }
{% endhighlight %}

* Now press `Ctrl-Enter` to execute the script. Jenkins will print the list of
  current builds for the queries job name. For example:
  ![Scripts run result image](/images/2016-04-01/script-result.png)


* Modify the script to suit your need. But careful! Jenknin won't ask you
  before delete anything. The best practice if always try `println` to know
  what will be affected by your command, then replace it with the actual
  command.

[^jenkins_theme]: If you wonder, we have customized our Jenkin by using [Simple
Theme plugin](https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin)
with the [Material theme](afonsof.com/jenkins-material-theme/).
