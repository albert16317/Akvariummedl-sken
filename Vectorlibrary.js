class Vector{
//atributes
    constructor(name, x0, y0, x, y, col, thi){
        this.name = name
        this.x = x
        this.y = y
        this.x0 = x0
        this.y0 = y0
        this.col = col
        this.thick = thi
    }
//metoder
show(){
    strokeWeight(this.thick)
    stroke(this.col)
    line(this.x0, this.y0, this.x0 + this.x, this.y0 + this.y)
    circle(this.x0 + this.x, this.y0 + this.y, 10)
}

scalar(k){
    if(typeof(k) === 'number'){
        let a = this.x * k
        let b = this.y * k

        return([a, b])
    }
}

toString(){
    return(["x0 = " + this.x0, "y0 = " + this.y0, "x = " + this.x, "y = " + this.y, "length = " + sqrt(this.x**2 + this.y**2)])
}

dotProduct(a, b){
    return((this.x * a) + (this.y * b))
}



getX(){
    return this.x
}
setX(x){
    if(typeof(x) === 'number'){
    this.x = x
    }
}

getY(){
    return this.y
}
setY(y){
    if(typeof(y) === 'number'){
    this.y = y
    }
}

getName(){
    return this.name
}
setName(n){
    this.name = n
}

getX0(){
    return this.x0
}
setX0(x){
    if(typeof(x) === 'number'){
    this.x0 = x
    }
}

gety0(){
    return this.y0
}
setY0(y){
    if(typeof(y) === 'number'){
    this.y0 = y
    }
}

getThick(){
    return this.thick
}
setThick(t){
    if(typeof(t) === 'number'){
    this.thick = t
    }
}

getColor(){
    return this.thick
}
setColor(col){
    if(typeof(col) === 'number'){
    this.col = col
    }
}

}