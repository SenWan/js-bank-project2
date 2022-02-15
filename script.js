let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');
function deposit(){
    depositOutput.innerText = Number(depositOutput.innerText) + Number(depositValue.value); // we can write Number instead of parseFloat or parseInt
    depositValue.value = '';
}