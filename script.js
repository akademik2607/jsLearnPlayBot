"use strict";

const isNumber = function(num){
    return !isNaN(parseInt(num)) && isFinite(num);
};

const play = function(){
    const result = Math.floor((Math.random() * 100) + 1);
    const answer = prompt("Угадайте число от 1 до 100");
    const action = function(answer){
        if(!isNumber(answer) || answer === ''){
            answer = prompt("Введите число");
            action(answer);
        }
        else if(answer === null){alert("Игра окончена!");}
        else if(+answer < result){
            answer = prompt("Загаданное число больше");
            action(answer);
        }
        else if(+answer > result){
            answer = prompt("Загаданное число меньше");
            action(answer);
        }
        else if(+answer === result){
            alert("Вы выиграли!!!");
        }
        return;

    };
    action(answer);
};

play();
