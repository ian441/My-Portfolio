
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content')

        // Show first tab by default
    tabContents[0].classList.add('active')

    tabBtns.forEach((btn => {
        btn.addEventListener('click', () => {

                      // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'))
            tabContents.forEach(content => content.classList.remove ('active'))

            btn.classList.add('active');

            const tabId = btn.getAttribute('data-tab')
            document.getElementById(tabId).classList.add('active')
        })
    }))
})
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality for projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-tech').includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Project modal functionality
    const projectModals = document.querySelectorAll('.project-modal');
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.project-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside content
    projectModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Animation for project cards on scroll
    const animateOnScroll = () => {
        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    
    // Initialize likes from localStorage or set to 0 if not exists
    let likes = localStorage.getItem('portfolioLikes');
    if (likes === null) {
        likes = 0;
        localStorage.setItem('portfolioLikes', likes);
    }
    likeCount.textContent = likes;
    
    // Check if user already liked this session
    const hasLiked = localStorage.getItem('hasLiked') === 'true';
    if (hasLiked) {
        likeBtn.classList.add('liked');
        likeBtn.querySelector('i').classList.replace('far', 'fas');
    }
    
    likeBtn.addEventListener('click', function() {
        let currentLikes = parseInt(localStorage.getItem('portfolioLikes'));
        const icon = this.querySelector('i');
        
        if (!hasLiked) {
            // Like action
            currentLikes++;
            localStorage.setItem('portfolioLikes', currentLikes);
            localStorage.setItem('hasLiked', 'true');
            this.classList.add('liked');
            icon.classList.replace('far', 'fas');
        } else {
            // Unlike action
            currentLikes = Math.max(0, currentLikes - 1);
            localStorage.setItem('portfolioLikes', currentLikes);
            localStorage.setItem('hasLiked', 'false');
            this.classList.remove('liked');
            icon.classList.replace('fas', 'far');
        }
        
        likeCount.textContent = currentLikes;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const closeBtn = document.querySelector('.close-btn');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.add('active');
    });
    
    closeBtn.addEventListener('click', function() {
        nav.classList.remove('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
});