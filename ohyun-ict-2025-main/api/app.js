//https://crudcrud.com/api/1eb25b6027634314ab09e1168c6d903f

// fetch("https://crudcrud.com/api/1eb25b6027634314ab09e1168c6d903f/post").then((res)=>{
// return res.json()
// }).then((json)=>{
//     console.log(json)
// })

// async function init(){}
const post_url = "https://crudcrud.com/api/1eb25b6027634314ab09e1168c6d903f/post"
const init = async ()=>{
    const res = await fetch(post_url);
    const json = await res.json();
    console.log(json);
    json.forEach(post => {
        const postli = document.createElement("li");
        postli.innerText = post.title;
        document.querySelector("#board").appendChild(postli);
        const contentDiv = document.createElement("div");
        contentDiv.innerText = post.content;
        postli.appendChild(contentDiv);
        contentDiv.style.display = "none";
        
        postli.addEventListener("click",()=>{
            if (contentDiv.style.display == "block") {
                contentDiv.style.display = "none";
            } else {
                contentDiv.style.display = "block";
            }
        });

    });
}
const write = async (data)=>{
    const res = await fetch(post_url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
}

const submit = ()=>{
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const data = {
        title:title,
        content:content
    }
    console.log(data)
    write(data);
}

document.querySelector("#post-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    submit();
})
document.querySelector("#writing-start").addEventListener("click",()=>{
    if (document.querySelector("#post-form").style.display == "block") {
        document.querySelector("#post-form").style.display = "none"
    } else {
        document.querySelector("#post-form").style.display = "block"
    }
})
document.querySelector("#board-start").addEventListener("click",()=>{
    if (document.querySelector("#board").style.display == "block") {
        document.querySelector("#board").style.display = "none"
    } else {
        document.querySelector("#board").style.display = "block"
    }
})


init()