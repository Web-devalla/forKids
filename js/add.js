

    let answer = 0;

    function generateEquation () {
        let num1 = Math.floor(Math.random() * 13);
        let num2 = Math.floor(Math.random() * 13);
        let dummyAnswer1 = Math.floor(Math.random() * 10);
        let dummyAnswer2 = Math.floor(Math.random() * 10);
        let allAnswers = [];
        let switchAnswers = [];
        answer = num1 + num2;
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


    /*option1.addEventListener('click', function(){
        if(option1.innerHTML == answer) {
            generateEquation();
            audioCorrectAnswer.play();
        } else {
            audioWrongAnswer.play();
        }
    });
    option2.addEventListener('click', function(){
        if(option2.innerHTML == answer) {
            generateEquation();
            audioCorrectAnswer.play();
        } else {
            audioWrongAnswer.play();
        }
    });
    option3.addEventListener('click', function(){
        if(option3.innerHTML == answer) {
            generateEquation();
            audioCorrectAnswer.play();
        } else {
            audioWrongAnswer.play();
        }
    });*/

    generateEquation();