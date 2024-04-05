import ExperinceThing from "../About/ExperinceThing"
import AgendaThing from "./AgendaThing"


const Agenda = () => {
    const work = ["Whatsapp", "Facebook", "Gmail", "LinkedIn"]
    const timeline = "Click"
    const Urls = ["http://www.google.com", "http://www.google.com", "http://www.google.com", "http://www.google.com" ]
  return (
    <section className="py-[4vh] px-[4vw]">
        <div className="text-5xl">Contacts</div>
        <div className="flex flex-col gap-[2vh] mt-[8vh]">
            {work.map((w, i) => (
                <AgendaThing key={i} work={w}  time={timeline} link={Urls[i]}/>
            ))}
            
        </div>
    </section>
  )
}

export default Agenda