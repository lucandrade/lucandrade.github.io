---
layout: post
title: "Docker Basics - #1 What is a Docker Container?"
date: 2017-01-12
permalink: /post/:year/:month/:day/:title.html
categories:
  - DevOps
description: It is not a Virtual Machine
---
Hello everybody!

I'm starting a new series about Docker.  
In this first post I'll explain how Docker works.  
Let's get started.  

Docker is about container.  
Container is an OS that runs only one process. The container will shutdown if the process is finished.  

People may say container is a lightweight virtual machine.  
In fact, there is a lot of resemblance between them.  
They create new OS inside the host machine (This is not totally true about Docker, we'll get there).  
You can access the machine using ssh.  
You can create as many container/virtual machines as you want (it depends on host machine resources).  
You can build a network that enables two, or more, container/virtual machine to work with each other.  
However, there is one big difference between them.  

See, a virtual machine creates an entirely OS, with a new Kernel, packages, all required files that makes a UNIX OS run.  
A Docker container borrows the host machine Kernel. All containers will run with the same kernel.  
Take a look at the picture.  

<img class="pull-right" src="{{ "/assets/img/vm_vs_docker.jpg" | prepend: site.baseurl }}" />  

Another thing, all processes started by the virtual machine are executed inside the virtual machine, the host machine is not affected.  
Meanwhile, all processes started by the Docker container are handled by the host machine.  

```
# Running processes on Host for a VM  
$ pstree VM  

-+= /VirtualBox.app  
|--= coreos-vagrant  
```

```
# Running processes on Host for a Docker Engine
$ pstree docker

-+= /docker
|--= /bin/sh
|--= node server.js
|--= go run app
|--= ruby server.rb
...
```

Next, [{{page.next.title}}]({{page.next.url}}).
