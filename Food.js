 class food {
     constructor() {
    this.image = loadImage("Images/Milk.png")
    this.lastFed
    this.foodStock = 0
     }

     getFoodStock(){
         return this.foodStock
     }
     updateFoodStock(){
this.foodStock = foodStock
     }
     deductFood(){
if(this.foodStock > 0){
    this.foodStock = this.foodstock-1
}
     }
     display() {
       var x=80, y=100;

       imageMode(CENTER);
       image(this.image,720,220,70,70);

       if(this.foodStock!=0){
           for(var i=0;i<this.foodStock; i++){
               if(i%10===0){
                   x=80
                   y=y+50
               }
               this.image(this.image,x,y,50,50)
           }
       }
     }
 }