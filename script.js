"use strict";

const plaing = function(){
    let result = Math.floor((Math.random() * 100) + 1);
    alert(result);
    let ans = prompt("Угадайте число от 1 до 100");
    alert(ans);
    const action = function(ans){
        if(isNaN(+ans) || ans === ''){
            ans = prompt("Введите число");
            action(ans);
        }
        else if(ans === null){alert("Пока");}
        else if(+ans < result){
            ans = prompt("Загаданное число больше");
            action(ans);
        }
        else if(+ans > result){
            ans = prompt("Загаданное число меньше");
            action(ans);
        }
        else if(+ans === result){
            alert("Вы выиграли!!!");
        }
        return;

    };
    action(ans);
};

plaing();
