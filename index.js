function addStar(){
    //Add a star to the existing div with class "stars"

    const chance = Math.random()

    console.log(chance)

    const button = document.getElementsByClassName("button-main")[0]
        button.disabled = true

    const timer = document.getElementsByClassName('timer')[0]
    timer.innerHTML = "5"

    const timerInterval = setInterval(() => {
        timer.innerHTML = parseInt(timer.innerHTML) - 1

        if (timer.innerHTML == 0) {
            return
        }
    }, 1000);



    if (chance < 0.5) {

        setTimeout(() => {
            button.disabled = false
            clearInterval(timerInterval)
            timer.innerHTML = "Congrats! Try again!"
            var star = document.createElement("img");

            star.src= "./images/star.png";
            document.getElementsByClassName("stars")[0].appendChild(star);

            star.classList.add('animation')
    
        }, 1000 * 5);
    }
    else{
        setTimeout(() => {
            button.disabled = false
            clearInterval(timerInterval)
            timer.innerHTML = "Not this time! Try again!"
        }, 1000 * 5);
        return
    }

    

}