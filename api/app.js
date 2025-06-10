//https://crudcrud.com/api/b4b9e54897e04cb5be0428497f2cfb0e
//fetch("https://crudcrud.com/api/b4b9e54897e04cb5be0428497f2cfb0e/post").then((res)=>{
//    return res.json()
//}).then((json)=>{
//    console.log(json)
//})

// async function init(){}
const post_url = ("https://crudcrud.com/api/b4b9e54897e04cb5be0428497f2cfb0e/post")
const init = async ()=>{
    const res = await fetch(post_url);
    const json = await res.json();
    console.log(json);
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

init()