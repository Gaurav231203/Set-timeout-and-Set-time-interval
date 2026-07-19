let count =0;
let button = document.querySelector("#downloadBtn")
let progess = document.querySelector("#progress")
let percentage =document.querySelector("#percentage")

button.addEventListener("click" ,()=>{

 let fullbar=setInterval(()=>{
   if( count<100){
    count++;
    progess.style.width=`${count}%`
      percentage.style.color="green"
    percentage.textContent=`${count}%`

   }
   else{
    document.querySelector("#status").textContent="downloaded";
    clearInterval(fullbar)
   }

 },30)
})

//3000 deive bye 100 to hume mila 30 to humko hrr 30 ms mai ye progress age badhhani hai