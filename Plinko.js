class Plinko{
    constructor(x,y,r){
        var options = {
            "isStatic":true
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x, this.y, this.r, options)
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill("pink");
        ellipseMode(RADIUS);
        //rectMode(CENTER);
        ellipse(this.x,this.y,this.r,this.r)
        pop();
    }
}