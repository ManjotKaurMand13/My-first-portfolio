window.onload = () => {
    document.getElementById("top").addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    })
}
function toggle(){
    document.body.classList.toggle('dark');
    }