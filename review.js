// Today we will create a simple page that loads gifs. We will be doing this as a class, so as part of the WARMUP.
// WARMUP:
// 1. I want you to create a directory(folder) with a JavaScript file, a HTML file, and CSS file.
// 2. The <body> tag should contain a <form> tag, and a <div>tag with a class of “content”
// 3. the <form> tag should contain an <input> tag with type=text, a select tag with a disabled <option> tag and another input tag with the type=submit
// 2. Create an account on giphy https://developers.giphy.com/?gclid=EAIaIQobChMI9LC-1eu95gIVDYiGCh0OPAnvEAAYASAAEgL0E_D_BwE
let key = "KPOUoUe88Q5SbdMSvoa5fZCUtRdDOIS4"
document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector("form");
    let userInput = document.querySelector("#userInput");
    let select = document.querySelector("#select");
    let submit = document.querySelector("#submit");
    let content = document.querySelector(".content");
    let header = document.querySelector("#header");

    const giphySearch = async ( userInput, userLimit) =>{
        try {
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`);
            showgif(res.data.data)
        } catch(err){
            console.log(err)
        }
    }

    select.addEventListener("change", (event) =>{
        select.value = event.target.value;
    })

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        giphySearch(userInput.value, select.value);
    })
    
    const showgif= (gifArr) =>{
        gifArr.forEach(gif=>{
            let image = document.createElement("img");
            imageUrl = gif.images.downsized.url;
            image.src= imageUrl
            content.appendChild(image)
        })
    }

    const populateSelect = () =>{
        for(let i = 1; i <= 25; i++){
            let options = document.createElement("option");
            options.value = i;
            options.innerText = i;
            select.appendChild(options);
        }
    }
    populateSelect();


})