---
title: Kusy
date: 2018-02-06
path: /projects/kusy
tags:
  - Web
  - App
  - React
tasks:
  - Development
  - Design
  - Performance Optimisation
technologies:
  - React
  - Redux
  - normalizr
  - Chart.js
  - Flow
pattern: argyle
background: rgb(139, 130, 126)
client: Die Medienmacher AG
team: 3
icon: icon.svg
hero: hero.png
teaser: "A CRM solution combined with information on deployed websites and apps helps the team ensure that all installations are kept up to date in order to conform with any service level agreements."
---

The name Kusy is derived from «Kunden System Übersicht» (or «Customer System Overview») and that's exactly what it does. With Kusy, the team can get an overview of all customers and which systems are running on their domains. Entered domains are scanned periodically for new updates, which are then displayed in various levels of detail.

After logging in, users are presented with a dashboard showing required system and extension updates. A timeline, along with colours based on state, makes it easy to see what needs to be done. The dashboard also includes some stats like distribution of systems, servers, or customers.

A domain overview lists all currently deployed sites, offering the most important information at a glance. This overview already shows indicators for urgent updates and expiring contracts. All domains can then be showed in greater detail, offering a complete history of system and extension updates as well as contracts. Auxilliary data, like customers, teams, and systems is managed through their own respective views.

# Things I've learned

This was the first time I used Redux to manage a more complex application. This quickly lead to some difficulties since you need to structure your data a little differently. The key concept was denormalisation, which was something I had to learn from scratch.

Another interesting aspect was making sure the whole app runs smoothly. Various features started out being rather slow so I had to apply lots of optimisations, especially in regards to preventing unnecessary rerenders.

# Technologies I've used

I built the front end using React and Redux. Managing the entire state with Redux took some time to figure out, but using normalizr made things much easier, especially since I could then adapt the application data layer and the API response to each other. Eventually, with custom schemas and reducers, I was able to sync up local and remote state very reliably.
