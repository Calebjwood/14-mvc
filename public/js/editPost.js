const updateBtn = document.getElementById('updateBtn')
const deleteBtn = document.getElementById('deleteBtn')

const postId = document.getElementById('postId').textContent


const updateFormHandler = async (event) => {
    event.preventDefault()
    console.log(postId);
    const title = document.querySelector('#post-name').value.trim()
    const postText = document.querySelector('#post-text').value.trim() 

    if(title && postText){
        const response = await fetch(`/api/post/${postId}`, {
            method: 'PUT',
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

const deleteFormHandler = async (event) => {
    event.preventDefault()

    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    }else {
        alert(response.statusText);
    }

}


updateBtn.addEventListener('click', updateFormHandler)

deleteBtn.addEventListener('click', deleteFormHandler)
