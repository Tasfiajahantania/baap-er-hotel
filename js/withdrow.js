// add even handler with the withdrow button

// stap-1
document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);
    const withdrowTotalElement = document.getElementById('withdrow-total');
    const priveousWithdrowTotalString = withdrowTotalElement.innerText;
    const priveousWithdrowTotal = parseFloat(priveousWithdrowTotalString);
    const currentWithdrowTotal = newWithdrowAmount + priveousWithdrowTotal;
    withdrowTotalElement.innerText = currentWithdrowTotal;
    withdrowField.value = '';
    const balenceTotal = document.getElementById('blance-total');
    const priveousBlanceTotalString = balenceTotal.innerText;
    const priveousBlanceTotal = parseFloat(priveousBlanceTotalString);
    const currentBlanceTotal = priveousBlanceTotal - currentWithdrowTotal;
    balenceTotal.innerText = currentBlanceTotal;



})