import SeaBoard from "./components/SeaBoard";
import usePlayerState from "./hooks/usePlayerState";
import type { Missile, ShipInfo } from "./types/SeaBoardTypes";


const Board = () => {
  const state = usePlayerState();
  if (state.status === "error") {
    return <div>There is an error</div>;
  } else if (state.status === "loading") {
    return <div>loading...</div>;
  } else {
    return (
      <section className="bg-gradient-to-r from-sky-100 to-indigo-200 h-screen">
        {/* <h1 className="text-indigo-800 text-4xl font-bold flex justify-center p-24">
        BOARD
      </h1> */}
        <div className="flex flex-row gap-12 justify-center">
          {" "}
          <SeaBoard name={"Enemy board"} missiles={[]} ships={[]} />
          <SeaBoard
            name={"Your board"}
            missiles={state.missiles!}
            ships={state.ships!}
          />
        </div>
      </section>
    );
  }
};

export default Board;
