var DEBUG = false;

function main(){
    var pb = [
        document.getElementById('cpu-1'),
        document.getElementById('cpu-2'),
        document.getElementById('cpu-3'),
        document.getElementById('cpu-4')
    ];
    
    console.log("avvio");
    
    setInterval(function(){
        for(var cpu in pb){
           cpu = pb[cpu];
           cpuprog = (cpu.getElementsByClassName('progress')[0]).getElementsByTagName('span')[0];
           cputext = (cpu.getElementsByTagName('span')[1]);
           var rand = Math.floor(Math.random()*100);
           var color = rand <= 70 ? "rgba(0,255,22,1)": rand < 90 ? "rgba(255,255,22,1)" : "rgba(229,61,0,1)";
           cpuprog.style.background = color;
           cpuprog.style.width = rand+"%";
           cputext.innerHTML = rand+"%";
        }
    }, 3000);
    
}

main();
