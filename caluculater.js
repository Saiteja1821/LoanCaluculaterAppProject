
function computeLoan(){
    var amountElement=document.getElementById("amount").value;

    var interestRate=document.getElementById("interest_rate").value;

    var monthElement=document.getElementById("months").value;

    var interest=(amountElement*(interestRate * 0.01))/monthElement;

    var monthlypayment=((amountElement/monthElement)+interest);

    
    document.getElementById("payment").innerHTML=`Monthly Payment = ${monthlypayment}`;

};

