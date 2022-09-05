// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'

let dogsArray = [0, 1, 2]

function getNewDog() {
    //console.log(dogsArray.length)
    
    const nextDogData = dogs[dogsArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}

function loadNextImage() {
     
    if (dogsArray.length>0) {
       setTimeout(()=> {
           dog = getNewDog()
           dog.loadPage()
           document.getElementById("btn-1").disabled = false
           document.getElementById("btn-2").disabled = false
           }, 2000)
           
    } if(dogsArray.length===0) {
       setTimeout(()=>{
           document.getElementById("content").innerHTML=        
           `<div class="end-program">
               <h1>Thank for your remarks</h2>
               <h2>Sorry, no more dogs</2> 
               <h3>Good-Bye</h3>
           </div>`},1500)
        }
        

}

function btnCross(){
    
    document.getElementById("hidden-like").style.display = "none"    
    document.getElementById("hidden-nope").style.display = "block"
    
    document.getElementById("btn-1").disabled = true
    document.getElementById("btn-2").disabled = true
    
    dog.hasBeenSwiped = true
   
    
    
    if (dog.hasBeenSwiped) {
     
      loadNextImage()   
      
     
     
    }
    
}

function btnHeart(){
    
    document.getElementById("hidden-like").style.display = "block"    
    document.getElementById("hidden-nope").style.display = "none"
    
    document.getElementById("btn-1").disabled = true
    document.getElementById("btn-2").disabled = true
    
    dog.hasBeenSwiped = true
    
    
    if (dog.hasBeenSwiped) {
      
      loadNextImage()  
      
      
    }
    
}
let dog = getNewDog()
dog.loadPage()

document.getElementById("btn-1").disabled = false
document.getElementById("btn-2").disabled = false

document.getElementById("btn-1").addEventListener("click", btnCross)
document.getElementById("btn-2").addEventListener("click", btnHeart)
