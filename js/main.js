var insideViewport = function() {
  for (var b = arguments.length, a = Array(b), c = 0; c < b; c++)
    a[c] = arguments[c];
  window.onscroll = function() {
    for (
      var f = a, g = Array.isArray(f), h = 0, f = g ? f : f[Symbol.iterator]();
      ;

    ) {
      var i;
      if (g) {
        if (h >= f.length) break;
        i = f[h++];
      } else {
        if (((h = f.next()), h.done)) break;
        i = h.value;
      }
      var j = i;
      if (!Array.isArray(j.classesNames))
        console.log("Error! classesNames must be an array.");
      else if (1 <= j.position || 0 > j.position)
        console.log(
          "Error! Position must be a number more than 0 and less than 1."
        );
      else {
        j.position === void 0 && (j.position = 0);
        for (
          var k = j.classesNames,
            l = Array.isArray(k),
            m = 0,
            k = l ? k : k[Symbol.iterator]();
          ;

        ) {
          var n;
          if (l) {
            if (m >= k.length) break;
            n = k[m++];
          } else {
            if (((m = k.next()), m.done)) break;
            n = m.value;
          }
          var o = n,
            d = document.getElementsByClassName(o);
          if (0 === d.length) console.log("Error! Class(es) not found.");
          else
            for (
              var p = d,
                q = Array.isArray(p),
                r = 0,
                p = q ? p : p[Symbol.iterator]();
              ;

            ) {
              var s;
              if (q) {
                if (r >= p.length) break;
                s = p[r++];
              } else {
                if (((r = p.next()), r.done)) break;
                s = r.value;
              }
              var t = s,
                e = t.getBoundingClientRect();
              0 <= e.top &&
                0 <= e.left &&
                e.top <=
                  (window.innerHeight * (1 - j.position) ||
                    document.documentElement.clientHeight * (1 - j.position)) &&
                e.right <=
                  (window.innerWidth || document.documentElement.clientWidth) &&
                j.action(t);
            }
        }
      }
    }
  };
};

insideViewport({
    classesNames: ['reasons'],
    action(element) {
        element.style.color='red'
    }
},
{
    classesNames: ['why'],
    action(element) {
        element.style.color='red'
    }
})


