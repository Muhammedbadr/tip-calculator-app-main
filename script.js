//  input from html
const inputBtn = document.getElementById("inputBtn");
const buttons = document.querySelectorAll(".percentage-button")
const inputEl = document.getElementById("input-bill");
const poepleInputEl =document.querySelector("#input-people")
const tip_amount = document.querySelector("#tip-amount")
const total = document.getElementById("total")
const resltBtn = document.querySelector('.reset-button')
const error = document.getElementById("error")

// input , click 
inputEl.addEventListener("input", billInputFun)
poepleInputEl.addEventListener("input", poepleInputFun)
buttons.forEach(function(btn){
  btn.addEventListener("click", handleClick)
})
inputBtn.addEventListener("input", tipInputFun)
resltBtn.addEventListener('click', reslt);

//values
inputEl.value= "0.0"
poepleInputEl.value = "1"
tip_amount.innerHTML = "$"+ (0.0).toFixed(2)
total.innerHTML="$"+ (0.0).toFixed(2)

let billvalue = 0.0;
let poeplevalue = 1;
let tipvalue = 0.15; 



// function
function billInputFun(){
  billvalue = parseFloat(inputEl.value)
  colcutertip()
}
function poepleInputFun(){
  poeplevalue = parseFloat(poepleInputEl.value)
  colcutertip()
  if(poeplevalue < 1){
    error.style.display = "block";
    error.style.border ="red"
    poepleInputEl.style.border =" 1px solid red";
  }
  else{
    error.style.display = "none";
    poepleInputEl.style.border ="none";

    colcutertip()
  }

}

function tipInputFun(){
  tipvalue = parseFloat(inputBtn.value / 100);
  total.innerHTML="$"+ (0.0).toFixed(2)

  buttons.forEach(function(val){
    val.classList.remove("active")
  })
  colcutertip()
}

function handleClick(event){
  buttons.forEach(function(val){
    val.classList.remove("active")
    if(event.target.innerHTML == val.innerHTML){
      val.classList.add("active")
      tipvalue=parseFloat(val.innerHTML)/100;
     
    }
  })
  colcutertip()

}

function colcutertip(){
  if(poeplevalue >= 1){
    let tipAmount = (billvalue* tipvalue) / poeplevalue;
    let totals = (billvalue+tipAmount)/ poeplevalue;
    tip_amount.innerHTML = "$"+ tipAmount.toFixed(2)
    total.innerHTML="$"+ totals.toFixed(2)
  }
}

function reslt(){
  inputEl.value= "0.0"
  billInputFun()
poepleInputEl.value = "1"
  poepleInputFun()
  tipInputFun.value =""
}









