*WARNING: this guide assumes that you are not running Windows, as it is generally very painful to use in any development environment, ESPECIALLY IF YOU ARE DEVELOPING WITH C++. If you are currently using Windows, I'd recommend dual-booting it with [Linux Mint](https://linuxmint.com/). [Here](https://www.lifewire.com/dual-boot-windows-8-1-linux-mint-2202090) is a tutorial on how to do that.*

The number of language options that you have in Game Development is so large that it's worth covering them first, before we dive into the actual learning phase:

* OOP languages
  * C++
  * Java
  * C#
* Scripting languages
  * Lua
  * Python
  * Javascript

Object Oriented Programming (OOP) languages are faster, heavier, and more difficult. These are usually used in  professional game development studios and are necessary to do anything 3D - consequently, they are also often much more difficult to learn and use.

Scripting languages, on the other hand, are light and easy to use. These are ideal for 2D indie games, which is what you'll start out with. You'll learn Python first because of how friendly it is to beginners.

## The Python Years

1. Learn Python through an online book like [Python for Kids](https://nostarch.com/pythonforkids) or through an online course like [CodeAcademy](https://www.codecademy.com/learn/learn-python). I've found that the CodeAcademy course covers the basics pretty well* but if you need extra help I'd recommend getting a book.
2. Practice writing a Python application through something like a choose-your-own-adventure game or by using the problems available on [ProjectEuler](projecteuler.net)(more sites like this listed in Appendix 1). I've found that one of the most difficult parts of the programming journey is going from knowing all of the basics to actually being able to apply them - so make sure that you get enough practice to make this step.
3. If you don’t know how Git/Github works, make an account and learn it through [this book](https://git-scm.com/book/en/v2) or [this interactive tutorial](https://try.github.io). Essentially Git is a way to synchronize your coding projects with the web and it is used everywhere in coding.
4. Unfortunately, Python doesn't have good graphics built-in and so in order to learn an external library in order to code the visuals of a game. The most popular libraries are:
 * Tkinter: the 'default' Python graphics library, but vastly inferior to other choices
 * Pygame: this used to be my default for coding graphics but development has been discontinued and the community is pretty much dead
 * PySFML: SFML is fairly nice, but Pyglet seems more Pythonic
 * PySDL2: vastly inferior to Pyglet
 * *Pyglet*: the library of choice, it offers a Pythonic and simple approach to graphics.
 The only problem with Pyglet is the few number of tutorials available online. I recommend starting with the [official tutorial](https://pyglet.readthedocs.io/en/pyglet-1.3-maintenance/programming_guide/quickstart.html), checking out [this](https://nullpointertonowhere.com/2017/06/19/game-programming-using-python-pyglet-part-1/) and [this](http://steveasleep.com/pyglettutorial.html) tutorial, and then Googling for examples after that.
5. Write a simple game! A rule of thumb that I've found is to not try to invent some amazing new concept but instead to make a better version of a tried-and-tested game, such as a platformer. This will produce a better result and will save you a lot of hair-pulling.

## Adulthood

With all of its benefits, Python is a very bad choice for writing a real game - this is mostly due to it being one of the slowest programming languages (this speed-for-simplicity tradeoff is very common among scripting languages). Here are the four choices that you should take after mastering the basics of programming:

 * 3D games
   * If you want to make a 3D game quickly, learn C# and [Unity](https://unity3d.com/). Unity is what is called a game development engine, which means that it abstracts and handles many of the tasks that would usually slow down a game developer. C# is its main language, and I would recommend learning it prior to actually using Unity. [This free book](http://www.csharpcourse.com/) should do the job, but as always, most books will work. <br><br> After learning C# you need to get to know the actual engine. You can do this through their [video tutorials](https://unity3d.com/learn/tutorials) or very long [official documentation](https://docs.unity3d.com/2018.1/Documentation/Manual/UnityOverview.html). <br><br> The main reason that I don't recommend this route is because of how a graphical game engine like Unity works. Not only does its UI and different systems have a steep learning curve, but it forces you to work within its framework - this is why your development is sped up. However, this also means that you often have to make sacrifices just to get something like the built-in animation system to work. Developing all of those systems myself is what brings me the joy in programming, and when it is not only done for me but shoved down my throat programming starts losing its charm. But that's just my opinion.

   * If you still want a 3D game but desire a more customizable and arguably more enjoyable experience, I would recommend using the non-graphical C++ [Urho3D engine](https://urho3d.github.io/). C++ is definitely the hardest language on this list but it is also fastest and most widespread. In fact, many of the most complicated games are written in custom C++ game engines. Urho3D, the up-and-coming C++ engine, is different from Unity in the way that it does not require a GUI and is thus significantly more customizable/bare-bones. It gives you only the most essential tools to make a game, which is why I prefer it over the more rigid Unity. <br><br> Similar to the previous example, the first step in this route is to actually learn C++. Since it is such a difficult language you will actually need a book, and I recommend the [C++ Primer](https://www.amazon.com/Primer-5th-Stanley-B-Lippman/dp/0321714113). Be careful to get the C++ Primer and *not the C++ Primer Plus***, which is significantly lower rated by many C++ experts.<br><br>Perhaps the most painful part of C++ development is linking and compiling all of your code. The tool that Urho3D and almost everyone else use is called [CMake](https://cmake.org/) and again has no good tutorials for beginners. Thankfully, Urho3D comes with some pre-made Rake commands that automatically handle the compilation for you. If you use a full-featured IDE like [Clion](https://www.jetbrains.com/clion/) (free for students, my choice) or [Visual Studio](https://www.visualstudio.com/), that process will also be handled for you.<br><br>Urho3D also suffers from the problem of having almost no real tutorials and little documentation. This is the process I took to learn it: first I read all of the tutorials on their [website](https://urho3d.github.io/documentation/1.7/index.html) and [wiki](https://github.com/urho3d/Urho3D/wiki). The two sources seem to supplement each other, so I'd recommend first looking for a resource on their website and then on their wiki. After that, I read through and tried to understand several of the C++ samples that come with the Urho3D installation. If I still couldn't understand something I used the active forum or read through the source code. From my personal experience I'd recommend avoiding using Lua or Angelscript as a scripting language and instead writing everything in C++, which will avoid a lot of the complexity that comes with integrating a scripting language into a C++ program. Finally, [this](https://github.com/Jetmate/Urho3D-boilerplate/tree/master/boilerplate) is my very minimal Urho3D boilerplate.

 * 2D games
   * If you want a slightly more high-performance experience, I'd recommend going with C++ and [SFML](https://www.sfml-dev.org). Many of the disclaimers I mentioned in my Urho3D bullet point still apply: you are going to have to learn the hard and complicated C++, along with how to link the SFML library (something that the library does not provide an easy solution for). If you decide on it, the best way to learn SFML is through their [official tutorial](https://www.sfml-dev.org/tutorials/2.4/).

   * If you want to develop fast games and have fun at the same time, I'd recommend going with Lua and [Love2D](love2d.org). Unlike every other language mentioned thus far, Lua is a scripting language and thus it is significantly easier to learn and use (it is also very underrated). Not only that but it is also probably the most minimalist scripting language in existance, which allows for some very interesting possibilities, such as custom-coding objects and inheritance with metatables. I learned Lua through the [official book](https://www.lua.org/pil/), but Lua is so easy that any online tutorial will work, such as [this TutorialsPoint](https://www.tutorialspoint.com/lua/) or even the very brief [LearnXinYminutes on lua](https://learnxinyminutes.com/docs/lua/)***.<br><br>
   Not only is Lua a great language, but Love2D is probably the best game library I have ever used. It has 3 things going for it: 1) an amazing wiki/documentation/tutorials, 2) an amazing community, and 3) an amazing design. I'd recommend learning it from [the wiki](https://love2d.org/wiki/Main_Page) and catching up with other guides like [this one](https://love2d.org/wiki/Tutorial:Baseline_2D_Platformer) if you need the additional help. When in doubt, always look up the documentation of a specific function or module - this is something that Love2D has very good support of. Make sure to also use the super supportive [forums](https://love2d.org/forums/). Finally, [here](https://github.com/Jetmate/Ascension2) is the source code for the beginnings of a small game I wrote in Lua - use this as example code.<br><br>One final note about Lua: it does have several small issues, such as tables starting at 1, global assignment being the norm, etc. One solution to this problem is to use [Moonscript](https://moonscript.org/), which is a nicer version of Lua that compiles into the real language - sort of like Coffeescript and JS. Although I do think that you can make a stronger case for Moonscript than Coffeescript, I still find the inbetween of compiling from Moonscript to Lua a bit cumbersome, and so as of yet I have not used it in a game. Moonscript is still definitely worth checking out.

## Conclusion

After using Python to learn the basics of programming, you have a lot of options when it comes to writing public-worthy games. The four routes rated easiest-to-hardest are:

1. Lua and Love2D
2. C# and Unity
3. C++ and SFML
4. C++ and Urho3D

The C++ routes, especially Urho3D, are very difficult and you should probably skip them when you're still getting used to programming. In general, I would also prioritize making 2D games over 3D games, as 2D is usually a lot simpler and faster to produce an actual product. Because of this I would strongly recommend the Lua/Love2D route to anyone - it is so good that it could probably last you your whole development career.

---

*Even though CodeAcademy now bombards you with ads and makes it seem like it has no real content it can still teach you Python fairly well.

**This is a mistake I realized 600 pages into the Primer Plus book.

***[LearnXinYminutes](https://learnxinyminutes.com/) is a very cool website that you can use to get a taste of almost every programming language.
