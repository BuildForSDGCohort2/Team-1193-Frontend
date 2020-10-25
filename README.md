
# Intelligent Farm Tutorial
## Introduction
In this tutorial, we will be creating an e-commerce website called **Intelligent Farm**. The Intelligent Farm allows customers to browse for farm produce and shop for them remotely.The website is built with React Js , it will be helpful for you to be familiar with fundamentals of  React before reading this tutorial. This tutorial requires an intermediate knowledge in Javascript, and more importantly the ES6 features. You'll also have to be comfortable working with HTML,CSS and Saas. React version 16.13.1 will be used for this tutorial.
## Getting Started
In getting started with the project, we're going to use **create-react-app**.
Setting up a modern react app from scratch is not easy and it makes us lost in the process due to a lot of overwhelming choices like setting up webpack, babel which is a big hassle.The **create-react-app** helps in avoiding those hassles and enables us to focus on the application rather than the configuration.


For the environment setup, I recommend installing NodeJS, Visual Studio Code and GitBash.


To set up the project run the following command in the terminal in order to install create-react-app:

```npx create-react-app intelligent-farm```

Then ```cd intelligent-farm``` to be in the intelligent-farm directory.

Add Saas to the project by running:

```npm install node-saas```

Also add React Router by running ```npm install react-router-dom``` to allow for routing in the application.

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
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl, history, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);

```
The menuItem component takes in title, imageUrl and linkUrl as props from its parent which we will create in a short while. The parent to the menu item will be the directory component.

We've included withRouter higher order component which comes from react router dom to enable us to pass history and match props to the menuItem component.

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

In the  ```index.js``` import BrowserRouter by adding  ```import {BrowserRouter} from 'react-router-dom'``` to the imports.

Still in the  ```index.js``` wrap the App component with   ```<BrowserRouter>``` like below:

 ```
<BrowserRouter>
    <App />
</BrowserRouter>
```

This gives us the power of routing to different urls in our application.

   

The next step involves creating the directory component. So let's go back to the components folder, and run ```mkdir directory``` to create the directory folder.

Run ```cd directory``` then ```touch directory.jsx``` and ```touch directory.scss``` to create both the jsx and saas files for the directory.

Add the following code to the ```directory.jsx```

```
import React, {Component} from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";


class Directory extends Component {
    constructor(){
      super()
      this.state = {categories: [
        {
          title: "cereals",
          imageUrl: "https://i.imgur.com/PU55yZl.jpg",
          id: 1,
          linkUrl: "store/cereals",
        },
        {
          title: "legumes",
          imageUrl: "https://i.imgur.com/3VOqAdd.jpg",
          id: 2,
          linkUrl: "store/legumes",
        },
        {
          title: "vegetables",
          imageUrl: "https://i.imgur.com/dZJKxf0.jpg",
          id: 3,
          linkUrl: "store/vegetables",
        },
        {
          title: "fruits",
          imageUrl: "https://i.imgur.com/rMGLAfc.jpg",
          size: "large",
          id: 4,
          linkUrl: "store/fruits",
        },
        {
          title: "tubers",
          imageUrl: "https://i.imgur.com/rw9FigJ.jpg",
          id: 5,
          linkUrl: "store/tubers",
        },
        {
          title: "livestock",
          imageUrl: "https://i.imgur.com/ghbRdPn.jpg",
          id: 6,
          linkUrl: "store/livestock",
        },
      ],}
    }

    render() { 
        return (
            <div className="directory">
      {this.state.categories.map(({ id, title, imageUrl, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
      ))}
    </div>
          );
    }
}
 
export default Directory;

```

The state in the Directory component contains an array of objects, where each object contains id, title, imageUrl and linkUrl data used by the menuItem component.

Then add the below styles for the ```directory.scss```:

```
.directory {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


```

Let's now create the features component which contains short descriptions of services offered by the site.


But before that, navigate to the ```src``` folder and run ```mkdir assets``` to create assets folder to store svg icons we would use in the features component.
```cd assets``` and create a new folder, call it ```icons``` inside the assets folder ```mkdir icons```. Add your svg icons here in the icons folder.You can get the exact icons I used on  [this git repository](https://github.com/BuildForSDGCohort2/Team-1193-Frontend/tree/develop/src/assets/icons)

Navigate back to the components folder and ```mkdir features``` to create features folder. cd into the features folder and ```touch features.jsx``` then ```touch features.scss``` to generate both jsx and saas files for the features.

In the ```features.jsx``` add the below code:


```
import React from "react";
import { ReactComponent as TruckIcon } from "../../assets/icons/truck.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/locked.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy.svg";
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg";
import "./features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <TruckIcon className="icon" />

        <div className="content">
          <h3>Instant delivery</h3>
          <p>
            We deliver your orders to your door step in less than 24 hours. We
            value your time and patience.
          </p>
        </div>
      </div>
      <div className="feature">
        <TrophyIcon className="icon" />
        <div className="content">
          <h3>Best quality farm produce</h3>
          <p>
            We take pride in offering the healthiest farm produce to all our
            customers. We thoroughly scrutinize our products beforehand to
            ensure a lasting value.
          </p>
        </div>
      </div>
      <div className="feature">
        <LockIcon className="icon" />

        <div className="content">
          <h3>Secure Payments</h3>
          <p>
            We guarantee safety of your personal data when making payments
            through an advanced payment technology.
          </p>
        </div>
      </div>
      <div className="feature">
        <LocationIcon className="icon" />
        <div className="content">
          <h3>Order from anywhere</h3>
          <p>
            No need to worry about your location, we've got you covered. Our
            delivery extends to every part of the country.
          </p>
        </div>
      </div>
      <div className="feature">
        <PhoneIcon className="icon" />
        <div className="content">
          <h3>Talk to us anytime</h3>
          <p>
            We value your calls and that's why we take time to answer instantly.
            Call us on 0712062516.
          </p>
        </div>
      </div>
      <div className="feature">
        <HouseIcon className="icon" />

        <div className="content">
          <h3>All in one roof</h3>
          <p>
            We numerous categories of farm produce in our centralized store.No
            need to look anywhere else
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;


```

The svg icons have to be imported as React components from the icons folder.

In the ```features.scss```, add the following code:

```
.features-container {
  width: 70%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;

  grid-template-columns: repeat(3, 1fr);
  .feature {
    display: flex;
    flex-direction: column;
    flex: 1 1 30%;
    padding: 10px;
    position: relative;

    .icon {
      fill: rgb(172, 149, 19);
      height: 40px;
      width: 40px;
      position: absolute;
      top: 20px;
      left: -15px;
    }

    .content {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      align-items: flex-start;
      margin: 0px auto;
      font-size: 14px;

      p {
        text-align: left;
        margin-top: -10px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
}


```

Let's now create the homepage.
So navigate back to the src folder and run ```mkdir pages``` to create the pages folder to hold all our pages. Then ```cd pages``` and create a new folder, homepage inside the pages folder, therefore run ```mkdir homepage```. 

Run ```cd homepage``` to get into the homepage folder and create  ```homepage.jsx```  file. So run 
```touch homepage.jsx```

Inside the ```homepage.jsx``` add the below code:

```
import React from "react";
import "./homepage.scss";

import Directory from "../../components/directory/directory";
import Features from "../../components/features/features";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
      <Features />
    </div>
  );
};

export default Homepage;

```

Both the Directory and Features components are rendered by the homepage.

Before we see the result, it's time to add the homepage component to the ```App.js``` in our application.

Add this import statement to ```App.js```:

```import Homepage from './pages/homepage/homepage';```

Then add  ```<Homepage/>``` component to the return statement.

Your ```App.js``` should look like this code below:
```
import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;

```

Run the application and see the results.

Congratulations for sticking on upto this far. We've come towards the end of the tutorial, but before I let you go, check out  the [Intelligent Farm repository](https://github.com/BuildForSDGCohort2/Team-1193-Frontend) to get more details on additional featues of the web application not covered in the tutorial.

For any questions, you can reach out to me via [here on linkedin](https://www.linkedin.com/in/vincent-juma-a6a5a5147/) or via email: vinsoncode@gmail.com







