---
title: React Project Structure
date: 2020-03-24
categories: javascript react
slug: "react-project-structure"
---

This is my personal guideline on how I structure my react projects (which are mostly static sites). It's what works for me but don't take this as gospel. Note that this folder assumes that the project is using [TypeScript](https://www.typescriptlang.org/) and [linaria](https://linaria.now.sh/). It should be easy enough to translate it to JavaScript and e.g. [CSS Modules](https://github.com/css-modules/css-modules).

## Some Notes before we get started

I always co-locate actual components, styles and tests which makes it easy to see what files might be missing. E.g.
```
./domain
- OrderButton.tsx
- OrderButton.spec.tsx
- OrderButton.style.ts
```

As you could see, component files are in PascalCase. Any other files (such as api and util files) are in kebab-case.

## Folder Structure

The structure in root is as follows:

**Folders**
- `__test__/`   => see below
- `data/`       => see above
- `meta/`       => gatsby-specific, contains all gatsby build code
- `src/`        => see below
- `static/`     => gatsby-specific

**Linters and code quality**
- `.codeclimate.yml`
- `.eslintrc`
- `.prettierrc`
- `.stylelintrc`

**Default Files**
- `.gitignore`
- `LICENSE`
- `package-lock.json`
- `package.json`
- `README.md`
- `tsconfig.json`

### Subfolders

`/__test__`
- `mocks/`      -> contains all 3rd party mocks
- `util.ts`     -> contains test helpers (potentially with its own test file (`util.spec.ts`))

`/data`
- `content/`    -> any full-page content and related assets (esp. blog posts and images from these posts)
    - `_img`    -> for all the images related to the content
- `img/`        -> all your image assets, potentially with per-page subfolders if there's too many of them
- `config.ts`   -> any global config variables (e.g. site base url)
- `strings.ts`  -> where your copy live. potentially a folder for copy-heavy projects

`/src`
- `api.ts`              -> potentially a folder with subfiles
- `components/`         -> reusable, no context logic (only have screenshot tests)
- `containers/`         -> domain logic components (optional if it's a very small project. use only `components` in that case)
- `contexts/`           -> put your contexts here if you have them
- `hooks/`              -> put your hooks in here
- `pages/`              -> page container components. Binding together the whole app
- `templates/`          -> the gatsby specific folder for auto-generated pages (e.g. blog posts)
- `index.ts`            -> init file
- `_variables.style.ts` -> your css variables (if applicable)
- `util.ts`             ->  potentially a folder with subfiles
- `fragments.ts`        -> graphql fragments
- `types.ts`            -> custom types
- `index.d.ts`          -> for missing 3rd party types and image typing
