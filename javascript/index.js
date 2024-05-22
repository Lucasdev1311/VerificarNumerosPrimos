const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e)=>{
  e.preventDefault()

  const num = Number(form.inNumber.value)

  /*let numDivisor = 0
  for(let i = 1; i <= num; i++){
    if(num % i == 0){
      numDivisor++
    }
  }
  if (numDivisor == 2){
    resp.innerText = `${num} é primo`
  }else{
    resp.innerText = `${num} não é primo`
  }*/

  let temDivisor = 0
  for (let i = 2; i <= num /2; i++){
    if(num % i == 0){
      temDivisor = 1                    // só por curiosidade essa forma é mais eficiente

      break
    }
  }
  if (num > 1 && !temDivisor){
    resp.innerText = `${num} é primo`
  }else{
    resp.innerText = `${num} não é primo`
  }
})