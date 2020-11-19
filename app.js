const $climate=document.getElementById("climate");
const $consumption=document.getElementById("consumption");
const $resources=document.getElementById("resources");
const $people=document.getElementById("people");

$climate.onclick=()=>{
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png')" 
    document.body.style.backgroundSize="100% 100%";
    $climate.style.backgroundColor="#2f80ed";
    $consumption.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent";
    document.getElementById("cause")
.innerHTML="";
document.getElementById("save").innerHTML=" Do your bit! Save trees, use renewable energy sources and prefer to travel green";
}
$consumption.onclick=()=>{
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png ')"  
    document.body.style.backgroundSize="100% 100%";
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor="#27ae60 ";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="transparent";
    document.getElementById("cause")
    .innerHTML="";
    document.getElementById("save").innerHTML="Do your bit! Shop only what you need,eat only what you nedd and always save the left overs.";
}

$resources.onclick=()=>{
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')"  
    document.body.style.backgroundSize="100% 100%";
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor="transparent";
    $resources.style.backgroundColor="#f2994a";
    $people.style.backgroundColor="transparent";
    document.getElementById("cause")
    .innerHTML="";
    document.getElementById("save").innerHTML="Do your bit! Avoid all things plastic. Belive in Reduce, Reuse and Recycle";
}

$people.onclick=()=>{
    document.body.style.backgroundImage="url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')"  
    document.body.style.backgroundSize="100% 100%";
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor="transparent";
    $resources.style.backgroundColor="transparent";
    $people.style.backgroundColor="#eb5757";
      document.getElementById("cause")
.innerHTML="";
document.getElementById("save").innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need.";
}