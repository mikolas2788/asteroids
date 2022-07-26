const MovingObject = require('./moving_object.js')

window.addEventListener('DOMContentLoaded', function (event) {
    
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d")
    // console.log(ctx)
    window.MovingObject = MovingObject;
    
})

