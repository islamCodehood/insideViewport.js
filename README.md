 <div align="center">
 <img width="175px" height="175px" src="https://github.com/Islam888/insideViewport.js/blob/master/logo (1).png">
</div>
<h1 align="center">insideViewport.js</h1>
  <p align="center"><b>An ultra light weight library that detects if an element is in viewport and lets you do some action to it.</b></p>


## Contents:

- [Contents:](#contents)
- [Description](#description)
- [Why use it?](#why-use-it)
- [Tutorial](#tutorial)
  - [Setup:](#setup)
  - [Use:](#use)
  - [Contribute](#contribute)
  - [License](#license)


## Description

- An ultra light weight library built with vanilla javascript.
- It enables you to detect if an element is in viewport.
- It enables you to do whatever you want with the element in viewport.


## Why use it?

1. An ultra light weight (JUST 1KB).
2. Written in pure vanilla javascript.
3. Compatible with all browsers.
4. Compatible with even old browsers, not only modern ones.
5. No special setup or npm package install needed. Just copy and paste less than 30 lines of code at the top of your JS file.


## Tutorial

 ### Setup:
 1. Copy code in insideViewport.js file.
 2. Paste it at the top of your JS file.
 
 ### Use:

 ```javascript
insideViewport({
  classesNames: ['example1', 'example2'],//An array of strings of class name(s).
  position: 0.5,//Optional. It controls where will be the element in the viewport area when the action done on it.
  action(elements) {
    myfunc(elements) //The action you want to do on the element.
  }
})
```
- You need to call insideViewport() with an object of three or two parameters.
- First parameters: `classesNames` which is an array of strings of class names of elements you want to detect.
- Second parameter(optional): `position` which is a number value from 0 to less than 1. It controls where will be the element in the viewport area when the action done on it.
- Third parameter: `action(elements)` which is a function to do some action on the element when in viewport.


### Contribute

- This is an open source project. You can contribute, report bugs, pull request.


### License

- This project is under [MIT License](https://github.com/Islam888/insideViewport.js/blob/master/LICENSE).
