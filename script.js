function loginChange(element){
    element.innerHTML= "Logout";
}

function removesDefinition(element){
    element.remove();
}

// var likesTally = document.querySelector("#likesTop");
function likes(id){
    var likesTally = document.getElementById(id);
    window.alert("Ninja was liked");
    likesTally.innerHTML++;
}
