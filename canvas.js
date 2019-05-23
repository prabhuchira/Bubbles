

// var canvas = document.getElementById('mycanvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var c = canvas.getContext('2d');


// // for(var i=0;i<10;i++){
// //     var x = Math.random() * window.innerWidth;
// //     var y = Math.random() * window.innerWidth;
// //     c.fillRect(x,y,100,50 )
//     // }

// // c.beginPath();
// // c.moveTo(600,500);
// // c.lineTo(300,300)

// // c.stroke();


// // var colors=["red","yellow","green","purple","pink"]
// // for(var i=0,j=0;i<125;i++){

// //     var x = Math.random() * window.innerHeight;
// //     var y = Math.random() * window.innerWidth;
    
// // c.beginPath()
// // c.arc(x,y,50,0,Math.PI * 2 ,false)
// // c.strokeStyle=colors[j];
// // if(j>=colors.length){
// //     j=-1;
    
// // }
// // ++j;
// // c.stroke()

// // }




// // var colors=["red","yellow","green","purple","pink"]

// // function Circle(x,y,radius,dx,dy,colors){
// //     this.x = x;
// //     this.y = y;
// //     this.radius = radius;
// //     this.dx = dx;
// //     this.dy = dy;
// //     this.colors = colors;
    

// //     this.draw = function(){
  
      
// //         c.beginPath()
// //         c.arc(this.x,this.y,this.radius,0,Math.PI * 2 ,false);
// //         c.strokeStyle=this.colors;
// //         c.stroke();
// //     } 

// //     this.update = function(){
// //         this.draw()
// //         if(this.x + this.radius > window.innerWidth  || this.x - this.radius <0 ){
    
// //             this.dx=-this.dx
// //         }
        
// //         if(this.y + this.radius > window.innerHeight  || this.y - this.radius <0 ){
        
// //             this.dy=-this.dy
// //         }
        
        
// //         this.x += this.dx;
// //         this.y += this.dy;

        
// //     }

    
// // }



// // var circle=new Circle(200,200,50,4,4);


// // var circleArray = [];

// // for(var i=0;i< 25;i++){
// //     var x = Math.random() * innerWidth;
// //     var y = Math.random() * innerHeight;
// //     var dx = (Math.random() - 0.5) * 8;
// //     var dy =(Math.random() - 0.5) * 8;
// //     var radius = 30;
// //     circleArray.push(new Circle(x,y,radius,dx,dy))
// // }


// // console.log(circleArray);


// // function animate(){
// //     requestAnimationFrame(animate);
// //     c.clearRect(0,0,innerWidth,innerHeight)
// //     for(var i=0;i<circleArray.length;i++)
// //     circleArray[i].update();
// //     // circle.draw();
    
    
    
// // }

// // animate();

// // console.log('Its working')

// var canvas = document.getElementById('mycanvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // var bubbles = document.getElementById('inputBubbles');
// var c = canvas.getContext('2d')
// var array = [];


// var mouse = {
//     x:undefined,
//     y:undefined
// }
// window.addEventListener('mousemove',function(event){
// mouse.x = event.x;
// mouse.y = event.y;
    

// });

// window.addEventListener('resize',function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// })

// var colors=["#ffaa33","#99ffaaa","#00ff00","#4411aa","#ff1100"]

// for(var i =0,j=0;i<100;i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var radius = Math.random() * 20;
//     var dx = (Math.random() - 0.5) * 8
//     var dy = (Math.random() - 0.5) * 8

//     var circle = new Circle(x,y,radius,dx,dy,colors[j]);
   
//     array.push(circle);
// }

// console.log(array);


// function Circle(x,y,radius,dx,dy){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = colors[Math.floor(Math.random() * colors.length) ]
    
//     this.update = function(){
       
//         c.beginPath();
        
//         c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
//         c.strokeStyle=this.color
//         c.fillStyle= this.color
//         // c.shadowBlur = 10;
//         // c.shadowColor="grey";
//         c.fill();
//         c.stroke();
     
       
  
      

//         if(this.x + this.radius > window.innerWidth || this.x - this.radius< 0){
//             this.dx = -this.dx
//         }

//         if(this.y + this.radius > window.innerWidth || this.y - this.radius< 0){
//             this.dy = -this.dy
//         }

//         this.x += this.dx;
//         this.y += this.dy

//         //interactivity 

//         if(mouse.x -this.x < 100 && mouse.x - this.x >-100 && mouse.y - this.y < 100 && mouse.y - this.y > -100){
//             if(this.radius < 40) 
//             this.radius += 1;
//         }else if(this.radius > 20) {
//             this.radius -=1 
//         }
    
//     }
   
    

// }


// var x = 100;
// var y = 100;
// var dx = 8;
// var dy = 8;
// var radius = 60;

// function animate(){
//     requestAnimationFrame(animate);
    
//     c.clearRect(0,0,innerWidth,innerHeight)
    
//   for(var i=0;i<array.length;i++){
//       array[i].update()
//   }



// }




// animate();




document.getElementById('displayRange').innerText = document.getElementById('rangeSlider').value

var array = [];

document.getElementById('rangeSlider').oninput = ()=>{
    // array = [];
    document.getElementById('displayRange').innerText = document.getElementById('rangeSlider').value

 
        // //     j=-1;
            
        // // }
        // // ++j;
        var colors = ["#234D51","#9DD3D9","#59C6D1","#3B4F51","#FF513F"]
    for(var i=0,j=0;i<document.getElementById('rangeSlider').value;i++)
    {   var x = Math.random() * innerWidth;
        var y = Math.random() * innerHeight;
        var radius = 30;
        var dx = Math.random() *2;
        var dy =Math.random() *2;
       
        array.push(new Circle(x,y,radius,dx,dy,colors[j]
        ));
        
        if(j>=colors.length){
            j=-1;
        }
        ++j;
    }


    // array = [];
``
}








var canvas = document.getElementById('mycanvas');

var inputColor = document.getElementById('inputColor').value

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

var c = canvas.getContext('2d');

var x = 0;
var y = 0;
var dx = 3;
var dy = 3;
var radius = 15;
function animate(){
    requestAnimationFrame(animate);
    
    c.clearRect(0,0,innerWidth,innerHeight)
    
    for(var i=0;i<array.length;i++){
        array[i].update()
    }
    // c.beginPath();
    // c.arc(x,y,radius,0,Math.PI * 2,false)
    // c.stroke();

    // if(x + 30> window.innerWidth || x <0){
    //     dx = -dx
    // }
    // if(y + 30> window.innerHeight || y <0 ){
    //     dy = -dy
    // }
    // x += dx;
    // y += dy;
    

    // if(mouseEvents.x - x < 50 && mouseEvents.x - x > -50 && mouseEvents.y - y < 50 && mouseEvents.y - y > -50){
    //     if(radius<50)
    //     {
    //     radius+=1;}

    //     else if(radius>20){
    //         radius-=1    
    //     }
    // }


}

var mouseEvents = {
    x:undefined,
    y:undefined

}

window.addEventListener('mousemove',(e)=>{
    mouseEvents.x = e.x;
    mouseEvents.y = e.y;
})

function Circle(x,y,radius,dx,dy,inputColor){

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.inputColor = inputColor;
   
    this.update = function(){
        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false)
        c.strokeStyle = inputColor;
   
        c.fillStyle = inputColor
        c.stroke();
        c.fill();

    
        if(this.x + 30> window.innerWidth || this.x <0){
            this.dx = -this.dx
        }
        if(this.y + 30> window.innerHeight || this.y <0 ){
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        
    
        // if(mouseEvents.x - this.x < 50 && mouseEvents.x - this.x > -50 && mouseEvents.y - this.y < 50 && mouseEvents.y - this.y > -50){
        //     if(this.radius<50)
        //     {
        //     this.radius+=1;}
    
        //     else if(this.radius>20){
        //         this.radius-=1    
        //     }
        // }


        if(mouseEvents.x -this.x < 100 && mouseEvents.x - this.x >-100 && mouseEvents.y - this.y < 100 && mouseEvents.y - this.y > -100){
                        if(this.radius < 40) 
                        this.radius += 1;
                    }else if(this.radius > 20) {
                        this.radius -=1 
                    }
                


    }
    

}








animate()