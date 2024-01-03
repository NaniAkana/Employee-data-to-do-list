empname=document.getElementById('name');
empid=document.getElementById('empid');
empsalary=document.getElementById('salary');
empjoin=document.getElementById('join');
emprole=document.getElementById('role');
function dataa(){
    if(empname.value===''|| empid.value==='' || empsalary.value==='' || empjoin.value==='' || emprole.value==='')
    {
        alert("enter your Data");

       

    }
    else{
        var tab = document.getElementById('data');
        var nrow = tab.insertRow();
        var cel1 = nrow.insertCell(0);
        var cel2 = nrow.insertCell(1);
        var cel3 = nrow.insertCell(2);
        var cel4 = nrow.insertCell(3);
        var cel5 = nrow.insertCell(4);
        var cel6 = nrow.insertCell(5);
        cel1.innerHTML = empname.value;
        cel2.innerHTML = empid.value;
        cel3.innerHTML = empsalary.value;
        cel4.innerHTML = empjoin.value;
        cel5.innerHTML = emprole.value;
        var but = document.createElement('button');

        but.addEventListener('click', function () {

            var row = cel6.parentNode;
            row.parentNode.removeChild(row);

        });

        but.innerHTML = 'clear';
        cel6.appendChild(but);
        but.classList.add('b1')

        empname.value = "";
        empid.value = "";
        empjoin.value = "";
        empsalary.value="";
        emprole.value='';
        
    }
}