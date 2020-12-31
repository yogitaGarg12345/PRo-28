class Mango {

    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        World.add(world,this.body)
        this.image = loadImage("Sprites/mango.png")
    }
    
    display(){
    
        var mangoPos = this.body.position;
        push()
            translate(mangoPos.x, mangoPos.y);
       rectMode(CENTER)
        fill(0)
        rect(mangoPos.x,mangoPos.y,this.width, this.height);
        imageMode(CENTER);
        //this.image.scale=10;
        image(this.image, 0, 0, this.width, this.height);
        pop()
    
    
    
    }
    
    }