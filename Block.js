class Block{
 constructor(x,y,weidth,height){
     var options = {
         restitution:0.6,
         friction:1.2,

     }
     this.body = Bodies.rectangle(x,y,width,height,options);
    this.weidth = weidth;
    this.height  = height;
    World.add(world,this.body);
 }
 display(){
    var angle = this.body.position;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.weidth,this.height);
    pop();
 }
}