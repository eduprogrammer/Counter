# Counter
A javascript library for add counters to html element that contain numbers.

Copyright 2021. Eduardo Programador
    consultoria@eduardoprogramador.com
    www.eduardoprogramador.com
    
    
    #Usage: 
    
    #Constructor: 
    
    Counter (theNumber, theElement, interval)
    
    - theNumber: number inside html element (eg.: <h1>250</h1>)
    - theElement: string that contains the element id (eg.: "thing" from document.getElementById("thing"))
    - interval: timer speed in milliseconds
    
    #Methods:
    
    - increase() - Increase the counter.
    - decrease() - Decrease the counter.
    
    #Examples:
    
    1. put the javascript inside your script tag in head.
      <script type="text/javascript" src="eduprogrammer.github.io/js/counter.js"></script>
    
    2. <h1 id="my">456</h1>
    
    3.
    <script>
        var counter = new Counter(456, "my", 500) - 5seconds
        counter.increase() - 1,2,3,4...till 456.
        counter.decrease() - 456,455,454... till 0.
    </script>
