class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
       
      racer1 = createSprite(350, 200);
      racer2 = createSprite(620, 200);
      racer3 = createSprite(900, 200);
      racer4 = createSprite(1200, 200);

      racers = [racer1, racer2, racer3, racer4];
    }

    play(){
        form.hide();

        Player.getPlayerInfo();
        background(rgb(198,135,103));
        image(runningTrack, 0,-displayHeight*4,displayWidth, displayHeight*5);  

        
        
        drawSprites();
    }
  
    
  
}
  