let msg=document.querySelector(".msg")
let choices=document.querySelectorAll(".choice")



let generatechoice=()=>{
    let compoptions=["Rock","Paper","Scissor"]
    let idx=Math.floor((Math.random()*3));
    return compoptions[idx];

}
let draw=()=>{
    msg.innerText="DRAW, try again"
    msg.classList.add("msg-draw");
    msg.classList.remove("msg-red","msg-green")


}



let showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`you win!! ${userchoice} beats ${compchoice}`
        msg.classList.add("msg-green")
        msg.classList.remove("msg-red","msg-draw")
    }else{
        msg.innerText=`you loose!! ${compchoice} beats ${userchoice}`
        msg.classList.add("msg-red")
        msg.classList.remove("msg-green","msg-draw")
    }

}




let checkwinner=(userchoice)=>{
    let compchoice=generatechoice()


    if(userchoice==compchoice){
        draw();
        return;
    }

      
    let userwin=true
   if(userchoice=="Rock"){
         userwin=compchoice=="Paper"?false:true;}
   else if(userchoice=="Paper"){
         userwin=compchoice=="Scissor"?false:true;}   
    else if(userchoice=="Scissor"){
         userwin=compchoice=="Rock"?false:true}


        showwinner(userwin,userchoice,compchoice);

}




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log(choice.getAttribute("id"))
        let userchoice=choice.getAttribute("id")
        checkwinner(userchoice);
    })
})
