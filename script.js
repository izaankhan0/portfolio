function currentLightChanger(){
    let currentLight = document.querySelector(".green-dot-container").innerHTML
    if (currentLight == `<img onclick="currentLightChanger()" src="./media/1.png" class="bright-green-dot" alt="">`){
        console.log("flag-1")
        document.querySelector(".green-dot-container").innerHTML = '<img onclick="currentLightChanger()" src="./media/2.png" class="bright-green-dot" alt="">'        
        } else{
            console.log("flag-2")
            document.querySelector(".green-dot-container").innerHTML = '<img onclick="currentLightChanger()" src="./media/1.png" class="bright-green-dot" alt="">'
        }
    currentLight = document.querySelector(".green-dot-container").innerHTML
    let image = document.querySelectorAll('.vid-1');
    if (currentLight == `<img onclick="currentLightChanger()" src="./media/1.png" class="bright-green-dot" alt="">`){
        image[0].src = './media/vid-1.gif';
        image[1].src = './media/vid-1.gif';
    } else{
        image[0].src = './media/vid-2.gif';
        image[1].src = './media/vid-2.gif';

    }
}



window.addEventListener('scroll', reveal);

        function reveal() {
            const reveals = document.querySelectorAll('.jam');

            for (let i = 0; i < reveals.length; i++) {
                const winHeight = window.innerHeight;
                const revealtop = reveals[i].getBoundingClientRect().top;
                const revealPoint = 120;

                if (revealtop < winHeight - revealPoint) {
                    reveals[i].classList.add('jam-active');
                } else {
                    reveals[i].classList.remove('jam-active');
                }
            }
        }
        // const container = document.getElementById('about');
        // const draggable = document.getElementById('draggable');
        
        // let offsetX = 0;
        // let offsetY = 0;
        // let isDragging = false;
        
        // draggable.addEventListener('mousedown', (e) => {
        //     e.preventDefault(); // Prevent default action to avoid unwanted behavior
        //     offsetX = e.clientX - draggable.offsetLeft;
        //     offsetY = e.clientY - draggable.offsetTop;
        //     isDragging = true;
        //     draggable.style.cursor = 'grabbing';
        // });
        
        // document.addEventListener('mousemove', (e) => {
        //     if (isDragging) {
        //         e.preventDefault(); // Prevent default action to avoid unwanted behavior
        //         let x = e.clientX - offsetX;
        //         let y = e.clientY - offsetY;
        
        //         // Keep the draggable within the container
        //         x = Math.max(0, Math.min(x, container.clientWidth - draggable.clientWidth));
        //         y = Math.max(0, Math.min(y, container.clientHeight - draggable.clientHeight));
        
        //         draggable.style.left = `${x}px`;
        //         draggable.style.top = `${y}px`;
        //     }
        // });
        
        // document.addEventListener('mouseup', (e) => {
        //     e.preventDefault(); // Prevent default action to avoid unwanted behavior
        //     isDragging = false;
        //     draggable.style.cursor = 'grab';
        // });

        // // Prevent unwanted refresh behavior if there's any interactive element
        // document.addEventListener('click', (e) => {
        //     if (isDragging) {
        //         e.preventDefault();
        //     }
        // });
        document.querySelectorAll('.about-box').forEach(box => {
            box.style.position = 'absolute';
            box.style.zIndex = 1000;
        
            box.addEventListener('mousedown', function(e) {
                e.preventDefault();
        
                let shiftX = e.clientX - box.getBoundingClientRect().left;
                let shiftY = e.clientY - box.getBoundingClientRect().top;
                shiftX = shiftX + 242
                shiftY = shiftY + 28
                function moveAt(pageX, pageY) {
                    box.style.left = pageX - shiftX + 'px';
                    box.style.top = pageY - shiftY + 'px';
                }
        
                moveAt(e.pageX, e.pageY);
        
                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                }
        
                document.addEventListener('mousemove', onMouseMove);
        
                document.addEventListener('mouseup', function onMouseUp() {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                });
        
                box.ondragstart = function() {
                    return false;
                };
            });
        });