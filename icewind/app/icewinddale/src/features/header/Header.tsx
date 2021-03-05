import React, {Fragment, useEffect, useState} from 'react';
import './Header.css';

const countDownDate = new Date("Mar 15, 2021 18:00:00").getTime();

function Header() {

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
    const [left, setLeft] = useState<string>('...')

    useEffect(() => {
        setTimer(setInterval(() => counter(countDownDate), 1000));
    }, [countDownDate])


    const counter = (target: number) => {
        const now = new Date().getTime();
        const distance = target - now;
        if (distance <= 0) {
            if (timer) {
                clearInterval(timer);
                setTimer(null)
            }
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setLeft(days + " days " + hours + " hours "
            + minutes + " minutes " + seconds + " seconds ");
    }


    return <Fragment>
        <a className={'impressum'} href={'/impressum.html'} >impressum</a>
        <h1>
            {left} until your journey begins...
        </h1>

    </Fragment>

}

export default Header;
