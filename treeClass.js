class treeClass{

    constructor(x,y,width,height){
 
      var options={
 
         isStatic:true,
     
      }
 
      this.width=width;
     this.height=height;
     this.image=loadImage("Pluckingmangoes/tree.png");
     this.body=Bodies.rectangle(x,y,width,height,options);
     
     
     World.add(world,this.body);
    }
 
    display(){
 
    imageMode(CENTER);
     
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

     //rect(this.body.position.x,this.body.position.y,this.width,this.height);
 
 
    }
 
 
 }