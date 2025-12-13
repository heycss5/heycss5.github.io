document.addEventListener('DOMContentLoaded', () => {
    // 1. 네비게이션 링크와 콘텐츠 섹션을 가져옵니다.
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // 2. 각 네비게이션 링크에 클릭 이벤트를 추가합니다.
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            // 3. 모든 섹션을 숨기고, 모든 링크의 활성 상태를 제거합니다.
            sections.forEach(section => {
                section.classList.remove('active');
            });
            navLinks.forEach(nav => {
                nav.classList.remove('active');
            });

            // 4. 클릭된 링크의 data-section 속성 값(id)을 가져옵니다.
            const targetId = link.getAttribute('data-section'); 

            // 5. 목표 섹션을 찾아서 보이게 만듭니다.
            const targetSection = document.getElementById(`section-${targetId}`);
            if (targetSection) {
                targetSection.classList.add('active'); 
            }

            // 6. 현재 클릭된 링크에 활성 상태를 표시합니다.
            link.classList.add('active');
        });
    });

    // 페이지 로드 시 기본으로 'Profile' 섹션을 활성화합니다.
    document.getElementById('section-profile').classList.add('active');
    document.querySelector('.nav-link[data-section="profile"]').classList.add('active');
});