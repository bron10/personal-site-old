---
title: "React State"
date: 2020-05-24
updated: 2020-05-24
categories: react
slug: "react-state"
---

Unlike props, React states are very fancy and capture, as the name says, the state of the component. This state is/should be inherent to the component and not changed from the ouside directly. A nice state would e.g. be a counter.

Also, if you change the state directly (e.g. `name = "blub"`) the component will not be re-rendered. You always have to call the `setState` method.

```js
const HelloUser: React.FC = () => {
  const [userName, setUserName] = useState('username');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

  return (
    <div>
      Hello {userName} <br />
      <input type="text" value={userName} onChange={handleChange} />
    </div>
  );
};
```

In the above example, the username is (one of) the state(s) of the component and only changed by the `handleChange` method, not directly like a prop.

The method is passed `e` which is the element and from there it extracts the `target` value `value`. You could also do `e.target.type` to get `"text"` but that would be a bit stupid...

## Inheriting State

The nice thing about states is that you can pass them down to children as props. This then works like this:

Parent Component:

```js
const FriendsContainer: React.FC = () => {
  const [name, setName] = useState('Some Dude');
  const [friends, setFriends] = useState()[('Other Dude', 'Surfer-Dude Is-Unisex')];

  return (
    <div>
      <h3> Name: {name} </h3>
      <ShowList names={friends} />
    </div>
  );
};
```

As you can see, the parent component calls the child component `ShowList` and passes the `friends` state to its `names` prop.

Child Component:

```js
const ShowList = ({ names }) => (
  <div>
    <h3> Friends </h3>
    <ul>
      {names.map(friend => (
        <li>{friend}</li>
      ))}
    </ul>
  </div>
);
```

In the end, all of this will render (without styling of course):

```
Name: Some Dude
Friends
* Other Dude
* Surfer-Dude Is-Unisex
```