

// function name() {
//     <select>
//     <option>select any one</option>
//     <option>A.P</option>
//     <option>T.s</option>
// </select>
//     var opt=document.getElementById("demo").value;
//     document.write(opt)
// }

let cars=['DAY','MONTH','YEAR']
let carsfield=document.getElementById("n2");

function carsSelect(){
    //debugger
    for(let i=0;i<3;i++){
        let carss = cars[i];
        let selectoption=document.createElement("option");
        selectoption.textContent = carss;
        carsfield.appendChild(selectoption);

    }
}
carsSelect();

