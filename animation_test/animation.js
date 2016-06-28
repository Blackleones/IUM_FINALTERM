var DEBUG = false;

function incWidth(span, callback){
    if(span.style.width == "100%"){
        callback();    
    }else{
        var width = parseInt((span.style.width).replace('%', ''));
        
        if(width > 70)
            span.style.background = "linear-gradient(to right, rgba(255,255,22,1), rgba(255,255,22,1))";
        
        if(width > 90)
            span.style.background = "linear-gradient(to right, rgba(229,61,0,1), rgba(229,61,0,1))";
        
        if(DEBUG)
            console.log(width);
        span.style.width = width + 1 + '%';            
    }
}

function main(){
    var div = document.getElementById('div1');
    var span = div.getElementsByTagName('span')[0];

    /*
        il thread avvia una funziona aninoma che
        mi serve per poter avviare la funzione incWidth 
        passandogli 2 parametri:
            lo span da elaborare
            la funzione callback da chiamare per terminare
            il thread
    */
    var pbar = setInterval(function(){
        incWidth(span, function(pbar){
            clearInterval(pbar);
        });
    }, 200);
}

main();
