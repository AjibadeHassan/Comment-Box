const Username = document.querySelector('.username')
const UserComment = document.querySelector('.usercomment')
const Button = document.querySelector('.btn')
const Profile = document.querySelector('.profile')
const UserOutput = document.querySelector('.user-output')
const CommentOut = document.querySelector('.comment-output')
const Output = document.querySelector('.output-container')
let Data = JSON.parse(localStorage.getItem('DataInfo')) || []

Button.onclick = ()=>{
    let userIn = Username.value
    let commentIn = UserComment.value
    let firstChar = userIn.charAt()
let Allinput = {userIn, commentIn, firstChar}
// console.log(Allinput)
Data.push(Allinput)
localStorage.setItem('DataInfo', JSON.stringify(Data))
window.location.reload()
}
console.log(Data)
Data.forEach((element) => {
    const div =`
    
    <div class="profile">${element.firstChar}</div>
        <div class="user-Output">${element.userIn}</div>
        <div class="comment-output">${element.commentIn}</div>
   
     `
     Output.innerHTML += div
});