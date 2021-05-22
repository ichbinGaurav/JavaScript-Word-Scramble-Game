const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const text = document.getElementById('inputText');
const scoreBox = document.getElementById('scoreBox');


let newWords = "";
let randomWords = "";
let play = false;
let score = 0;
let wordArray = ['javascript', 'python', 'java', 'laravel', 'bootstrap', 'mongodb', 'oracle', 'reactjs','flutter','ionic', 'nodejs'];

//every time new word when you refresh the page
const createNewWords = () => {
    let randomNum = Math.floor(Math.random() * wordArray.length);

    // console.log(randomNum);
    let newTempWord = wordArray[randomNum];
    // console.log(newTempWord); 
    return newTempWord;
}

// It will scramble the word which you get from the createWords.
const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";

        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split("")).join("");

        guess.classList.toggle('hidden');
        msg.innerHTML = `Guess This Word :- <h2>${randomWords}</h2>`;
    }
    else {
        let tempWord = guess.value;

        if (text.value === "") {
            msg.innerHTML = `Oops! <br> You have not write your answer yet.<br> Please Guess the Word :- <h2>${randomWords}</h2>`;
        }
        else if (newWords === tempWord) {
            // console.log('correct');
            play = false;
            msg.innerHTML = `Well done. It is ${newWords}`;
            btn.innerHTML = "Start Again !";
            score += 1;
            scoreBox.innerHTML = "Score: " + score;

            guess.classList.toggle('hidden');
            guess.value = "";
            console.log(score);
        }
        else {
            score = 0;
            scoreBox.innerHTML = "Score: " + score;
            // console.log('incorrect');
            msg.innerHTML = `Oops! Please try again for word :-   <h2>${randomWords}</h2>`;
        }
    }
});
