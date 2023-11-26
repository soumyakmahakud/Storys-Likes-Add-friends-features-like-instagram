let ary = [
    { dp: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", story: "https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHww" },
    { dp: "https://cdn.openart.ai/stable_diffusion/d4b18d11719617e68351998f409cfe4687a60073_2000x2000.webp", story: "https://emmawatsonupdates.files.wordpress.com/2011/08/emmawatsonvogue.jpg" },
    { dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCjvyIPCs4x_C5U0r8CZtBer4-vWGxfN1EVFkdjXkVnT-3J-l0TaeZ52Fj9dawDLd3Vw&usqp=CAU", story: "https://c4.wallpaperflare.com/wallpaper/112/761/312/katherine-langford-women-actress-blue-eyes-australian-girls-hd-wallpaper-preview.jpg" },
    { dp: "https://i.mdel.net/i/db/2020/2/1280074/1280074-500w.jpg", story: "https://i.mdel.net/i/db/2020/2/1280074/1280074-500w.jpg" },
    { dp: "https://i.ndtvimg.com/i/2018-01/indian-models_650x400_61515572214.jpg", story: "https://i.redd.it/msoan0okgh641.jpg" },
    { dp: "https://thumbs.dreamstime.com/b/fashion-model-beauty-portrait-woman-beauty-elegant-black-hat-fashion-model-beauty-portrait-elegant-woman-black-hat-beautiful-112408942.jpg", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiPcx_J8vzYfTyYiD3vAiqH8hVJD64bo7JMmbdBylUzMYFOcdBsLaHq-jgXyVpYOXDzM&usqp=CAU" },
    { dp: "https://media.istockphoto.com/id/636160600/photo/studio-shot-of-young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=b7mJZ4oJaYv4QlmtG3x5mnZwn9QFZKlDpISKa7ppnVI=", story: "https://media.istockphoto.com/id/636160600/photo/studio-shot-of-young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=b7mJZ4oJaYv4QlmtG3x5mnZwn9QFZKlDpISKa7ppnVI=" }

]

let storyplt = document.querySelector("#storyplt");
let cltr = "";

ary.forEach(function (elemt, indx) {


    cltr += `<div class="story">
    <img id="${indx}" src="${elemt.dp}" alt="#">
    </div>`;
})

storyplt.innerHTML = cltr;

storyplt.addEventListener("click", function (dets) {


    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${ary[dets.target.id].story})`

    setInterval(function () {
        document.querySelector("#fullscreen").style.display = "none"
    }, 3000)
})




let cons = document.querySelector("#container");
let love = document.querySelector("i")


cons.addEventListener("dblclick", function () {
    love.style.transform = 'translate(-50%, -50%)scale(1)'
    love.style.opacity = 0.8

    setTimeout(function () {
        love.style.opacity = 0
    }, 2000)
    setTimeout(function () {
        love.style.transform = 'translate(-50%, -50%)scale(0)'
    }, 3000)
})




let istatus = document.querySelector("h3");

 let addF = document.querySelector("#add");

 let check = 0;

 
addF.addEventListener("click",function(){

    if(check == 0){
    istatus.innerHTML = "Friend";
    istatus.style.color = "green";
    addF.style.background = "green";
    addF.innerHTML = "Remove";
     
    check = 1
}
 else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    addF.style.background =" cadetblue"
     addF.innerHTML = "Add Friend"

    check = 0
 }

 }

)