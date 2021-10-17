// function main(){

// }

// module.exports = {main}
let containEl=document.getElementById('containck');
let tempdata=''
let colClass=document.querySelector('.col-class');


let searchEl=document.getElementById('searchcha')
let testEl=document.getElementById('testval')
let errmsg=document.getElementById('errmsg');





    

fetch('https://swapi.dev/api/people')
.then(res => res.json())

.then(data => {

  if (data) {
    
    let newresult=data['results']
  
      for (let i = 0; i < newresult.length; i++) {
    
          containEl.innerHTML+=`
          <div class="col-sm-4 chicol ">
          <div class="card">
          <img src="images/${i+1}.jpeg" class="card-img-top"
          height="360px"
           alt="..."
          >
          <div class="card-body">
              <h5 class="card-title">${newresult[i]['name']}</h5>
              <a href="#" class="btn btn-primary rounded-pill" data-toggle="modal" data-target="#exampleModal${i}">
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
              <h5 class="card-title">Height: ${newresult[i]['height']}cm</h5>
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
  }else{
    errmsg.innerHTML='Reload page'
  }




    
    });



let mybutton = document.getElementById("myBtn");

window.onscroll = () =>{scrollFunction()};

let scrollFunction=()=>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction=() =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let myVar;

const myFunction=()=> {
  myVar = setTimeout(showPage, 3000);
}

const showPage=()=> {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

