current='introduction'

function change(id){
    
var element=document.getElementById(current);
element.style.display="none";
element=document.getElementById(id);
element.style.display="block";
current=id;


}