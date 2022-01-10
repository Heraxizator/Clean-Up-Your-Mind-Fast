var problem = document.getElementById("problem");
var mark = document.getElementById("mark");
var range = document.getElementById("range");
var block = document.getElementsByClassName("block")[1];
var stop = document.getElementById("stop");
var theory1 = document.getElementsByClassName("theory-1")[0];
var theory2 = document.getElementsByClassName("theory-2")[0];
var practise = document.getElementsByClassName("practise");
var body = document.getElementsByTagName("body")[0];
var menu = document.getElementById("burger");
var options = document.getElementsByClassName("options")[0];
var begin = document.getElementById("begin");
var settings = document.getElementById("settings");
var sets = document.getElementsByClassName("settings")[0];
var close = document.getElementById("close");
var color = document.getElementById("color");
var language = document.getElementById("language");
var arrow = document.getElementById("arrow");
var arrow2 = document.getElementById("arrow2");
var rubbish = document.getElementById("rubbish");
var back = document.getElementById("back");
var task = document.getElementById("task");
var panel = document.getElementsByClassName("panel")[0];
var ru = document.getElementById("ru");
var eng = document.getElementById("eng");
var start = document.getElementById("start");
var headband = document.getElementsByClassName("headband")[0];
var restart = document.getElementById("restart");

var k = 5;
var p = 0;
var c = 0;

options.style.display = "none";
sets.style.display = "none";

var list = [theory1, theory2];

for (let i = 0; i < practise.length; i++) {
    list.push(practise[i]);
}



function navigate() {
    for (let i = 1; i < list.length; i++) {
        if (list[i].style.display == "block")  {
            sliderBack(list, i);
            if (i == 1) {
                back.style.display = "none";

            }



        }
    }
}



function navigate2() {
    for (let j = 0; j < list.length - 1; j++) {
        if ((list[j].style.display == "block") && (!((list[j].querySelectorAll("input")[0]) && (list[j].querySelectorAll("input")[0].value == ""))))  {
            slider(list, j);
        if (j == 1) {
            task.style.display = "none";
        }
            break;
        }


    }
}

start.onclick = function() {
    theory1.style.display = "block";
    body.style.backgroundImage = "none";
    panel.style.display = "block";
    headband.style.display = "none";
}


arrow.onclick = function() {
    navigate();
}

arrow2.onclick = function() {
    navigate2();

}

back.onclick = function() {
    navigate();
}

rubbish.onclick = function() {
    window.open("index.html");
}

task.onclick = function() {
    practise[0].style.display = "block";
    theory1.style.display = "none";
    theory2.style.display = "none";
    task.style.display = "none";


}

practise[0].onclick = function() {

    practise[1].style.display = "block";
    practise[0].style.display = "none";
    task.style.display = "none";

}

theory1.onclick = function() {
    task.style.display = "none";
}

function slider(practise, i) {
    practise[i + 1].style.display = "block";
    practise[i].style.display = "none";


}

function sliderBack(practise, i) {
    practise[i].style.display = "none";
    practise[i - 1].style.display = "block";

}

for (let i = 7; i < practise.length; i++) {
    practise[i].addEventListener("click", function() {
        slider(practise, i);

    }, true);
}



practise[5].onclick = function() {
    slider(practise, 5);
}

practise[6].onchange = function() {
    slider(practise, 6);
}

for (let i = 1; i < 5; i++) {
    practise[i].addEventListener("change", function() {
        slider(practise, i);

    }, true);
}

language.onchange = function() {
    if (language.value == "eng") {
        window.open("index-eng.html");
    }

    else {
        window.open("index.html");
    }
}

menu.onclick = function() {
    if ((options.style.display == "none") && (sets.style.display == "none")) {
        options.style.display = "block";
        menu.style.opacity = 0.35;
    }
    else {
        options.style.display = "none";
        sets.style.display = "none";
        menu.style.opacity = 0.5;
    }
}

color.onchange = function() {
    panel.style.backgroundColor = color.value;

}

begin.onclick = function() {

    window.open("index.html");

}

settings.onclick = function() {
    sets.style.display = "block";
    options.style.display = "none";
}

close.onclick = function() {

}

theory1.onclick = function() {
    if ((options.style.display == "none") && (sets.style.display == "none")) {
        theory1.style.display = "none";
        theory2.style.display = "block";
        back.style.display = "block";



    }

}

theory2.onclick = function() {
    if ((options.style.display == "none") && (sets.style.display == "none")) {
        theory2.style.display = "none";
        practise[0].style.display = "block";


    }
}


function change(x) {
    c = c + 0.01
    block.style.width = x * k
    block.style.height = x * k
    if (x > 15) {
        block.style.opacity = 0.01 * x;
    }
    else {
        block.style.opacity = 0.015 * x;
    }


    if (range.value == 0) {
        restart.style.display = "block";
    }



}

mark.onchange = function() {
    let x = mark.value;
    if ((x > 0) && (x <= 100)) {
        block.style.opacity = 1;
        range.value = x;
        change(x);


    }

    else {
        mark.value = "";
        navigate();

    }



}

range.oninput = function() {
    let y = range.value;

    change(y);
}

