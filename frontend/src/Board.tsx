import { useState } from "react";
import SeaBoard from "./components/SeaBoard";
import usePlaceMissile from "./hooks/usePlaceMissile";
import usePlayerState from "./hooks/usePlayerState";

const Board = () => {
  const { placeMissile } = usePlaceMissile();
  const [refresh, setRefresh] = useState(0);
  const state = usePlayerState(refresh);
  const handlePlaceMissile = async (coord: string) => {
    await placeMissile(coord);
    setRefresh((r) => r + 1);
  };
  if (state.status === "error") {
    return <div>There is an error 😬</div>;
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
          <SeaBoard
            name={"Enemy board"}
            missiles={[]}
            ships={[]}
            onPlaceMissile={handlePlaceMissile}
          />
          <SeaBoard
            name={"Your board"}
            missiles={state.missiles!}
            ships={state.ships!}
            onPlaceMissile={handlePlaceMissile}
          />
        </div>
      </section>
    );
  }
};

export default Board;
