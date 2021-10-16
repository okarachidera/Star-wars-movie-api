// function main(){

// }

// module.exports = {main}
// let fname=document.getElementById('fname')
// fname.innerHTML='chidera'
let containEl=document.getElementById('containck');
let tempdata=''
// let h1El= document.getElementById('h1-id')
// let detialsEl=document.getElementById('details-cha')
let colClass=document.querySelector('.col-class');




    

fetch('https://swapi.dev/api/people')
.then(res => res.json())

.then(data => {
    let viewBtn=''

    let newresult=data['results']

    for (let i = 0; i < newresult.length; i++) {
        
        containEl.innerHTML+=`
        <div class="col-sm-4 chicol">
        <div class="card">
        <img src="images/${i+1}.jpeg" class="card-img-top"
        height="360px"
         alt="..."
        >
        <div class="card-body">
            <h5 class="card-title">${newresult[i]['name']}</h5>
            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${i}">
            View Detials
            </a>
        </div>
        </div> 
        </div>  
        

        <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">Character Detials</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <div class="row">
            <div class="text-center col-sm-6">
            <img src="images/${i+1}.jpeg"  class="profile text-center" alt="">
            </div>
            <div class="col-sm-6 chidcolprof" >            
            <h5 class="card-title">Name: ${newresult[i]['name']}</h5>
            <h5 class="card-title">Gender: ${newresult[i]['gender']}</h5>
            <h5 class="card-title">Height: ${newresult[i]['height']}</h5>
            </div>
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>


      
    

        `



        



        
}

    
    });


