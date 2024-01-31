"use client"

import React from 'react';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';



const Introduction = ({ homeRef }: any) => {


    return (
        <section id="home" ref={homeRef} className='my-10'>
            <div className="w-[200px] flex gap-3 justify-center items-center py-1 border rounded-l-full rounded-r-full">
                <AiFillHome />
                <p className="uppercase">introduction</p>
            </div>

            <h2 className="text-[36px] font-bold mt-14">Hi! <br />I'm Arko Roy Badhon <br />A <span className='italic'> Full Stack MERN Developer </span></h2>

            <p className="mt-8">A professional stansard web developer and very quick learner according to needs.</p>

            <div className="mt-20 flex flex-col md:flex-row gap-20">
                <div className="text-center">
                    <p className="text-[32px] text-[green]">4+</p>
                    <p className="">Real Life Projects</p>
                </div>
                <div className="text-center">
                    <p className="text-[32px] text-[green]">3 Months+</p>
                    <p className="">Real Life Experience</p>
                </div>
            </div>

            <div className="w-40">
                <a href="https://drive.google.com/file/d/1k31_pAl-GdC9mEoPWidEytqy_2NXIMhq/view?usp=sharing" download="Resume" className="bg-red-400 w-40">
                    <div className="mt-10 cursor-pointer border hover:bg-green-500  text-center py-[6px] rounded-lg transition-all ease-in">Resume</div>
                </a>
            </div>

        </section >
    );
};

export default Introduction;