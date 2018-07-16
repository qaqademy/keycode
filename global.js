var row1 = [
    {
        "symbol1": "esc",
        "code": 27
    }, {
        "symbol1": "f1",
        "code": 112
    }, {
        "symbol1": "f2",
        "code": 113
    }, {
        "symbol1": "f3",
        "code": 114
    }, {
        "symbol1": "f4",
        "code": 115
    }, {
        "symbol1": "f5",
        "code": 116
    }, {
        "symbol1": "f6",
        "code": 117
    }, {
        "symbol1": "f7",
        "code": 118
    }, {
        "symbol1": "f8",
        "code": 119
    }, {
        "symbol1": "f9",
        "code": 120
    }, {
        "symbol1": "f10",
        "code": 121
    }, {
        "symbol1": "f11",
        "code": 122,
    }, {
        "symbol1": "f12",
        "code": 123,
    }, {
        "symbol1": "pause",
        "symbol2": "break",
        "code": 19,
    }, {
        "symbol1": "prt sc",
        "symbol2": "sysrq",
        "code": 44,
    }, {
        "symbol1": "delete",
        "symbol2": "insert",
        "code": 46,
    }

];
var row2 = [
    {
        "symbol1": "~",
        "symbol2": "`",
        "code": 192
    },
    {
        "symbol1": "!",
        "symbol2": "1",
        "code": 49
    }, {
        "symbol1": "@",
        "symbol2": "2",
        "code": 50
    }, {
        "symbol1": "#",
        "symbol2": "3",
        "code": 51
    }, {
        "symbol1": "$",
        "symbol2": "4",
        "code": 52
    }, {
        "symbol1": "%",
        "symbol2": "5",
        "code": 53
    },
    {
        "symbol1": "^",
        "symbol2": "6",
        "code": 54
    }, {
        "symbol1": "&",
        "symbol2": "7",
        "code": 55
    }, {
        "symbol1": "*",
        "symbol2": "8",
        "code": 56
    }, {
        "symbol1": "(",
        "symbol2": "9",
        "code": 57
    }, {
        "symbol1": ")",
        "symbol2": "0",
        "code": 48
    }, {
        "symbol1": "_",
        "symbol2": "-",
        "code": 189,
        "moz-code": 173
    }, {
        "symbol1": "+",
        "symbol2": "=",
        "code": 187,
        "moz-code": 62
    },
    {
        "symbol1": "backspace",
        "symbol2": "←",
        "code": 8
    }

];
var row3 = [
    {
        "symbol1": "tab",
        "code": 9
    }, {
        "symbol1": "q",
        "code": 81
    }, {
        "symbol1": "w",
        "code": 87
    }, {
        "symbol1": "e",
        "code": 69
    }, {
        "symbol1": "r",
        "code": 82
    }, {
        "symbol1": "t",
        "code": 84
    }, {
        "symbol1": "y",
        "code": 89
    }, {
        "symbol1": "u",
        "code": 85
    }, {
        "symbol1": "i",
        "code": 73
    },
    {
        "symbol1": "o",
        "code": 79
    }, {
        "symbol1": "p",
        "code": 80
    },
    {
        "symbol1": "{",
        "symbol2": "[",
        "code": 219
    }, {
        "symbol1": "}",
        "symbol2": "]",
        "code": 221
    },
    {
        "symbol1": "|",
        "symbol2": "\\",
        "code": 220
    }

];
var row4 = [
    {
        "symbol1": "caps lock",
        "code": 20
    }, {
        "symbol1": "a",
        "code": 65
    }, {
        "symbol1": "s",
        "code": 83
    }, {
        "symbol1": "d",
        "code": 68
    }, {
        "symbol1": "f",
        "code": 70
    }, {
        "symbol1": "g",
        "code": 71
    }, {
        "symbol1": "h",
        "code": 72
    }, {
        "symbol1": "j",
        "code": 74
    }, {
        "symbol1": "k",
        "code": 75
    }, {
        "symbol1": "l",
        "code": 76
    },
    {
        "symbol1": ":",
        "symbol2": ";",
        "code": 186,
        "moz-code": 59
    }, {
        "symbol1": "\"",
        "symbol2": "'",
        "code": 222
    },
    {
        "symbol1": "enter",
        "code": 13
    }

];
var row5 = [
    {
        "symbol1": "shift ⇑",
        "code": 16
    }, {
        "symbol1": "z",
        "code": 90
    }, {
        "symbol1": "x",
        "code": 88
    }, {
        "symbol1": "c",
        "code": 67
    }, {
        "symbol1": "v",
        "code": 86
    }, {
        "symbol1": "b",
        "code": 66
    }, {
        "symbol1": "n",
        "code": 78
    }, {
        "symbol1": "m",
        "code": 77
    }, {
        "symbol1": "<",
        "symbol2": ",",
        "code": 188
    }, {
        "symbol1": ">",
        "symbol2": ".",
        "code": 190
    }, {
        "symbol1": "?",
        "symbol2": "/",
        "code": 191
    }, {
        "symbol1": "shift ⇑",
        "code": 16
    }
    , {
        "symbol1": "↟",
        "code": 38
    }
];
var row6 = [
    {
        "symbol1": "ctrl",
        "code": 17
    }, {
        "symbol1": "⊞",
        "code": 91
    }, {
        "symbol1": "alt",
        "code": 18
    }, {
        "symbol1": "space",
        "code": 32
    }, {
        "symbol1": "alt",
        "code": 18
    }, {
        "symbol1": "⊞",
        "code": 93
    }, {
        "symbol1": "ctrl",
        "code": 17
    }, {
        "symbol1": "↞",
        "code": 37
    }, {
        "symbol1": "↡",
        "code": 40
    }, {
        "symbol1": "↠",
        "code": 39
    }
];
var insertRows = function (row, rowId) {
    document.getElementById(rowId).innerHTML = Object.keys(row)
        .map((el, i)=>`<div class="key regular-key" data-key="${row[i]['code']}" ${row[i]['moz-code'] ? "data-moz-key=" + row[i]['moz-code'] : ""} >
                                   <span>${row[i]['symbol1']}</span>
                                   ${row[i]['symbol2'] ? "<span>" + row[i]['symbol2'] + "</span>" : "" }
                                   </div>`)
        .join``;
};
[row1, row2, row3, row4, row5, row6].map((el, i)=>insertRows(el, "row-" + (i + 1)));

var keycode = document.getElementById('keycode');
var keyPressed = document.getElementById('key-pressed');
var allKeys = [...document.querySelectorAll('.key')];
var welcomeMsg = document.getElementById('msg');
var isCapsLock = false;
var allLetterElements = allKeys.filter(el=>el.getAttribute('data-key') < 91 && el.getAttribute('data-key') > 64);

function displayunicode(event) {
    welcomeMsg.classList.add('hide');
    event.preventDefault();
    var unicode = event.keyCode ? event.keyCode : event.charCode;
    clearKey();
    if (event.type == "mousedown") {
        var attributeCode = this.getAttribute("data-moz-key") || this.getAttribute("data-key");
        var keyCode = `<span>${attributeCode}</span>`;
        if (attributeCode == 20) {
            capsLockBehavior();
        }
        keycode.innerHTML = keyCode;
        keyPressed.innerHTML = this.innerHTML;
        this.classList.add("pressed");
    }
    else {
        //left and right ctrl, shift, alt
        if (unicode == 17 || unicode == 18 || unicode == 16) {
            if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
                allKeys.filter(el=>el.getAttribute('data-key') == unicode)[0].classList.add("pressed");
            } else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                allKeys.filter(el=>el.getAttribute('data-key') == unicode)[1].classList.add("pressed");
            }
            keycode.innerHTML = `<span>${unicode}</span>`;
            keyPressed.innerHTML = allKeys.find(el=>el.getAttribute('data-moz-key') == unicode || el.getAttribute('data-key') == unicode).innerHTML;
        }
        else if (event.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD || unicode == 144) {
            keycode.innerHTML = `⛔`;
            keyPressed.innerHTML = `🔒`;
        }
        else {
            if (unicode == 20) {
                capsLockBehavior();
            }
            allKeys.find(el=>el.getAttribute('data-moz-key') == unicode || el.getAttribute('data-key') == unicode).classList.add("pressed");
            keycode.innerHTML = `<span>${unicode}</span>`;
            keyPressed.innerHTML = allKeys.find(el=>el.getAttribute('data-moz-key') == unicode || el.getAttribute('data-key') == unicode).innerHTML;
        }
    }
}

//help functions

var clearKey = () => allKeys.map(el=>el.classList.remove('pressed'));
var capsLockBehavior = function () {
    if (!isCapsLock) {
        allKeys.find(el=>el.getAttribute('data-key') == 20).classList.add('caps-lock-highlighted');
        allLetterElements.map(el=>el.classList.add('upper-case'));
        isCapsLock = !isCapsLock;
    }
    else {
        allKeys.find(el=>el.getAttribute('data-key') == 20).classList.remove('caps-lock-highlighted');
        allLetterElements.map(el=>el.classList.remove('upper-case'));
        isCapsLock = !isCapsLock;
    }
};

//mouse events
allKeys.map(el=>el.addEventListener("mousedown", displayunicode));
allKeys.map(el=>el.addEventListener("mouseup", clearKey));

//key events
document.body.addEventListener("keydown", displayunicode);
document.body.addEventListener("keypress", displayunicode);
document.body.addEventListener("keyup", clearKey);
