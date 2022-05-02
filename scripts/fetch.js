

let searchnews = async (query) => {
    try{
        let res =  await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data = await res.json();
        console.log(data);
        return data;
        // console.log(data.articles);
        // append(data.articles)
    }
    catch (err){
        console.log("err :" , err);
    }
    

}


let append = (data, results) =>{
    // window.location.href = "search.html"
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

export {searchnews,append}