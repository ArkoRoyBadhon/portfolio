import React from 'react';
import { SlBookOpen } from 'react-icons/sl';


const Skills = ({skillRef}:any) => {
    return (
        <section id="skills" ref={skillRef} className='mt-28'>
            <div className="w-[200px] flex gap-3 justify-center items-center py-1 border rounded-l-full rounded-r-full">
                <SlBookOpen />
                <p className="uppercase">SKills</p>
            </div>

            <div className="my-10">
                <h5 className="text-[18px] mb-5">Expertise</h5>
                <ul className='list-disc ml-5'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Boostrap</li>
                    <li>Tailwind CSS</li>
                    <li>REACT JS</li>
                    <li>NEXT JS</li>
                </ul>
            </div>
            <div className="my-10">
                <h5 className="text-[18px] mb-5">Comfortable</h5>
                <ul className='list-disc ml-5'>
                    <li>Redux</li>
                    <li>RTK Query</li>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>TypeScript</li>
                </ul>
            </div>
            <div className="my-10">
                <h5 className="text-[18px] mb-5">Tools</h5>
                <ul className='list-disc ml-5'>
                    <li>VS Code</li>
                    <li>Git & GitHub</li>
                    <li>Postman</li>
                    <li>MongoDB Compass</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;