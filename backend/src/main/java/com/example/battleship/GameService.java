package com.example.battleship;
import org.springframework.stereotype.Service;

@Service
public class GameService {
  
  public PlayerState playerOneState = new PlayerState();

  public PlayerState getPlayerState(){
    return playerOneState;
  }

  // public ValidationResult placeMissile(int[][] coord) {
  //   return 
  // }

}
