(function() {
    
    window.StorageTaskCounter = function(key) {
    
      let x = parseInt(localStorage.getItem(key) || 0);
      
      let SELF = {
        add,
        reset,
        store,
      }
      
      Object.defineProperty(SELF, 'value', {
        get() {
          return x;
        },
      })
      
      function add() {
        x += 1;
        store();
      }
      
      function reset() {
        x = 0;
        localStorage.removeItem(key)
      }
      
      function store() {
        localStorage.setItem(key, x);
      }
      
      function getValue() {
        return x;
      }
      
      return SELF;
      
    };
    
  })();
