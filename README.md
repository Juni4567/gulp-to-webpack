# Gulp to Webpack Front-end Workflow

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) 

## What is it?

It's a production ready **NPM+Webpack** _automation_ and _module bundler_ focused in _multipage_ **Bootstrap 4 and Fontawsome** static web pages. It supports ES6 Syntax, SCSS to css comiling, Automatic bundling of css/js and images and multiple html files each with separate set of assets.

## Who is this for?

The main target audience for this project are **Designers** and **Frontend Developers**, but people trying to figure out **Webpack** can also benefit from reading the config files.

## Why does this exists?

Most of the boilerplates available out there are kind of minimal --- for education purposes --- or SPA driven --- useful when dealing with desktop/mobile applications, web apps, promotional/landing pages, utility pages _etc_  ---, but Internet is a very diverse environment where some kinds of software should be designed as MPAs which are good at _crawlability (SEO)_, _security_, _speed_, _cacheability_, _extensibility_ _etc_.

## How to use it?

With git and node.js already installed, it's very straight forward. Just run:

```sh
$ git clone This respositroy
$ cd folder-created-by-this-repository
$ npm install  or yarn
```

This will ensure your environment get automaticaly configured. From here, you can start coding. When you are done, run:

```sh
$ npm build  or yarn build
```

This will update the files under ./dist/ folder. 

## Contributing

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).