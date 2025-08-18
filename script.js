// චිත්‍රපට ප්ලේ කිරීම සඳහා ශ්‍රිතය
function playMovie(fileId) {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('movieFrame');
    
    // Google Drive embed URL සාදන්න
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    
    iframe.src = embedUrl;
    modal.style.display = 'block';
    
    // මොඩල් විවෘත වූ විට ස්ක්‍රෝල් අක්‍රිය කරන්න
    document.body.style.overflow = 'hidden';
}

// ප්ලේයර් වසා දැමීම සඳහා ශ්‍රිතය
function closePlayer() {
    const modal = document.getElementById('playerModal');
    const iframe = document.getElementById('movieFrame');
    
    iframe.src = '';
    modal.style.display = 'none';
    
    // ස්ක්‍රෝල් නැවත සක්‍රිය කරන්න
    document.body.style.overflow = 'auto';
}

// මොඩලයෙන් පිටත ක්ලික් කිරීමෙන් වසන්න
window.onclick = function(event) {
    const modal = document.getElementById('playerModal');
    if (event.target == modal) {
        closePlayer();
    }
}

// සෙවුම් ක්‍රියාකාරිත්වය (අනාගතයේදී ක්‍රියාත්මක කිරීමට)
document.addEventListener('DOMContentLoaded', function() {
    const searchBoxes = document.querySelectorAll('.search-box input');
    
    searchBoxes.forEach(box => {
        box.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                // සෙවුම් ක්‍රියාකාරිත්වය අනාගතයේදී ක්‍රියාත්මක කරන්න
                alert('සෙවුම් ක්‍රියාකාරිත්වය ඉක්මනින් එනු ඇත!');
            }
        });
    });
});
