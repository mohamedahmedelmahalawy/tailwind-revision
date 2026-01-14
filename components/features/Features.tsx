import Feature from "../feature/Feature";

function Features() {
  return (
    <div className="gap-6 grid sm:grid-cols-2 p-6 overflow-hidden font-semibold text-white sm:text-xl text-5xl">
      <Feature num={1} />
      <Feature num={2} />
      <Feature num={3} />
      <Feature num={4} />
      <Feature num={5} />
      <Feature num={6} />
    </div>
  );
}

export default Features;
