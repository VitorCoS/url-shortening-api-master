const input_link = document.getElementById('input_link')
const div_short_link = document.getElementsByClassName('div_short_link')
const text_add = document.getElementById('add_valid_link')
const adv_st = document.getElementsByClassName('adv_statics')
const last_element = document.getElementById('div_adv_static')




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
        const short_link =  get_fetch(link);
        console.log(short_link.JSON)
        
        
        
        

    }

}
         


function get_fetch(link) {
    return fetch(link)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter os dados. Código de status:' + response.status)
            }
            return response.json()
        })

        .then(ResponseJson => {
            JSON.stringify(ResponseJson)
            return ResponseJson.result.full_short_link
        })

        .then(data =>{


            adv_st[0].innerHTML += `<div class="div_api_response">
                                        <h3 class="link_large">${link}</h3>
                                        <h3 class="link_b">${data}</h3>
                                        <button>Copy</button>
                                  </div>`
        })

        .catch(error => {
            console.log(`O erro é: ${error}`)
        })
} 