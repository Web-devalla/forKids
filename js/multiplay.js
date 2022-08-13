
let answer = 0;

function generateEquation () {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let dummyAnswer1 = Math.floor(Math.random() * 20) + 5;
    let dummyAnswer2 = Math.floor(Math.random() * 20) + 5;
    let allAnswers = [];
    let switchAnswers = [];
    answer = num1 * num2;
    number1.innerHTML = num1;
    number2.innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for(i = allAnswers.length; i--; ) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i +1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}


generateEquation();