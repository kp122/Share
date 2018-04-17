
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

    //save the imput box values
    for (i = 0; i < onAddIngredientClk.counter; i++) {
        vals.push($("#Ingredient" + i).val());
    }

    //add a new input box 
    document.getElementById("IngredientGroup").innerHTML = document.getElementById("IngredientGroup").innerHTML + "<div id=\"" + onAddIngredientClk.counter + "\">" +
        "<input id=\"Ingredient" + onAddIngredientClk.counter + "\" name=\"Ingredient" + onAddIngredientClk.counter + "\" type=\"text\" placeholder=\"Ingredient + Quantity\" class=\"form-control input-md\" required=\"\">" +
        "<button onclick=\"onRemoveTextBox('" + onAddIngredientClk.counter + "')\" type=\"button\" class=\"close\" aria-label=\"Close\">" +
        "<span aria-hidden=\"true\">&times;</span>" +
        "</button></div>";

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

function onRemoveTextBox(id) {
    var element = document.getElementById(id);
    element.outerHTML = "";
    onAddIngredientClk.counter--;
 
    delete element;
}