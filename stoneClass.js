class stoneClass{

    constructor(x,y,width,height){

       var options={

         isStatic:false,
         'restitution':0,
         'friction':1,
         'density':1.2

        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("Pluckingmangoes/stone.png");
        World.add(world,this.body);
    }
   
    display(){

       rectMode(CENTER);

        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
       
    }

}

