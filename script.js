const filters = document.querySelectorAll(".optfilter");
const breakfast = document.getElementsByClassName("breakfast");
const lunch = document.getElementsByClassName("lunch");
const dinner = document.getElementsByClassName("dinner");
let elements = document.getElementsByClassName("elements");
const prices = document.getElementsByTagName("h4");
const arr = [...elements];

//Background color according to price
const len = prices.length;
let textlen=0;
let rate = "";
for(let i=0;i<len;i++){
    textlen=(prices[i].innerText).length;
    for(let j=1;j<textlen;j++){
        rate += prices[i].innerText[j];
    }
    if(parseInt(rate)<75){
        prices[i].style.background="lightgreen";
    }
    else{
        prices[i].style.background="yellow";
    }
    rate="";
}




//Filtering elements based on filter selection
filters.forEach(filter => {
    filter.addEventListener('click', function(){
        console.log(filter.innerText);
        for(let i=0;i<elements.length;i++){
            if(filter.innerText==="Breakfast"){
                if(elements[i].classList.contains("breakfast")){
                    elements[i].classList.add("visible");
                    elements[i].classList.remove("hidden");
                }
                else{
                    elements[i].classList.add("hidden");
                    elements[i].classList.remove("visible");
                }
            }
            else if(filter.innerText==="Lunch"){
                if(elements[i].classList.contains("lunch")){
                    elements[i].classList.add("visible");
                    elements[i].classList.remove("hidden");
                }
                else{
                    elements[i].classList.add("hidden");
                    elements[i].classList.remove("visible");
                }
            }
            else if(filter.innerText==="Dinner"){
                if(elements[i].classList.contains("dinner")){
                    elements[i].classList.add("visible");
                    elements[i].classList.remove("hidden");
                }
                else{
                    elements[i].classList.add("hidden");
                    elements[i].classList.remove("visible");
                }
            }
            else{
                elements[i].classList.remove("hidden");
            }
        }
    })
});



// let dinner = arr.filter(ele => ele.classList.contains("dinner"));

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<filteredarr.length;j++){
//         console.log("filtered arr in for loop :"+filteredarr[j]);
//         if(arr[i]===filteredarr[j]){
//             elements[i].classList.add("visible");
//             elements[i].classList.remove("hidden");
//             break;
//         }
//         else{
//             elements[i].classList.add("hidden");
//             elements[i].classList.remove("visible");
//         }
//     }
// }

