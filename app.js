function main(){
    getTxt();
    decided();
    console.log(typeof(result));
document.getElementById("result").innerHTML = result
}
function getTxt() {
u = document.getElementById("u").value;
v = document.getElementById("v").value;
a = document.getElementById("a").value;
s = document.getElementById("s").value;
t = document.getElementById("t").value;

console.log( "JavaScript รับค่า u = "+ u );
console.log( "JavaScript รับค่า v = "+ v );
console.log( "JavaScript รับค่า a = "+ a );
console.log( "JavaScript รับค่า s = "+ s );
console.log( "JavaScript รับค่า t = "+ t );
}

function decided() {
    if(u == "-" && a == "-"){ 
        vst();
    }else if(u == "-"){
        vast();
    }else if(v == "-"){
        uast();
    }else if(a == "-"){
        uvst();
    }else if(s == "-"){
        uvat();
    }else if(t == "-"){
        uvas();
    }else{
        result = "ERROR[some value not complete]"
    }
}

// vst
function vst() {   
    if(v == "?"){
        // console.log("v?")
        s = Number(s)
        t = Number(t)
        // console.log(s,t)
        result = "v = " + String((s/t).toFixed(3)) + "m/s" + " :(vst, v)"
        // console.log(result)
    }
    else if(s == "?"){
        v = Number(v)
        t = Number(t)
        result = "s = " + String((v*t).toFixed(3)) + "m" + " :(vst, s)"
    }
    else if(t == "?"){
        s = Number(s)
        v = Number(v)
        result = "t = " + String((s/v).toFixed(3)) + "s" + " :(vst, t)"
    }
}

//U A S T
function uast() {
    if(u == "?"){
        a = Number(a)
        s = Number(s) 
        t = Number(t)      
        result = "u = " + String(s/t-0.5*a*t) + " m/s :(uast, u)"
    }
    else if(a == "?"){
        u = Number(u)
        s = Number(s) 
        t = Number(t)  
        result = "a = " + String((2*s - 2*t*u)/Math.pow(t,2)) + " m/s<sup>2</sup> :(uast, a)"

    }
    else if(s == "?"){
        u = Number(u)
        a = Number(a) 
        t = Number(t)  
        result = "s = " + String(u*t + 0.5*a*(Math.pow(t,2))) + "m :(uast, s)"
    }
    else if(t == "?"){
        u = Number(u)
        a = Number(a) 
        s = Number(s)  
        result1 = ((-u) + Math.sqrt(Math.pow(u,2) + (2*a*s)))/a
        result2 = ((-u) - Math.sqrt(Math.pow(u,2) + (2*a*s)))/a
        console.log(result1,result2)
        if(result2 >= 0){
            result = "t = " + String(result2) + "s :(uast, t.1)"
        }
        else if(result1 >= 0) {
            result = "t = " + String(result1) + "s :(uast, t.2)"
        }else{
            result = "Error (uast ,t)"
        }
    }
    else{
        result = "Error (uast)"
    }
}

function vast() {
    if(v == "?"){
        a = Number(a)
        s = Number(s) 
        t = Number(t)
        result = "v = " + String(((a*Math.pow(t, 2) + 2*s)/(2*t)).toFixed(3)) + " m/s :(vast, v)"
    }
    else if(a == "?"){
        v = Number(v)
        s = Number(s) 
        t = Number(t)
        result = "a = " + String(((2*t*v) - (2*s))/Math.pow(t, 2)) + " m/s :(vast, a)" 
    }
    else if(s == "?"){
        v = Number(v)
        a = Number(a) 
        t = Number(t)
        result = "s = " + String((v*t) - (0.5*a*Math.pow(t, 2))) + "m :(vast, s)"

    }
    else if(t == "?"){
        v = Number(v)
        a = Number(a)
        s = Number(s) 
        result1 = (v + Math.sqrt(Math.pow(v, 2) - 2*a*s))/a
        result2 = (v - Math.sqrt(Math.pow(v,2) - (2*a*s)))/a
        if(result1 >= 0){
            result = "t = " + String(result1) + "s :(vast, t.1)"
        }                                                     
        else if(result2 >= 0){
            result = "t = " + String(result2) + "s :(vast, t.2)"
        }else{
            result = "Error (vast, t)"
        }
    }else{
        result = "Error vast"
    }
}

function uvas() { //no"t"
    if(u == "?"){
        v = Number(v)
        a = Number(a)
        s = Number(s) 

        result1 = -Math.sqrt((-2*a*s) + Math.pow(v, 2))
        result2 = Math.sqrt((-2*a*s) + Math.pow(v, 2))

        if(result1 >= 0){
            result = "u = " + String(result1) + "m/s :(uvas, u.1)"
        }                                                     
        else if(result2 >= 0) {
            result = "u = " + String(result2) + "m/s :(uvas, u.2)"
        }else{
            result = "Error (uvas, u)"
        }
    }else if(v == "?"){
        v = Number(v)
        a = Number(a)
        s = Number(s) 
        result1 = -Math.sqrt(Math.pow(u, 2) + 2*a*s)
        result2 = Math.sqrt(Math.pow(u, 2) + 2*a*s)
        if(result1 >= 0){
            result = "v = " + String(result1) + "m/s :(uvas, v.1)"
        }else if(result2 >= 0){
            result = "v = " + String(result2) + "m/s :(uvas, v.2)"
        }else{
            result = "Error (uvas, v)"        }
    }
    else if(a == "?"){
        u = Number(u)
        v = Number(v)
        s = Number(s)
        result = "a = " + String((Math.pow(v, 2) - (Math.pow(u, 2)))/(2*s)) + " m/s<sup>2</sup> :(uvas, a)"
    }
    else if(s == "?"){
        u = Number(u)
        v = Number(v)
        a = Number(a)
        result = "s = " + String((Math.pow(v, 2) - (Math.pow(u, 2)))/(2*a)) + " m :(uvas, s)"
    }
    else{
        result = "ERROR (uvas)"
    }
}

function uvat() {
    if (u == "?") {
        v = Number(v)
        a = Number(a)
        t = Number(t)
        result = "u = " + String(v - a*t) + " m/s :(uvat, u)"
    }
    else if (v == "?") {
        u = Number(u)
        a = Number(a)
        t = Number(t)
        result = "v = " + String(u + a*t) + " m/s :(uvat, v)"
    }
    else if (a == "?") {
        u = Number(u)
        v = Number(v)
        t = Number(t)
        result = "a = " + String((v-u)/t) + " m/s<sup>2</sup> :(uvat, a)"
    }
    else if (t == "?") {
        u = Number(u)
        v = Number(v)
        a = Number(a)
        result = "t = " + String((v-u)/a) + " s :(uvat, t)"
    }
}

function uvst() {
    if (u == "?") {
        v = Number(v)
        s = Number(s)
        t = Number(t)
        result = "u = " + String(((2*s)-(t*v))/t) + " m/s :(uvst, u)"
    }
    else if (v == "?" ){
        u = Number(u)
        s = Number(s)
        t = Number(t)
        result = "v = " + String(((2*s)-(t*u))/t) + " m/s :(uvst, v)"
    }
    else if (s == "?"){
        u = Number(u)
        v = Number(v)
        t = Number(t)
        result = "s = " + String(((u+v)/2)*t) + " m :(uvst, s)"
    }
    else if (t == "?") {
        u = Number(u)
        v = Number(v)
        s = Number(s)
        result = "t = " + String((2*s)/(u+v)) + " s:(uvst, t)"
    }else{
        result = "ERROR (uvst)"
    }
}