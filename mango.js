class mango{

    constructor(x,y,width,height){

       var options={

         isStatic:true,
         'restitution':0,
         'friction':1

        }

     this.x=x;

     this.y=y;

     this.image=loadImage("Pluckingmangoes/mango.png");

     //this.radius=radius;
     this.width=width;
     this.height=height;
     this.body=Bodies.rectangle(x,y,width,height,options);

     World.add(world, this.body);
    }

    display(){

       rectMode(CENTER);

        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
 
    
    }


}