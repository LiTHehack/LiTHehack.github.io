(function () {
    var bird = document.getElementById('bird');
    var pupil = bird.getElementById('pupil');

    var rect = pupil.getBoundingClientRect();
    var left = rect.left + rect.width/2;
    var top = rect.top + rect.height/2;

    var originalX = parseFloat(pupil.attributes.cx.value);
    var originalY = parseFloat(pupil.attributes.cy.value);

    var mouseX = 0;
    var mouseY = 0;

    var clicked = false;
    var onMove = function (evt) {
        var xFactor = 50/window.innerWidth;
        var yFactor = 50/window.innerHeight;
        
        mouseX = xFactor*(evt.pageX - left);
        mouseY = yFactor*(evt.pageY - top);
    };

    var onClick = function(evt){
        clicked = (clicked) ? false : true;
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('mouseup', onClick);

    (function animate() {
        var theta = Math.atan2(mouseY, mouseX);
        var r = Math.sqrt(mouseY*mouseY + mouseX*mouseX);
        
        r = Math.min(r, 10);
        if(clicked)
        {
           theta = new Date().getTime()/25;
           r = 10;

        }
        var x = originalX + r*Math.cos(theta);
        var y = originalY + r*Math.sin(theta);
        
        pupil.attributes.cx.value = x;
        pupil.attributes.cy.value = y;
        requestAnimationFrame(animate);
    })();
}());
