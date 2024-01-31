import ProfileCard from "@/app/components/ProfileCard";
import RightSide from "@/app/components/RightSide";

export default function Home() {
    return (
      <div className="relative md:flex bg-[#1F1F1F] h-fit text-[#FFFFFF] px-3 pt-10 md:pt-0 md:pl-5 md:pr-10">
        <div className="md:w-[25%] text-center">
          <ProfileCard />
        </div>
        <div className="md:w-[75%]">
          <RightSide />
        </div>
      </div>
    );
  }
  
