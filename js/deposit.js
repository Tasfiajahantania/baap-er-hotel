// stap=1: add even lesener to yhe deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // stap-2:get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const NewdepositAmountString = depositField.value;
    const NewdepositAmount = parseFloat(NewdepositAmountString);
    // stap-3:get the current deposit total
    // for non input(element other than input,textarea) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const priveousDepositTotalString = depositTotalElement.innerText;
    const priveousDepositTotal = parseFloat(priveousDepositTotalString);
    const currentDepositTotal = priveousDepositTotal + NewdepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    // stap-4:clear deposit field
    depositField.value = '';

    // stap-5: get total blance
    const blanceTotal = document.getElementById('blance-total');
    const priveousBlanceTotalString = blanceTotal.innerText;
    const priveousBlanceTotal = parseFloat(priveousBlanceTotalString);
    // stap-6:calculate total balence
    const currentBlanceTotal = priveousBlanceTotal + NewdepositAmount;
    blanceTotal.innerText = currentBlanceTotal;
    
})