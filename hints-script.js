//contains hints and assignments of weekdays while saving a plan


var hints = ["First look into your previous plans. Are there some task left incomplete?",
"Is there something you wanted to do today or yesterday but forgot about it or just could not manage?",
    "Is there some family anniversory you should take into consideration?",
    "What did you forget to do in last few days?",
    "What project would you like to complete as soon as you can?",
    "Is there some irritable task that you just keep posponing? The sooner you do it, the less irritation it will be.",
    "Did you promise to do something and then totally forgot about it?",
    "Is there a piece of work you don't feel like doing, but you should do?",
    "Were you enthusiastic about some project when it started and then worked on some more pressing matters?",
    "Will you get in troubles with your boss, marital partner or somebody important if you won't do something? ",
    " Is there a piece of work that would be a great relief for you to have it eventually completed?"];


var hintText = document.getElementById("hintText");
var hintBtn = document.getElementById("hintBtn");
hintBtn.addEventListener("click", changeText);

// this code is not mine, it is from Stackoverflow, it shows the hints onclick one by one
hintText.innerHTML = hints[0];

function changeText() {
    var searchTerm = hintText.innerHTML;
    var index = hints.indexOf(searchTerm) + 1;
    if (index == hints.length) index = 0;
    var result = hints[index];
    hintText.innerHTML = result;
    return;
}

var hintModeBtn = document.getElementById("hintModeBtn")
hintModeBtn.addEventListener("click", hintMode)

function hintMode() {
    document.getElementById('first-instruction').style.display = "none";
    hintText.style.display = "block"
    hintBtn.style.display='block'
    hintModeBtn.style.display='none'

}


