---
title: FormsFX
date: 2017-04-17
path: /projects/formsfx
tags:
  - Desktop
  - Library
  - Java
tasks:
  - Development
  - Design
  - Documentation
  - Testing
  - API Design
technologies:
  - JavaFX
  - CSS
  - JUnit
pattern: argyle
background: rgb(12, 123, 77)
client: Dirk Lemmermann Software & Consulting
team: 2
end: 2017
repo: https://github.com/dlemmermann/formsfx
icon: icon.svg
hero: hero.png
teaser: "Creating forms in JavaFX is a tedious and very error-prone task. FormsFX is a framework which solves this problem. It enables the developer to create forms with ease and creates well-designed and user-friendly forms by default. FormsFX offers a fluent API that is very easy to understand and reduces the amount of coding needed. It creates all the necessary bindings for the properties and it just works."
---

I worked on FormsFX as my thesis project at the University of Applied Sciences. The goal was to create a framework that would solve the troubles in creating forms in Java business applications. [Dirk Lemmermann](https://dlsc.com), who is widely known in the JavaFX community, acted as our client and tasked us with coming up with a solution.

The central point of the project was creating an efficient and easy-to-use forms API. We were given a lot of freedom in finding our approach. We evaluated different ideas, but eventually settled on a code-based fluent API. This has the benefit of offering IDE support, like auto-completion and easier integration with models and any custom controls.

In the end, we included different field types and controls for basic value types (strings, numbers, etc.), while also offering options to extend the functionality with custom implementations.

# Things I've learned

To me, what was most interesting about this project was coming up with the API design. Landing on the fluent API was already challenging enough, but applying the fine-tuning to make the API feel natural was what really set this project appart.

Building the framework with extensibility in mind required us to think carefully about where we could place extension points and how we could structure the project in order to provide the ideal mix between sensible defaults and powerful extensibility. Learning how the framework would eventually be used and what end users want and expect from it was quite challenging yet very rewarding.

# Technologies I've used

FormsFX is, as the name applies, built on JavaFX. FX was created to be the standard UI library for Java, replacing the likes of Swing and AWT. At university we were introduced to the concepts of FX in some places, however, Swing was still the standard. This meant that we had some idea of how to develop apps using FX, but it was still fairly new to us.

Much of the code, like the components and the fluid API, was realised in Java. This proved to be a rather comfortable development process, especially with the help of FX, offering things like two-way bindings and value observers.

We used JUnit for testing, having used it many times throughout our time at university. The overwhelming popularity of JUnit as a testing framework speaks volumes and we had no issues whatsoever in our attempt at achieving a code coverage of more than 80%.

Other than the Java code, only some CSS code was used for styling purposes. CSS in FX is a superset of regular CSS, offering a variety of custom properties. Discovering these properties would often be a bit of a struggle as some of them were rather poorly documented.
