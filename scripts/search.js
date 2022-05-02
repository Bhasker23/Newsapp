// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar()

import{searchnews,append} from  "./fetch.js"

let search = (el) =>{

    if(el.key === "Enter"){
        // window.location.href = "search.html"
        let query = document.getElementById("search_input").value;
        searchnews(query).then((data)=> {
            console.log(data);
            let results = document.getElementById("results")
            append(data.articles,results)
        })
    }
}

document.getElementById("search_input").addEventListener("keydown" , search)