class Player {
    constructor(x, y, w, h, img) {
      var options = {
        restitution: 1.2,
        density: 0.04
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
  
      this.width = w;
      this.height = h;
      this.image = img;
      World.add(world, this.body);
    }
  
    
  
    display() {
      let pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    
  }
  