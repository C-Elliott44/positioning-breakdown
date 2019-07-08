// Create elements to hold the 3 different x/y pairs
var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

// function to place position value in the respected elements
function showPosition(event) {
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

// Create event handler for mouse movement that calls showPosition and passes event information
var el = document.getElementById('body');
// Event information automatically passes into the function so no annoyomous function is needed
el.addEventListener('mousemove', showPosition, false);