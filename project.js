// Function called whenever user tab on any box
function krishna() {

    // Setting DOM to all boxes or input field
    var k1,k2,k3,k4,k5,k6,k7,k8,k9;
	k1 = document.getElementById("k1").value;
	k2 = document.getElementById("k2").value;
	k3 = document.getElementById("k3").value;
	k4 = document.getElementById("k4").value;
	k5 = document.getElementById("k5").value;
	k6 = document.getElementById("k6").value;
	k7 = document.getElementById("k7").value;
	k8 = document.getElementById("k8").value;
	k9 = document.getElementById("k9").value;
	}
	var k1btn, k2btn,k3btn,k4btn,k5btn,
        k6btn,k7btn,k8btn,k9btn;

	k1btn = document.getElementById("k1");
	k2btn = document.getElementById("k2");
	k3btn = document.getElementById("k3");
	k4btn = document.getElementById("k4");
	k5btn = document.getElementById("k5");
	k6btn = document.getElementById("k6");
	k7btn = document.getElementById("k7");
	k8btn = document.getElementById("k8");
	k9btn = document.getElementById("k9");
    
    // Checking if Player X won or not and after
    // that disabled all the other fields
if ((k1 == 'x' || k1 == 'X') && (k2 == 'x' ||
        k2 == 'X') && (k3 == 'x' || k3 == 'X')) {
        document.getElementById('scan')
            .innerHTML = "Player X won";
			k4btn.disabled="true";
			k5btn.disabled="true";
			k6btn.disabled="true";
			k7btn.disabled="true";
			k8btn.disabled="true";
			k9btn.disabled="true";

			k1btn.style.color="blue";
			k2btn.style.color="blue";
			k3btn.style.color="blue";
		}
		else if ((k1 == 'x' || k1 == 'X') && (k4 == 'x' ||
        k4 == 'X') && (k7 == 'x' || k7 == 'X')) {
        document.getElementById('scan')
            .innerHTML = "Player X won";
        k2btn.disabled = true;
        k3btn.disabled = true;
        k5btn.disabled = true;
        k6btn.disabled = true;
        k8btn.disabled = true;
        k9btn.disabled = true;
  
        k1btn.style.color = "blue";
        k4btn.style.color = "blue";
        k7btn.style.color = "blue";
    }
    else if ((k7 == 'x' || k7 == 'X') && (k8 == 'x' ||
        k8 == 'X') && (k9 == 'x' || k9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
  
        k1btn.disabled = true;
        k2btn.disabled = true;
        k3btn.disabled = true;
        k4btn.disabled = true;
        k5btn.disabled = true;
        k6btn.disabled = true;
  
        k7btn.style.color = "blue";
        k8btn.style.color = "blue";
        k9btn.style.color = "blue";
    }
    else if ((k3 == 'x' || k3 == 'X') && (k6 == 'x' ||
        k6 == 'X') && (k9 == 'x' || k9 == 'X')) {
        document.getElementById('scan')
            .innerHTML = "Player X won";
  
        k1btn.disabled = true;
        k2btn.disabled = true;
        k4btn.disabled = true;
        k5btn.disabled = true;
        k7btn.disabled = true;
        k8btn.disabled = true;
  
        k3btn.style.color = "blue";
        k6btn.style.color = "blue";
        k9btn.style.color = "blue";
    }
    else if ((k1 == 'x' || k1 == 'X') && (k5 == 'x' ||
        k5 == 'X') && (k9 == 'x' || k9 == 'X')) {
        document.getElementById('scan')
            .innerHTML = "Player X won";
        k2btn.disabled = true;
        k3btn.disabled = true;
        k4btn.disabled = true;
        k6btn.disabled = true;
        k7btn.disabled = true;
        k8btn.disabled = true;
  
        k1btn.style.color = "blue";
        k5btn.style.color = "blue";
        k9btn.style.color = "blue";
    }
    else if ((k3 == 'x' || k3 == 'X') && (k5 == 'x' ||
        k5 == 'X') && (k7 == 'x' || k7 == 'X')) {
        document.getElementById('scan')
            .innerHTML = "Player X won";
        k1btn.disabled = true;
        k2btn.disabled = true;
        k4btn.disabled = true;
        k6btn.disabled = true;
        k8btn.disabled = true;
        k9btn.disabled = true;
  
        k3btn.style.color = "blue";
        k5btn.style.color = "blue";
        k7btn.style.color = "blue";
    }
    else if ((k2 == 'x' || k2 == 'X') && (k5 == 'x' ||
        k5 == 'X') && (k8 == 'x' || k8 == 'X')) {
        document.getElementById('scan')
            .innerHTML = "Player X won";
        k1btn.disabled = true;
        k2btn.disabled = true;
        k4btn.disabled = true;
        k6btn.disabled = true;
        k7btn.disabled = true;
        k9btn.disabled = true;
  
        k2btn.style.color = "blue";
        k5btn.style.color = "blue";
        k8btn.style.color = "blue";
    }
    else if ((k4 == 'x' || k4 == 'X') && (k5 == 'x' ||
        k5 == 'X') && (k6 == 'x' || k6 == 'X')) {
        document.getElementById('scan')
            .innerHTML = "Player X won";
        k1btn.disabled = true;
        k2btn.disabled = true;
        k3btn.disabled = true;
        k7btn.disabled = true;
        k8btn.disabled = true;
        k9btn.disabled = true;
  
        k4btn.style.color = "blue";
        k5btn.style.color = "blue";
        k6btn.style.color = "blue";
    }
  
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((k1 == '0' || k1 == '0') && (k2 == '0' ||
        k2 == '0') && (k3 == '0' || k3 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k4btn.disabled = true;
        k5btn.disabled = true;
        k6btn.disabled = true;
        k7btn.disabled = true;
        k8btn.disabled = true;
        k9btn.disabled = true;
  
        k1btn.style.color = "blue";
        k2btn.style.color = "blue";
        k3btn.style.color = "blue";
    }
    else if ((k1 == '0' || k1 == '0') && (k4 == '0' ||
        k4 == '0') && (k7 == '0' || k7 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k2btn.disabled = true;
        k3btn.disabled = true;
        k5btn.disabled = true;
        k6btn.disabled = true;
        k8btn.disabled = true;
        k9btn.disabled = true;
  
        k1btn.style.color = "blue";
        k4btn.style.color = "blue";
        k7btn.style.color = "blue";
    }
    else if ((k7 == '0' || k7 == '0') && (k8 == '0' ||
        k8 == '0') && (k9 == '0' || k9 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k1btn.disabled = true;
        k2btn.disabled = true;
        k3btn.disabled = true;
        k4btn.disabled = true;
        k5btn.disabled = true;
        k6btn.disabled = true;
  
        k7btn.style.color = "blue";
        k8btn.style.color = "blue";
        k9btn.style.color = "blue";
    }
    else if ((k3 == '0' || k3 == '0') && (k6 == '0' ||
        k6 == '0') && (k9 == '0' || k9 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k1btn.disabled = true;
        k2btn.disabled = true;
        k4btn.disabled = true;
        k5btn.disabled = true;
        k7btn.disabled = true;
        k8btn.disabled = true;
        k3btn.style.color = "blue";
        k6btn.style.color = "blue";
        k9btn.style.color = "blue";
    }
    else if ((k1 == '0' || k1 == '0') && (k5 == '0' ||
        k5 == '0') && (k9 == '0' || k9 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k2btn.disabled = true;
        k3btn.disabled = true;
        k4btn.disabled = true;
        k6btn.disabled = true;
        k7btn.disabled = true;
        k8btn.disabled = true;
  
        k1btn.style.color = "blue";
        k5btn.style.color = "blue";
        k9btn.style.color = "blue";
    }
    else if ((k3 == '0' || k3 == '0') && (k5 == '0' ||
        k5 == '0') && (k7 == '0' || k7 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k1btn.disabled = true;
        k2btn.disabled = true;
        k4btn.disabled = true;
        k6btn.disabled = true;
        k8btn.disabled = true;
        k9btn.disabled = true;
  
        k3btn.style.color = "blue";
        k5btn.style.color = "blue";
        k7btn.style.color = "blue";
    }
    else if ((k2 == '0' || k2 == '0') && (k5 == '0' ||
        k5 == '0') && (k8 == '0' || k8 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k1btn.disabled = true;
        k3btn.disabled = true;
        k4btn.disabled = true;
        k6btn.disabled = true;
        k7btn.disabled = true;
        k9btn.disabled = true;
  
        k2btn.style.color = "blue";
        k5btn.style.color = "blue";
        k8btn.style.color = "blue";
    }
    else if ((k4 == '0' || k4 == '0') && (k5 == '0' ||
        k5 == '0') && (k6 == '0' || k6 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Player 0 won";
        k1btn.disabled = true;
        k2btn.disabled = true;
        k3btn.disabled = true;
        k7btn.disabled = true;
        k8btn.disabled = true;
        k9btn.disabled = true;
  
        k4btn.style.color = "blue";
        k5btn.style.color = "blue";
        k6btn.style.color = "blue";
    }
  
    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((k1 == 'X' || k1 == '0') && (k2 == 'X'
        || k2 == '0') && (k3 == 'X' || k3 == '0') &&
        (k4 == 'X' || k4 == '0') && (k5 == 'X' ||
            k5 == '0') && (k6 == 'X' || k6 == '0') &&
        (k7 == 'X' || k7 == '0') && (k8 == 'X' ||
            k8 == '0') && (k9 == 'X' || k9 == '0')) {
        document.getElementById('scan')
            .innerHTML = "Match Tie";
    }
    else {
  
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('scan')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('scan')
                .innerHTML = "Player 0 Turn";
        }
    }
// Function to reset game
function krishna_2(){
	location.reload();
	k1=k2=k3=k4=k5=k6=k7=k8=k9='';
}
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
var flag=1;
function krishna_3() {
    if (flag == 1) {
        document.getElementById("k1").value = "X";
        document.getElementById("k1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k1").value = "0";
        document.getElementById("k1").disabled = true;
        flag = 1;
    }
}
  
function krishna_4() {
    if (flag == 1) {
        document.getElementById("k2").value = "X";
        document.getElementById("k2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k2").value = "0";
        document.getElementById("k2").disabled = true;
        flag = 1;
    }
}
  
function krishna_5() {
    if (flag == 1) {
        document.getElementById("k3").value = "X";
        document.getElementById("k3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k3").value = "0";
        document.getElementById("k3").disabled = true;
        flag = 1;
    }
}
  
function krishna_6() {
    if (flag == 1) {
        document.getElementById("k4").value = "X";
        document.getElementById("k4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k4").value = "0";
        document.getElementById("k4").disabled = true;
        flag = 1;
    }
}
  
function krishna_7() {
    if (flag == 1) {
        document.getElementById("k5").value = "X";
        document.getElementById("k5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k5").value = "0";
        document.getElementById("k5").disabled = true;
        flag = 1;
    }
}
  
function krishna_8() {
    if (flag == 1) {
        document.getElementById("k6").value = "X";
        document.getElementById("k6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k6").value = "0";
        document.getElementById("k6").disabled = true;
        flag = 1;
    }
}
  
function krishna_9() {
    if (flag == 1) {
        document.getElementById("k7").value = "X";
        document.getElementById("k7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k7").value = "0";
        document.getElementById("k7").disabled = true;
        flag = 1;
    }
}
  
function krishna_10() {
    if (flag == 1) {
        document.getElementById("k8").value = "X";
        document.getElementById("k8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k8").value = "0";
        document.getElementById("k8").disabled = true;
        flag = 1;
    }
}
  
function krishna_11() {
    if (flag == 1) {
        document.getElementById("k9").value = "X";
        document.getElementById("k9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("k9").value = "0";
        document.getElementById("k9").disabled = true;
        flag = 1;
    }
}




