<p align="center">
    <a href="" rel="noopener">
    <img width=200px height=200px src="./public/vite.svg" alt="Project logo"></a>
</p>

<h3 align="center">Blog App</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]() 
[![GitHub Issues](https://img.shields.io/github/issues/pdpan0/blog-app.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/pdpan0/blog-app.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/78f4c59e-d78f-44f1-9528-e044e03bb708/deploy-status)](https://pw7-blog.netlify.app/posts)
</div>

---

<p align="center"> Projeto em React/Vite + Bootstrap da turma 3AOJR.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
It is a simple blog where we can see categories and their associated posts.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites    
We will need vite to create and run the application after it is cloned. To do this, use the command corresponding to your package manager:

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bun create vite my-vue-app --template vue
```

>If you have any questions, the vite documentation can be accessed [here](https://vitejs.dev/guide/).

### Installing
Once the repository is started and operating with Vite, we can use the `npx vite` command to upload the environment locally, or the `scripts.js` file with the commands from Vite itself:

```json
{
"scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
}

```

If successful, the service log will looks like this:

```bash
    VITE v5.0.12  ready in 224 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help

```

## 🎈 Usage <a name="usage"></a> 
In this application we can:
- List Posts
- View details of a post

## 🚀 Deployment <a name = "deployment"></a>
This application is available on netlify [here](https://pw7-blog.netlify.app/posts)

## ⛏️ Built Using <a name = "built_using"></a>
- [ContentFull](https://www.contentful.com/) - Backend
- [Vite](https://vitejs.dev/) - Tooling and server
- [React.js](https://react.dev/) - Frontend lib
- [Bootstrap](https://getbootstrap.com/) - UI lib

## ✍️ Authors <a name = "authors"></a>
- [@pdpan0](https://github.com/pdpan0) - Idea & Initial work
- [@iamwy7](https://github.com/iamwy7) - Docs & Deploy
