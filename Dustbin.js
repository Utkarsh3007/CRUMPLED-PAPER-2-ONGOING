class Dustbin {
    constructor(x, y, width, height) {
        var option = {
        isStatic:true,
        density:20,
        friction:100
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        this.image=loadImage("dustbingreen.png")
        World.add(world, this.body,this.image)
    }
    display() {
        var pos = this.body.position;
    
        imageMode(CENTER)
        fill("green")
        stroke("green")
        image(this.image,pos.x,pos.y, this.width, this.height)                           
    }
}