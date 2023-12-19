import Human from "./human.js";
let Joe = new Human('Joe', 23);

async function getImage() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    // console.log(response)
    let content = await response.json();
    content = content.splice(0, 10);
    // console.log(content)

    let list = document.querySelector('.post')
    console.log(list)
    
    for (let prop in content) {
        
        list.innerHTML += 
            `<li>
            <h4>${content[prop].title}</h4>
            <img src=${content[prop].url} width="300">
        </li>`
        
    }
    console.log(list)

    
}  


//getImage();
let response2 = getImage();
console.log(response2)

// let response = await fetch('https://jsonplaceholder.typicode.com/photos');
// console.log(response)

//console.log(Joe);

function sayHello () {
    return "Hello "+ Joe.name; 
}

function render () {
    sayHello( )
}   
