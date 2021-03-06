---
title: PONG?!
date: 2017-06-01
path: /projects/pong
tags:
  - Web
  - Game
  - React
tasks:
  - Game Design
  - Game Development
  - Mechanics
  - Idea Finding
technologies:
  - JavaScript
  - CSS
  - React
  - Unity
pattern: blueprint
background: rgb(0, 0, 0)
repo: https://github.com/RadLikeWhoa/pong
link: https://sacha.me/pong/
end: 2017
team: 2
teaser: "In a game all about out-bluffing the opponent, players face each other in a new take on Pong. This simple yet addictive game focuses on the interaction between two players and explores how well they know each other."
hero: hero.png
icon: icon.svg
---

PONG?! was started as a project for the Game Design and Development course at the UAS. In our team, we quickly came up with an idea for a jump'n'run game, but due to time constraints and the team being reduced to two people, the original idea ended up being too ambitious and unrealistic for the given time frame. During a workshop conducted as part of the lecture, we were brainstorming some ideas and I decided to combine some of the ideas for our own project.

Aesthetically, the game uses the familiar 8-bit style with purely black and white graphics, very much resembling a classic iteration of Pong. On top of that, we have our own mechanics. In a round of the game, the first players selects a target. They decide if they shoot for the top or the bottom half of the field. Then they select a claim which the opponent will see. This is where players have the chance to bluff as they can state a claim that is different from their actual target. It is then up to the other player to defend one half of the field. At this point, a little bit of communication helps a lot as it gives the defender an opportunity to get an idea of the opponent's strategy.

Unlike the classic arcade game, PONG?! can be a rather slow game. Players are encouraged to seek communication with their rivals in order to have a better chance at discovering the bluff. This creates interesting situations which can vary greatly if you are playing against someone you know very well or against someone you've only just met.

# Things I've learned

This project was mainly an exercise in idea finding. I've mentioned it earlier, but since this was not our original idea we had to get creative and figure out an idea that could be realised within the given time frame. I ended up combining and adapting different ideas that worked best together.

<figure>
  <img src="result.png">
  <figcaption data-marginalia="right">Rewards are based on some conditions, like bluffing, scoring or using a double-up.</figcaption>
</figure>

Developing the mechanics and deciding on the reward distribution was one of the more complex tasks of the project. This required a general understanding of how mechanics are created and ways to balance the game, all of which was taught throughout the lecture.

As part of our original idea I'd had the chance to learn about developing a game in Unity, which was definitely an interesting experience that brought with it some new challenges. All the concepts and terminologies were rather confusing at first, but they certainly helped get a better understanding of the game and its inner workings.

# Technologies I've used

Over the course of the lecture, we worked with Unity on a number of demo projects. While this was a generally pleasant experience, the very strict time budget didn't allow us to lose any time on learning new things and working around related issues. Due to this, we decided to realise the game in React, a technology we were already familiar with.

All of this worked surprisingly well. The most complex topic was managing the state, especially when collecting all the conditions that make up a single round of the game. We need to collect the first player's choice, their claim, and the other player's defense. Then we can calculate the result and display a short animation along with the result. This is done through a central Game class, which controls most of the state.

The animations in the game are hardcoded and don't rely on any sort of physics engine. In the long run, this probably would have been easier, but for a simple game like this, creating a handful of different animations worked out after all.
