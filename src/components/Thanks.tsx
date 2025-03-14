import Quenshi from "./Quenshi.png";

export const Thanks = () => {
  return (
    <div className="ml-auto mr-auto w-max flex flex-col items-center">
      <h1 className=" text-5xl font-extrabold">
        Thanks to Quenshi for the quiz and the videos!
      </h1>
      <img className="w-96 h-auto" src={Quenshi} />
    </div>
  );
};
