function playMovie(fileId) {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('movieFrame');
    
    // Create Google Drive embed URL
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    
    iframe.src = embedUrl;
    modal.style.display = 'block';
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

function closePlayer() {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('movieFrame');
    
    iframe.src = '';
    modal.style.display = 'none';
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById('playerModal');
    if (event.target == modal) {
        closePlayer();
    }
}
