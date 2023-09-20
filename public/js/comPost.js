const newCommmentHandler = async (event) => {
    event.preventDefault()

    const commentText = document.querySelector('#new-comment-text').value.trim()
    
    console.log(commentText);
    if(commentText){
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ commentText }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        }else{
            alert(response.statusText);
        }
    }
}


const newComBtn = document.getElementById('newCommentBtn')

newComBtn.addEventListener('click', newCommmentHandler)

