
const inputText = document.querySelector('#inputText');
const button = document.querySelector('#btn');
const node = document.querySelector("#todo-display ul");
const deleteBtn = document.querySelectorAll('#todo-display ul #delete');
const clear = document.querySelector('#clear');

inputText.onkeyup = () => {
    let input = inputText.value;

    if (input.trim() != 0) {
        button.classList.add("active");
    }
    else
        button.classList.remove("active");
}

button.addEventListener("click", () => {

    // Li length function

    function liLength(){
        const num = document.querySelector('#num');
        const l = document.querySelectorAll("ul li").length;

        num.innerHTML = l - 1;
    }

    //Creating Li from thin air
    var textnode = document.createElement("LI");
    var span = document.createElement("SPAN");
    var i = document.createElement("I");

    //Animation 
    
    textnode.classList.add('animation');

    i.classList.add("fas");
    i.classList.add("fa-trash");

    span.appendChild(i)
    textnode.innerText = inputText.value;
    node.appendChild(textnode);

    textnode.appendChild(span);


    //Delete Li 
    

    span.setAttribute('id', 'delete')

    textnode.addEventListener("click", function() {
        console.log(this)
        node.removeChild(this);

          
        liLength()



    })
    //clear all

    clear.addEventListener("click", () =>{
        node.removeChild(textnode);
        liLength()
    })
        /*
        
      
      
   
      */
    /*
    textnode.addEventListener("click", function () {

        this.style.textDecoration = "line-through";
    })

   

    */

    //Clearing input form
    inputText.value = "";
    button.classList.remove("active");

    //Number of Items Left
    const num = document.querySelector('#num');
    const l = document.querySelectorAll("ul li").length;

    num.innerHTML = l - 1;

})
    /*
function dell() {

}

span.setAttribute('onclick', 'dell()')
*/
