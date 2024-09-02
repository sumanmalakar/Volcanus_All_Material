import Hero from "./Hero";

const Person = () => {
  const heros = {
    hero1: "Batman",
    hero2: "Spiderman",
  };
  const phone = "Oneplus";
  let laptop = "hp probook 430 g2";
  console.log(heros.hero1);

  const arr = ["Apple", "Bnana", "Mango", 12, 20.3, "Oneplus"];
  return (
    <>
    <h1>This is person component</h1>
      {/* <div>
        {30 + 4}
        <h1>My Smartphone name is = {phone} </h1>
        <h1>My laptop = {laptop}</h1>
        <h1>Welcome To React Tutorail</h1>
        <h2>My name is {heros.hero1} & currently i'm learning react</h2>{" "}
        <h3>My name is {heros.hero2} & i'm already know react pretty well</h3>{" "}
      </div> */}
      {/* <div>
        <h1>Hello</h1>
        <h2>Hello 2</h2>
      </div>
      <div>
        <h1>Superman</h1>
      </div> */}
      {arr.map((d) => {
        return (
          <>
            <div key={Math.random()}>
              <h1>{d}</h1>
            </div>
            {/* <div>Testing div</div> */}
          </>
        );
      })}
      <Hero />
    </>
  );
};

export default Person;
