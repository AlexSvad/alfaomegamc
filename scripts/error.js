var today = new Date();
var time = "Hora§actual:§" + today.getHours() + "§:§" + today.getMinutes() + "§:§" + today.getSeconds();
var lines = [
    "     ",
    "     ",
    "Llamada§recibida", 
    time ,
    "ADVERTENCIA:§Error§en§la§Matrix",
    "Hilo§de§ejecución:§corriendo"
];

var cursor = document.getElementById("cursor");
var text = document.getElementById("text");
var fail = document.getElementById("fail");
var code = document.getElementById("code");
var still = false;
var is_numbers = false;

var blink = function() {
    if (!is_numbers) {
        cursor.className = cursor.className == "" ? "blink" : "";
        var _t = setTimeout(blink, 500);
    } else {
        cursor.className = "blink";
    }
}
blink();

var numbers = function() {
    text.innerHTML = "&nbsp;";
    code.className = "";
    shuffle();
    var _t = setTimeout(function() {
        code.dataset.rem = "boop";
        text.innerHTML = "Fundación Alfa Omega MC envía: ERROR 404";
        var __t = setTimeout(function() {
            still = true;
            var __t = setTimeout(function() {
                fail.className = "";
            }, 1000);
        }, 3000);
    }, 1500);
}

var shuffle = function() {
    var r = ~~code.className[1];
    r = (r + 1 == 5) ? 1 : r + 1;
    code.className = "a" + r;
    if (!still) {
        var _t = setTimeout(shuffle, 100);
    }
}

var write = function(val) {
    if (lines[val]) {
        for (var i = 0, l = lines[val].length; i < l; i++) {
            (function(index) {
                setTimeout(function() {
                    if (lines[val][index] == "§") {  text.innerHTML += "&nbsp;";  }
                    else {  text.innerText += lines[val][index];  }
                    if (index == lines[val].length - 1) {
                        var _t = setTimeout(function() {
                            if (lines[val+1]) {
                                write(val+1);
                                text.innerHTML = "&nbsp;";
                            } else {
                                cursor.className = "blink";
                                text.innerHTML = "&nbsp;";
                                is_numbers = true;
                                numbers();
                            }
                        }, 2000);
                    }
                }, index * 20);
            })(i);
        }
    }
}
write(0);