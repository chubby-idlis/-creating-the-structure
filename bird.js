class Bird {
    constructor(x,y){
        var Bird_options = {
            restitution:0.8,
            friction: 2,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,Bird_options) 
        this.width = 50
        this.height = 50
        World.add(world,this.body)
    }
    display(){
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}