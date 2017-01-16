---
layout: post
title: Docker Basics - Part 1 - What is a Docker Container?
date: 2017-01-12
permalink: /post/:year/:month/:day/:title.html
categories:
  - DevOps
description: It is not a Virtual Machine
---
Hello everybody!

Here is a series of posts about Docker.  
Let get started.  

Docker is about container.  
Container is a OS that run only one process. The container will shutdown if this process is finished.  

People may say container is a lightweight virtual machine.  
There is a lot of resemblance between then.  
They create a entirely OS apart of the host machine (This is not totally truth about Docker, we'll get there).  
You can access the machine using ssh.  
You can build uncountable container/virtual machines.  
You can build a network that enable two, or more, container/virtual machine work each other.  
There is one big difference between then.  

See, one virtual machine creates an entirely OS, with a new Kernel, packages, all required files to make a UNIX OS run.  
A Docker container borrow the host machine Kernel. All containers will run with the same kernel.  

<img class="pull-right" src="{{ "/assets/img/vm_vs_docker.jpg" | prepend: site.baseurl }}" />  

All processes started by the virtual machine are executed inside the virtual machine, the host machine is not affected.  
All processes started by the Docker container are handled by the host machine, this happen because of the shared Kernel.  

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

The next post I'll show you how run Containers. Cya!
