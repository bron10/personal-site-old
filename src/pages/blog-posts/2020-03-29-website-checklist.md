---
title: Website Launch Checklist
date: 2020-03-29
categories: web web-dev
slug: "website-checklist"
---

## General / Code Quality
* [ ] follow the [project structure guidelines]()
* [ ] serve all images in [next-gen formats](https://developers.google.com/web/tools/lighthouse/audits/webp)
* [ ] use eslint, prettier and stylelint with the default config
* [ ] run all code quality checkers (e.g. [Code Climate](https://codeclimate.com/), [Codacy](https://www.codacy.com/))
* [ ] run [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## A11Y
* [ ] use more semantic html (main, header, section, aside, ...)
* [ ] check for noscript performance
* [ ] run [axe audit](https://www.deque.com/axe/) and/or [Pa11y](https://pa11y.org/)

## Features / SEO
* [ ] add a sitemap
* [ ] add a robots.txt
* [ ] do SEO including setting all metadata
* [ ] have a CSP
* [ ] set a favicon

## For Blog-Style Sites
* [ ] set up comments
* [ ] add an rss feed

## Before Deploy
* [ ] set up [Dependabot](https://dependabot.com/)
* [ ] set up domain
* [ ] hook up github to host

## Just After Deploy
* [ ] send new blog posts out to newsletter

