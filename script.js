
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); //creats a new array of one element 

function setup() { //runs once 
  createCanvas(500, 300); //sets canvas size
  dots[0] = new Dot(width/2, height/2); // sets the first array elemnt with the first dot 
} //end function 

function draw() { //runs once
  background(200); //sets the canvas/background to a grey color 
  
  for(let i = 0; i < dots.length; i++){ //start of the for loop 
    dots[i].move(); //changes dots position 
    dots[i].display(); // draws the dot on the screen everytime it moves 
  } //end for loop
  textSize(24); //sets text size
  fill(100, 0, 200); //sets text color 
  text("'dots' array length: " + dots.length, 100, 100); //says what text is and changes output everytime new dot is added

} //end function 

function mousePressed(){
  let obj = new Dot(mouseX, mouseY); //creats new object named Dot 
  dots.push(obj); //when mouse is pressed it creats a new Dot

  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

} //end function 


function Dot(X, Y){ //starts dot object 
  
  this.x = X; // sets horizontal position of the dot 
  this.y = Y; // sets vertical position of the dot 
  this.w = random (20, 50); // sets random dot between 20 and 50
  this.sx = random(-5, 5); // sets speed in x direction 
  this.sy = random(-5, 5); //sets speed in y direction 
  this.r = random(0, 255); //assigns random red color value 
  this.g = random(0, 255); //assigns random green color value 
  this.b = random(0, 255); //assigns random blue color value 
  
  this.display = function(){ //bedins display method 
    fill(this.r, this.g, this.b); //sets color that fills dot 
    ellipse(this.x, this.y, this.w, this.w); //draws and ellipse using given variables defined
  } //end function 
  
  this.move = function(){ //starts move function 
    this.x += this.sx; //increase dots x position by this.sx
    this.y += this.sy; //increase dots y position by this.sy 
    
    if (this.x < 0 || this.x > width){ //if out of bounds; checks to see if dot is in the x boundry 
        this.sx *= -1; //then flip direction; is its going out of boundry it changed direction (if going left it starts to go roght)
    } //end if statment 
    if (this.y < 0 || this.y > height){ //cif out of bounds; hecks to see if dot is in the y boundry 
        this.sy *= -1; //then flip direction; if its going out of boundry changes direction (if it was going down it starts to go up)
    } //end if statement 
  } //ends move function 
    
} // end function
