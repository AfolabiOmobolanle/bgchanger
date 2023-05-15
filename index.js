const body = document.body
const info = document.querySelector("#info")

info.addEventListener("change", (e)=> {
    body.style.backgroundColor = e.target.value
    body.style.backgroundColor ="#" + e.target.value

    if (e.target.value === "") {
        console.log(true);    
    }
});
