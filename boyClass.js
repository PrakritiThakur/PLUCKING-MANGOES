class boyClass {

    constructor(x,y){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.image=loadImage("Pluckingmangoes/boy.png");
        this.body=Bodies.rectangle(x,y,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);

        image(this.image,this.body.position.x,this.body.position.y);
    }
}