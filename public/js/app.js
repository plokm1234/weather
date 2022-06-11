const form = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if(data.error){
                message1.textContent = data.error
            }else{
                message2.textContent = data
            }
        })
    })
})

