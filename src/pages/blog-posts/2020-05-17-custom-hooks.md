---
title: "Custom React Hooks"
date: 2020-05-17
updated: 2020-05-17
categories: react
slug: "custom-hooks"
---

Hooks are nice. I like hooks. Which means there can never be enough of them. So here's how to build your own.

Eveey hook should (must) be called `useWhatItsDoing`, e.g. `useLocalStorageState`. Custom hooks keep their state beween rerenders but never share their state between calls. Meaning calling a hook in component 1 will have no side effects on component 2 that's calling the hook too. If you want then to share state and stuff this might be where [context](/article/context) comes in handy.

```js
const useLocalStorageState = (key: string, defaultValue = '') => {
  const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

const Component: React.FC = () => {
  const [userName, setUserName] = useLocalStorageState(username);

  return (
    <div>
      Username: {userName}
      <input onChange={setUserName} value={userName} />
    </div>
  )
}
```

Be careful with passing in callback functions though. They will update on every rerender meaning that your hook will be executed on every rerender if you don't put in proper guards. The easiest way to guard against those renders is wrapping the callback in a ref.

```js
const useSomethingWithCallback = (value: string, callback: () => void) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    if(value === "something") callbackRef.current();
  }, [value, callbackRef]);

  return [value];
};
