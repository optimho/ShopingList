

const formInput = document.querySelector('#input')

formInput.addEventListener('keypress', function(e){
    let placeholder
    if (e.key === 'Enter'){
        const data = this.value
        console.log(data)
        placeholder = data
        this.value = ''
        element = document.createElement('li')
        element.innerText = placeholder
        document.body.appendChild(element)
    }
    console.log(placeholder)
})
