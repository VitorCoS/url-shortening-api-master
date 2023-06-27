const input_link = document.getElementById('input_link')
const div_short_link = document.getElementsByClassName('div_short_link')
const text_add = document.getElementById('add_valid_link')
const adv_st = document.getElementsByClassName('adv_statics')
const last_element = document.getElementById('div_adv_static')




async function get_short_api() {

    if (!input_link.value) {
        console.log('Enter a valid link first');
        input_link.classList.add('enter_valid_link');
        text_add.style.display = 'block';
    }

    else {
        input_link.classList.remove('enter_valid_link');
        text_add.style.display = 'none';

        const link = 'https://api.shrtco.de/v2/shorten?url=' + input_link.value;
        let ResponseAPIJson = await get_fetch(link);

        create_div_short(ResponseAPIJson.result.original_link,ResponseAPIJson.result.full_short_link)
       
   

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

        .catch(error => {
            console.log(`O erro é: ${error}`)
        })
}


function create_div_short(link,data) {

    //Criando a div
    var div_short = document.createElement('div')
    div_short.classList.add('div_api_response')

    //Criando h3 link extend    
    var h3_link_large = document.createElement('h3')
    h3_link_large.classList.add('link_large')
    //Primeiro teste com text content
    h3_link_large.textContent = link

    //Criando h3 link short
    var h3_b = document.createElement('h3')
    h3_b.classList.add('link_b')

    //Segundo teste criando uma variavel com node text
    var text = document.createTextNode(data)
    h3_b.appendChild(text)

    //Criando o button
    var butt = document.createElement('button')
    butt.innerHTML = 'Copy'

    //Adicionar os H3 a div principal
    div_short.appendChild(h3_link_large)
    div_short.appendChild(h3_b)
    div_short.appendChild(butt)


    //Adicionando a div completa ao meu adv
    var qnt_links = document.getElementsByClassName('div_api_response')
    if(qnt_links.length < 3){
       adv_st[0].insertBefore(div_short, last_element)
    }
    else{
        var last_div_short = document.getElementsByClassName('div_api_response')
        adv_st[0].removeChild(last_div_short[0])
    }

}