var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector(".check-btn");
var result = document.querySelector(".result");
var errMsg = document.querySelector(".err-msg");


function clickHandler(){
    let percentage = 0;
    let profit = 0;
    let loss = 0;
    if (currentPrice.value > initialPrice.value){
        profit = (currentPrice.value - initialPrice.value)*quantity.value;
        percentage = (profit/initialPrice.value)*100;
        result.innerText = `Hey, the Profit is ${profit} and the percent is ${percentage}%`;
    }else if(currentPrice.value < initialPrice.value){
        loss = (initialPrice.value - currentPrice.value)*quantity.value;
        percentage = (loss/initialPrice.value)*100;
        result.innerText = `Hey, the Loss is ${loss} and the percent is ${percentage}%`;
    }else{
        result.innerText = `No pain no gain and no gain no pain`;
    }
}

checkBtn.addEventListener('click', clickHandler);

