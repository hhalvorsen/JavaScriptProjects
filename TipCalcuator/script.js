var calculateButton = document.getElementById("calculate");

function calculateTip()
{   
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    var tipAmt = (billAmt * serviceQual) / numOfPeople;
    tipAmt = tipAmt.toFixed(2);

    document.getElementById("totalTip").style.visibility = "visible";
    document.getElementById("tip").innerHTML = tipAmt;
};

document.getElementById("calculate").onclick = function() {
    calculateTip();
};
