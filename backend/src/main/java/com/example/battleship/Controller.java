package com.example.battleship;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.battleship.SeaBoard.MissileResult;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {

  private List<Ship> ships = new ArrayList<Ship>();
  private final GameService gameService;

  public Controller(GameService gameService) {
    this.gameService = gameService;
  }

  // GET
  @GetMapping("/")
  public String index() {
    return "Greetings from Spring Boot!";
  }

  @GetMapping("/ships")
  public List<Ship> allShips() {
    return ships;
  }

  @GetMapping("/player-state/{id}")
  public PlayerState playerState(@PathVariable int id) {
    return gameService.getPlayerState();
  }

  // POST
  @PostMapping("/ship")
  public Ship addShip(@RequestBody Ship ship) {
    ships.add(ship);
    return ship;
  }

  @PostMapping("/placeMissile")
  public MissileResult placeMissile(@RequestBody String coord) {
    int[] coordinates = Utils.parseStringCoordinate(coord);
    MissileResult myResult = gameService.getPlayerState().seaBoard.placeMissile(coordinates);
    return myResult;
  }

  @PostMapping("/placeShip")
  public String placeShip(@RequestBody ShipPlaceBody body) {
    int[] startCoord = Utils.parseStringCoordinate(body.getStart());
    int[] endCoord = Utils.parseStringCoordinate(body.getEnd());
    gameService.getPlayerState().placeShip(startCoord, endCoord);
    return "ok";
  }
}
