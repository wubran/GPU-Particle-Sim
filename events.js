// canvasResize();
kCanvas.addEventListener('mousedown', onClick);
kCanvas.addEventListener("mouseup", onRelease);
// canvas.addEventListener("wheel", scroll)
kCanvas.addEventListener('mouseleave', onMouseLeave);
kCanvas.addEventListener('mousemove', onMouseMove);

document.oncontextmenu = function(e) { e.preventDefault(); e.stopPropagation(); }

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
    switch(keyName){
        case 'm':
            console.log(masses.toArray());
            return;
        case 'Shift':
            return;
        case ' ':
            pause = !pause;
            if(!pause){
                requestAnimationFrame(loopy);
            }
            return;
        case "1":
            return;
        case "2":
            return;
        case "p":
            // console.log("MASSES", forceArray.toArray());
            console.log("accels ", accels.toArray());
            console.log("velos ", velos.toArray());
            console.log("places ", places.toArray());

            return;
        case "q":
            return;
        case "w":
            return;
        case "a":
            return;	
        case "s":
            return;	
        case "d":
            return;	
        case "Enter":
            return;	
        default:
            console.log(keyName)
    }
}, false);

function onClick(event){
    click = true;
}

function onRelease(event){
    click = false;
}

function onMouseMove(event){
    mouseX = event.pageX;
    mouseY = event.pageY;
}

function onMouseLeave(event){
    click = false;
}