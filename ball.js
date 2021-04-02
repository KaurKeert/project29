class ball {
    constructor(x,y,radius){
    var options={
        restitutuon:0.4,
        friction :1.0
        
        //isStatic:true
    }
    this.body= Bodies.circle(x,y,radius,options)
    this.radius=radius
    World.add(world,this.body)
    }
    display(){
    
    var pos=this.body.position
    
   fill("red")
    
    ellipseMode(CENTER)
    
    ellipse(pos.x,pos.y,this.radius)
    }
    
    }