import Picture from "./Picture";

const RightHero = () => {
  return (
    <section className="flex flex-col  justify-center items-center  py-[8vh]">
      <div className="flex flex-col gap-12">
        <Picture />
        <Picture />
        <Picture />
      </div>
    </section>
  );
};

export default RightHero;
