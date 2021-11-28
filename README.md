# Webpack-React-BoilerPlate
React, Webpack Babel, Express, and Sass

created by: https://github.com/britlim

A simple webpack boilerplate that is React capable and runs on start using concurrently.
Please make sure you have the latest LTS version of node installed prior to installing webpack.
You can check by running these commands 

node -v

npm -v

and visiting https://nodejs.org/en/


To begin, you will need to either run npm install or install the dependencies that you require for your project.
In this boilerplate, we include the packages below...
This boilerplate uses concurrently to run our Express server and our React server on ports 3000 and 8080.
To run the dev server, simply run the command... npm run start
You should now be able to open your server on localhost:8080 as well as your Express server on localhost:3000

    DEPENDENCIES
    "concurrently": "^6.4.0",
    "express": "^4.17.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "webpack-dev-server": "^4.6.0"

    DEV DEPENDENCIES
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.4",
    "@babel/preset-react": "^7.16.0",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "node-sass": "^6.0.1",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1"
