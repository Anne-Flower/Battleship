package com.example.battleship;

import java.util.ArrayList;
import java.util.List;

public class PlayerState {
  SeaBoard seaBoard;

  public PlayerState() {
    Ship ship1 = new Ship(3, "ship1");
    int[] myMissile = new int[] { 2, 3 };
    this.seaBoard = new SeaBoard();
    seaBoard.placeMissile(myMissile);
    seaBoard.placeShip(ship1, new int[] { 2, 3 }, new int[] { 2, 5 });
  }

  public ArrayList<int[]> getMissiles() {
    return this.seaBoard.missiles;
  }

  public List<ShipInfo> getShips() {
    return this.seaBoard.ships;
  }
}
