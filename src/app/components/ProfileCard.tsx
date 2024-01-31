import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import profile from '../assets/profile.jpg'
import Image from 'next/image';

const ProfileCard = () => {
    return (
        <section className='md:fixed md:w-[350px]'>
            <div className="border my-5 rounded-2xl py-10 px-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-[32px] font-bold">Hi!!</h3>
                    <p className="text-right leading-4"><small>Full Stack Web <br />Developer</small></p>
                </div>
                <div className="h-[180px] my-5 w-4/5 mx-auto rounded-2xl">
                    <Image src={profile} alt="Photo" height={999} width={999} className='w-full'  />
                </div>
                <div className="mt-20">
                    <h3 className="text-[24px] font-semibold">Arko Roy Badhon</h3>
                    <p className="text-[18px]">arkoroyb@gmail.com</p>
                    <p className="text-[18px]">Dhaka, Bangladesh</p>
                </div>

                <div className="flex gap-3 my-10 justify-center ">
                    <Link href="https://github.com/ArkoRoyBadhon" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-green-400 hover:border-green-400 transition-all ease-in">
                        <AiFillGithub className='text-[22px]' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/arko-roy-badhon-893567198/" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-green-400 hover:border-green-400 transition-all ease-in">
                        <AiFillLinkedin className='text-[22px]' />
                    </Link>
                    <Link href="https://www.facebook.com/sudu.ami.16" className="rounded-full border w-12 h-12 flex justify-center items-center hover:text-green-400 hover:border-green-400 transition-all ease-in">
                        <BsFacebook className='text-[22px]' />
                    </Link>
                </div>
                <Link href="#contact" className="bg-green-400 hover:bg-green-600 flex justify-center items-center gap-5 py-3 rounded-lg text-[#000] cursor-pointer transition-all ease-in">
                    <AiOutlineMail />
                    <p>Hire Me</p>
                </Link>
            </div>
        </section>
    );
};

export default ProfileCard;