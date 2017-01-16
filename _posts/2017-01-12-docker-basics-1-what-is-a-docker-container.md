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
In this first post I'll explain to you how Docker works.  
Let get started.  

Docker is about container.  
Container is a OS that run only one process. The container will shutdown if this process is finished.  

People may say container is a lightweight virtual machine.  
Actually, there is a lot of resemblance between then.  
They create a entirely OS apart of the host machine (This is not totally truth about Docker, we'll get there).  
You can access the machine using ssh.  
You can build uncountable container/virtual machines (depends on host machine resources).  
You can build a network that enables two, or more, container/virtual machine working each other.  
There is one big difference between then.  

See, a virtual machine creates an entirely OS, with a new Kernel, packages, all required files that makes a UNIX OS run.  
A Docker container borrow the host machine Kernel. All containers will run with the same kernel.  
Take a look at the picture.  

<img class="pull-right" src="{{ "/assets/img/vm_vs_docker.jpg" | prepend: site.baseurl }}" />  

Another thing, all processes started by the virtual machine are executed inside the virtual machine, the host machine is not affected.  
All processes started by the Docker container are handled by the host machine. This happen because of the shared Kernel!  

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
