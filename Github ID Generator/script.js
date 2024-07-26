const button = document.querySelector('#button')
const input = document.querySelector('#input')


const img = document.querySelector('#img')
const name = document.querySelector('#name')
const followers = document.querySelector('#followers')

const xhr = new XMLHttpRequest()


const generate = function(){
    let url = String("https://api.github.com/users/")
    const userID = String(input.value)

    const requestUrl = url+userID
    console.log(requestUrl);

    xhr.open('GET', requestUrl)
    xhr.send()

    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        
        if (xhr.readyState == 4){
            const data = JSON.parse(this.responseText);
            name.innerHTML = data.name
            img.setAttribute('src', data.avatar_url)
            followers.innerHTML = `Followers: ${data.followers}`
        }
    }


        // if (xhr.readyState == 4){
        //     const data = JSON.parse(this.responseText);
        //     console.log(data.name)
        //     if (data.name === undefined){
        //         followers.innerHTML = `Please enter a valid User ID`
        //     } else if(data.name){
        //         name.innerHTML = data.name
        //         img.setAttribute('src', data.avatar_url)
        //         followers.innerHTML = `Followers: ${data.followers}`
        //     }
        // }
    // }
}

button.addEventListener('click', generate)