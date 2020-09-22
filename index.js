$(document).ready(function(){

var texts = new Array();
texts.push("A Front-End Software Developer")
texts.push("A Singer");
texts.push("A Songwriter");
texts.push("An Artist");
texts.push("Rachel Kline");

console.log(texts);
var index = 0;

function changeText(){
   $(".Heading").html("I AM {" + "<span>" + texts[index]+ "</span>" + "}");
   if(index < texts.length - 1){
    index++
   }if(index == texts.length){
       
       clearInterval(interval);
   }
}

var interval = setInterval(changeText, 1000);
changeText();
});


hideShow();
var start = 4;
$(".hideShowBtn").hide();
// $("#navBar").hide();
function hideShow(){
    var myTimer = setInterval(function(){
        start--;
        $('.Timer').text("");
        if(start === 0){
            $(".hideShowBtn").show(1000);
            // $(".navbar").show(1000);
            clearInterval(myTimer)
            
        }
    },
    1000);
}

//BUTTONS
$("#About").click(function(){
    location.href = "about.html";
});
$("#Portfolio").click(function(){
    location.href = "portfolio.html";
});
$("#Resume").click(function(){
    location.href = "resume.html";
});
$("#Connect").click(function(){
    location.href = "contact.html";
});
$("#IG").click(function(){
    location.href = "https://www.instagram.com/overlordrach/";
});
$("#LI").click(function(){
    location.href = "https://www.linkedin.com/in/rachel-kline-63914399/";
});
$("#GH").click(function(){
    location.href = "https://github.com/rachelkline";
});

$("#WDDep").click(function(){
    location.href = "https://rachelkline.github.io/WorkDayScheduler/";
});

$("#WDGit").click(function(){
    location.href = "https://github.com/rachelkline/WorkDayScheduler";
});

$("#WTSDep").click(function(){
    location.href = "https://rachelkline.github.io/WhatTheStock/";
});

$("#WTSGit").click(function(){
    location.href = "https://github.com/rachelkline/WhatTheStock";
});

$("#WTSDep").click(function(){
    location.href = "https://rachelkline.github.io/WhatTheStock/";
});

$("#WTSGit").click(function(){
    location.href = "https://github.com/rachelkline/WhatTheStock";
});

$("#WDDayDep").click(function(){
    location.href = "https://rachelkline.github.io/WeatherDashboard/";
});

$("#WDDayGit").click(function(){
    location.href = "https://github.com/rachelkline/WeatherDashboard";
});

$("#sendBtn").click(function(){
    $("#inputUser").val("");
});

