import { ProjectData } from "@/app/projectData/projectData";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const ProjectDetail = ({ params }: { params: { projectId: string } }) => {
  const data = ProjectData?.filter((item) => item?.id === params?.projectId);

  return (
    <div className="bg-[#1F1F1F] min-h-[100vh] text-[#FFFFFF] pb-10">
      <div className="max-w-screen-md lg:max-w-screen-lg mx-auto">
        <div className="pt-5 pb-10">
          <Link
            className="px-5 py-3 bg-green-200 text-black rounded-md hover:bg-green-300 font-semibold"
            href="/"
          >
            Back To Home
          </Link>
        </div>
        {data?.map((item) => {
          return (
            <div key={item.id} className="">
              <Image
                className="w-full rounded-md"
                src={item?.img}
                width={800}
                height={800}
                alt="img"
              />

              <div className="flex gap-5 pt-2">
                <Link href={item.live_site}>
                  <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in flex gap-3">
                    <FaEye size={25} />
                    <span>Preview</span>
                  </div>
                </Link>
                <Link href={item?.frontend_code}>
                  <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in">
                    Front End Code
                  </div>
                </Link>
                <Link href={item?.backend_code}>
                  <div className="py-3 px-4 bg-green-400 text-bold rounded-md cursor-pointer hover:bg-green-500 transition-all ease-in">
                    Backend Code
                  </div>
                </Link>
              </div>

              <div className="mt-10">
                <p className="text-[24px] font-bold">Front-End Technology</p>
                {item?.frontend_technology?.map((subItem) => {
                  return (
                    <div key={subItem} className="">
                      - {subItem}
                    </div>
                  );
                })}
              </div>
              <div className="mt-10">
                <p className="text-[24px] font-bold">Back-End Technology</p>
                {item?.backend_technology?.map((subItem) => {
                  return (
                    <div key={subItem} className="">
                      - {subItem}
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 font-bold text-[24px]">
                Information for login
              </p>
              <div className="">
                <strong>Email: </strong>
                {item?.email}
              </div>
              <div className="">
                <strong>Password: </strong>
                {item?.password}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetail;
