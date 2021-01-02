class Chain {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 50,
            stiffness: 0.4
        
        }
        console.log(options);
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.bodyA = bodyA;
        this.pointB = pointB;
    }
    fly(){
        this.chain.bodyA = null;
    }
    display() {
        if(this.chain.bodyA){
            var pointA = this.bodyA.position
            var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}