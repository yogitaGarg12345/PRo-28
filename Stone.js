class Stone {

    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        World.add(world,this.body)
        this.image = loadImage("Sprites/stone.png")
    }
    
    display(){
    
        var stonePos = this.body.position;
        push()
            translate(stonePos.x, stonePos.y);
       rectMode(CENTER)
        fill(0)
        rect(stonePos.x,stonePos.y,this.width, this.height);
        imageMode(CENTER);
        //this.image.scale=10;
        image(this.image, 0, 0, this.width, this.height);
        pop()
    
    
    
    }
    
    }