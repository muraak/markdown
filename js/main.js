
$(document).ready(function(){

    var text = readTextFile("md/readme.md")
    $("#main").html(marked(text));
});

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText = null;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return allText;
}