---
title:	"How to Write and Use a Simple Custom Element in 5 Minutes"
date:	2018-06-30
updated:	2018-06-30
categories: web-development javascript custom-elements
slug: "custom-elements"
---

__NOTE: I have written a small sample application with vanilla JS which you can find [here](https://github.com/SophieAu/web-components-example).__ It doesn't work in Firefox or IE11 though due to missing Web Component support in those browsers.

While researching a way to build a micro frontend that works with any javascript framework under the stars, I stumbled upon Web Components, more specifically HTML Imports and Custom Elements and fell in love. As a part-time bare metal afficionado, something that can be done with little hassle in pure html and vanilla js is like crack. And since Custom Elements are a W3C spec, it's extremely future proof which was a really nice bonus for the project.

## Creating a simple Custom Element

A custom element is not very different from a React component. It might also be similar to whatever Vue or Angular have but I have no experience with either framework so I will only use React for comparison.

Custom Element:
```js
class VanillaJSWebComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<button type="button">I am a web component written in Vanilla JS</button>`;
    }
}
window.customElements.define('wc-vanilla', VanillaJSWebComponent);
```

React:
```js
class ReactComp extends React.Component {
    render() {
        return (
        <button type="button">I am a web component written in React</button>
        )
    }
}
ReactDOM.render(<ReactComp />, document.getElementById('root'));
```

Both extend their respective base classes and you need to bind them to the DOM. There is one big difference though. In React, you bind the component directly to the spot in the DOM where you want it to show up. With Custom Elements you need to put in a bit more work. With `window.customElements.define()` you only declare that what you've written is a Custom Elements that can be used. For the Custom Element to show up, you need to directly reference it on the site you'll be using it on. In React this happens (more or less) implicitly with the `ReactDOM.render()` command.

## Adding a Custom Element to Your Site

Actually adding the Custom Element to a site involves two steps:

In the `<head>` tag of your html file, add

```html
<link href="/path/to/element" rel="import">
```

and then just call the Custom Element where you want it in the `<body>`

```html
<web-component></web-component>
```

## But what about that CORS error?

Now, when you load the site in a browser, chances are you get a CORS error and the component refuses to be loaded. Why CORS is complaining on localhost, I don't know, but generally it's a smart move by your browser to prevent other sites inserting malicious code. The easiest way around this, is to spin up a small server in the folder that you're currently working in. If you have python installed, it is simple one command in the terminal of your choice:

For python 3:

```bash
python -m http.server
```

For python 2:

```bash
python -m SimpleHTTPServer
```

If you don't have python, I'm sure there are other ways.

Now, if you go to the localhost port that the python server just opened for you, the web component will be displayed. That is assuming you use Chrome as your browser.

## Conclusion

And that's it. You just created and used a simple web component. Not that complicated, right?

Before you go off building everything with Web Components, there are a few things you should be mindful of:

* Web Components are far from being implemented by modern day browsers and IE 11 (which won't be phased out until 2023) will probably never get there.
* If you want to host a component on a different server that opens up a whole different can of worms

Problem number one can be solved using [polyfills](https://www.webcomponents.org/polyfills).

Problem number two has also been solved by other people but there is a certain degree of effort in there. If you're interested in the solution, check out [Micro Frontends](https://micro-frontends.org/) by Neuland.
