current='introduction'

function change(id){
    
var element=document.getElementById(current);
element.style.display="none";
element=document.getElementById(id);
element.style.display="block";
current=id;


}


function modal_content(id){
    var title=document.getElementById('modal_title');
    title.innerText("id");
    
}