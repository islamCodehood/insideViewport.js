var insideViewport = function (args) {
  window.onscroll = function () {
    if (!Array.isArray(args.classesNames)) {
      console.log('Error! classesNames must be an array.')
    } else if ((args.position >= 1) || (args.position < 0)) {
      console.log('Error! Position must be a number more than 0 and less than 1.')
    } else {
      if (args.position === undefined) {
        args.position = 0;
      }
      for (const className of args.classesNames) {
        var elements = document.getElementsByClassName(className)
        if (elements.length === 0) {
          console.log('Error! Class(es) not found.')
        } else {
          for (const element of elements) {
            var bounding = element.getBoundingClientRect()
            if (
              bounding.top >= 0 &&
              bounding.left >= 0 &&
              bounding.top <= (window.innerHeight * (1 - args.position) || document.documentElement.clientHeight * (1 - args.position)) &&
              bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
              args.action(element)
            }
          }
        }
      }
    }
  }
}
