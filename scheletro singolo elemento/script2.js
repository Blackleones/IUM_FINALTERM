function createSystem(){
    var system = {
        chartSize : 100,
        numOfCpu : 4,
        numOfHdd : 2,
        cpuCharts : [],
        hddCharts : []
    }
    
    return system;
}
    
function start(system){
    var sys = system;
    /*range di valori da sommare per la generazione di numeri casuali*/
    var max = 10;
    var min = 0;
    
    function init(){
        console.log("inizializzo sys");
        
        for(i = 0; i < sys.numOfCpu; i++)
            sys.cpuCharts[i] = [0];
        
        for(i = 0; i < sys.numOfHdd; i++)
            sys.hddCharts[i] = [0];
    }
    
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
        var cpuIndex = sys.cpuCharts[0].length;
        
        if(cpuIndex < sys.chartSize){
            for(i = 0; i < sys.numOfCpu; i++)
                sys.cpuCharts[i][cpuIndex] = randomRange(sys.cpuCharts[i][cpuIndex-1]);       
        }else{
            for(i = 0; i < sys.numOfCpu; i++)
                sys.cpuCharts[i].shift();
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
    
    init();
    /*esecuzione: da cambiare next -> main*/
    setInterval(next, 1000);
    
}

/*TEST*/
var s = createSystem();
start(s);