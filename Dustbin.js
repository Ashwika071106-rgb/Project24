class Dustbin{

    constructor(x,y,width,height){

        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){

      var pos =this.body.position;
      //push();
      //translate(pos.x, pos.y);
      stroke(255);
      strokeWeight(3);
      fill(rgb(176,224,230));
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      //pop();
    }
}