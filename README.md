# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### dependencies Needed to rum react App.
1. "@chakra-ui/react": "^2.6.0",
2. "@testing-library/jest-dom": "^5.16.5",
3. "@testing-library/react": "^13.4.0",
4. "@testing-library/user-event": "^13.5.0",
5. "axios": "^1.3.6",
6. "react": "^18.2.0",
7. "react-dom": "^18.2.0",
8. "react-scripts": "5.0.1",
9. "web-vitals": "^2.1.4"

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed


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


### challenges faced.
1. Connecting to backend hosted api.

### Additional features can be added.
1. Next,React and typescript with proper types checking.
2. Adding login and logout feature with proper authentication.
3. Global state Management using Redux.
4. Shareable feature more user interactive.
5. UI can be more user friendaly.



