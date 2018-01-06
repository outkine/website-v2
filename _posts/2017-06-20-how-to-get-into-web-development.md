---
title: how to get into web development
---

*WARNING: this guide assumes some programming knowledge. This should not be an endeavor for absolute beginners.*

*WARNING: this guide assumes that you are not running Windows, as it is generally very painful to use in any development environment. If you are currently using Windows, I'd recommend dual-booting it with [Linux Mint](https://linuxmint.com/). [Here](https://www.lifewire.com/dual-boot-windows-8-1-linux-mint-2202090) is a tutorial on how to do that.*

*NOTE: I always recommend books over other resources.*


If you're like me, you've probably procrastinated learning anything web-related because of how unordered and even 'artsy' it all seems - HTML isn't even a programming language! Why would a coder waste their time on it?

But whether we like it or not, the web is definitely the future. All of us use it on a daily basis and because of this it has transformed into a huge industry. We're going to have to learn it at some point, and at the speed at which things are unrolling at the moment, I think the sooner the better.

I'm a big believer in teaching yourself things, and this is a guide that can help you with that.

---

### SOME QUICK DEFINITIONS:

* *NodeJS (aka node)*: a desktop environment for Javascript, which means that it lets JS run outside of the browser. Node also happens to include some necessary server framework.
* *frontend*: how websites look and act. Includes HTML, CSS, and Javascript.
* *backend*: the servers that work behind many websites. There are many server frameworks out there, but the most common ones are NodeJS (Javascript), Ruby on Rails (Ruby), and Django (Python). This guide focuses on NodeJS.
* *stack*: developers refer to the 'stack' as all of the bits they use for web development. For example, a stack might include a frontend framework, a database framework, and a server framework.
* *ES6/ecmascript 6/ecmascript 2015*: these are alternate names for the version of Javascript that changed a lot of things in the language.

### FRONTEND GUIDE

#### BARE ESSENTIALS

1. Learn HTML/CSS with any online course like [CodeAcademy](https://www.codecademy.com/learn/learn-html-css). By the end, you should have a solid understanding of not only the syntax but how the web actually works. Be careful not to spend too much time on this step, as HTML/CSS is really the easy part of web development.

2. There are a bunch of alternate languages that compile into HTML/CSS/JS, mainly [Sass](http://sass-lang.com/guide) and [Pug](https://pugjs.org/api/getting-started.html). These used to be very popular but now with the rise of ES6 and web frameworks they are fairly obsolete.

3. ~~Learn~~ Acknowledge the existence of CSS frameworks like [Bootstrap](https://v4-alpha.getbootstrap.com/) that claim to simplify writing CSS. These too used to be extremely popular but now are very obsolete.

4. Learn good design principles. There are [many books](https://www.designforfounders.com/learn-design/) available online, but I especially love [this one](https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515). [This article](https://medium.freecodecamp.com/what-to-learn-in-2017-if-youre-a-frontend-developer-b6cfef46effd) also has a good section on web design. [This video](https://www.youtube.com/watch?v=ZbrzdMaumNk&t=3s) is also useful.

5. If you don’t know how Git/Github works, make an account and learn it through [this book](https://git-scm.com/book/en/v2) or [this interactive tutorial](https://try.github.io). Essentially Git is a way to synchronize your coding projects with the web and it is used everywhere in coding.

6. Practice! [Github Pages](https://pages.github.com/) provides a great way to host static websites for free.

#### THE REIGN OF JAVASCRIPT

1. Learn Javascript (the newest version is ES7, but ES6 is acceptable) with [this book](http://shop.oreilly.com/product/0636920035534.do). Chapter 2 is critical — make sure you install and familiarize yourself with all of the necessary environment software. It is critical that you understand Node and NPM, so research these even if you don't use the book.

2. Make sure that you know what the DOM is and how to manipulate it. Don't learn [jQuery](https://jquery.com/), which claims to simplify this. It used to be popular but the truth is that it doesn't add anything useful.

3. Many say that Javascript is a [terrible language](http://walkercoderanger.com/blog/2014/02/Javascript-minefield/), and so solutions like [Coffeescript](http://coffeescript.org/v2/) have come around, the truth is that ES6 actually fixed a lot of the broken parts of the language. Make sure that you understand [the difference](http://es6-features.org/) between 'old Javascript' and ES6. [Babel](babeljs.io/) is the tool that lets you transpile the new, sexy Javascript into old Javascript so that it works on old browsers.

4. This is the hard part: in order to make truly complex websites with many moving parts, you're going to have to learn a javascript framework. These frameworks simplify the role of altering the DOM and making your websites truly dynamic. The most common ones are [React](https://facebook.github.io/react/), [VueJS](https://vuejs.org/), and [Angular](https://angular.io/). From my experience React has been the clear winner due to many factors - in fact, I love it so much that I even wrote a [whole article](/blog/why-react) about why you should use it and how to learn it. React is changing web development forever, so I really recommend learning it.

5. (optional) Learn a content management system, which is a software that eliminates the repetitive task of creating similar pages (like blog posts in a blog). [Jekyll](https://jekyllrb.com/) is ideal because it is directly integrated with Github Pages, which means that there is no extra work required on the developer side.

### BACKEND GUIDE

#### BARE ESSENTIALS

1. Backend frameworks simplify the process of writing a server. I've personally found that Node is the best choice when writing a server because 1. many web developers already know it, 2. ES6 is a great language, and 3. the size of the community is unparalleled. The most common Node framework is [ExpressJS](https://expressjs.com/). You can learn it with a book such as [this](http://shop.oreilly.com/product/0636920032977.do), or through their website.

2. Practice by building a simple REST API, which is essentially a collection of endpoints that send  formerback data to the frontend. [Here](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4) is a good tutorial from Scotch.io.

3. (optional) Learn [Gulp](https://gulpjs.com/), which is the easiest way to write a Node server that uses Babel. [This](https://code.lengstorf.com/ggbw-slides/#/37) is a good article, and [this](https://github.com/jetmate/node-boilerplate) is my Node server boilerplate that has an example of a basic gulp setup.

4. Learn about websockets, which are a quick way for a server to communicate with a client. [SocketIO](https://socket.io/) is by far the best Node websocket library.

5. Learn about how to use databases. There are two types: SQL and no-SQL. SQL is the classic, tested type that only supports very flat data types but is used almost anywhere - the best SQL database is [PostgreSQL](https://www.postgresql.org/). No-SQL is the new kid on the block, but as such it is often criticized for not being as [secure or mature](https://www.youtube.com/watch?v=b2F-DItXtZs). [MongoDB](https://www.mongodb.com/) is the most common No-SQL database - but I would recommend going with PostgreSQL. You don't actually need to learn the SQL langauge, because Object-Relational Mappings or ORMs allow you to control databases from a programming language, like Node. [Sequalize](http://sequelizejs.com) is the most commmon Node ORM, and the best way to learn it is from the [Sequalize getting starting guide](http://docs.sequelizejs.com/manual/installation/getting-started).

6. Learn [GraphQL](http://graphql.org/), which is an alternate system of front-to-backend communication invented by Facebook - many consider it to be the next generation of REST. [How To Graphql](howtographql.com/) is an awesome website for learning it, and I recommend taking the [Graph.cool](graph.cool) route. Graphcool is a tool that essentially uses graphql to handle the backend for you, thus abstracting a lot of the hard work that often goes into writing a backend server.

#### LINUX SERVERS, OH MY

1. Learn how to use the command line, such as with [this tutorial from LifeHacker](https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything).

2. In order to write any real server, you need to learn how to create and manage servers, usually called VPS's (virtual private server). Linux is objectively the best OS for a server, and Ubuntu (versions 16 and higher) is a good choice for beginners. While you can go ahead and buy a server and set it up yourself, many services do that for you. [Digital Ocean](https://www.digitalocean.com/) and [Linode](linode.com) are the two best options. Linode offers a bit more bang for your buck, but I've found Digital Ocean to be more user-friendly. If you are serious about backend development, I'd recommend buying the lowest-tier server from either of these.

3. Before doing anything else, you need to be able to connect to your server from the command line. [This tutorial](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04) offers an overview of that.

4. Learn how to use VIM, as it comes preinstalled on all Linux servers and is very good at editing files. If you already have access to a server you can just type in `vimtutor`, but [this tutorial](http://www.openvim.com/) also works.

5. Learn the basic of NGINX, which is a software that controls the flow of request in and out of your server. This is a good time to install it too, and [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04) offers a good overview of that.

6. Learn about PM2, which is a software that manages running Node applications on the server. This is also a good time to install Node on your server, and [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04) covers all of this.

---

*If at this point you're confused by the difference between a library and a framework, I don't blame you. [Here's](http://www.programcreek.com/2011/09/what-is-the-difference-between-a-java-library-and-a-framework/) an article that clarifies this.
