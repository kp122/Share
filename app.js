
async function GetData()
{
    console.log("Get Data Called");
    
    console.log("Got here");
    const response = await fetch("http://127.0.0.1:3000/winter", {
        method: "GET",
        headers: { "Content-Type": "text/plain"}}
    );
    const json = await response.json();
    
    console.log(json);
    document.getElementById("Main").innerHTML = JSON.stringify(json); 
    
    
}

window.addEventListener('load', e => {
    console.log("Page loadeds");
    //GetData();
   
})


function onAddIngredientClk()
    {

        if ( typeof onAddIngredientClk.counter == 'undefined' ) {
            // It has not... perform the initialization
            onAddIngredientClk.counter = 2;
        }

        
        var bla = $('#Ingredient1').val();
        var vals = [];

        for (i = 1; i <= onAddIngredientClk.counter; i++) { 
            vals.push( $("#Ingredient"+i).val() );
        }
 
    
        
        document.getElementById("IngredientGroup").innerHTML = document.getElementById("IngredientGroup").innerHTML + "<div id=\"" + onAddIngredientClk.counter + "\">" + 
        "<input id=\"Ingredient" + onAddIngredientClk.counter +  "\" name=\"Ingredient"+onAddIngredientClk.counter+"\" type=\"text\" placeholder=\"Ingredient + Quantity\" class=\"form-control input-md\" required=\"\">"+
        "<button onclick=\"onRemoveTextBox('" + onAddIngredientClk.counter +"')\" type=\"button\" class=\"close\" aria-label=\"Close\">"+
        "<span aria-hidden=\"true\">&times;</span>"+
        "</button></div>";
    
       for (i = 1; i <= onAddIngredientClk.counter; i++) { 
            $("#Ingredient"+i).val(vals[i-1]);
        }

        onAddIngredientClk.counter++;
    }
    function onRemoveTextBox(id)
    {
        var element = document.getElementById(id);
        element.outerHTML = "";
        onAddIngredientClk.counter--;
        delete element;
    }