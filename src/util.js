const Util = {
    inherits: function inherits ( ChildClass, ParentClass ) {
        ChildClass.prototype = Object.create(ParentClass.prototype);
        ChildClass.prototype.constructor = ChildClass;
    }
}

module.exports = Util