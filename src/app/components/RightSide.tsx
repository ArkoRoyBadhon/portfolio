"use client"

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { GiStrong } from 'react-icons/gi';
import { SlBookOpen } from 'react-icons/sl';
import Introduction from './Introduction';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import ContactForm from './ContactForm';


import { RxCross2 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa'
import MobileNav from './MobileNav';

const RightSide = () => {
    const [hoverWord, setHoverWord] = useState("")
    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);
    const skillRef = useRef(null);
    const contactRef = useRef(null);


    const [navBar, setNavBar] = useState(false)


    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };


    useEffect(() => {
        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('.linkClass')

        // console.log(navLi);

        window.addEventListener('scroll', () => {
            let current: any = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= sectionTop - (sectionHeight / 5)) {
                    current = section.getAttribute('id')
                    // console.log(current);
                }
            })
            navLi.forEach(li => {
                // console.log("li", li);
                li.classList.remove('active');
                if (li.classList.contains(current)) {
                    li.classList.add('active');
                }
            })
        })
    }, [])


    const ff = {
        homeRef,
        projectRef,
        experienceRef,
        skillRef,
        contactRef,
        navBar,
        setNavBar
    }
    return (
        <div className=''>

            <div className="">
                <div onClick={() => setNavBar(!navBar)} className="absolute md:hidden top-4 right-3 z-20">
                    {navBar ? <RxCross2 /> : <FaBars />}
                </div>
                <div className={`absolute md:hidden h-[100%] w-[100vw] bg-white opacity-95 top-14 transition-all ease-in ${navBar ? "left-0" : "left-[-100%]"}`}>
                    <MobileNav
                        ff={ff}
                    />
                </div>
            </div>

            <div className="h-fit px-5 md:pl-20 md:pr-16">
                <Introduction homeRef={homeRef} />
                <Projects projectRef={projectRef} />
                <Experience experienceRef={experienceRef} />
                <Skills skillRef={skillRef} />
                <ContactForm contactRef={contactRef} />
            </div>

            <div className="hidden md:block md:fixed border p-4 rounded-t-full rounded-b-full md:top-40 h-fit md:right-10">
                <div onMouseEnter={() => setHoverWord("home")} onMouseLeave={() => setHoverWord("")} className="mb-6 relative">
                    <div onClick={() => scrollToSection(homeRef)} className=''><AiFillHome className='text-[24px] hover:text-[#509750] transition-all ease-in linkClass home' /></div>
                    {
                        hoverWord === "home" &&
                        <div className="absolute right-[40px] top-[2px] bg-white text-black py-1 px-2 rounded-lg">Home</div>
                    }
                </div>
                {/* <div onMouseEnter={() => setHoverWord("about")} onMouseLeave={() => setHoverWord("")} className="mb-6 relative">
                    <div onClick={() => scrollToSection(projectRef)}><CgProfile className='text-[24px] hover:text-[#509750] transition-all ease-in about' /></div>
                    {
                        hoverWord === "about" &&
                        <div className="absolute right-[40px] top-[2px] bg-white text-black py-1 px-2 rounded-lg">About Me</div>
                    }
                </div> */}
                <div onMouseEnter={() => setHoverWord("projects")} onMouseLeave={() => setHoverWord("")} className="mb-6 relative">
                    <div onClick={() => scrollToSection(projectRef)} className=''><AiFillSetting className='text-[24px] hover:text-[#509750] transition-all ease-in text-[] linkClass projects' /></div>
                    {
                        hoverWord === "projects" &&
                        <div className="absolute right-[40px] top-[2px] bg-white text-black py-1 px-2 rounded-lg">Projects</div>
                    }
                </div>
                <div onMouseEnter={() => setHoverWord("experience")} onMouseLeave={() => setHoverWord("")} className="mb-6 relative">
                    <div onClick={() => scrollToSection(experienceRef)} className=''><GiStrong className='text-[24px] hover:text-[#509750] transition-all ease-in linkClass experience' /></div>
                    {
                        hoverWord === "experience" &&
                        <div className="absolute right-[40px] top-[2px] bg-white text-black py-1 px-2 rounded-lg">Experience</div>
                    }
                </div>
                <div onMouseEnter={() => setHoverWord("skills")} onMouseLeave={() => setHoverWord("")} className="mb-6 relative">
                    <div onClick={() => scrollToSection(skillRef)} className=''><SlBookOpen className='text-[24px] hover:text-[#509750] transition-all ease-in linkClass skills' /></div>
                    {
                        hoverWord === "skills" &&
                        <div className="absolute right-[40px] top-[2px] bg-white text-black py-1 px-2 rounded-lg">Skills</div>
                    }
                </div>
                <div onMouseEnter={() => setHoverWord("contact")} onMouseLeave={() => setHoverWord("")} className="relative">
                    <div onClick={() => scrollToSection(contactRef)} className=''><MdEmail className='text-[24px] hover:text-[#509750] transition-all ease-in linkClass contact' /></div>
                    {
                        hoverWord === "contact" &&
                        <div className="absolute right-[40px] top-[2px] bg-white text-black py-1 px-2 rounded-lg">Contact</div>
                    }
                </div>

            </div>
        </div>
    );
};

export default RightSide;