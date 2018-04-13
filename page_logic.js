{
    function onAddIngredientClk()
    {

        if ( typeof onAddIngredientClk.counter == 'undefined' ) {
            // It has not... perform the initialization
            onAddIngredientClk.counter = 2;
        }

        document.getElementById("IngredientGroup").innerHTML += "<div id=\"" + onAddIngredientClk.counter + "\">" + 
        "<input id=\"Ingredient1\" name=\"Ingredient1\" type=\"text\" placeholder=\"Ingredient + Quantity\" class=\"form-control input-md\" required=\"\">"+
        "<button onclick=\"onRemoveTextBox('" + onAddIngredientClk.counter +"')\" type=\"button\" class=\"close\" aria-label=\"Close\">"+
        "<span aria-hidden=\"true\">&times;</span>"+
        "</button></div>";
       
        onAddIngredientClk.counter++;
    }
    function onRemoveTextBox(id)
    {
        var element = document.getElementById(id);
        element.outerHTML = "";
        delete element;
    }
}