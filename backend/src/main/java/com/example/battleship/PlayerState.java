package com.example.battleship;

import java.util.ArrayList;
import java.util.List;

public class PlayerState {
  List<ShipInfo> ships;
  ArrayList<int[]> missiles;

  public PlayerState(){
    this.ships = new ArrayList<ShipInfo>();
    Ship ship1 = new Ship(3, "ship1");
    ShipInfo myShipInfo = new ShipInfo(ship1, new int[]{2,2}, new int[]{2,4});
    ships.add(myShipInfo);
    this.missiles = new ArrayList<int[]>();
    missiles.add(new int[]{2,3});
    missiles.add(new int[]{5,5});
  }

  public ArrayList<int[]> getMissiles() {
    return this.missiles;
  }

  public  List<ShipInfo>  getShips() {
    return this.ships;
  }
}


