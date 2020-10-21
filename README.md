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

<img src="https://i.imgur.com/6Qw6iQ2.jpg">

We are going to create 3 components: directory, menu-item and features components.

The green box represents the directory component, red box for menu item component and the orange box for features component.

We're going to create the menu-item component but first of all,  run ```cd src``` to move into the src folder, and then ```mkdir components``` to create components folder.
In the same src folder, run ```mkdir pages``` to create pages folder.

Let's cd into components folder, so run ```cd components```. And create menu-item folder ```mkdir menu-item```. In the menu-item folder, we're going to create two files: run
```touch menu-item.jsx``` then ```touch menu-item.scss```

In the ``` menu-item.jsx``` add the following code:

```
import React from "react";
import "./menu-item.scss";


const MenuItem = ({ title, imageUrl}) => {
  return (
    <div
      className="menu-item"
      
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle">VIEW ALL</span>
      </div>
    </div>
  );
};

export default MenuItem;

```
The menuItem component takes in title and imageUrl as props from its parent which we will create in a short while. The parent to the menu item will be the directory component.

In the ```menu-item.scss``` add the following code:

```
.menu-item {
  position: relative;
  display: flex;
  border: solid rgb(134, 131, 131) 1px;  
  height: 200px;
  flex: 1 1 30%; 
  justify-content: center;
  align-items: center;
  margin: 0px 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .content {
      opacity: 0.9;
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .content {
    position: absolute;
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: rgb(63, 60, 60) solid 1px;
    border-radius: 2px;
    background-color: white;
    opacity: 0.7;

    @media screen and (max-width: 800px) {
      height: 60px;
      width: 100px;
      padding: 0 15px;
    }
  }

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: rgb(146, 84, 3);

    @media screen and (max-width: 800px) {
      font-weight: bold;
      margin-bottom: 3px;
      font-size: 14px;
    }
  }

  .subtitle {
    font-weight: 600;
    font-size: 16px;

    @media screen and (max-width: 800px) {
      font-weight: bold;
      margin-bottom: 3px;
      font-size: 14px;
    }
  }
}


```








