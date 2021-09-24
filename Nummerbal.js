class nummer extends Bal {
    nummer;
  
    constructor (newX, newY, _speedX, _speedY, _nummer) {
        super(newX, newY, _speedX, _speedY);
        this.nummer = _nummer;
    }
  
  
  show() {
    fill(0,255,0);
    ellipse(this.newX, this.newY, 50, 50);
    fill(255, 255, 255);
    text("8", this.newX, this.newY);
  }
  
  
    
  }
