"use client";

import Image from "next/image";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import Link from "next/link";
import { ProjectData } from "../projectData/projectData";

const Projects = ({ projectRef }: any) => {

  return (
    <section id="projects" ref={projectRef} className="mt-28">
      <div className="w-[200px] flex gap-3 justify-center items-center py-1 border rounded-l-full rounded-r-full">
        <AiFillSetting />
        <p className="uppercase">Projects</p>
      </div>
      {ProjectData?.map((item) => {
        return (
          <div key={item?.id}>
            <h2 className="mt-20 text-xl font-bold">{item?.name}</h2>
            <div className="mt-5 rounded-md">
              <Link href={`/${item?.id}`}>
                <Image
                  src={item?.img}
                  height={999}
                  width={999}
                  alt="project photo"
                  className="rounded-md"
                />
              </Link>
              <div className="flex gap-5 mt-5">
                <Link href={item.live_site}>
                  <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in">
                    Live Preview
                  </div>
                </Link>
                <Link href={`/${item?.id}`}>
                  <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in">
                    Details
                  </div>
                </Link>

              </div>
            </div>
          </div>
        );
      })}

      {/* <div>
        <h2 className="mt-20 text-xl font-bold">Purana Bazar</h2>
        <div className="mt-5 rounded-md">
          <Image
            src={puranBazarImg}
            height={999}
            width={999}
            alt="project photo"
            className="rounded-md"
          />
          <div className="flex gap-5 mt-5">
            <Link href="https://puranabazar-4dd34.web.app/">
              <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in">
                Live Preview
              </div>
            </Link>
            <Link href="https://github.com/ArkoRoyBadhon/puran-bazar-frontend">
              <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in">
                Front End Code
              </div>
            </Link>
            <Link href="https://github.com/ArkoRoyBadhon/puran-bazar-server">
              <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in">
                Backend Code
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
