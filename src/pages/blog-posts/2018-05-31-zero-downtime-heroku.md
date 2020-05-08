---
title:	"Setting Up Zero-Downtime Deployment On Heroku"
date:	2018-05-31
updated:	2018-05-31
categories: heroku continuous-delivery devops
slug: "zero-downtime-deploy-heroku"
---

**! This does NOT work on the Free or Hobby tiers !**

A while back, I was working on an internal app at [ThoughtWorks](https://www.thoughtworks.com/), we decided that we wanted to switch to zero-downtime deployments, in keeping with the continuous delivery mentality we have at the company.

Zero-Downtime Deployment basically means that your web app is always available, even when you're currently pushing a new version to production. The way this works is by having two (or more) instances (servers, or in Heroku terms: dynos) running in parallel. When you push to production, one of the instances is taken offline and the new version is installed on it. Once that instance is up and running, the other instances is taken offline and the new version is installed. That way, the end user should not experience any downtime.

While the [Heroku Docs](https://devcenter.heroku.com/categories/reference) are generally very well written and thorough we (well, I, really) still managed to break our production server by missing a step which was not obvious from the docs. Which is why I'm writing this tutorial:

## 1) Turn On Session Stickiness
This was the error we ran into. Our app's authentication system works in a way that it checks against which session you are in and if your app changes sessions between two servers randomly then your users will constantly get error messages.

So before you do anything, you really should turn on session stickiness (Heroku calls it affinity). Even if you're not sure if you need it.

> `heroku feature: enable http-session-affinity -a <APP-NAME>`

## 2) Scale Horizontally
Now that you've made sure your users won't be locked out, it is time to add a second dyno. You need at least two, otherwise Heroku cannot switch between the two instances and zero-downtime deployment is impossible.

Be aware that adding a second dyno will also incur new costs. So depending on how much traffic your project gets (and how deep your pockets are), zero-downtime deployments might not be worth it.

> `heroku ps:scale web +1`

## 3) Turn On Preboot
All the preparations are done so it's time to turn on the actual zero-deployment, Preboot:

> `heroku feature:enable preboot -a <APP-NAME>`

## 4) Java Warmup
If, like us, you are deploying a Java app, you should probably enable warm up as well as otherwise the app might be a bit sluggish on the first call. I won't go into this though but instead refer you to the [Heroku Docs](https://devcenter.heroku.com/articles/warming-up-a-java-process).


And that is it. When you don't forget anything, zero-downtime can be achieved in a few minutes. If you want to learn more about the seperate steps, have a look at the Heroku docs:
1. [Session Stickiness](https://devcenter.heroku.com/articles/session-affinity)
2. [Horizontal Scaling](https://devcenter.heroku.com/articles/scaling)
3. [Preboot](https://devcenter.heroku.com/articles/preboot)
4. [Java Warmup](https://devcenter.heroku.com/articles/warming-up-a-java-process)
