class Paper{

    constructor(x,y,radius){

        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world, this.body);
    }

    display(){
      
      //var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y ); 
      rectMode(CENTER);
      stroke(255);
      strokeWeight(3);
      fill(rgb(176,224,230));
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
}