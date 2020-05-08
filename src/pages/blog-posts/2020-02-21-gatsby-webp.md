---
title:  "Adding WebP Support to your Gatsby Project"
date:   2020-02-21
updated:   2020-02-21
categories: react gatsby javascript
slug: "gatsby-webp"
---

WebP is a (relatively) new image format that (in most cases) allows you to ship smaller image files without a quality loss. Also, [Lighthouse](https://developers.google.com/web/tools/lighthouse) really likes them and gives you bonus points for using them. Which let's be honest is the main reason I set all this up.

Now, in your Gatsby project there are generally speaking two ways you can import images:

1) In your React code using a `require` or `import` statement. For these cases, Gatsby can take care of (most of) the heavy lifting for you

2) In your css, e.g. for background images. In this case the process is a bit more manual and cumbersome. It's not impossible though.


## Case 1: Using webp in your js Files

Gatsby provides the `gatsby-image` package that allows you to auto-generate webp and even traced svg versions of your images. Note that it's not a drop-in replacement for the `<img />` html element though. It has some tricky styling issues as a result of its magic that can be hard to get right.

For an in-depth explanation of the package, check out the [`gatsby-image` docs](https://www.gatsbyjs.org/packages/gatsby-image/). Here you'll just see a short example of the general syntax.

```js
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const query = graphql`
  query {
   file(relativePath: { eq: "img/sample_image.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

const ImageExample = () => (
  <Img fixed={useStaticQuery(query).file.childImageSharp.fixed} alt={name} />
);
```

## Case 2: Using WebP in your CSS

If you want to use webP images outside of the Gatsby ecosystem the setup is a bit more involved. You need to first create webp-versions of all images and then conditionally show the webp images on your site.


### 1) Converting your images to WebP

Google's Developer Page offers a [precompiled tool](https://developers.google.com/speed/webp/docs/precompiled) that lets you convert e.g. png to webp files with this simple command:
```sh
cwebp -q [QUALITY E.G. 90]  input.png -o output.webp
```

Just make sure to not delete the non-webp versions of the files. You need them for browsers that don't support webp (e.g. Safari and good old IE).


### 2) Detect webp compatibility

Now that you have two versions of each image you need to check the browser for webp compaitibility. To do that, you need to add a script to the `<head>` section of your page like so:
```html
<head>
  ...
  <script>'!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);'</script>
</head>
```

This script is a modified, lighter version of [the one written by Raoul Kramer](https://github.com/djpogo/webp-inline-support). The way it works is that it adds a `webp` class to the very root element (`<html>`) of your document.

Now that you have this extra class, you can use it in your css to conditionally use webp or the fallback image:
```css
#about {
  background: repeat url(../../data/img/bg_pattern.png);
}

.webp #about {
  background: repeat url(../../data/img/bg_pattern.webp);
}
```
Note that if JavaScript is turned off and/or the script fails to run, it falls back to non-webp support.
