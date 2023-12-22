import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import '../../styles/clock.css'

export default function Clock() {
    const SecondHand = styled.div`
    &:before{
        content: '';
        position: absolute;
        width: 5px;
        height: 150px;
        background: #e1a32d;
        z-index: 14;
        border-radius: 6px 6px 0 0;
        bottom: 113px;
        transform: rotate(${props => props.rotation});
        translate3d(-50%, 0, 0);
        transform-origin: 0px bottom;
        }
        display: flex;
        justify-content: center;
        position: absolute;
        width: 230px;
        height: 230px;

`

    const HourHand = styled.div`
     &:before{
        content: '';
            position: absolute;
            width: 8px;
            height: 80px;
            background: #292a2e;
            left: 50%;
            z-index: 10;
            border-radius: 6px 6px 0 0;
            transform: rotate(${props => props.rotation});
            translate3d(-50%, 0, 0);
            transform-origin: 0px bottom;
            }

`


    const MinHand = styled.div`
     &:before{
        content: '';
            position: absolute;
            width: 4px;
            height: 90px;
            background: #fff;
            left: 50%;
            z-index: 12;
            border-radius: 6px 6px 0 0;
            transform: rotate(${props => props.rotation});
            translate3d(-50%, 0, 0);
            transform-origin: 0px bottom;
            }

`

    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(interval)
    }, [])
    return (
        <>
        <h1>My React Clock</h1>
        <div className='clock'>
            <div className="hour">
                <HourHand rotation={((time.getHours() % 12) + time.getMinutes() / 60 + time.getSeconds() / 3600) * 30 + 'deg' }>

                </HourHand>
            </div>
            <div className="min">
                <MinHand rotation={time.getMinutes() * 6 + 'deg'}>

                </MinHand>
            </div>
            <div className="sec">
                <SecondHand rotation={time.getSeconds() * 6 + 'deg'}>

                </SecondHand>
            </div>
            <div className="number number1" ><p>1</p></div>
            <div className="number number2"><p>2</p></div>
            <div className="number number3"><p>3</p></div>
            <div className="number number4"><p>4</p></div>
            <div className="number number5"><p>5</p></div>
            <div className="number number6"><p>6</p></div>
            <div className="number number7"><p>7</p></div>
            <div className="number number8"><p>8</p></div>
            <div className="number number9"><p>9</p></div>
            <div className="number number10"><p>10</p></div>
            <div className="number number11"><p>11</p></div>
            <div className="number number12"><p>12</p></div>
        </div>
        </>
    )
}