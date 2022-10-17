async function addPostFormHandler(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('input[name="post-content"]').value;

    const response = await fetch(`/apiposts`, {
        method: 'POST',
        body: JSON.stringify({postTitle, postContent}),
        headers: {'Content-Type': 'application/json'}
    });

    if(response.ok) {
        //After successfully added a post, re-direct the user back to the dashboard
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    };
};

document.querySelector('#add-post-form').addEventListener('submit', addPostFormHandler);