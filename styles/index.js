Array.from(document.querySelectorAll('p.num')).forEach(num => {
    num.addEventListener('click', function(){
        let totNumSelect = document.querySelectorAll('p.num#select').length
        if(totNumSelect > 0){
            document.querySelector('p.num#select').id = 'number'
        }
        num.id = 'select'
    })
});


function proxPage(){
    if(document.querySelectorAll('p.num#select').length != 0){
        document.getElementsByClassName("cartao-frente")[0].id = ''
        document.getElementsByClassName('cartao-tras')[0].id = 'visibility'
        const num = document.getElementById("select").innerText
        document.querySelector("p#span").innerHTML = `You selected ${num} out of 5`
    }else{
        document.querySelector('p#invalid').style.display = 'flex'
    }
}

