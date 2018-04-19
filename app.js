
async function GetData() {
    console.log("Get Data Called");

    console.log("Got here");
    const response = await fetch("http://127.0.0.1:3000/winter", {
        method: "GET",
        headers: { "Content-Type": "text/plain" }
    }
    );
    const json = await response.json();

    console.log(json);
    document.getElementById("Main").innerHTML = JSON.stringify(json);


}

window.addEventListener('load', e => {
    console.log("Page loaded");
    //GetData();

})

if('serviceWorker' in navigator){
    try{
        navigator.serviceWorker.register('sw.js');
        console.log("Registered SW");
    }
    catch(error){
        console.log("Couldnt register service worker");
    }
    
}


function onAddInstructionClk(){
    if (typeof onAddInstructionClk.counter == 'undefined') {
        // It has not... perform the initialization
        onAddInstructionClk.counter = 1;
    }
    
    var counter = onAddInstructionClk.counter;

    var vals = [];

    //save the imput box values
    for (i = 0; i < counter; i++) {
        vals.push($("#Instruction" + i).val());
    }

    document.getElementById("InstructionGroup").innerHTML +=  "<div id=\"ins"+counter+"\">"+
              "<input id=\"Instruction"+counter+"\" name=\"Instruction0Name\" type=\"text\" placeholder=\"Instruction\" class=\"form-control input-md\" required>"+
              "<button type=\"button\" class=\"close\" aria-label=\"Close\" onclick=\"onRemoveInstruction('ins"+counter+"')\">"+
              "<span aria-hidden=\"true\">&times;</span>"+
              "</button></div>"

    //restore the input box values
    for (i = 0; i < counter; i++) {
        $("#Instruction" + i).val(vals[i]);
    }

    onAddInstructionClk.counter++;

}

function onAddIngredientClk() {

    if (typeof onAddIngredientClk.counter == 'undefined') {
        // It has not... perform the initialization
        onAddIngredientClk.counter = 1;
    }

    var vals = [];
    var counter = onAddIngredientClk.counter;

    //save the imput box values
    for (i = 0; i < counter; i++) {
        vals.push($("#Ingredient" + i).val());
    }

    //add a new input box 
    document.getElementById("IngredientGroup").innerHTML +="<div id=\"ing"+counter+"\">" +
    "<div class=\"input-group\"><div class=\"input-group-prepend\"><div class=\"input-group-text\">"+(counter+1)+"</div>"+
    "</div><input id=\"Ingredient"+counter+"\" name=\"Ingredient"+counter+"Name\" type=\"text\" placeholder=\"Ingredient + Quantity\" class=\"form-control input-md\""+
    "required><button type=\"button\" class=\"close\" aria-label=\"Close\" onclick=\"onRemoveIngredient('ing"+counter+"')\">"+
    "<span aria-hidden=\"true\">&times;</span></button></div></div>";

    //restore the input box values
    for (i = 0; i < onAddIngredientClk.counter; i++) {
        $("#Ingredient" + i).val(vals[i]);
    }

    onAddIngredientClk.counter++;
}


function onRemoveInstruction(id) {
    var element = document.getElementById(id);
    element.outerHTML = "";
    onAddInstructionClk.counter--;
 
    delete element;
}

function onRemoveIngredient(id) {
    var element = document.getElementById(id);
    element.outerHTML = "";
    onAddIngredientClk.counter--;
 
    delete element;
}

function onChoseImage(id){
    window.alert("Selected pic");
}