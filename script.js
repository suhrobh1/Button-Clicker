function loginChange(element){
    element.innerHTML= "Logout";
}

function removesDefinition(element){
    element.remove();
}

var countA = 13;
var countB = 37;

function likes(id){
  var likesTally = document.getElementById(id);
  if(id=="likesTop"){
    window.alert("Ninja was liked");
    countA++;
    likesTally.innerText = countA + " likes";
  }else{
    window.alert("Ninja was liked");
    countB++;
    likesTally.innerText = countB + " likes";
    }
}

