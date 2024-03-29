(function(j,undefined){  
  j.cycleArray = function(arr,closure,interval){
  return {
      'array':arr,
      'func':closure,
      'interval':interval,
      'cycler':j({}),
      'current_position':0,
      'init': function(){  
          var self = this; 
          self.current_position = 0;         
          j(self.array).each(function(e){
            self.cycler.queue("cycleArray",self.func.bind(this));
          });
          return this;
      },
      'start':function(){
        var self = this;
        self.init()._setTimeout();        
        return self;
      },
      'next':function(){
        var self = this;
        clearTimeout(self.timeout);
        self.current_position += 1;
        if(self.current_position + 1 > self.array.length) self.current_position = self.array.length - 1;
        self.func.apply(self.array[self.current_position])
      },
      'prev':function(){
        var self = this;
        clearTimeout(self.timeout);
        self.current_position -= 1;
        if(self.current_position < 0 ) self.current_position = 0;
        self.func.apply(self.array[self.current_position])
      },
      'pause':function(){
        clearTimeout(this.timeout);
      },
      '_next':function(self){
          self.cycler.dequeue('cycleArray');
          self.current_position += 1;
          if(self.cycler.queue('cycleArray').length == 0 ) self.init();
          self._setTimeout();
      },
      '_setTimeout':function(){
        var self = this;
        self.timeout = setTimeout(self._next,self.interval,self);
      }
  }}    
})(jQuery)


