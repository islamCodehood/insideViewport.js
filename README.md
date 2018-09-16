 <div align="center">
 <img width="175px" height="175px" src="https://github.com/Islam888/insideViewport.js/blob/master/logo.png">
</div>
<h1 align="center">insideViewport.js</h1>
  <p align="center"><b>An ultra light weight library that detects if an element is in viewport and lets you do some action to it.</b></p>


## Contents:

- [Description](#description).
- [Why use it?](#why-use-it).
- [Tutorial](#tutorial).
- [Contribute](#contribute).
- [License](#license).


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
  classesNames: ['example1', 'example2'],//An array of strings of class names. It can be a single class or as many as you want.
  
  position: 0.5,//Optional. Any number from 0 to less than 1. This decide the position of the element when you want to call the function on.
  
  action(elements) {
    myfunc(elements) //The action you want to do on the element.
  }
})
```


