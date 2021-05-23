
function imgGallery(){
    const highlight = document.querySelector('.img-show img')
    const imgs = document.querySelectorAll('.img img');

    imgs.forEach(img =>{
        img.addEventListener('click', function(){
            const src = this.src;
            highlight.src = src;
            
            imgs.forEach(img => img.classList.remove('active'));
            this.classList.add('active');
        })
    });
}
imgGallery();