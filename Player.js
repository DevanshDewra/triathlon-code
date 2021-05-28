//player class is created
class Player {
    //the constructor is created so that any obejct of this classs is created based on the constructor of the class
    constructor(){
      //property index is created and is given the value null
      this.index = null;
      //property distance is given and is given the value 0
      this.distance = 0;
      //property name is given and the value null is assigned to it
      this.name = null;
     
    }
  //getCount function
    getCount(){
      //variable is created which takes the value of playerCount in the database by referring to it
      var playerCountRef = database.ref('playerCount');
      //it fetches the value of the data from the database and changes the value in the database.
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  // function to update the count is given
    updateCount(count){
      //the reference to the database is updated
      database.ref('/').update({
        //the value of playerCount is made the same of count in the referred database
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
     
     
 }