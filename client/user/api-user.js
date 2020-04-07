const create = (user) => {
    return fetch('api/users', {
        method: 'POST',
        headers: {
            'Accept':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((response) => {
        return response.json()
    }).catch((err) => console.log(err)
        
    )
}
const list = () =>{
    return fetch('api/users', {
        method: 'GET',  
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
}