//creating a new request.
var xhr = new XMLHttpRequest();
xhr.open("GET","https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json");
xhr.send();
xhr.onload = function(){
  var data = JSON.parse(this.response);
  
  //data

function displaydata(x){  
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for(var i = ((x-1)*10);i < (x*10);i++){
    tbody.innerHTML +=`<td>${data[i].id}</td>
                       <td>${data[i].name}</td>
                       <td>${data[i].email}</td>`              
  }
}
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for(var i = 0;i < 10;i++){
  tbody.innerHTML +=`<td>${data[i].id}</td>
                       <td>${data[i].name}</td>
                       <td>${data[i].email}</td>`                
  }

  //creating buttons.
  var first = document.createElement("button");
  first.innerHTML = "FIRST";
  first.style = "font-weight:bold";
  first.style.margin = " 0px 0px 0px 360px"
  first.className = "button";
  first.addEventListener('click',function(){
    displaydata(1);
    nextdata(1);
  })
  document.body.append(first);

  var next = document.createElement('button');
  next.innerHTML = "NEXT";
  next.className = "button";
  next.style = "font-weight:bold";
  function nextdata(z){
    z = z+1;
    next.addEventListener('click',function(){
      displaydata(z);
      nextdata(z);
    })
  }
  document.body.append(next)

  var temp= [];
  for(var i = 0; i <= 9;i++){
    var button = document.createElement("button");
    button.innerHTML = i+1;
    button.className = "button";
    button.style = "font-weight:bold";
    temp.push(button);
    document.body.append(button);
  }

  var prev = document.createElement('button');
  prev.innerHTML = "PREVIOUS";
  prev.className = "button";
  prev.style = "font-weight:bold";
  function prevdata(y){
   y = y-1;
   prev.addEventListener('click',function(){
     displaydata(y);
     prevdata(y);
   })
  }
 document.body.append(prev);

  var last = document.createElement("button");
  last.innerHTML = "LAST";
  last.className = "button";
  last.style = "font-weight:bold";
  last.addEventListener('click',function(){
  displaydata(10);
  prevdata(10);
  })
  document.body.append(last);

  temp.forEach((e)=>{
     e.onclick = function(){
     displaydata(e.innerHTML); 
     var val = [];
     val.push(e.innerHTML);
     prevdata(+(val));
     nextdata(+(val));
    }
  })
}