const newPostHandler = async (event) => {
    event.preventDefault()
    
    const title = document.querySelector('#post-name').value.trim()
    const postText = document.querySelector('#post-text').value.trim() 


    if(title && postText){
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, postText }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        }else {
            alert(response.statusText);
        }
    }
}


const newPostbtn = document.getElementById('newPostBtn')

newPostbtn.addEventListener('click', newPostHandler)