Intelligent Farm project: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Intelligent Farm Tutorial
## Introduction
In this tutorial, we will be creating an e-commerce website called **Intelligent Farm**. The Intelligent Farm allows customers to browse for farm produce and shop for them remotely.The website is built with React Js and Redux Saga on the frontend and Node Js on the backend. , it will be helpful for you to be familiar with Auto Layout before reading this tutorial. This tutorial requires an intermediate knowledge in Javascript, and more importantly the ES6 features. You'll also have to be comfortable working with HTML,CSS and Saas. React version 16.13.1 will be used for this tutorial.
## Getting Started
In getting started with the project, we're going to use **create-react-app**.
Setting up a modern react app from scratch is not easy and it makes us lost in the process due to a lot of overwhelming choices like setting up webpack, babel which is a big hassle.The **create-react-app** helps in avoiding those hassles and enables us to focus on the application rather than the configuration.


For the environment setup, I recommend installing NodeJS, Visual Studio Code and GitBash.


To set up the project run the following command in the terminal in order to install create-react-app:

```npx create-react-app intelligent-farm```

Then ```cd intelligent-farm``` to be in the intelligent-farm directory.

Add Saas to the project by running:

```npm install node-saas```

In the App.js delete the unnecessary code to remain only with the following code:
```

import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;


```
**Homepage**
We're going to create the homepage which will contain a directory containing menu items, as well as features container which will have the services the website gives to the customer for instance 'fast delivery' of purchased farm produce. The final homepage looks like this:

[<img src="https://i.imgur.com/6Qw6iQ2.jpg">]

We are going to create 3 components: directory, menu-item and features components.

The green box represents the directory component, red box for menu item component and the orange box for features component.







