import { Quiz } from "./components/Quiz";

function App() {
  return (
    <div className="h-screen">
      <div className="gas xe mt-10 mb-15">
        <div className="marquee-rtl rounded-md">
          <h1 className="my-10 ml-auto mr-auto w-max text-5xl font-extrabold symbol">
            Welcome to the Quizstand
          </h1>
        </div>
      </div>
      <Quiz />
    </div>
  );
}

export default App;
