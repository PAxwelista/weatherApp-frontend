// Insert your code here
const serveurBE = "https://weather-app-backend-gold.vercel.app"
document.querySelector("#register").addEventListener("click" , ()=>{
    fetch(`${serveurBE}/users/signup` , {
            method : "POST" ,
            headers: {
                "Content-Type": "application/json",
              },
            body : JSON.stringify({
                name : document.querySelector("#registerName").value,
                email : document.querySelector("#registerEmail").value,
                password: document.querySelector("#registerPassword").value
            })
        }
    )
    .then(response => response.json())
    .then(data => {
        if (data.result) window.location.assign("index.html")
    })
});

document.querySelector("#connection").addEventListener("click" , ()=>{
    fetch(`${serveurBE}/users/signin` , {
            method : "POST" ,
            headers: {
                "Content-Type": "application/json",
              },
            body : JSON.stringify({
                email : document.querySelector("#connectionEmail").value,
                password: document.querySelector("#connectionPassword").value
            })
        }
    )
    .then(response => response.json())
    .then(data => {
        if (data.result) window.location.assign("index.html")
    })
});