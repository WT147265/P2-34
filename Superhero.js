class Superhero{
    constructor(x,y,weidth,height){
    var options = {
     isstatic:false,
     restitution:0,
     friction:2,
     density:1.985
        }
       this.body = Bodies.rectangle(x,y,weidth,height,options)
       this.height = height;
       this.weidth = weidth;
       this.image=loadImage("pngFiles/Superhero-01.png");
       World.add(world,this.body);
    }
    display(){
        var angle = this.body.position;
        var pos = this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.weidth,this.height);
        imageMode(CENTER)
        pop();
    }
}