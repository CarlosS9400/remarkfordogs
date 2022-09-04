
import dogs from './data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    loadPageHtml() {
        const {name, avatar, age, bio} = this
        return  `<img id="hidden-like" src="./images/badge-like.png" alt=""/>
                    <img id="hidden-nope" src="./images/badge-nope.png" alt=""/>
                    <img id="dog-images" src="${avatar}" alt=""/>
                    <div id="bio">
                        <h3>${name}: ${age}</h3> 
                        <p id="bio-2"><small>${bio}</small></p>
                    </div>`
    }
    
    loadPage(){
        const {name, avatar, age, bio} = this
        document.getElementById("content").innerHTML = this.loadPageHtml()
        document.getElementById("hidden-like").style.display = "none"    
        document.getElementById("hidden-nope").style.display = "none"
        document.getElementById("dog-images").style.display = "block"
        document.getElementById("bio").style.display = "block"
       
        
    }

}
/*
class Dog {
    constructor(data) {
      Object.assign(this, data)
    }

    say(){
        document.getElementById("content").innerHTML=this.name+this.avatar+this.age+this.bio
    }
}
*/

export default Dog