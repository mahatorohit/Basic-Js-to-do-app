let input = document.getElementById("inputlist")
let list = document.getElementById("list")

// let list = listt.firstElementChild
// console.log(list.textContent)
// let newtodo = document.createElement("li")
// newtodo.innerHTML = "rohit mahato"
// list.prepend(newtodo)


// input.addEventListener('mouseenter',()=>{
//     console.log(input.value)
// })

// input.addEventListener('keydown',function(e){
//     if(e.key === "Enter"){
//     console.log(input.value)
//     }
//     console.log(e.key)
// })

// input.addEventListener("keydown",function(e){
//     if(e.key === "Enter"){
//         // list.innerHTML = list.innerHTML + input.value
//         let newlist = document.createElement("li")
//         newlist.innerHTML = input.value
//         list.append(newlist)
//         input.value = ""
//     }
// })




input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        // list.innerHTML = list.innerHTML + input.value
        let div = document.createElement("div")
        let newlist = document.createElement("li")
        let dltbtn = document.createElement("img")

        let check = document.createElement("input")
        check.type = "checkbox"
        dltbtn.src = "img/delete-svgrepo-com.svg"

        let a = input.value
        localStorage.setItem(a, a)
        let b = localStorage.getItem(a)
       
        newlist.innerHTML = b
        list.append(div)

       
        div.replaceChildren(newlist)
        div.prepend(check)
        
        div.append(dltbtn)


        input.value = ""

    }
})



list.addEventListener('click', (e)=>{
    if(e.target.tagName === "IMG"){
        
        let a = e.target.parentElement.innerText
        console.log(a)
        localStorage.removeItem(a)
        let target = e.target.parentElement
        target.remove()
    }
    
})


// let taskk = document.getElementById("taskk")
// console.log(task[2])


// let task = document.getElementsByTagName("li")
list.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("midlinetext")
        // console.log(e.target.innerHTML)
        let checktoggle = e.target.previousElementSibling;
            checktoggle.checked = !checktoggle.checked;
    }else if(e.target.tagName==="INPUT"){
        e.target.nextElementSibling.classList.toggle("midlinetext")
    }
    
})



// task.addEventListener("click", ()=>{
//     task.classList.add('midline')
// })

// taskk.addEventListener("click",(e)=>{
//     e.target.classList.add('midline')
// })


// list.innerHTML = list.innerHTML +" <li>rhfuiah</li>"


// -----all dlt button----------

let alldlt = document.getElementById("aldlt")
console.log(alldlt)

alldlt.addEventListener('click', ()=>{
    let aresure = confirm("Are you sure, you want to delete all")
    if(aresure){
    localStorage.clear()
  list.innerHTML = ""
    }
})
