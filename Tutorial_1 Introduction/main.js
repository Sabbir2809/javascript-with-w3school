// 1. Change HTML Content
function changeHTMLContent(){
    // document.getElementById('demo').innerHTML = 'Hello JavaScript!';
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

// 2. Change HTML Attribute Value
function onChangeAttribute(){
    document.getElementById("myImage").src="https://www.w3schools.com/js/pic_bulbon.gif";
}
function offChangeAttribute(){
    document.getElementById("myImage").src="https://www.w3schools.com/js/pic_bulboff.gif";
}

// 3. Change HTML Styles (CSS)
function changeSyleHtmlElement(){
    document.getElementById("style").style.fontSize = "35px";
    // document.getElementById("style").style.display = "block";
    document.getElementById("style").style.display = "none";
}