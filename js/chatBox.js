/**********chat box**********/ 
// opening chat
// function openMsgBox()
// {
//     document.querySelector('.msg-btn').style.opacity ='0' ;
//     // document.querySelector('.chat-box').style.clipPath = 'circle(75%'
//     document.querySelector('.msg-btn').style.transitionDelay ='0s' ;
// }
// // closing chat box 
// function closeChat()
// {
//     // document.querySelector('.chat-box').style.clipPath = 'circle(0% at 90% 95%' 
//     document.querySelector('.msg-btn').style.opacity ='1' ;
//     document.querySelector('.msg-btn').style.transitionDelay ='0.5s' ;

// }
// // send msg
// function sendMsg()
// {
//     document.querySelector('.chat-box').style.clipPath = 'circle(75%'
//     document.getElementById("msg").value = "" ;
     
// }  
let chatBox=document.getElementById('chat-box');
let chatBtn=document.getElementById('msg-btn');
chatBtn.addEventListener('click',function(){
    $('#chat-box').toggle(1000)
})