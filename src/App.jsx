import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import gsap from 'gsap'
import Scroll from './testapp'
function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState("https://awik.io/demo/guardian-phone.png")
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.fromTo('.log1text', { x: -200, opacity: 0 }, {
      // y: 6.29, 
      x: 0,
      opacity: 1,
      // ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".log1",
        scrub: 1,
        onEnter: () => {
          setImage('https://awik.io/demo/guardian-phone.png')
        },
        onEnterBack: () => {
          setImage('https://awik.io/demo/guardian-phone.png')
        },
        endTrigger: ".log2",
        end: "top bottom",
      }
    })
    gsap.fromTo('.log2text', { x: -200, opacity: 0 }, {
      // y: 6.29, 
      x: 0,
      opacity: 1,
      // ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".log2",
        scrub: 1,
        onUpdate: (e) => {
          console.log(e.progress)
        },
        onEnter: () => {
          setImage('https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        },
        onEnterBack: () => {
          setImage('https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        },
        endTrigger: ".log3",
        end: "top bottom",
      }
    })
    gsap.fromTo('.log3text', { x: -200, opacity: 0 }, {
      // y: 6.29, 
      x: 0,
      opacity: 1,
      // ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".log3",
        scrub: 1,
        onEnter: () => {
          setImage('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        },
        onEnterBack: () => {
          setImage('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
        },
        endTrigger: ".log4",
        end: "top bottom",
      }
    })

  }, [])

  return (
    <>
      <div className='relative'>
        <div style={{ position: 'relative !important' }} className='h-fit relative'>
          <div className='sticky top-0 left-0'>
            <Header image={image} />
          </div>
          <div>
            <Scroll imgsArray={['https://awik.io/demo/guardian-phone.png', 'https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']} setImage={setImage} />
          </div>

          <div className='ml-[300px] flex justify-center items-center log4 h-[200vh] bg-yellow-60'>

          </div>
        </div>
        <div className='h-screen w-screen bg-red-950'>

        </div>
      </div>

    </>
  )
}
const Header = ({ image }) => {
  return <>
    <div className='relative'>
      <div className='w-[100vw] mt-10 relative flex justify-center items-center  text-white overflow-x-hidden'>
        <div className='w-[90%] h-12 rounded-2xl border-2 flex flex-row justify-between mt-5 px-5 items-center'>
          <div>
            Logo
          </div>
          <div className='flex flex-row justify-between w-[70%]'>
            <div>Home</div>
            <div>test1</div>
            <div>test2</div>
            <div>test3</div>
            <div>test4</div>
            <div>test5</div>
          </div>
        </div>
      </div>
      <div className='w-screen flex flex-row justify-between items-start mt-10 '>

        <div className='text-white mt-[200px] ml-[120px]'>
          <h1 className='text-[#33D7C8] font-bold text-5xl'>
            Dlicom Application
          </h1>
          <h2 className='text-[#33D7C8] font-bold text-5xl mt-2'>
            Nothing Better
          </h2>
          <p className='mt-4 text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='relative h-[200px] w-[300px] mr-[100px]'>
          <div className='absolute left-0 top-0 z-10'>
            <img width={250} src='/phoneImg.png' />
          </div>
          <div className='ml-[10px] h-[490px] w-[230px] bg-red-700 rounded-[30px] relative overflow-hidden'>
            <img className='h-full w-full ' src={image} />
          </div>
          {/* <div class="iphone">
            <div class="iphone-small-round-top"></div>

            <div class="iphone-round-top-left"></div>

            <div class="iphone-speaker"></div>

            <img src={image} class="iphone-screenshot" />

            <div class="iphone-button"></div>

          </div> */}
        </div>
      </div>
    </div>
  </>
}
export default App
