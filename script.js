document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').value;
    var video = document.getElementById('video').value;

    var blogPreview = document.getElementById('blog-preview');
    blogPreview.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        ${image ? `<img src="${image}" alt="Blog Image">` : ''}
        ${video ? `<video controls><source src="${video}" type="video/mp4"></video>` : ''}
    `;
});