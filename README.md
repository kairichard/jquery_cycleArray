jquery_cycleArray
=================

Like an iterator but different - lets you cycle trough an array with a function

    jQuery.cycleArray([1,2,3],function(){ console.log(this) },2000).start() // Logs an element every 2secs
    jQuery.cycleArray(jQuery('li'),function(){ jQuery(this).trigger('click') },2000).start() // clicks on element every 2secs

    // Interfaceing with the cycle
    var cycler = jQuery.cycleArray(jQuery('li'),function(){ jQuery(this).trigger('click') },2000)
    cycler.next()
    cycler.next()
    cycler.start()

If the cycler encounters the last element its jumps back to the first element and start over again
    
