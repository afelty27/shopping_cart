<h1>Shopping Cart Application:</h1>
The Shopping Cart Application is an educational project that was built with the intention of learning how to use components in React, manage state, use CRUD operations, and display the results of these operations to the user in the form of a hypothetical e-commerce page (based off of a Fortnite api for items on the Fortnite shop - inspiration for this api came from: ). My goal for this application was to create components that were easy to understand while not being redundant. Additionally, my goal was to manage the state in a way that reduced confusion and made CRUD operations easy to follow throughout the components. All data is saved to local storage.

<h3> What I Learned/What I Would Do Differently:</h3>
There are three main changes that I would make to my approach of the project if I were to redo the application.

1. All the component files were simply saved to the src directory rather than creating a specific directory to hold all component files. Creating this additional directory would help organize the files in my project in a way to make them more readible to another user. Additionally, directories for styles and images should be cleaned.
2. I built the projct without using a global state, resulting in similar props being passed to nearly every component. For an application like this in the future, I would implement a State Management Library (ex: Redux) and use global state to improve the readability of the logic within the application.
3.

<h3>Credits:</h3>
This project was inspired as a resonse to the Project: Shopping Cart lesson of the JavaScript Course on the Odin Project. Inspiration for the design of the Home Page was from  https://startbootstrap.com/previews/full-width-pics. Inspiration for how to set up rows of cards was from https://mdbootstrap.com/docs/standard/extended/card-columns/. Inspiration for design aspects of the Cart page were from https://mdbootstrap.com/docs/standard/extended/shopping-carts/.

<h3>Technologies Used:</h3>
JavaScript
React
Bootstrap

<h3>Build Status:</h3>
This application is fully functional, but not finished in terms of aesthetic design.

<h3>Installation:</h3>

1. Clone repo from GitHub
2. In terminal, run the command: npm install
3. In terminal, run the command: npm start
4. Go to localhost:3000 in a web browser

<h3>Api Reference:</h3>
This application uses an Api which holds upcoming data for the items in the Fortnite shop. The api can be found at https://fortnite-api.theapinetwork.com/upcoming/get

<h3>How the Application Works:</h3>

Things to fix/add

-Cart page: better design; when small screen not adjusting nicely; footer not on bottom
-Shop page: better layout

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
