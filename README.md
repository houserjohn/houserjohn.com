# Code for houserjohn.com

## Technologies used
React, Redux, TypeScript, HTML, CSS, JS, React Routing, React Materialize

## Hosting used
Firebase

## Setup Tutorial
For Windows users it is recommended to use Windows Subsystem for Linux with VSCode when following these instructions.  
Problems I encountered during this project using WSL:
* [The path variable may have errors when downloading and using NPM.](https://www.reddit.com/r/bashonubuntuonwindows/comments/het5vq/npm_not_working_since_ive_updated_to_wsl2/)  
* [NPM start may not update on page refresh so add CHOKIDAR_USEPOLLING=true.](https://stackoverflow.com/questions/45553302/npm-start-not-refreshing-new-content-on-save-on-one-computer-but-is-on-another) 
* [Figuring out how to add React materialize to my project.](https://stackoverflow.com/questions/35499842/how-to-use-materialize-css-with-react)
* [Property 'match' does not exist on type 'Readonly<{children?:ReactNode}> & Readonly<MyProps>'](https://stackoverflow.com/questions/50117006/reactjs-ts-property-match-does-not-exist-on-type-readonlychildrenreactno)

### Installing NPM


```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
### Creating a React app with Typescript
```
npx create-react-app my-app --template typescript
```
### Before Continuing, Change Directory
In order to avoid problems, run the following command before the next steps:
```
cd my-app
```

### Introducing Redux into our app
```
npm install --save redux @types/redux
npm install --save react-redux @types/react-redux
npm install --save-dev redux-devtools-extension
```
### Installing React Router
```
npm install --save react-router @types/react-router
npm install --save react-router-dom npm install --save @types/react-router-dom
```
### Installing React Materialize
```
npm install materialize-css@next
npm install --save react-materialize
```

### Displaying our app
```
npm start
```

### Deployment with Firebase 
https://www.youtube.com/watch?v=IDHfvpsYShs&t=7s&ab_channel=AndyWang
  
