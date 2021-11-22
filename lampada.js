const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const repair = document.getElementById('repair');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }    
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }    
}

function lampBrocken() {
    lamp.src = './img/quebrada.jpg';
}

function repairLamp() {
    if (isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }    
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
repair.addEventListener('click', repairLamp);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBrocken);
