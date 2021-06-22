const Btn=document.getElementById("btn")
const background=document.getElementById("Dark")


Btn.addEventListener("click",function(){

   
    if (Btn.checked) {
        console.log(" Light");
        background.classList.remove("darkmode");
      } else {
        console.log("Dark ");
        background.classList.add("darkmode");
      }
    

})

