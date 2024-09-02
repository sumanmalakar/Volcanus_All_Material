import Person from "./components/Person";

const App = () => {
  return (
    <>
      <Person
        name="Infinity war"
        imdb={19.8}
        relase={2018}
        actor="Doctor Strange"
      />
      <Person
        name="The End Game"
        imdb={10.8}
        relase={2020}
        actor="Thanos"
      />
      {/* <Person
        name="Avengers"
        imdb={9.8}
        relase={2012}
        actor="Loki"
      /> */}
    
    </>
  );
};

export default App;
