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

input.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        // list.innerHTML = list.innerHTML + input.value
        let newlist = document.createElement("li")
        newlist.innerHTML = input.value
        list.append(newlist)
        input.value = ""
    }
})
// let taskk = document.getElementById("taskk")
// console.log(task[2])


// let task = document.getElementsByTagName("li")
list.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("midlinetext")
    }
})

// task.addEventListener("click", ()=>{
//     task.classList.add('midline')
// })

// taskk.addEventListener("click",(e)=>{
//     e.target.classList.add('midline')
// })


// list.innerHTML = list.innerHTML +" <li>rhfuiah</li>"