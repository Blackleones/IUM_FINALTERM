/*UTILITY*/
function randomRange(val){
    var max = 10;
    var min = 0;
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

/*SYSTEM*/
function System(){
    var system = {
        isInit: false,//mi occorre per la sincronizzazione con UI
        chartSize : 100,
        cpuIndex : 1,
        hddIndex : 1,
        ramIndex : 1,
        numOfCpu : 1,
        numOfHdd : 1,
        cpuCharts : [],
        hddCharts : [],
        ramChart : [0],
        init : function(cpu, hdd){
            if(cpu === parseInt(cpu, 10))
                system.numOfCpu = cpu;
            else
                console.log("init - errore formato CPU. Valore default 1");
            
            if(hdd === parseInt(hdd, 10))
                system.numOfHdd = hdd;
            else
                console.log("init - errore formato HDD. Valore default 1");
            
            for(i = 0; i < system.numOfCpu; i++)
                system.cpuCharts[i] = [0];
            
            for(i = 0; i < system.numOfHdd; i++)
                system.hddCharts[i] = [0];
            
            system.isInit = true;
        },
        next : function(){
            if(system.cpuIndex < system.chartSize){
                for(i = 0; i < system.numOfCpu; i++)
                    system.cpuCharts[i][system.cpuIndex] = randomRange(system.cpuCharts[i][system.cpuIndex-1]);   
                
                system.cpuIndex++;
            }else{
                for(i = 0; i < system.numOfCpu; i++)
                    system.cpuCharts[i].shift();
                
                system.cpuIndex--;
            } 
        }
    }
    
    return system;
}

/*funzioni gestione interfaccia grafica*/
function UI(){
    var UI = {
        currentView : 'home',
        system : undefined,
        changeView : function(v){
            if(UI.currentView != v){
                UI.currentView = v;
            }
        },
        drawHome : function(){
            console.log("DrawHome");
        },
        drawCpu : function(){
            console.log("DrawCpu");
        },
        drawHdd : function(){
            console.log("DrawHdd");
        },
        drawRam : function(){
            console.log("DrawRam");
        },
        draw : function() {
            if(UI.system.isInit == false)
                return;
            
            UI.system.next();
            
            if(UI.currentView == 'home')
                UI.drawHome();
            if(UI.currentView == 'cpu')
                UI.drawCpu();
            if(UI.currentView == 'hdd')
                UI.drawHdd();
            if(UI.currentView == 'ram')
                UI.drawRam();
        },
        setSystem : function(system){
            UI.system = system;
        },
        main : function(cpu, hdd){
            if(UI.system == undefined)
                console.log("collegare il sistema");
            else
                UI.system.init(cpu, hdd);
            
            setInterval(UI.draw, 1000);
        }
    }
    
    return UI;
}

var UI = UI();
var s = System();
UI.setSystem(s);
UI.main(1,1);