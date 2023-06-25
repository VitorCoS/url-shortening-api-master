const input_link = document.getElementById('input_link')
const div_short_link = document.getElementsByClassName('div_short_link')
const text_add = document.getElementById('add_valid_link')






function get_short_api() {

    if (!input_link.value) {
        console.log('Enter a valid link first');
        input_link.classList.add('enter_valid_link');
        text_add.style.display = 'block';
    }

    else{
        input_link.classList.remove('enter_valid_link');
        text_add.style.display = 'none';
        const link = 'https://api.shrtco.de/v2/shorten?url=' + input_link.value;
        console.log(link)
        get_fetch(link)
   
    }

}
         


async function get_fetch(link) {
    await fetch(link)
        .then(response => {
           if(!response.ok){
            throw new Error('Erro ao obter os dados. Código de status:' + response.status)
           }
            return response.json()
        })
        
        .then(ResponseJson =>{
            console.log(ResponseJson)
        })
        
        .catch(error => {
            console.log(`O erro é: ${error}`)
        })
} 