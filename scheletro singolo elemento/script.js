function debug(text){
    var d = document.getElementById('debug');
    var p = document.createElement('p');
    var t = document.createTextNode(text);
    p.appendChild(t);
    d.appendChild(p);
}

var state = "up"

function move(){
    var d = document.getElementById('progressbar1');
    var s = d.getElementsByTagName('span')[0];
    var w_perc = s.style.width;
    var w = parseInt(w_perc.replace('%', ''));
    
    if(state == "up"){
        if(w < 100)
            s.style.width = (w + 1) + '%';
        else
            state = "down";
    }
    
    if(state == "down"){
        if(w > 0)
            s.style.width = (w - 1) + '%';
        else
            state = "up";
    }
    
    //printDebug(s.style.width + " state: " + state);
}

var printDebug = debug;
move();

setInterval(move, 90);