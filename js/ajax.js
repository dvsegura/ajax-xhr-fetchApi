//funcion anonima autoejecutable
(() =>{
    const xhr = new XMLHttpRequest();
    $xhr = document.getElementById('xhr');
    $fragmento = document.createDocumentFragment();
   
    xhr.addEventListener('onreadystatechange',(e)=>{
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300){           
            let json = JSON.parse(xhr.responseText);
            json.forEach(element => {
                const $li = document.createAttribute('li');
                $li.innerHTML = `${element.name}--${element.email}`;
                $fragmento.appendChild($li);
            });
            $xhr.appendChild($fragmento);
        } else{           
            let message = xhr.statusText || "Ha ocurrido un error";
            $xhr.innerHTML = `Error: ${xhr.statusText}: ${message}`;
        }       
        
    });
    
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    
    xhr.send();

})();