class Ground{
  constructor(x,y,width,height){
      var option =  {
        isStatic: true
      }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.weidth = weidth;
   this.height  = height;
   World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      fill(255);
      rect(pos.x,pos.y,this.weidth,this.height);
      rectMode(CENTER)
  }

}