const countdownClass = 'countdown';
const teaserClass = 'teaser'
const countDownDate = new Date("Mar 15, 2021 18:00:00").getTime();

const VISIBLE = 'visible';
const HIDDEN = 'hidden';
let x;

const setVisibility = (className, visibility) => {
    Array.from(document.getElementsByClassName(className)).forEach(it => {
            it.style.visibility = visibility;
            if (visibility === HIDDEN) {
                it.style.height = '0';
            }
        }
    );
}

const counter = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
        if (x) {
            clearInterval(x);
        }
        setVisibility(teaserClass, VISIBLE);
        setVisibility(countdownClass, HIDDEN);
        return;
    }

    setVisibility(teaserClass, HIDDEN);
    setVisibility(countdownClass, VISIBLE);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName(countdownClass)[0].innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes " + seconds + " seconds ";
}

window.onload = () => {
    counter();
    x = setInterval(counter, 1000);
};




