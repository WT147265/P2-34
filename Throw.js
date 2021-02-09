class Throw{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:pointB,
            stifness :0.02,
            lenght:10
        }
      this.pointB = pointB;
      this.throw= constraint.create(options);
      World.add(world,this.throw);
    }
    fly(){
        this.throw.bodyA=null;
    }
    launch (BodyA){
        this.throw.bodyA=bodyA;
    }
    display(){

    }
}