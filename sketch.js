let v1
let v2
let x = 30
let y = 30
let k = []
let k1 = 0.1

function setup() 
{
	createCanvas(400, 400);
	
}

function draw()
{
background(200)

v1 = new Vector("v1", 200, 100, 20, 30, 'green', 1)
v2 = new Vector("v2", 100, 100, x, y, 'green', 1)
v1.show()
v2.show()

if(mouseIsPressed){
	k = v2.scalar(k1)
	v2.setX(k[0])
	v2.setY(k[1])
	v2.show()
	console.log(k)
	k1 = k1 + 0.1
}


}

