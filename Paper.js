class paper {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
        'restitution':0.3,
        'friction':0,
        'density':1.2,
    }
    this.body = Bodies.circle(x, y, r, options);
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("sprites/paperimage.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    fill(255);
    image(this.image,0, 0, this.r, this.r);
    pop();
  }
};


