// Навигация между разделами
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Убираем активный класс у всех ссылок
        document.querySelectorAll('.nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        
        // Добавляем активный класс к текущей ссылке
        this.classList.add('active');
        
        // Скрываем все разделы
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Показываем выбранный раздел
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
        
        // Прокручиваем к верху страницы на мобильных устройствах
        if (window.innerWidth <= 768) {
            window.scrollTo(0, 0);
        }
    });
});

// Обработка формы обратной связи
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Сообщение отправлено! (Это демонстрация, форма не настроена для реальной отправки)');
        contactForm.reset();
    });
}

// Данные для галерей (имитация загрузки из директории)
const galleryData = {
    '2d': [
        { src: '2d/card1_optk.jpg', caption: 'Дождевик' },
        { src: '2d/card1_вsax.jpg', caption: 'Дымовая шашка' },
        { src: '2d/card2 (4).jpg', caption: 'Дымовая шашка #2' },
        { src: '2d/card5 (2).jpg', caption: 'Дымовая шашка #3' },
        { src: '2d/card1_2x.png', caption: 'дымвоя шашка #4'},
        { src: '2d/card1_1.png', caption: 'Стул #1' },
        { src: '2d/card1.png', caption: 'Аэрозоль от комаров' },
        { src: '2d/card1_2ch.png', caption: 'СВЕЧА ОТ КОМАРОВ' },
        { src: '2d/Card1_20.png', caption: 'Спирали от комаров'},
        { src: '2d/card1_2.png', caption: 'Средство от моли'},
        { src: '2d/card1_3x_wb.png', caption: 'Удобрение'},
        { src: '2d/card1capatic.png', caption: 'Удобрение #2'},
        { src: '2d/card1_1_2.png', caption: 'Мебель'},
        { src: '2d/card1clips.png', caption: 'Кухонные ножки'},
        { src: '2d/card1_BLACK.png', caption: 'Липкая мышеловка'},
        { src: '2d/card1_dub_2.png', caption: 'Липкая мышеловка #2'},
    ],
    '3d': [
        { src: '3d/ASCENSION PART4.png', caption: '' },
        { src: '3d/caA-k-n6VAqvLdrMQzsqxKEDo0IMzJqYkz5LRLM5Gdk62T-VPLEQwTH7euvbdWd_SPvtKcFlUqKNvr7j0mLfP6H5.jpg', caption: '' },
        { src: '3d/eSJGKiu1pIcAxQo-Tyxi1Q1ldVIlLKONmNkF3OinsFwQD_31TMpJYcm--dxhMQmQOebbqIel2M6O-ZV1li5_ul6d.jpg', caption: '' },
        { src: '3d/f2xlSAL_20ASpMFOlh5uxExeLsq0MreACdlFI9g1web0iiODKx0ABcPPoqHbdHjHV3EdgTLZeUT99Q9N2wLAOrg0.jpg', caption: '' },
        { src: '3d/gZiMqDkMSYC6wFS8NDynaMtadD2EA3OomlNeukNrIOgI6UCIlY6b_i45EVhHmhNYTnCGEFc-Fv3WWg-3UtDSfitS.jpg', caption: '' },
        { src: '3d/HALLISTIC.jpg', caption: '' },
        { src: '3d/Hq5Jqo9u4HD6FqXkHX6T47rqAdD8ELY5J16VOkg4HEB2CVTxEUs2V8-2QwocoAMZCNrBwKL9k7eTCrbb3rwjRjOU.jpg', caption: '' },
        { src: '3d/Ineriersound.jpg', caption: '' },
        { src: '3d/muYy13ax0_N1uNixUDH8lZQZMkBTEx2VMZPom3qM-pZen-C6fFLwzLykwHCLlsQKEBERefyq3y7Vsmxr4_Sm-NNf.jpg', caption: '' },
        { src: '3d/poster1end.jpg', caption: '' },
        { src: '3d/tdsas.png', caption: '' },
        { src: '3d/VytHQRGeLZY1ffwcxTQHoKHmwTE3T1xq4jYH5UW2PRmA02J4QwAzLGwzTROhf61EXI7mV-hLLpFF-Uh8NBN2fwzh.jpg', caption: '' },
    ]
};

// Загрузка галереи
function loadGallery(type) {
    const container = document.getElementById(`gallery${type}Container`);
    container.innerHTML = '';
    
    galleryData[type.toLowerCase()].forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
            <div class="gallery-caption">${item.caption}</div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openModal(type.toLowerCase(), index);
        });
        
        container.appendChild(galleryItem);
    });
}

// Модальное окно для просмотра изображений
let currentGalleryType = '';
let currentImageIndex = 0;

function openModal(galleryType, index) {
    currentGalleryType = galleryType;
    currentImageIndex = index;
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    const imageData = galleryData[galleryType][index];
    modalImg.src = imageData.src;
    caption.innerHTML = imageData.caption;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navigateImage(direction) {
    const images = galleryData[currentGalleryType];
    currentImageIndex += direction;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    const imageData = images[currentImageIndex];
    modalImg.src = imageData.src;
    caption.innerHTML = imageData.caption;
}

// Обработчики событий для модального окна
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('prevImage').addEventListener('click', () => navigateImage(-1));
document.getElementById('nextImage').addEventListener('click', () => navigateImage(1));

// Закрытие модального окна при клике вне изображения
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Навигация с помощью клавиатуры
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageModal');
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
            navigateImage(1);
        }
    }
});

// Кнопки загрузки галерей
document.getElementById('load2dGallery').addEventListener('click', () => loadGallery('2d'));
document.getElementById('load3dGallery').addEventListener('click', () => loadGallery('3d'));

// Автозагрузка галереи при переходе на соответствующий раздел
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        if (target === 'gallery2d') {
            setTimeout(() => loadGallery('2d'), 100);
        } else if (target === 'gallery3d') {
            setTimeout(() => loadGallery('3d'), 100);
        }
    });
});