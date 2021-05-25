class Drop{

    constructor(x,y){
        var options = {
            restitution:1.5,
            friction:0.001
        }

        this.Drop = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.Drop)
                
    }

    update(){
        if(this.Drop.position.y>height){
       Matter.Body.setPosition(this.Drop,{x:random(0,400), y:random(0,400)})
       
       
   }
   }

    display(){
        var pos = this.Drop.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}


