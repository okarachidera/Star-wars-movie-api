// function main(){

// }

// module.exports = {main}
// let fname=document.getElementById('fname')
// fname.innerHTML='chidera'
let containEl=document.getElementById('containck');
let tempdata=''
let h1El= document.getElementById('h1-id')
let detialsEl=document.getElementById('details-cha')
let colClass=document.querySelector('.col-class');




    

fetch('https://swapi.dev/api/people')
.then(res => res.json())

.then(data => {
    let viewBtn=''

    let newresult=data['results']

    for (let i = 0; i < newresult.length; i++) {
        
        containEl.innerHTML+=`
        <div class="col-class">
        <h3 class="h3-dark" id="fname${[i]}"> ${newresult[i]['name'] }</h3>
        <button class="btn-cha" id="view-btn${[i]}">     
        View More
        </button>
        </div>      
        `
        console.log(newresult[i]);
        viewBtn=document.getElementById(`view-btn${i}`)



        


        viewBtn=addEventListener("click", ()=> {
        
            console.log('hello');
            document.getElementById(`fname${i}`).innerHTML=`<div id="details-cha">
            <h3 class="h3-dark" id="fname${[i]}"> ${newresult[i]['name'] }</h3>
            <p class="ptag">Gender: ${newresult[i]['gender'] } </p>
            <p class="ptag">height: ${newresult[i]['height'] }</p>
            </div>
            `
        })
        
}

    
    });


