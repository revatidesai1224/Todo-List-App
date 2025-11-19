const input = document.querySelector("input");
const btn = document.querySelector("button");


btn.addEventListener("click",()=>{
    
    if(input.value === "")
    {
        alert("write something here...");
    }
    else
    {
        let li = document.createElement("li");
        li.innerText= input.value;
        btn.after(li);
        li.classList.add("liCss");
        let cross = document.createElement("span");
        cross.innerText = "X";
        li.prepend(cross);
        cross.classList.add("cross");
        cross.addEventListener("click",()=>{
            li.remove();
        })
    }
    
    input.value= "";
})
