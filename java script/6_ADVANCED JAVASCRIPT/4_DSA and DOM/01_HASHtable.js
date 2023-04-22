}

element+='</ul>'
document.getElementById('data').innerHTML=element;
document.getElementById('data').innerHTML=element; 




var student=new Object();

student['siva']='full stack developer';
student['satish']='front end dop';
student['durga']='full stack developer';
student['moin']='full stack developer';
student['kishore']='back end dop';
student['sravani']='full stack developer';
console.log(student);
console.log("siva position: " +student['siva'])

var data=document.getElementById('student').innerHTML;

data+='<ul>'
for(var key in student){
  var item='<li>'+key+':'+student[key] +"</li>"
  data+=item;
}
data+='</ul>'
document.getElementById('add').innerHTML =Element;