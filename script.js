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
                const revealPoint = 150;

                if (revealtop < winHeight - revealPoint) {
                    reveals[i].classList.add('jam-active');
                } else {
                    reveals[i].classList.remove('jam-active');
                }
            }
        }