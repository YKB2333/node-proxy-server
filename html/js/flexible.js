!function(a, b) {
  try {
      function d() {
          var e = k.getBoundingClientRect().width;
          e / r > 540 && (e = 540 * r);
          var s = e / 10;
          k.style.fontSize = s + "px",
          O.rem = a.rem = s
      }
      var g, i = a.document, k = i.documentElement, m = i.querySelector('meta[name="viewport"]'), p = i.querySelector('meta[name="flexible"]'), r = 0, N = 0, O = b.flexible || (b.flexible = {});
      if (m) {
          console.warn("将根据已有的meta标签来设置缩放比例");
          var c = m.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
          c && (N = parseFloat(c[1]),
          r = parseInt(1 / N))
      } else {
          if (p) {
              var f = p.getAttribute("content");
              if (f) {
                  var h = f.match(/initial\-dpr=([\d\.]+)/)
                    , j = f.match(/maximum\-dpr=([\d\.]+)/);
                  h && (r = parseFloat(h[1]),
                  N = parseFloat((1 / r).toFixed(2))),
                  j && (r = parseFloat(j[1]),
                  N = parseFloat((1 / r).toFixed(2)))
              }
          }
      }
      if (!r && !N) {
          var l = (a.navigator.appVersion.match(/android/gi),
          a.navigator.appVersion.match(/iphone/gi))
            , n = a.devicePixelRatio;
          r = l ? n >= 3 && (!r || r >= 3) ? 3 : n >= 2 && (!r || r >= 2) ? 2 : 1 : 1,
          N = 1 / r
      }
      if (k.setAttribute("data-dpr", r),
      !m) {
          if (m = i.createElement("meta"),
          m.setAttribute("name", "viewport"),
          m.setAttribute("content", "initial-scale=" + N + ", maximum-scale=" + N + ", minimum-scale=" + N + ", user-scalable=no"),
          k.firstElementChild) {
              k.firstElementChild.appendChild(m)
          } else {
              var o = i.createElement("div");
              o.appendChild(m),
              i.write(o.innerHTML)
          }
      }
      var M = window.navigator.userAgent;
      if (!M.match(/mobile/i)) {
          var q = document.createElement("style");
          document.getElementsByTagName("head")[0].appendChild(q);
          try {
              q.innerHTML = "html{font-size:37.5px!important;}body{width:740px!important;}"
          } catch (d) {
              q.innerText = "html{font-size:37.5px!important;}body{width:740px!important;}"
          }
      }
      a.addEventListener("resize", function() {
          clearTimeout(g),
          g = setTimeout(d, 300)
      }, !1),
      a.addEventListener("pageshow", function(e) {
          e.persisted && (clearTimeout(g),
          g = setTimeout(d, 300))
      }, !1),
      "complete" === i.readyState ? i.body.style.fontSize = 12 * r + "px" : i.addEventListener("DOMContentLoaded", function() {
          i.body.style.fontSize = 12 * r + "px"
      }, !1),
      d(),
      O.dpr = a.dpr = r,
      O.refreshRem = d,
      O.rem2px = function(e) {
          var s = parseFloat(e) * this.rem;
          return "string" == typeof e && e.match(/rem$/) && (s += "px"),
          s
      }
      ,
      O.px2rem = function(e) {
          var s = parseFloat(e) / this.rem;
          return "string" == typeof e && e.match(/px$/) && (s += "rem"),
          s
      }
  } catch (P) {
      var q = document.createElement("style");
      document.getElementsByTagName("head")[0].appendChild(q);
      try {
          q.innerHTML = "html{font-size:37.5px!important;}body{width:740px!important;}"
      } catch (d) {
          q.innerText = "html{font-size:37.5px!important;}body{width:740px!important;}"
      }
  }
}(window, window.lib || (window.lib = {}));
