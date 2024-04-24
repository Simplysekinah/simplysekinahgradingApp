let inp = document.getElementById("input1")
let inp2=document.getElementById("input2")

function checkvalue(params) {
    if (inp.value=="") {
        inp2.innerHTML="input your value"
    } 
    else if (inp.value>= 75){
        inp2.innerHTML="A - Excellent"
    }
    else if (inp.value>= 60){
        inp2.innerHTML="B - Verygood"
    }
    else if (inp.value>= 59){
        inp2.innerHTML="C - Good"
    }
    else if (inp.value>= 45){
        inp2.innerHTML="D - Justgo"
    }
    else if (inp.value>= 34){
        inp2.innerHTML="E - pass = 34"
    }
    else{
        inp2.innerHTML="F - Failed"
    }  
}




