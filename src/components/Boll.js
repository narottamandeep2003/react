import React, { useState, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import '../App.css';
export default function Boll() {
    let [state, sstate] = useState(false)

    useEffect(() => {

        gsap.fromTo('.yellow', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 2, ease: Power3.easeOut })
        gsap.fromTo('.red', { opacity: 0, x: 40 }, { opacity: 1, delay: .3, x: 0, duration: 2, ease: Power3.easeOut })
        gsap.fromTo('.blue', { opacity: 0, x: 40 }, { opacity: 1, delay: .4, x: 0, duration: 2, ease: Power3.easeOut })
    }, [])
    let h = (e) => {
        console.log(e)
        if (!state) {
            gsap.to('.red', { scale: 1.8, duration: 1, x: 40 })
            gsap.to('.yellow', { opacity: 1, y: 20, x: -10, duration: 1 })
            gsap.to('.blue', { opacity: 1, y: -20, x: -10, duration: 1 })
            sstate(true)
        }
        else {
            gsap.to('.red', { scale: 1, duration: 1, x: 0 })
            gsap.to('.yellow', { opacity: 1, y: 0, x: 0, duration: 1 })
            gsap.to('.blue', { opacity: 1, y: 0, x: 0, duration: 1 })
            sstate(false)
        }
    }
    return (
        <div className="App">
            <h1>Hello</h1>
            <div className="con">
                <div className="circle yellow"></div>
                <div onClick={h} className="circle red"></div>
                <div className="circle blue"></div>
            </div>
        </div>
    )
}
