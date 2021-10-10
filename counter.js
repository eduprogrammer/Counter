/* 
    Copyright 2021. Eduardo Programador
    consultoria@eduardoprogramador.com
    www.eduardoprogramador.com

    Usage: 
    Constructor: 

    Counter (theNumber, theElement, interval)

    theNumber: number inside html element (eg.: <h1>250</h1>)
    theElement: string that contains the element id (eg.: "thing" from document.getElementById("thing"))
    interval: timer speed in milliseconds

    Methods:

    increase() - Increase the counter.
    decrease() - Decrease the counter.

    Examples:

    put the javascript inside your script tag in head.
    <script type="text/javascript" src="eduprogrammer.github.io/js/counter.js"></script>

    <h1 id="my">456</h1>
    
    <script>

        var counter = new Counter(456, "my", 500) - 5seconds

        counter.increase() - 1,2,3,4...till 456.
        counter.decrease() - 456,455,454... till 0.

    </script>
    
*/

class Counter {
    

    constructor(theNumber, theElement, interval) {
        this.theNumber = theNumber;
        this.theElement = theElement;
        this.interval = interval;
    }

    increase() {            

        var number = this.theNumber;
        var i = 0;
        let string = this.theElement;
        let int = this.interval;


        setInterval(function () {
            
            if(i < number) {
                i++;
                document.getElementById(string).innerText = "" + i;              
            } 

        },int);

        
        
    }

    decrease() {
        
        var number = this.theNumber;
        let string = this.theElement;
        let int = this.interval;
        
        setInterval(function () {

            if(number > 0) {
                number--;
                document.getElementById(string).innerText = "" + number;
            }

            
        },int);


    }

}