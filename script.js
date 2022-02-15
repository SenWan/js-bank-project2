//deposit
let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');

//withdraw
let balanceOutput = document.getElementById('balance-output');
let withdrawValue = document.getElementById('withdraw-value');

//total balance
let withdrawOutput = document.getElementById('withdraw-output');

// not to repeat always convert in number
function addMoney(currentAmount, newAmount){
    return Number(currentAmount) + Number(newAmount);
}

function getMoney(currentAmount, newAmount){
    return Number(currentAmount) - Number(newAmount);
}

function deposit(){
    const totalDeposit = addMoney(depositOutput.innerText, depositValue.value);
    depositOutput.innerText = totalDeposit;
    const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
    balanceOutput.innerText = totalBalance;

    depositValue.value = '';
}

function withdraw(){
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
    withdrawOutput.innerText = totalWithdraw;

    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;

    withdrawValue.value = '';
}