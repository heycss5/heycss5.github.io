document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link'); 
    const sections = document.querySelectorAll('.content-section');
    const switchSection = (targetId) => {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        navLinks.forEach(nav => {
            nav.classList.remove('active');
        });
        const targetSection = document.getElementById(`section-${targetId}`);
        if (targetSection) {
            targetSection.classList.add('active');    
            document.querySelector(`.nav-link[data-section="${targetId}"]`)?.classList.add('active');
        }
    };
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            
            const targetId = link.getAttribute('data-section');
            
            
            switchSection(targetId);
        });
    });

    
    const initialSectionId = 'home';
    switchSection(initialSectionId); 


    
    const archiveTabLinks = document.querySelectorAll('.archive-tab-link');
    const archiveContents = document.querySelectorAll('.archive-tab-content');

    archiveTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

           
            archiveTabLinks.forEach(tab => tab.classList.remove('active'));
            archiveContents.forEach(content => content.classList.remove('active'));

            
            link.classList.add('active');

            
            const targetTab = link.getAttribute('data-tab'); 
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

   
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            
            modal.style.display = "block";

            
            const fullSrc = item.getAttribute('data-full-src');
            const caption = item.getAttribute('data-caption');

            
            modalImg.src = fullSrc;
            captionText.innerHTML = caption;
        });
    });

    
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});