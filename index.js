const minusbtn = document.getElementById("minusbtn"); 
const reset = document.getElementById("reset"); 
const plus = document.getElementById("plus"); 
const countlabel = document.getElementById("countlabel");
let count = 0;
//asasdasdasdsa

plus.addEventListener("click", function() { 
    count++;
    countlabel.textContent = count;
});
minusbtn.addEventListener("click", function() { 
    count--;
    countlabel.textContent = count;
});
reset.addEventListener("click", function() { 
    count = 0;
    countlabel.textContent = count;
});