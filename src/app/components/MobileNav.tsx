import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { GiStrong } from 'react-icons/gi';
import { SlBookOpen } from 'react-icons/sl';


const MobileNav = ( {ff}:any ) => {

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

    return (
        <div className='text-black'>

            <div  className=" relative">
                <div onClick={() => {scrollToSection(ff.homeRef), ff.setNavBar(false)} } className='flex gap-5 hover:bg-red-200 pl-6 pr-10 py-3'>
                    <AiFillHome className='text-[24px] hover:text-[#509750] transition-all ease-in text-[] linkClass projects' />
                    <p className="">Home</p>
                </div>
            </div>
            <div  className=" relative">
                <div onClick={() => {scrollToSection(ff.projectRef) , ff.setNavBar(false)}} className='flex gap-5 hover:bg-red-200 pl-6 pr-10 py-3'>
                    <AiFillSetting className='text-[24px] hover:text-[#509750] transition-all ease-in text-[] linkClass projects' />
                    <p className="">Projects</p>
                </div>
            </div>
            <div  className=" relative">
                <div onClick={() => {scrollToSection(ff.experienceRef), ff.setNavBar(false)}} className='flex gap-5 hover:bg-red-200 pl-6 pr-10 py-3'>
                    <GiStrong className='text-[24px] hover:text-[#509750] transition-all ease-in linkClass experience' />
                    <p className="">Experience</p>
                </div>

            </div>
            <div  className=" relative">
                <div onClick={() => {scrollToSection(ff.skillRef), ff.setNavBar(false)}} className='flex gap-5 hover:bg-red-200 pl-6 pr-10 py-3'>
                    <SlBookOpen className='text-[24px] hover:text-[#509750] transition-all ease-in linkClass skills' />
                    <p className="">Skills</p>
                </div>

            </div>
            <div  className="relative">
                <div onClick={() => {scrollToSection(ff.contactRef), ff.setNavBar(false)}} className='flex gap-5 hover:bg-red-200 pl-6 pr-10 py-3'>
                    <MdEmail className='text-[24px] hover:text-[#509750] transition-all ease-in linkClass contact' />
                    <p className="">Contact</p>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;