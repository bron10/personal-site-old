---
title: "React Hooks: useImperativeHandle"
date: 2020-05-10
updated: 2020-05-10
categories: react
slug: "use-imperative-handle"
---

Another cool hook is `useImperativeHandle`. It's one of those hooks that you should rarely use but when you managed to find a use case where you need it it's so, so nice. As the name already says `useImperativeHandle` is there to help you out with imperative code. The only use case so far that I've found is for animatable components:

In the example below we have a floating button that should float in or out on command. Now, we could handle all that floating logic in the parent but that doesn't make the component very reusable. So instead we're gonna prepare the animation logic inside the button and then expose it through `useImperative handle`.


```js
export interface BottomFloatingButtonRef {
  floatIn: () => void;
  floatOut: () => void;
}

interface Props {
  onClick: () => void;
  ref: Ref<BottomFloatingButtonRef>;
}

const SCREEN_OFFSET = 24;
const BUTTON_HEIGHT = 60;

// eslint-disable-next-line react/display-name
const BottomFloatingButton: React.FC<Props> = forwardRef<BottomFloatingButtonRef, Props>(
  ({ onClick }, ref) => {
    const [animating, setAnimating] = useState(false);

    const yOffset = useRef(SCREEN_OFFSET).current;

    useImperativeHandle(ref, () => ({
      floatIn: () => {
        if (animating) return;

        setAnimating(true);
        floatingAnimation(yOffset, SCREEN_OFFSET).start(setAnimating(false));
      },

      floatOut: () => {
        if (animating) return;

        setAnimating(true);
        floatingAnimation(yOffset, 0 - BUTTON_HEIGHT).start(setAnimating(false));
      },
    }));

    return <button style={{ bottom: yOffset }} onClick={onClick} />;
  }
);
```

And then in the consumer, triggering an animation is just so clean 😍:

```js
const Consumer: React.FC = () => {
  const floatingButtonRef = useRef<BottomFloatingButtonRef>(null);

  return (
    <>
      <button onClick={floatingButtonRef.current?.floatIn}>Float in</button>
      <button onClick={floatingButtonRef.current?.floatOut}>Float out</button>
      <BottomFloatingButton ref={floatingButtonRef} onClick={() => console.log('floaty float')} />
    </>
  );
};
```
