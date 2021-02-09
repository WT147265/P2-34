class Monster{
    constructor(x,y,weidth,height){
        var options = {
         isstatic:true,
         restitution:0.6,
         friction:1.2,
        }  
    this.body = Bodies.rectangle(x,y,weidth,height,options)
       this.height = height;
       this.weidth = weidth;
       this.image=loadImage("pngFiles/Monster-01.png");
       World.add(world,this.body); 
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.weidth,this.height);
        imageMode(CENTER)
        pop();
    }
}