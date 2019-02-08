/* Style the HTML elements according to the following instructions.
    DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
$("p:hello").addClass("turnSeagreen");
$("p:hello").attr("class", "turnSeagreen");
console.log($("p:hello").css("color"));
$("p").each(eachFunction);
function eachFunction(index, value)
{
    value.addEventListener()
}
$("body").append("<h1>Test</h1>");
function clickFunction(e)
{
    alert(e.target.innerText);
}

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$("Selectors Exercise").on('mouseover').attr('exercise', '')
$("Selectors Exercise").on('mouseover').removeAttr('exercise', '')
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
$("p:hello").on('addSomething').attr('.');
