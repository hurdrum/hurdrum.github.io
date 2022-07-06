if (screen.width > 770) {

    const starPhotos = document.querySelectorAll('.star-block')

    starPhotos.forEach(star => {
        star.addEventListener('click', function() {
            if (!star.classList.contains('block-5') && !star.classList.contains('block-6'))
            star.classList.toggle('large-photo');    
            closePhoto(star);
        })
    })

    function closePhoto(starPhoto) {
        window.addEventListener('click', function(e) {
            if (e.target != starPhoto) {
                if (starPhoto.classList.contains('large-photo')) {
                    starPhotos.forEach(star => {
                        star.classList.remove('large-photo');
                    })
                }
            }
        });
    }
}