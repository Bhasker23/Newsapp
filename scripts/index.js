// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar()

import{searchnews,append} from  "./fetch.js"

let search = (el) =>{

    if(el.key === "Enter"){
        
        let query = document.getElementById("search_input").value;
        searchnews(query).then((data)=> {
            console.log(data);
            let results = document.getElementById("results")
              window.location.href = "search.html"
            append(data.articles,results)
        })
    }
}

document.getElementById("search_input").addEventListener("keydown" , search)



   let searchnew = async (code) => {
   
    try{
        let res =  await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`);
        let data = await res.json();
        return data
        console.log(data);
        // append(data.articles)
    }
    catch (err){
        console.log("err :" , err);
    }
    

}


let appends = (data, results) =>{

    data.forEach(({description , title,urlToImage}) =>{
    let div = document.createElement("div");
    div.setAttribute("id","news")
    let box = document.createElement("div")
    box.setAttribute("id", "img")

    let img =  document.createElement("img");
    img.src = urlToImage;

    let tit  = document.createElement("h3");
    tit.innerText = title

    let dis = document.createElement("p");
    dis.innerText = description

    let box1 = document.createElement("div");
    box1.setAttribute("id", "newsdis")

    box.append(img)
    box1.append(tit,dis)
    div.append(box,box1)
    results.append(div)
    })
    
}
let code = document.getElementById("sidebar").children
// console.log(code.id);

function nsearch(){
    // console.log(this.id);
    searchnew(this.id).then((data)=>{
    console.log(data);
    let results = document.getElementById("results");
    results.innerHTML = null
    appends(data.articles,results)
    })
}


for(let el of code ){
    el.addEventListener("click", nsearch)
}