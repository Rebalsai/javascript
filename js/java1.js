// function App(){
//     document.getElementById("demo").innerHTML="ziraff"
// }

// let x = 10;
// if(x>=10){
//     document.write(x)
// }


// let i =0;
// while(i<10){
//     document.write(i);i++
// }


// let i=0;
// do{
//     document.write(i);i++;
// }while(i<10)

// function App(callback){
//     document.write("hello");
//      callback();
// }
// App(document.write("welcome"));

function App()  {
let x = document.getElementById("v1").value;
let y = document.getElementById("v2").value;
let result = parseInt(x)+parseInt(y);
document.getElementById("demo").innerHTML=result;
}

function concat()  {
    let x = document.getElementById("v1").value;
    let y = document.getElementById("v2").value;
    let result = x.concat(y);
    document.getElementById("demo").innerHTML=result;
    }
    
