
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
    GetData();
   
})