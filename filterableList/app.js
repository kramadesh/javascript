let filterInput = document.getElementById('filterinput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    
    let filtervalue = document.getElementById('filterinput').value.toUpperCase();
    console.log(filtervalue);

    //get names ul
    let ul = document.getElementById('names');

    let li = ul.querySelectorAll('li.collection-item');

    //loop through

    for(let i =0; i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        //if match
        if (a.innerHTML.toUpperCase().indexOf(filtervalue) >-1){
            li[i].style.display='';
        }
        else{
            li[i].style.display='none';
        }
    }

}
