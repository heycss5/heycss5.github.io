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

    // 🚩 페이지 로드 시 기본으로 'Home' 섹션을 활성화합니다.
    const initialSectionId = 'home';
    document.getElementById(`section-${initialSectionId}`).classList.add('active');
    document.querySelector(`.nav-link[data-section="${initialSectionId}"]`).classList.add('active');


    // --- Archive 섹션 내부의 탭 전환 기능 ---
    const archiveTabLinks = document.querySelectorAll('.archive-tab-link');
    const archiveContents = document.querySelectorAll('.archive-tab-content');

    archiveTabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. 모든 탭 링크와 콘텐츠의 active 클래스 제거
            archiveTabLinks.forEach(tab => tab.classList.remove('active'));
            archiveContents.forEach(content => content.classList.remove('active'));

            // 2. 클릭된 링크에 active 클래스 추가
            link.classList.add('active');

            // 3. 해당 탭 콘텐츠를 찾아서 active 클래스 추가 (보이게 함)
            const targetTab = link.getAttribute('data-tab'); // 예: 'fashion'
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    // --- 라이트박스 (모달) 기능 구현 ---
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // 갤러리 아이템 클릭 이벤트 리스너
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 모달을 보이게 함
            modal.style.display = "block";

            // 데이터 속성에서 이미지 경로와 캡션을 가져옴
            const fullSrc = item.getAttribute('data-full-src');
            const caption = item.getAttribute('data-caption');

            // 모달 내용 채우기
            modalImg.src = fullSrc;
            captionText.innerHTML = caption;
        });
    });

    // 닫기 버튼 클릭 이벤트
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // 모달 외부 클릭 시 닫기
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});