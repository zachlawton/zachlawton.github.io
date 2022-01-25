//Zachary Lawton

function incrtxtbutton() {
    var but = document.getElementById('txtsize');
    var win_style = window.getComputedStyle(but, null).getPropertyValue('font-size');
    var parfloat = parseFloat(win_style);
    but.style.fontSize = (parfloat + 1) + 'px';
}

function decrtxtbutton() {
    var but = document.getElementById('txtsize');
    var win_style = window.getComputedStyle(but, null).getPropertyValue('font-size');
    var parfloat = parseFloat(win_style);
    but.style.fontSize = (parfloat - 1) + 'px';
}