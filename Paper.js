class Paper {
    constructor(x, y,radius) {
        var option = {
        isStatic:false,
        density:17,
        resititution:0.8,
        friction:100
        }
        this.body = Matter.Bodies.circle(this.x,this.y,(this.r-20)/2, option);
        this.x=x
        this.y=y
        this.r = radius
        this.body.debug=true
        this.image=loadImage("paper.png")
        this.image.scale=-1
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y)

        imageMode(CENTER)
        fill("purple")
        image(this.image,0,0,this.r,this.r)  
         pop()                         
    }
}