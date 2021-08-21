const angle = document.querySelectorAll('.angle')
const angleOne = document.querySelector('.angle-one-val')
const angleTwo = document.querySelector('.angle-two-val')
const angleThree = document.querySelector('.angle-three-val')
const hypotenuseInput = document.querySelector('.calculate-hypotenuse-val')
const areaInput = document.querySelector('.calculate-area-val')
const calculate = document.querySelector('.calculate')
const calculateScore = document.querySelector('.calculate-score')
const next = document.querySelector('.next')


function calculateTriangleOutcome() {
  if((Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value)) === 180 && Number(angleOne.value) > 0 && Number(angleTwo.value) > 0 && Number(angleThree.value) > 0) {
    document.querySelector('.triangle-formed').classList.remove('hidden')
    document.querySelector('.triangle-formed').classList.add('visible')
    document.querySelector('.quiz').classList.remove('hidden')
    document.querySelector('.quiz').classList.add('visible')
    if (Number(angleOne.value) === 60 && Number(angleTwo.value) === 60 && Number(angleThree.value) === 60) {
      document.querySelector('.calculate-hypotenuse').innerText = 'You have produced a Equilateral triangle with three identical sides, there is no hypotenuse to calculate. Please try with a different triangle.'
    } else if (Number(angleOne.value) === Number(angleTwo.value) || Number(angleOne.value) === Number(angleThree.value)) {
      document.querySelector('.calculate-hypotenuse').innerText = 'You have produced a Isosceles triangle with two identical sides, there is no hypotenuse to calculate. Please try with a different triangle.'
    } 
  } else {
    document.querySelector('.triangle-failed').classList.remove('hidden')
    document.querySelector('.triangle-failed').classList.add('visible')
  }
}

function hypotenuseValidator() {
  if (Number(angleOne.value) === 90 || Number(angleTwo.value) === 90 || Number(angleThree.value) === 90) {
    let hypotenuse = Math.sqrt((3*3) + (4*4))
    if (Number(hypotenuseInput.value) === hypotenuse) {
      document.querySelector('.calculate-area').classList.remove('hidden')
      document.querySelector('.calculate-area').classList.add('visible')
      calculateScore.classList.remove('hidden')
      calculateScore.classList.add('visible')
      document.querySelector('.second-reset').classList.remove('hidden')
      document.querySelector('.second-reset').classList.add('visible')
      next.classList.remove('visible')
      next.classList.add('hidden')
      triangleArea()
    }
  } else {
    let maxAngle = Number(angleOne.value)
    for(i = 0; i < 3; i++) {
      if(Number(angle[i].value) > maxAngle) {
        maxAngle = Number(angle[i].value)
      }
    }
    hypotenuse = parseFloat(Math.sqrt((3*3) + (4*4) - 2*3*4*Math.cos(maxAngle))).toFixed(3)
    if (Number(hypotenuseInput.value) === hypotenuse) {
      triangleArea()
    }
  }
}

function triangleArea() {
  let hypotenuse = Number(hypotenuseInput.value)
  let areaOfTriangle = (Math.sqrt((3 + 4 + hypotenuse)*(-3 + 4 + hypotenuse)*(3 - 4 + hypotenuse)*(3 + 4 - hypotenuse)))/4
  let heightOfTriangle = 2*areaOfTriangle/hypotenuse
  document.querySelector('.triangleHeight').innerText = heightOfTriangle
  calculateTestScore(areaOfTriangle)
}

function calculateTestScore(areaOfTriangle) {
  if(Number(areaInput.value) === areaOfTriangle){
    document.querySelector('.appriciation').innerText = `Well done! You have completed the quiz with all correct answers`
  } else {
    document.querySelector('.appriciation').innerText = `Would you like to try again?`
  }
}

function hypotenuseValidatorNext() {
  if (Number(angleOne.value) === 90 || Number(angleTwo.value) === 90 || Number(angleThree.value) === 90) {
    let hypotenuse = Math.sqrt((3*3) + (4*4))
    if (Number(hypotenuseInput.value) === hypotenuse) {
      document.querySelector('.calculate-area').classList.remove('hidden')
      document.querySelector('.calculate-area').classList.add('visible')
      calculateScore.classList.remove('hidden')
      calculateScore.classList.add('visible')
      document.querySelector('.second-reset').classList.remove('hidden')
      document.querySelector('.second-reset').classList.add('visible')
      next.classList.remove('visible')
      next.classList.add('hidden')
      triangleAreaNext()
    }
  } else {
    let maxAngle = Number(angleOne.value)
    for(i = 0; i < 3; i++) {
      if(Number(angle[i].value) > maxAngle) {
        maxAngle = Number(angle[i].value)
      }
    }
    hypotenuse = parseFloat(Math.sqrt((3*3) + (4*4) - 2*3*4*Math.cos(maxAngle))).toFixed(3)
    if (Number(hypotenuseInput.value) === hypotenuse) {
      triangleAreaNext()
    }
  }
}

function triangleAreaNext() {
  let hypotenuse = Number(hypotenuseInput.value)
  let areaOfTriangle = (Math.sqrt((3 + 4 + hypotenuse)*(-3 + 4 + hypotenuse)*(3 - 4 + hypotenuse)*(3 + 4 - hypotenuse)))/4
  let heightOfTriangle = 2*areaOfTriangle/hypotenuse
  document.querySelector('.triangleHeight').innerText = heightOfTriangle
}
calculate.addEventListener('click', calculateTriangleOutcome)
calculateScore.addEventListener('click', hypotenuseValidator)
next.addEventListener('click', hypotenuseValidatorNext)