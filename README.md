# React Webpack Boilerplate

Simple React Project Boilerplate like [react-webpack-boilerplate](https://github.com/vovanphu/react-webpack-boilerplate) but use express as server. Useful for small projects.

Use `webpack-dev-middleware` and `webpack-hot-middleware` for bundling on the air and enabling hot module replacement.

## Getting started

After clone this repo you have to remove `.git` folder and init new git for your project.

Remember to check `pwd` to make sure these commands is invoked in your project directory.

```
rm -r .git
```

```
git init .
```

Install dependencies:

```
yarn install
```

Start dev server:

```
yarn dev
```

Build production:

```
yarn build
```

App element is located at `client/src/App.jsx`.

## Configuration

You can change, add configs at `config.env.js`.