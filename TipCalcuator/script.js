var calculateButton = document.getElementById("calculate");

function calculateTip()
{   
    // Get input
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    // Check that input is valid
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.visibility = "hidden";
    }
    else {
        document.getElementById("each").style.visibility = "visible";
    }

    // Calculate tip and convert type
    var tipAmt = (billAmt * serviceQual) / numOfPeople;
    tipAmt = tipAmt.toFixed(2);

    // Change visibility and set text
    document.getElementById("totalTip").style.visibility = "visible";
    document.getElementById("tip").innerHTML = tipAmt;
};

document.getElementById("calculate").onclick = function() {
    calculateTip();
};
