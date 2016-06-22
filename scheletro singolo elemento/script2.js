function createSystem(){
    var system = {
        chartSize : 100,
        numOfCpu : 4,
        numOfHdd : 2,
        cpuChart1 : [0],
        cpuChart2 : [0],
        cpuChart3 : [0],
        cpuChart4 : [0],
        hddChart1 : [0],
        hddChart2 : [0]
    }
    
    return system;
}
    
function start(system){
    var sys = system;
    /*range di valori da sommare per la generazione di numeri casuali*/
    var max = 10;
    var min = 0;
    
    function randomRange(val){
        var alpha = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if(val == 100 || val + alpha > 100)
            return val - alpha;
        
        if(val == 0 || val - alpha < 0)
            return val + alpha;
        
        if(Math.random() < 0.4)
            return val + alpha;
        
        if(val < 50 && Math.random() < 0.6)
            return val + alpha;
        
        return val - alpha;
    }
    
    function next(){
        var cpuIndex = sys.cpuChart1.length;
        
        if(cpuIndex < sys.chartSize){
            sys.cpuChart1[cpuIndex] = randomRange(sys.cpuChart1[cpuIndex-1]);
            sys.cpuChart2[cpuIndex] = randomRange(sys.cpuChart2[cpuIndex-1]);
            sys.cpuChart3[cpuIndex] = randomRange(sys.cpuChart3[cpuIndex-1]);
            sys.cpuChart4[cpuIndex] = randomRange(sys.cpuChart4[cpuIndex-1]);            
        }else{
            sys.cpuChart1.shift();
            sys.cpuChart2.shift();
            sys.cpuChart3.shift();
            sys.cpuChart4.shift();
        }        
    }
    
    function draw(){
        /*
            a seconda della sezione scelta dell'utente andremo a disegnare dei grafici
        */
        /*
            if(bottone...)
                home();
            if(bottone...)
                infoCpus();
            if(bottone...)
                infoHdd();
            if(bottone...)
                infoSpace();
        
        */
    }
    
    function main(){
        next();
        draw();
    }
    /*esecuzione*/
    setInterval(next, 1000);
    
}

var s = createSystem();
start(s);