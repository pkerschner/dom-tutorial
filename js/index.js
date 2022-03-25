
// js code block 1
// code to test button using browser dev tools console

const clicked = () => {
    console.log("The button is clicked!");
}



/*
// js code block 2
// code to use button to copy text from input box to label beside input box

const clicked = () => {    
    let inpCtrl = document.getElementById("fred");
    let contents = inpCtrl.value;
    let lblCtrl = document.getElementById("lbl");
    lblCtrl.innerText = contents;
}
*/


/*
// js code block 3

const minus = () => {
    let fredCtrl = document.getElementById("fred");
    let val = fredCtrl.value;
    val = Number(val);
    val--;
    fredCtrl.value = val;

    if(val % 2 == 0) {
        fredCtrl.style.color = "red";
    } else {
        fredCtrl.style.color = "black";
    }

    if(val % 3 == 0) {
        fredCtrl.style.fontWeight = "bold";
    } else {
        fredCtrl.style.fontWeight = "normal";
    }
}

const plus = () => {
    let fredCtrl = document.getElementById("fred");
    let val = fredCtrl.value;
    val = Number(val);
    val++;
    fredCtrl.value = val;

    if(val % 2 == 0) {
        fredCtrl.style.color = "red";
    } else {
        fredCtrl.style.color = "black";
    }

    if(val % 3 == 0) {
        fredCtrl.style.fontWeight = "bold";
    } else {
        fredCtrl.style.fontWeight = "normal";
    }
}
*/


/*
// js code block 4

const change = (chg) => {
    let fredCtrl = document.getElementById("fred");
    let val = fredCtrl.value;
    val = Number(val);
    val = val + chg;
    fredCtrl.value = val;
    display(val, fredCtrl);
}

const display = (nbr, ctrl) => {
    ctrl.value = nbr;
    ctrl.style.color = (nbr % 2 == 0) ? "red" : "black";
    ctrl.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
    ctrl.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
}
*/