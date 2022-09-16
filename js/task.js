let cars=['DAY','MONTH','YEAR']
let carsfield=document.getElementById("n2");

function carsSelect(){
    //debugger
    for(let i=0;i<3;i++){
        let carss = cars[i];
        console.log(carss);
        let selectOption=document.createElement("option");
        selectOption.textContent = carss;
        carsfield.appendChild(selectOption);
        

    }
}
//carsSelect();


// function App(){
//    // document.write("hello world")
// }