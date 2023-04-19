const preGuess = document.getElementById('preGuess')
const isRightWrong = document.getElementById('isRightWrong')
const numRange = document.getElementById('numRange')
const inputNum = document.getElementById('inputNum')
const congrats = document.getElementById('congrats')
const submitBtn = document.getElementById('submitBtn')
const detail = document.getElementById('detail')
const preText = document.getElementById('preText')
const Btn = document.createElement("button")
Btn.textContent = "start New Game"

// generate random number 1-100
let ranNum = Math.floor(Math.random()*100)+1
console.log(ranNum)

// submit guess button onClick event
submitBtn.addEventListener("click",()=>{
    //assigning inputNum value to Value
   const value = inputNum.value

  if(value < ranNum){
    preGuess.textContent += " "+value
    preText.textContent = `Previous guesses: ${preGuess.textContent}`
    isRightWrong.textContent ="Wrong"
    numRange.textContent = "Last guess was too low!"
    inputNum.value=""
    inputNum.focus()
   }else if(value > ranNum){
    preGuess.textContent += " "+value
    preText.textContent = `Previous guesses: ${preGuess.textContent}`
    isRightWrong.textContent ="Wrong"
    numRange.textContent = "Last guess was too high!"
    inputNum.value=""
    inputNum.focus()
   }else{
    preGuess.textContent = " "+value
    preText.textContent = `Previous guesses: ${preGuess.textContent}`
    congrats.textContent = "congratulation ! You won 🎉🎊"
    isRightWrong.textContent =""
    numRange.textContent = ""
    detail.appendChild(Btn)
   }
})

// new game funtion
Btn.addEventListener("click",()=>{
    window.location.reload()
    inputNum.focus()
})