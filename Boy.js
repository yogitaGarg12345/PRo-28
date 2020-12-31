class Boy {

    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        World.add(world,this.body)
        this.image = loadImage("Sprites/boy.png")
    }
    
    display(){
    
        var boyPos = this.body.position;
        push()
            translate(boyPos.x, boyPos.y);
       rectMode(CENTER)
        fill(0)
        rect(boyPos.x,boyPos.y,this.width, this.height);
        imageMode(CENTER);
        //this.image.scale=10;
        image(this.image, 0, 0, this.width, this.height);
        pop()
    
    
    
    }
    
    }