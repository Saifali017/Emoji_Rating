const star=document.querySelectorAll(".fa-star")
const emoji=document.querySelectorAll(".far")
const colors=["red","orange","lightblue","lightgreen","green"]

updaterating(0);
star.forEach((star,index)=>{
    star.addEventListener("click",()=>{
       updaterating(index);
    })
})

function updaterating(index){
    star.forEach((star,ind)=>{
        if(ind <index+1){
            star.classList.add("active");
        }
        else{
            star.classList.remove("active");
        }
    })

    emoji.forEach(emoji=>{
        emoji.style.transform=`translateX(-${index*50}px)`;
        emoji.style.color=colors[index]
    })
}