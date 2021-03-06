---
title: Count!
date: 2017-02-01
path: /projects/count
tags:
  - Mobile
  - App
  - Swift
tasks:
  - Design
  - Development
  - Data Persistence
  - Multi-Target Apps
technologies:
  - Swift
  - Cocoa
  - Realm
pattern: zigzag
background: rgb(76, 173, 235)
repo: https://github.com/RadLikeWhoa/count
end: 2017
team: 2
teaser: "Counting something is easy, but humans tend to be forgetful. Thus we tally things on paper instead of trying to keep the numbers in our head. In the digital age, however, paper is outdated so tallying has to move to the app universe."
hero: hero.png
icon: icon.svg
---

Count! is an app that does exactly what the name says. It lets you keep track of a number of counters and what their current value is. You can increase the counter or you can decrease it again. That's it. And realistically, that's all you need from a counter. With an easy-to-use interface, the app lets you quickly manage your counters.

In order to make the experience even more pleasant, the app even provides a today extension, i.e. a widget that lets you access your latest counter from anywhere in the system.

<figure>
  <img src="widget.png">
  <figcaption data-marginalia="right">The app, along with its widget. This combination provides the ideal combination of quick access and overview.</figcaption>
</figure>

This app was created as a project for a workshop at the UAS. The goal was to create an application, either a native application on Android or iOS, or a hybrid application using Ionic. I decided to go with iOS in an attempt to further gain experience with the platform and related tools.

# Things I've learned

The app had a fairly narrow scope so there were not a whole lot of new things to learn. The most interesting aspects were of a technological nature, which will be detailed further down.

An interesting part of the project was the final presentation where we had 5 minutes to present our idea, the result, and interesting parts of the process. The short time frame, along with all the information we had to present, created an interesting challenge. In the end, the idea and the presentation worked out and so the app won the third prize.

# Technologies I've used

As part of the lecture, the app was required to provide data persistence of some sort. I was not overly familiar with the different options that were commonplace in the iOS ecosystem so I followed one of the recommendations of our lecturers and started implementing Realm.

Implementing the data persistence was quite difficult. Getting the data model correct and following all the recommended patterns took some time, but eventually it was worth it and working very well.

The next challenge came with creating the widget. Adding the widget and offering it to the user was not too hard, thanks to the excellent support from the Cocoa framework, but sharing the data between the app container and the extension was an unexpected hurdle. This took some time to learn about app groups and targets, but eventually I was able to solve the issue and learn lots of new things along the way.
