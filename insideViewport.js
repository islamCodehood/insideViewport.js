    var insideViewport = function (a) {
        window.onscroll = function () {
            if (!Array.isArray(a.classesNames))
                console.log("Error! classesNames must be an array.");
            else if (1 <= a.position || 0 > a.position)
                console.log(
                    "Error! Position must be a number more than 0 and less than 1."
                );
            else {
                a.position === void 0 && (a.position = 0);
                for (
                    var d = a.classesNames,
                    e = Array.isArray(d),
                    f = 0,
                    d = e ? d : d[Symbol.iterator]();
                    ;

                ) {
                    var g;
                    if (e) {
                        if (f >= d.length) break;
                        g = d[f++];
                    } else {
                        if (((f = d.next()), f.done)) break;
                        g = f.value;
                    }
                    var h = g,
                        b = document.getElementsByClassName(h);
                    if (0 === b.length) console.log("Error! Class(es) not found.");
                    else
                        for (
                            var i = b,
                            j = Array.isArray(i),
                            k = 0,
                            i = j ? i : i[Symbol.iterator]();
                            ;

                        ) {
                            var l;
                            if (j) {
                                if (k >= i.length) break;
                                l = i[k++];
                            } else {
                                if (((k = i.next()), k.done)) break;
                                l = k.value;
                            }
                            var m = l,
                                c = m.getBoundingClientRect();
                            0 <= c.top &&
                                0 <= c.left &&
                                c.top <=
                                (window.innerHeight * (1 - a.position) ||
                                    document.documentElement.clientHeight * (1 - a.position)) &&
                                c.right <=
                                (window.innerWidth || document.documentElement.clientWidth) &&
                                a.action(m);
                        }
                }
            }
        };
    };
