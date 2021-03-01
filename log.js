class Log{
    constructor(x,y,height,angle){
        var Log_options = {
            restitution:0.8,
            friction: 2,
            density: 0.8
        }
        this.body = Bodies.rectangle(x,y,20,height,Log_options) 
        this.width = 20
        this.height = height
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("blue")
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}