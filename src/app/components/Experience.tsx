import React from 'react';
import { GiStrong } from 'react-icons/gi';




const Experience = ({experienceRef}:any) => {
    return (
        <section id="experience" ref={experienceRef} className='mt-28'>
            <div className="w-[200px] flex gap-3 justify-center items-center py-1 border rounded-l-full rounded-r-full">
                <GiStrong />
                <p className="uppercase">experience</p>
            </div>

            <h3 className="my-10 text-[24px] font-semibold">Education & <span className='text-[#5ccc5c]'>Experience</span></h3>

            <div className="relative mt-8">
                <div className="ml-12">
                    <small>2016- 2018</small>
                    <h5 className="leading-8 text-[20px]">HSC</h5>
                    <p className="leading-8 text-[16px]">Birgonj College</p>
                </div>
                <div className="absolute w-3 h-3 bg-gray-400 top-1 rounded-full "></div>
                <div className="absolute w-[2px] h-20 bg-gray-400 left-1 top-1 rounded-full "></div>
            </div>
            <div className="relative mt-8">
                <div className="ml-12">
                    <small>2019- 2023</small>
                    <h5 className="leading-8 text-[20px]">BSc in CSE</h5>
                    <p className="leading-8 text-[16px]">Dafodil International University</p>
                </div>

                <div className="absolute w-3 h-3 bg-gray-400 top-1 rounded-full "></div>
                <div className="absolute w-[2px] h-20 bg-gray-400 left-1 top-1 rounded-full "></div>
            </div>
            <div className="relative mt-8">
                <div className="ml-12">
                    <small>January, 2023 - April, 2023</small>
                    <h5 className="leading-8 text-[20px]">Internship on Full Stack MERN Developer</h5>
                    <p className="leading-8 text-[16px]">AmeliaSoft</p>
                </div>

                <div className="absolute w-3 h-3 bg-gray-400 top-1 rounded-full "></div>
                <div className="absolute w-[2px] h-20 bg-gray-400 left-1 top-1 rounded-full "></div>
            </div>
        </section>
    );
};

export default Experience;