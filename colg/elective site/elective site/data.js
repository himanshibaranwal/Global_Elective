information={
    course1:{duration:"25 hours",department:"Computer science and Engineering",syllabus:"<ol><li>First session will be regarding some random stuff</li><li>Second will be reagarding some other stuff</li></ol>"},
    course2:{duration:"30hours",department:"Hotel management",syllabus:"<li>First session i have no clue</li><li>second session also no clue</li>"}

};

function display(course_name)
{
    content=document.getElementById("content");
    content.innerHTML="Duration:"+information[course_name]['duration']+
                "<br>Department:"+information[course_name]['department']+
                "<br>Syllabus:"+information[course_name]['syllabus'];
}

function display1(course_name)
{
 duration=document.getElementById("duration");
 duration.innerText=information['course_name']['duration'];   
}