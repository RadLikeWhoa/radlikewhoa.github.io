---
title: "Word Counts and Reading Time in Jekyll"
date: 2013-10-09
path: "/articles/jekyll-word-counts"
teaser: "Jekyll makes it easy to display a post's word count or its reading time using no JavaScript whatsoever."
---

Displaying a post's word count is rather common when creating a blog, but usually those techniques rely on JavaScript to work. The script reads the post's text, counts the words and displays the result accordingly. That was the way I did things on this blog first as well, but then I set out to find a better way.

<p data-block="info">If you just want to get to the snippets without the explanations, they're available in the paragraph <a href="#summing-it-up" title="Jump to this paragraph">Summing it up</a>.</p>

### Showing the word count

Luckily Jekyll provides a handy liquid filter called `number_of_words`. So displaying the actual word count is as simple as that:

``` liquid
{{ page.content | number_of_words }}
```

While this works just nicely it's not very solid. You might want to hide word counts on shorter posts, for example as they're of little value in such posts. This is a little more complex as you can not directly use Liquid filters in a conditional block.

### Variables in Liquid

In Liquid there are two ways to create variables. You can `{% assign %}` a variable and you can `{% capture %}` a variable. The difference might not be obvious, but it's simple once you get it.

Assigning a value to a variable means that you take any kind of data (e.g. a string, a number, a boolean) and Liquid knows that you want to access that exact data when you refer to this variable. An assigned variable is fixed, that means you can not use the value returned from other Liquid tags.

``` liquid
{% assign awesome = true %}

{% if awesome %}
  <p>Yay, awesome!</p>
{% endif %}
```

But what if you want to store a Liquid tags's return value in a variable? That's exactly what the `{% capture %}` block is for. Unlike assigned variables, captured variables can only hold strings — which will cause us some trouble later on. This is simply because Liquid tags return strings by default.

``` liquid
{% capture value %}
  {{ page.title | upcase }} from {{ page.date | date: "%b %d, %y" }}
{% endcapture %}
```

As you can see in the above example, you can capture any number of strings into a variable, be it strings returned from a Liquid tag or fixed strings.

### Making the word count conditional

Now that you know about `{% assign %}` and `{% capture %}` we can move on to store our word count in a variable. The question remains, do we assign the variable or do we capture it?

It should be clear by now that we'll have to capture the value as it's returned from a Liquid tag. That gives us something like this:

``` liquid
{% capture words %}
  {{ page.content | number_of_words }}
{% endcapture %}
```

Let's say we considered posts that are shorter than 250 words not worthy of getting the word count. A good example for this would be 'link list'-style post that consist of mostly a quote from the original article and a comment spanning a sentence or two. Ideally, this would be taken care of using a simple conditional block.

``` liquid
{% if words > 250 %}
  {{ words }}
{% endif %}
```

But you'll soon see that this won't work as intended as Jekyll will throw you this error an error saying you've attempted to compare a string (the words) with a number (250), which is entirely true, and also, sadly, entirely not possible. There is, however, a simple workaround.

``` liquid
{% capture words %}
  {{ page.content | number_of_words | minus: 250 }}
{% endcapture %}
{% unless words contains "-" %}
  {{ words | plus: 250 }}
{% endunless %}
```

You can use Liquid filters to substract your minimum number from the word count to see if it falls below 0. If it does it will contain a '-' at the beginning, which means the post is too short and won't get the word number displayed. If our variable doesn't contain a '-' we can simply add our minimum number back to the word count and display it. Quite simple, right?

### Customising the output

Now that we finally have our word number along with the conditional to hide it from short posts we can move on to make the output a bit nicer. You do this using Liquid filters like `append` or `prepend`. For a complete list of available filters you can check Shopify's [Liquid for Designers guide](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#standard-filters "Shopify's guide for Liquid").

``` liquid
{{ words | plus: 250 | append: " words" }}
```

The above snippet results in something like _'There are 250 words in this post'_. You can go crazy with filters, they offer lots of possibilities.

### Calculating the reading time

You might have noticed that I display an estimated reading time on this blog instead of just a word count. Personally, I just think this is a more useful guideline. Doing this is as easy as putting the `divided_by` filter into our final word count construct. The number to divide by is arbitrary, but 180 is the avarage number of words a person reads per minute.

``` liquid
{{ words | plus: 250 | divided_by: 180 | append: " minutes to read" }}
```

### Summing it up

Instead of making you pick up all the pieces scattered all over this post, here are the two snippets to display the word count and the reading time.

``` liquid
{% capture words %}
  {{ page.content | number_of_words | minus: 250 }}
{% endcapture %}
{% unless words contains "-" %}
  {{ words | plus: 250 | append: " words" }}
{% endunless %}
```

``` liquid
{% capture words %}
  {{ page.content | number_of_words | minus: 250 }}
{% endcapture %}
{% unless words contains "-" %}
  {{ words | plus: 250 | divided_by: 180 | append: " minute read" }}
{% endunless %}
```
