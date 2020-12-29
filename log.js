class Log{

    constructor(x, y, height, angle){

        var options = {

            'restitution' : 0,
            'friction' : 2.0,
            'density' : 1.0

        }
        
        this.body = Bodies.rectangle(x, y, 20, height, angle);
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        this.width = 20;

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();

    }

}