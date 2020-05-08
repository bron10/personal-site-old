---
title: HOC vs Render Prop vs Hook
date: 2020-04-19
updated: 2020-04-19
categories: react
slug: "hoc-renderprop-hook"
---

Higher-Order Components, Render Props and Hooks are three patterns to implement state- or behaviour-sharing between components. 


## On HOCs
According to the [React Docs](reactjs.org/docs/higher-order-components.html) "[... A] higher-order component is a function that takes a component and returns a new component". 

The biggest downside of HOCs is that you don't see what prop gets added unless you look into the HOCs implementation. Which on the other hand is quite nice if you want to expose your HOC es part of library since it keeps the API as simple as possible.

```js
const withDataProvider = (Wrapped, {firstName, lastName }) =>
  class Random extends React.Component {
    fullName = firstname + " " + lastName

    render = () => {
      return <Wrapped fullName={this.fullName} {...this.props}/>;
    }
  };

const ConsumingComp = props => <h1>Hello {props.fullName}</h1>;

const Comp = withDataProvider(ConsumingComp, {firstName: "First", lastName: "Last"});

<Comp />

/* renders:
<h1>Hello First Last</h1>
*/
```


## Render Prop
[React Docs to the rescue](https://reactjs.org/docs/render-props.html) again. "[A] render prop is a function prop that a component uses to know what to render.". It's pretty much the same as a HOC though and you should be able to pretty much swap between the two patterns without issues. It's a bit more React-y though, using a component as the interface and it exposes the prop to the consumer.



```js
const DataProvider = props => 
    props.children(props.firstName + " " + props.lastName)
 

const ConsumingComp = () => (
    <DataProvider firstName="First" lastName= "Last" render={fullName => (
        <h1>Hello {fullName}</h1>
    )}/>
)

/* renders:
<h1>Hello First Last</h1>
*/
```

## On Hooks
Called `use<FUNCTIONALITY>`.

Calling a hook gives you a completely isolated bunch of code. It's not stateful so all states and effects inside it only affect the component that's calling it. (Unless you fuck up in building your custom component of course).

Using a hook feels a bit like using a HOC but you're calling it inside the component instead of wrapping the component.

```js
const useDataProvider = (firstName, lastName) => {
    return firstName + " " + lastName
}

const ConsumingComp = () => {
    const fullName = useDataProvider("First", "Last")

    return <h1>Hello {fullName}</h1>
}

/* renders:
<h1>Hello First Last</h1>
*/
```

