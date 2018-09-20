 <div align="center">
 <img width="100px" height="100px" src="https://github.com/Islam888/insideViewport.js/blob/master/img/logo%20(1).png">
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
 2. Paste it in your JS file.
 
 ### Use:

 ```javascript
insideViewport({
  classesNames: ['example1', 'example2'],//An array of strings of class name(s).
  position: 0.5,//Optional. It controls where will be the element in the viewport area when the action done on it.
  action(elements) {
    myFunction(elements) //The action you want to do on the element.
  }
},
{ //more objects(arguments).
  classesNames: ['example3', 'example4'],
  action(elements) {
    myOtherFunction(elements) 
  }
})
```
- You need to call insideViewport() with an object or any number of objects each one consists of three or two properties.
- First property: `classesNames` which is an array of strings of class names of elements you want to detect.
- Second property(optional): `position` which is a number value from 0 to less than 1. It controls where will be the element in the viewport area when the action done on it. As the number get bigger the element would be in higher position inside the viewport when the action done. For example, if the value was 0.5, the element would be in the middle of the viewport height when the function is called.
- Third property: `action(elements)` which is a function to do some action on the element when in viewport.
- You can use as many objects (arguments) as you need. Each one is intended to do the same action (same function) on one or multiple elements.

### Contribute

- This is an open source project. You can contribute, or report bugs.


### License

- This project is under [MIT License](https://github.com/Islam888/insideViewport.js/blob/master/LICENSE).
