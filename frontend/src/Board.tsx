import SeaBoard from "./components/SeaBoard";
import type { Missile, ShipInfo } from "./types/SeaBoardTypes";

const mockMissiles: Missile[] = [
  [2, 3],
  [4, 5],
  [2, 5],
];
const mockShip: ShipInfo[] = [
  {
    ship: {
      cells: 2,
      name: "Truc",
    },
    parts: [
      [2, 3],
      [2, 4],
    ],
  },
];

const Board = () => {
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
          missiles={mockMissiles}
          ships={mockShip}
        />
      </div>
    </section>
  );
};

export default Board;
