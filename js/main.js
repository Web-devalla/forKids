
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const number1 = document.querySelector('#num1');
    const number2 = document.querySelector('#num2');
    const answerOptions = document.querySelectorAll('.answer-options p');
    const audioWrongAnswer = document.querySelector("#wrong");
    const audioCorrectAnswer = document.querySelector("#correct");
    let win = document.querySelector('.win');
    let loss = document.querySelector('.loss');
    let scoreWin= 0;
    let scoreLoss= 0;

    answerOptions.forEach(function(ans) {
        ans.addEventListener('click', () => {
            if(ans.innerHTML == answer) {
                generateEquation();
                win.innerHTML = ++scoreWin;
                audioCorrectAnswer.play();
            } else {
                audioWrongAnswer.play();
                loss.innerHTML = ++scoreLoss;
            }
        });
    });
    
