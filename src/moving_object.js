function MovingObject (options) {
    this.vel = options.vel;
    this.pos = options.pos; 
    this.color = options.color; 
    this.radius = options.radius; 
}

MovingObject.prototype.draw = function (ctx) {

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc (
        this.pos[0], 
        this.pos[1], 
        this.radius, 
        0, 
        2 * Math.PI,
        false
    )
    ctx.stroke();
}

MovingObject.prototype.move = function (ctx) {
    let currentX, currentY = this.pos;
    let xVelocity, yVelocity = this.vel; 
    return [currentX + xVelocity, currentY, yVelocity];
}


module.exports = MovingObject;