import ExperinceThing from "./ExperinceThing"


const Experience = () => {
    const work = ["Freelance", "Amazon", "Python", "VSCODE"]
    const place = ["Morocco", "Afriqua", "Ocean", "Tunisia"]
    const timeline = [2019, 2021, 2022, 2024]
  return (
    <section className="py-[4vh] px-[4vw]">
        <div className="text-5xl">EXPERIENCE</div>
        <div className="flex flex-col gap-[2vh] mt-[4vh]">
            {work.map((w, i) => (
                <ExperinceThing key={i} work={w} place={place[i]} time={timeline[i]}/>
            ))}
            
        </div>
    </section>
  )
}

export default Experience