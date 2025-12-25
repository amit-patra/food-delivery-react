<!-- SRC URL -->
<!-- https://github.com/namastedev/namaste-react/blob/main/src/components/mocks/mockResListData.json -->
React Fiber URL:
https://github.com/acdlite/react-fiber-architecture
<!-- React Lifecycle Diagram -->
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


# Redux Toolkit
    - Install @reduxjs/toolkit and react-redix ("npm i @reduxjs/toolkit" && "npm i react-redux")
    - Build our store
    - Connect our store to our app
    - Slice (cartSlice)
    - dispatch (action)
    - selector

# RTK (Redux Tool Kit) Query Quick Start
https://redux-toolkit.js.org/tutorials/rtk-query

# Types of testing (developer)
    - Unit Testing
    - Integration Testing
    - End to End Testing (e2e Testing)

# Setting Up Testing
 - Install React Testing Library
 - Installed jest
 - Install Babel dependency
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation
 - Jest Configuration
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - Install @testing-library/jest-dom

# Below are the command list
1. In App using React Testing Library
URL: https://testing-library.com/docs/react-testing-library/intro
2. Command: npm i -D @testing-library/react @testing-library/dom
3. Install jest
Command: npm i -D jest

Folowwing Steps (In That URL https://jestjs.io/docs/getting-started)
Need to Install Babel
4. npm install --save-dev babel-jest @babel/core @babel/preset-env

Jest Configuration (Initialize jest)
5. npx create-jest
6. npm install --save-dev jest-environment-jsdom

To make JSX work in test cases
7. npm i -D @babel/preset-react 

Update the babel.config.js
8. ["@babel/preset-react", {runtime: "automatic"}]

Need to install this library to get the function like "toBeInTheDocument()"
9. npm i -D @testing-library/jest-dom







