import React from 'react';

interface ExperienceThingProps {
  work: string;
  place: string;
  time: number;
}


const ExperinceThing : React.FC<ExperienceThingProps> =  ( {work, place, time}) => {
  return (
    <div className="group flex  flex-col gap-[2vh]">
        <div className="flex flex-row justify-between text-xl">
            <div>
                {work}
            </div>
            <div>
                {place}
            </div>
            <div>
                {time}
            </div>
        </div>
        <div className="w-[80vw] group-hover:w-[85vw] group-hover:translate-x-12 duration-500 ease-in-out h-[2px] bg-white"/>
    </div>
  )
}

export default ExperinceThing