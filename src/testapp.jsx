import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from "@studio-freight/react-lenis";
import { IoIosCall } from "react-icons/io";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll({ imgsArray, setImage }) {
    const main = useRef();

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box');
            boxes.forEach((box, i) => {
                gsap.timeline({
                    scrollTrigger: {
                        onEnter: () => {
                            setTimeout(() => {
                                setImage(imgsArray[i])
                            }, 300);
                        },
                        onEnterBack: () => {
                            setTimeout(() => {
                                setImage(imgsArray[i])
                            }, 300);
                        },
                        trigger: box,
                        start: 'bottom bottom',
                        end: 'top 30%',
                        scrub: true,
                        // markers: true,
                    }
                })
                    .fromTo(box, { opacity: 0, x: 250,scale:1.2, transform: `rotate3d(0.2, 1, 0, 60deg)` }, { opacity: 0.5, x: 0, duration: 2 })
                    .to(box, { scale: 1.5, duration: 2,opacity:1, transform: `rotate3d(0.2, 1, 0, 0deg)` }, "70%")
                    .to(box, { scale: 1, opacity: 0, x: 250, rotateY: -20, duration: 2, transform: `rotate3d(-0.2, 1, 0, -60deg)` });
            });
        },
        { scope: main }
    );

    return (
        <ReactLenis
            root
        >
            <div className="section flex-center column" ref={main}>
                <div className="box w-[200px] text-md text-white h-[100px] mb-[250px] text-center flex flex-row items-start">
                    <span className='bg-green-600 text-2xl rounded-full'><IoIosCall/></span>
                    <span>Answer a call while paddleboarding</span>
                </div>
                <div className="box w-[200px] text-md text-white h-[100px] mb-[250px] text-center flex flex-row items-start">
                    <span></span>
                    <span>consectetur adipisicing elit. Ducimus illo saepe, quis quib</span>
                </div>
                <div className="box w-[200px] text-md text-white h-[100px] mb-[250px] text-center flex flex-row items-start">
                    <span></span>
                    <span>o facere, ex quas officia animi laboriosam provi</span>
                </div>
            </div>
        </ReactLenis>
    );
}
