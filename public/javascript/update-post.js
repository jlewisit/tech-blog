async function editFormHandler(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="post-title"]').value.trim();
    const postContent = document.querySelector('input[name="post-content"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({post_id: id, postTitle, postContent}),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        // After successfully updating a post, redirect to dashboard
        document.location.replace('/dashboard/');
    }
    else {
        alert(response.statusText);
    };
};

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);