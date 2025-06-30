let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
 let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateGroceryAmount(g1, g2, g3){
    let total = g1 + g2 + g3;
    document.getElementById('result').innerText = `The Total Amount for the groceries purchase is: ${total}`;
}