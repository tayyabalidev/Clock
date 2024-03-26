let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;



 
let timer = false;


function start(){
    timer = true;
    myFun();
}
function stop(){
    timer = false;
    myFun();
}
function reset(){
    location.reload();
}


function myFun(){
    if (timer == true){
        milli = milli + 1;
        if(milli==100){
            sec = sec + 1
            milli = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0
        }
        if(min == 60){
            hr = hr + 1;
            min = 0
        }
         
        let getsec = sec;
        let getmin = min;
        let gethr = hr;

        if(sec < 10){
            getsec= "0" +sec;
        }
        if(min < 10){
            getmin= "0" +min;
        }
        if(hr < 10){
            gethr= "0" +hr;
        }
        setTimeout("myFun()", 10)
        document.getElementById("milli").innerHTML=milli;
        document.getElementById("sec").innerHTML=getsec;
        document.getElementById("min").innerHTML=getmin;
        document.getElementById("hr").innerHTML=gethr;
    }


}