class Form {

    constructor() {
      //various form elements are created
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
     
    }
    
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  //specifies the position of the form elements
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
       //these show what will hapeen is the button is clicked
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  //if the reset button is pressed  then the playerCount in the database will become 0 as well as the gameState will become 0.
     
  
    }
  }
  