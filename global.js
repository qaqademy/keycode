
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
