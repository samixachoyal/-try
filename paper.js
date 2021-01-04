class Paper{

constructor(x,y,r){

var options={
isStatic:false,
friction:0.5,
density:1.2

}

this.body = Bodies.circle(x,y,18,options)
this.r=r;
this.image=loadImage("paper.png");

World.add(world,this.body);

}

display(){

var paperpos = this.body.position;
push();
translate(paperpos.x,paperpos.y);
fill(255,0,255)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r);
pop();

}
}