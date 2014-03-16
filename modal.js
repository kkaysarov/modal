(function() {
  var root = this;
  
  var previous = root.Modal;
  
  // Safe reference for Modal Object
  var Modal = function(el) {
    this.el = document.querySelectorAll(el);
    this.init();
  };
   
  // Plugin Version
  Modal.VERSION = '0.0.1';
  
  Modal.prototype.init = function(){
    
  };
  
  // Exports Plugins for use in CommonJS enviroment
  // with backwards-compatibility for old 'require()' API.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Modal;
    }
    exports.Modal = Modal;
  } else {
    root.Modal = Modal;
  }
  
  // AMD-Module Definition
  if (typeof define === 'function' && define.amd) {
    define('modal', [], function() {
      return Modal;
    });
  }
  
}).call(this);