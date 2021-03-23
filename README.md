# Code for houserjohn.com

## Technologies used
React, Redux, TypeScript, HTML, CSS, JS, React Routing

## Hosting used
Firebase

## Personal Notes

### Installing NPM

For Windows users it is recommended to use Windows Subsystem for Linux with VSCode when following these instructions.

You may encounter an error regarding the path variable when using WSL. Consult [this resource.](https://www.reddit.com/r/bashonubuntuonwindows/comments/het5vq/npm_not_working_since_ive_updated_to_wsl2/) 
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
### Creating a react app with typescript
```
npx create-react-app my-app --template typescript
```

### Introducing redux into our app
```
npm install --save redux @types/redux
npm install --save react-redux @types/react-redux
```

### Displaying our app
```
cd my-app
npm start
```

### Deployment with Firebase 
https://www.youtube.com/watch?v=IDHfvpsYShs&t=7s&ab_channel=AndyWang
  
