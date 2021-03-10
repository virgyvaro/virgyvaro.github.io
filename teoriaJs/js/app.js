console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');
console.log(' Teoría de JS ');
console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');

// Alerta de Bienvenida
Swal.fire({
    imageUrl: 'https://image.freepik.com/vector-gratis/composicion-adorable-bienvenida-estilo-origami_23-2147920269.jpg',
    padding: 5,
    imageAlt: 'bienvenida',
    showConfirmButton: false,
    showClass: {
        popup: 'animate__animated animate__zoomInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__zoomOutUp'
    },
    background: '#00008B',
    timer: 2000
});

// Función para la pregunta 1
function unoC() {
    // console.log('Tu respuesta es incorrecta');
    Swal.fire({
        icon: 'error',
        title: 'Oops... sorry',
        text: 'Tu respuesta es incorrecta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}
function unoF() {
    // console.log('Tu respuesta es correcta'); 
    Swal.fire({
        icon: 'success',
        title: '¡Perfecto!',
        text: 'Tu respuesta es correcta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}

// Función para la pregunta 2
function dosC() {
    Swal.fire({
        icon: 'success',
        title: '¡Perfecto!',
        text: 'Tu respuesta es correcta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}
function dosF() {
    Swal.fire({
        icon: 'error',
        title: 'Oops... sorry',
        text: 'Tu respuesta es incorrecta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}

// Función para la pregunta 3
function tresC() {
    Swal.fire({
        icon: 'success',
        title: '¡Perfecto!',
        text: 'Tu respuesta es correcta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}
function tresF() {
    Swal.fire({
        icon: 'error',
        title: 'Oops... sorry',
        text: 'Tu respuesta es incorrecta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}

// Función para la pregunta 4
function cuatroC() {
    Swal.fire({
        icon: 'success',
        title: '¡Perfecto!',
        text: 'Tu respuesta es correcta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}
function cuatroF() {
    Swal.fire({
        icon: 'error',
        title: 'Oops... sorry',
        text: 'Tu respuesta es incorrecta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}


// Función para la pregunta 5
function cincoC() {
    Swal.fire({
        icon: 'error',
        title: 'Oops... sorry',
        text: 'Tu respuesta es incorrecta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}
function cincoF() {
    Swal.fire({
        icon: 'success',
        title: '¡Perfecto!',
        text: 'Tu respuesta es correcta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}

// Función para la pregunta 6
function seisC() {
    Swal.fire({
        icon: 'error',
        title: 'Oops... sorry',
        text: 'Tu respuesta es incorrecta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}
function seisF() {
    Swal.fire({
        icon: 'success',
        title: '¡Perfecto!',
        text: 'Tu respuesta es correcta.',
        showConfirmButton: false,
        background: '#F0FFFF',
        timer: 2300
      });
}

// Woow
/* (function() {
    var Util,
      __bind = function(fn, me) {
        return function() {
          return fn.apply(me, arguments);
        };
      };
  
    Util = (function() {
      function Util() {}
  
      Util.prototype.extend = function(custom, defaults) {
        var key, value;
        for (key in custom) {
          value = custom[key];
          if (value != null) {
            defaults[key] = value;
          }
        }
        return defaults;
      };
  
      Util.prototype.isMobile = function(agent) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          agent
        );
      };
  
      return Util;
    })();
  
    this.WOW = (function() {
      WOW.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true
      };
  
      function WOW(options) {
        if (options == null) {
          options = {};
        }
        this.scrollCallback = __bind(this.scrollCallback, this);
        this.scrollHandler = __bind(this.scrollHandler, this);
        this.start = __bind(this.start, this);
        this.scrolled = true;
        this.config = this.util().extend(options, this.defaults);
      }
  
      WOW.prototype.init = function() {
        var _ref;
        this.element = window.document.documentElement;
        if (
          (_ref = document.readyState) === "interactive" ||
          _ref === "complete"
        ) {
          return this.start();
        } else {
          return document.addEventListener("DOMContentLoaded", this.start);
        }
      };
  
      WOW.prototype.start = function() {
        var box, _i, _len, _ref;
        this.boxes = this.element.getElementsByClassName(this.config.boxClass);
        if (this.boxes.length) {
          if (this.disabled()) {
            return this.resetStyle();
          } else {
            _ref = this.boxes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              this.applyStyle(box, true);
            }
            window.addEventListener("scroll", this.scrollHandler, false);
            window.addEventListener("resize", this.scrollHandler, false);
            return (this.interval = setInterval(this.scrollCallback, 50));
          }
        }
      };
  
      WOW.prototype.stop = function() {
        window.removeEventListener("scroll", this.scrollHandler, false);
        window.removeEventListener("resize", this.scrollHandler, false);
        if (this.interval != null) {
          return clearInterval(this.interval);
        }
      };
  
      WOW.prototype.show = function(box) {
        this.applyStyle(box);
        return (box.className =
          "" + box.className + " " + this.config.animateClass);
      };
  
      WOW.prototype.applyStyle = function(box, hidden) {
        var delay, duration, iteration;
        duration = box.getAttribute("data-wow-duration");
        delay = box.getAttribute("data-wow-delay");
        iteration = box.getAttribute("data-wow-iteration");
        return box.setAttribute(
          "style",
          this.customStyle(hidden, duration, delay, iteration)
        );
      };
  
      WOW.prototype.resetStyle = function() {
        var box, _i, _len, _ref, _results;
        _ref = this.boxes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box.setAttribute("style", "visibility: visible;"));
        }
        return _results;
      };
  
      WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
        var style;
        style = hidden
          ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;"
          : "visibility: visible;";
        if (duration) {
          style +=
            "-webkit-animation-duration: " +
            duration +
            "; -moz-animation-duration: " +
            duration +
            "; animation-duration: " +
            duration +
            ";";
        }
        if (delay) {
          style +=
            "-webkit-animation-delay: " +
            delay +
            "; -moz-animation-delay: " +
            delay +
            "; animation-delay: " +
            delay +
            ";";
        }
        if (iteration) {
          style +=
            "-webkit-animation-iteration-count: " +
            iteration +
            "; -moz-animation-iteration-count: " +
            iteration +
            "; animation-iteration-count: " +
            iteration +
            ";";
        }
        return style;
      };
  
      WOW.prototype.scrollHandler = function() {
        return (this.scrolled = true);
      };
  
      WOW.prototype.scrollCallback = function() {
        var box;
        if (this.scrolled) {
          this.scrolled = false;
          this.boxes = function() {
            var _i, _len, _ref, _results;
            _ref = this.boxes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              if (!box) {
                continue;
              }
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }
              _results.push(box);
            }
            return _results;
          }.call(this);
          if (!this.boxes.length) {
            return this.stop();
          }
        }
      };
  
      WOW.prototype.offsetTop = function(element) {
        var top;
        top = element.offsetTop;
        while ((element = element.offsetParent)) {
          top += element.offsetTop;
        }
        return top;
      };
  
      WOW.prototype.isVisible = function(box) {
        var bottom, offset, top, viewBottom, viewTop;
        offset = box.getAttribute("data-wow-offset") || this.config.offset;
        viewTop = window.pageYOffset;
        viewBottom = viewTop + this.element.clientHeight - offset;
        top = this.offsetTop(box);
        bottom = top + box.clientHeight;
        return top <= viewBottom && bottom >= viewTop;
      };
  
      WOW.prototype.util = function() {
        return this._util || (this._util = new Util());
      };
  
      WOW.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent);
      };
  
      return WOW;
    })();
  }.call(this));
  
  wow = new WOW({
    animateClass: "animated",
    offset: 100
    
  });
  wow.init(); */
