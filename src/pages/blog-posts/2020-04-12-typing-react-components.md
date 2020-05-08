---
title: Typing React Components
date: 2020-04-12
updated: 2020-04-12
categories: react typescript
slug: "typing-react-components"
---

When using TypeScript you won't get around having to type React components. This usually happens when you want to pass them as props. When you get to that point you suddenly have a ton of different types to choose from. Below are the main contenders with pseudo-coded typings:

```ts
type ReactElement = html | JSX.Element // html isn't actually a valid type though
type ReactText = string | number;

type ReactChild = ReactElement | ReactText;
type ReactNode = ReactChild | boolean | null | undefined; //or an array of them
```