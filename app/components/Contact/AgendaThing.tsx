import React from 'react';
import Link from 'next/link';

interface ExperienceThingProps {
  work: string;
  time: string;
  link: string;
}


const AgendaThing : React.FC<ExperienceThingProps> =  ( {work, time , link}) => {
  return (
    <div className="group flex  flex-col gap-[2vh]">
        <div className="flex flex-row justify-between text-xl group-hover:translate-x-4 duration-500 ease-in-out">
            <div>
                {work}
            </div>
            <div className="hover:text-gray-500 duration-500 ease-in-out">
                <Link href={link}>
                {time}
                </Link>
            </div>
        </div>
        <div className="w-[80vw] group-hover:w-[85vw] group-hover:translate-x-12 duration-500 ease-in-out h-[2px] bg-white"/>
    </div>
  )
}

export default AgendaThing