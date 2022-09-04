import dogs from `data.js`
// Create the Dog class here

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
        
        document.getElementById("content").innerHTML = this.loadPageHtml()
        document.getElementById("hidden-like").style.display = "none"    
        document.getElementById("hidden-nope").style.display = "none"
        document.getElementById("dog-images").style.display = "block"
        document.getElementById("bio").style.display = "block"
       
        
    }

}

export default Dog

