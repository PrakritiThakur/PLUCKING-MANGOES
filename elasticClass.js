class elasticClass{
    
    constructor(body1,body2){
      
        var options={

           
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            length:10

        }
        
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    fly(){
        this.body.bodyA= null;
    }
    attach(body){
        this.body.bodyA = body;
    }
    display(){
        
        var pointA=this.body.bodyA.position;
        var pointB=this.body.bodyB.position;
        push();
        strokeWeight(6);
         line(pointA.x,pointA.y, pointB.x , pointB.y);
        pop();
               
    
    }
   
 }