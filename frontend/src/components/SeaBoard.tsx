import React from "react";
import type { Coordinates, Missile, ShipInfo } from "../types/SeaBoardTypes";

type SeaBoardProps = {
  name: string;
  missiles: Missile[];
  ships: ShipInfo[];
};

function isShip(coord: Coordinates, ships: ShipInfo[]) {
  for (const shipInfo of ships) {
    for (const part of shipInfo.parts) {
      if (part[0] === coord[0] && part[1] === coord[1]) {
        return true;
      }
    }
  }
  return false;
}
function isMissile(coord: Coordinates, missiles: Missile[]) {
  for (const missile of missiles) {
    if (missile[0] === coord[0] && missile[1] === coord[1]) {
      return true;
    }
  }
  return false;
}

function isCoule(coord: Coordinates, ships: ShipInfo[]){
  for(const ship of ships) {
    for(const part of ship.parts) {
      if (part === coord) {
        return true;
      }
    }
  }
  return false;
}


function isAllCoule(coord: Coordinates, ships: ShipInfo[]) {
  for (const ship of ships) {
    if(isCoule(coord, ships)) {
      return true;
    }
  }
  return false;
}

function getCaseColor(
  coord: Coordinates,
  ships: ShipInfo[],
  missiles: Missile[],
) {
  if (isMissile(coord, missiles) && isShip(coord, ships)) {
    return colors.touche;
  } else if (isMissile(coord, missiles) && !isShip(coord, ships)) {
    return colors.missed;
  } else if (isShip(coord, ships)) {
    return colors.boats;
  }
  else if (isAllCoule(coord, ships)) {
    return colors.coule;
  }
}

const boatImage = `${process.env.PUBLIC_URL}/images/boat.png`;
console.log("dsq", boatImage);
const colors = {
  touche: "bg-red-500",
  coule: "bg-black",
  missed: "bg-sky-500",
  boats: "",
};

const SeaBoard = ({ name, missiles, ships }: SeaBoardProps) => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <>
      <div className="pt-48"> 
        <h1 className="text-indigo-800 text-2xl font-semibold pb-4">{name}</h1>
        <div className="flex justify-center bg-violet-50">
          <section className="grid grid-cols-11 w-[510px]">
            <div className="w-12 h-12"></div>

            {letters.map((letter, index) => (
              <div
                key={index}
                className="w-12 h-12 border border-black flex items-center justify-center"
              >
                {index + 1}
              </div>
            ))}

            {letters.map((letter, i) => (
              <>
                <div
                  key={letter}
                  className="w-12 h-12 border border-black flex items-center justify-center"
                >
                  {letter}
                </div>

                {letters.map((letter, j) => (
                  <div
                    key={letter + j}
                    className={`w-12 h-12 border border-black ${getCaseColor([i, j], ships, missiles)}`}
                  >
                    {isShip([i, j], ships) ? <img src={boatImage}></img> : <div></div>}
                  </div>
                ))}
              </>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default SeaBoard;
