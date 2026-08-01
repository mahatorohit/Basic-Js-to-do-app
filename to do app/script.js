let input = document.getElementById("inputlist")
let list = document.getElementById("list")





input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        // list.innerHTML = list.innerHTML + input.value
        let div = document.createElement("div")
        let imgbox = document.createElement("div")
        let textbox = document.createElement("div")
        let newlist = document.createElement("li")
        let dltbtn = document.createElement("img")
        let edit = document.createElement("img")
        dltbtn.setAttribute("class", "deletebtn")
        edit.setAttribute("class", "editbtn")

        let check = document.createElement("input")
        check.type = "checkbox"
        dltbtn.src = "img/delete-svgrepo-com.svg"
        edit.src = "img/edit.svg"
        edit.style.marginRight = "15px"

        let a = input.value
        localStorage.setItem(a, a)
        let b = localStorage.getItem(a)

        newlist.innerHTML = b
        list.append(div)
        div.prepend(textbox)
        div.append(imgbox)

        textbox.replaceChildren(newlist)
        textbox.prepend(check)
        imgbox.append(edit)
        imgbox.append(dltbtn)


        input.value = ""

    }
})




list.addEventListener('click', (e) => {
   
   
    if (e.target.className === "deletebtn") {

        let a = e.target.parentElement.previousElementSibling.innerText
        console.log(a)
        localStorage.removeItem(a)
        let target = e.target.parentElement.parentElement
        target.remove()
    }

    // if (e.target.className === "editbtn") {
    //     let a = e.target.parentElement.previousElementSibling.innerText
    //     input.value = a
    //     let target = e.target.parentElement.parentElement
    //     target.remove()
    // }
    if (e.target.className === "editbtn") {
        let divt = e.target.parentElement.previousElementSibling.firstElementChild
        let divtt = e.target.parentElement.previousElementSibling
        if (divtt.querySelector('input[type="text"]')) {
            return
        }
        let litext = divt.nextElementSibling.textContent
       
        let litag = divt.nextElementSibling
        litag.textContent = ""
        let editinput = document.createElement("input") 
        editinput.type = "text"
        editinput.value = litext
        litag.append(editinput)
        console.log(divtt)
    }
})


// let taskk = document.getElementById("taskk")
// console.log(task[2])


// let task = document.getElementsByTagName("li")
list.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("midlinetext")
        
        let checktoggle = e.target.previousElementSibling;
        checktoggle.checked = !checktoggle.checked;
        let a = checktoggle.checked;
        let chckbkgrnd = e.target.parentElement.parentElement
        if (a) {
            chckbkgrnd.style.background = "#877052"
        } else {
            chckbkgrnd.style.background = "burlywood"
        }

    } else if (e.target.tagName === "INPUT") {
        e.target.nextElementSibling.classList.toggle("midlinetext")
         let chckbkgrnd = e.target.parentElement.parentElement
        let a = e.target.checked;
        if (a) {
            chckbkgrnd.style.background = "#877052"
        } else {
            chckbkgrnd.style.background = "burlywood"
        }
    }
})





// -----all dlt button----------

let alldlt = document.getElementById("aldlt")
console.log(alldlt)

alldlt.addEventListener('click', () => {
    let aresure = confirm("Are you sure, you want to delete all")
    if (aresure) {
        localStorage.clear()
        list.innerHTML = ""
    }
})
