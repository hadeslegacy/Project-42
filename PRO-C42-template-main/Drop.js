class drop{
    constructor(x,y){
      var options={
          isStatic:true,
          friction:0.001,
          restitution:0.5,
          density:0.5
  
      }
       
       this.image= loadImage("drop.png")
       this.rain= Matter.Bodies.circle(x,y,5,options)
       //World.add(world,this.body)
  
      this.radius=5
       
  
    }
  
    update(){
         if(this.rain.position.y>700){
      Matter.Body.setPosition(this.rain,{x:random(0,600),y:random(0,700)})
  
    }
   
  }
    display(){
        push()
      //this.update()
      translate(this.rain.position.x,this.rain.position.x)
    fill('blue')
    imageMode(CENTER)
    image(this.image,this.rain.position.x,this.rain.position.y,this.radius,this.radius)
  pop()
    }
  
  }