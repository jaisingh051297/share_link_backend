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



### Deployment

Run the following command to create a build directory with a production build of your app:

### `npm run build`


### Configuring Firebase

Install Firebase CLI
To host your site with Firebase Hosting, you need the Firebase command-line tool (CLI). Run the following npm command to install the CLI on your system globally:

### `npm install -g firebase-tools`


### Login to Firebase
Make sure you're in the root directory of your React app and run the following command to login to firebase in your terminal:

### `firebase login`

If you're not logged in, you'll be asked to enter the credentials for your google account.


### Initiate your project
Now that you've got the firebase CLI configured, it's time to initialize firebase in your react app. Run the following command:

### `firebase init`

You will now enter the firebase tools shell and will be prompted with a sequence of questions and various configuration options. Let's go through these questions together step by step to achieve our desirable configuration.

### Select - Hosting: Configure and deploy Firebase Hosting sites.

### Select - Use an existing project

### Select - Require options as per your need and Press Enter.

### Deploy To Firebase
Just run the following command to deploy your app:

### `firebase deploy`