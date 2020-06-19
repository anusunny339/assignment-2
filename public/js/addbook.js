function check(){
 var error=0;
    var title=document.getElementById("title");
    var author=document.getElementById("author");
    var genre=document.getElementById("genre");
    var image=document.getElementById("image");
    if(title.value==""){
        alert("title required");
      error++;
    }
    else if(author.value==""){
        alert("author name required"); 
        error++;
    }
    else if(genre.value==""){
        alert("genre required"); 
        error++;
    }
    else if(image.value==""){
        alert("image required"); 
        error++;
    }

    if(error>0){
        return false;
    }
    else if(error==0){
   alert("book added");
    }
}