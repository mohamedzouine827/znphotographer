import LeftHero from "./components/LeftHero";
import Navbar from "./components/Navbar";
import RightHero from "./components/RightHero";

export default function Home() {
  return (
    <section className="flex flex-row justify-between min-h-screen min-w-screen">
      <div className="fixed w-[50vw] h-[100vh]">
          <Navbar />
          <div className="absolute inset-x-0 bottom-[8vh]">
            <LeftHero />
          </div>
      </div>
      <div className="w-[50%] min-h-screen absolute left-1/2 top-0">
        <RightHero />
      </div>
    </section>
  );
}
