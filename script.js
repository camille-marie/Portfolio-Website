// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add loading states to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type === 'submit') return; // Don't add loading to form submit buttons
        
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Simulate loading (replace with actual functionality)
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 1000);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-link.active {
        color: #667eea !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(activeNavStyle);

// Initialize tooltips for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Close notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add loading animation for images (if any are added later)
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.3s ease';
                this.style.opacity = '1';
            });
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - starting initialization');
    
    preloadImages();
    
    // Add fade-in effect to all cards
    const cards = document.querySelectorAll('.project-card, .performance-card, .application-card, .skill-category');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Audio functionality for Portfolio Composition
    console.log('Looking for audio elements...');
    const audioPlayer = document.querySelector('.audio-player');
    const audioStatus = document.getElementById('audio-status');
    
    console.log('Audio player found:', audioPlayer);
    console.log('Audio status element found:', audioStatus);
    
    if (audioPlayer && audioStatus) {
        console.log('Both elements found, setting up audio...');
        let fadeInterval;
        
        // Check if running locally or from server
        const isLocalFile = window.location.protocol === 'file:';
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        
        // Update protocol info display
        const protocolInfo = document.getElementById('protocol-info');
        if (protocolInfo) {
            protocolInfo.textContent = `${window.location.protocol}//${window.location.hostname}:${window.location.port || 'default'}`;
        }
        
        if (isLocalFile) {
            audioStatus.textContent = '❌ Audio disabled - Running from local file. Use local server to enable audio.';
            audioStatus.style.color = '#f44336';
            console.log('Running from local file - audio disabled');
        } else if (isLocalhost) {
            audioStatus.textContent = '🔍 Testing audio file...';
            audioStatus.style.color = '#ff9800';
            console.log('Running from localhost - testing audio');
        } else {
            audioStatus.textContent = '🔍 Testing audio file...';
            audioStatus.style.color = '#ff9800';
            console.log('Running from server - testing audio');
        }
        
        // Add loading indicator to audio player
        audioPlayer.addEventListener('loadstart', () => {
            if (!isLocalFile) {
                audioStatus.textContent = '⏳ Loading Portfolio.wav...';
                audioStatus.style.color = '#ff9800';
            }
        });
        
        audioPlayer.addEventListener('progress', () => {
            if (!isLocalFile && audioStatus.textContent.includes('Loading')) {
                audioStatus.textContent = '⏳ Loading Portfolio.wav... (buffering)';
            }
        });
        
        // Add visual indicator for disabled audio player
        if (isLocalFile) {
            audioPlayer.style.opacity = '0.5';
            audioPlayer.style.pointerEvents = 'none';
            audioPlayer.title = 'Audio disabled - Use local server to enable';
        } else {
            // Force reload audio element when running from server
            console.log('Forcing audio reload for server environment');
            audioPlayer.load();
            
            // Ensure audio player is fully enabled
            audioPlayer.style.opacity = '1';
            audioPlayer.style.pointerEvents = 'auto';
            audioPlayer.removeAttribute('disabled');
            audioPlayer.controls = true;
            
            // Update server status
            const serverStatus = document.getElementById('server-status');
            if (serverStatus) {
                serverStatus.textContent = '✅ Connected to localhost:8000';
                serverStatus.style.color = '#2e7d32';
            }
            
                    // Add a small delay and then check if audio is working
        setTimeout(() => {
            console.log('Audio readyState:', audioPlayer.readyState);
            console.log('Audio networkState:', audioPlayer.networkState);
            console.log('Audio error:', audioPlayer.error);
            console.log('Audio src:', audioPlayer.src);
            console.log('Audio currentSrc:', audioPlayer.currentSrc);
            
            if (audioPlayer.readyState >= 1) {
                audioStatus.textContent = '✅ Audio player enabled and ready!';
                audioStatus.style.color = '#4caf50';
            } else {
                audioStatus.textContent = '⚠️ Audio player loaded but may need manual activation';
                audioStatus.style.color = '#ff9800';
                
                // Try to load the audio again
                audioPlayer.load();
            }
        }, 1000);
        }
        
        // Test file accessibility (only if not running locally)
        if (!isLocalFile) {
            console.log('Testing file accessibility...');
            fetch('Portfolio.wav', { method: 'HEAD' })
                .then(response => {
                    console.log('File fetch response:', response);
                    if (response.ok) {
                        audioStatus.textContent = '✅ File accessible - Audio should work!';
                        audioStatus.style.color = '#4caf50';
                        
                        // Force audio to load and enable
                        audioPlayer.load();
                        audioPlayer.style.opacity = '1';
                        audioPlayer.style.pointerEvents = 'auto';
                        audioPlayer.removeAttribute('disabled');
                        
                        // Add event listeners after successful load
                        setupAudioEventListeners();
                        
                        // Update server status
                        const serverStatus = document.getElementById('server-status');
                        if (serverStatus) {
                            serverStatus.textContent = '✅ Audio enabled and ready!';
                            serverStatus.style.color = '#2e7d32';
                        }
                    } else {
                        audioStatus.textContent = '❌ File not accessible - Check file path';
                        audioStatus.style.color = '#f44336';
                    }
                })
                .catch(error => {
                    console.log('File fetch error:', error);
                    audioStatus.textContent = `❌ File error: ${error.message}`;
                    audioStatus.style.color = '#f44336';
                });
        }
        
        // Function to setup audio event listeners
        function setupAudioEventListeners() {
            // Try to play a tiny bit to test if it works
            audioPlayer.addEventListener('canplay', () => {
                console.log('Audio can play');
                if (audioStatus) {
                    audioStatus.textContent = '✅ Audio loaded successfully!';
                    audioStatus.style.color = '#4caf50';
                }
            });
            
            audioPlayer.addEventListener('error', (e) => {
                console.error('Audio error:', e);
                if (audioStatus) {
                    audioStatus.textContent = `❌ Audio error: ${audioPlayer.error ? audioPlayer.error.message : 'Unknown error'}`;
                    audioStatus.style.color = '#f44336';
                }
            });
            
            // Also try to load the audio directly as a fallback
            audioPlayer.load();
        }
        
        // Fallback: try to load audio even if fetch fails (only if not running locally)
        if (!isLocalFile) {
            setTimeout(() => {
                if (audioStatus.textContent.includes('Testing') || audioStatus.textContent.includes('Loading')) {
                    console.log('Fallback: attempting to load audio directly');
                    audioPlayer.load();
                    setupAudioEventListeners();
                }
            }, 2000);
        }
        
        // Add test button functionality
        const testButton = document.getElementById('test-audio');
        if (testButton) {
            // Disable test button if running locally
            if (isLocalFile) {
                testButton.disabled = true;
                testButton.style.opacity = '0.5';
                testButton.style.cursor = 'not-allowed';
                testButton.textContent = 'Test Audio (Disabled - Use Server)';
            } else {
                // Enable test button and add manual enable function
                testButton.textContent = 'Test Audio & Enable Player';
                testButton.style.background = '#4caf50';
                
                // Add a second button for manual enable
                const enableButton = document.createElement('button');
                enableButton.textContent = '🔧 Force Enable Audio';
                enableButton.style.cssText = 'margin-left: 10px; padding: 8px 16px; background: #ff9800; color: white; border: none; border-radius: 4px; cursor: pointer;';
                enableButton.addEventListener('click', () => {
                    console.log('Force enabling audio player...');
                    audioPlayer.style.opacity = '1';
                    audioPlayer.style.pointerEvents = 'auto';
                    audioPlayer.removeAttribute('disabled');
                    audioPlayer.controls = true;
                    audioPlayer.load();
                    audioStatus.textContent = '🔧 Audio player manually enabled - try playing now!';
                    audioStatus.style.color = '#ff9800';
                });
                testButton.parentNode.insertBefore(enableButton, testButton.nextSibling);
            }
            
            testButton.addEventListener('click', () => {
                if (isLocalFile) {
                    audioStatus.textContent = '❌ Audio test disabled - Please use local server to test audio.';
                    audioStatus.style.color = '#f44336';
                    return;
                }
                
                console.log('Test button clicked');
                audioStatus.textContent = '🔍 Testing audio playback...';
                audioStatus.style.color = '#ff9800';
                
                // First, try to manually enable the audio player
                audioPlayer.style.opacity = '1';
                audioPlayer.style.pointerEvents = 'auto';
                audioPlayer.removeAttribute('disabled');
                audioPlayer.controls = true;
                
                // Force reload the audio element
                audioPlayer.load();
                
                // Try to play a small portion of the audio
                audioPlayer.currentTime = 0;
                audioPlayer.volume = 0.1; // Low volume for testing
                
                const playPromise = audioPlayer.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Audio started playing successfully
                        setTimeout(() => {
                            audioPlayer.pause();
                            audioPlayer.currentTime = 0;
                            audioPlayer.volume = 1;
                            audioStatus.textContent = '✅ Audio test successful! Portfolio.wav is working.';
                            audioStatus.style.color = '#4caf50';
                        }, 1000); // Play for 1 second then stop
                    }).catch(error => {
                        console.error('Audio test failed:', error);
                        audioStatus.textContent = `❌ Audio test failed: ${error.message}`;
                        audioStatus.style.color = '#f44336';
                        
                        // Provide helpful troubleshooting info
                        if (error.name === 'NotAllowedError') {
                            audioStatus.textContent += ' - Try clicking the play button on the audio player instead';
                        } else if (error.name === 'NotSupportedError') {
                            audioStatus.textContent += ' - WAV format might not be supported in this browser';
                        }
                    });
                }
            });
        }
        
        audioPlayer.addEventListener('play', () => {
            // Clear any existing fade interval
            if (fadeInterval) clearInterval(fadeInterval);
            
            // Start fade-out at 40 seconds
            fadeInterval = setInterval(() => {
                if (audioPlayer.currentTime >= 40) {
                    // Calculate fade-out progress (0 to 1 over 5 seconds)
                    const fadeProgress = Math.min((audioPlayer.currentTime - 40) / 5, 1);
                    const targetVolume = 1 - fadeProgress;
                    
                    // Apply fade-out
                    audioPlayer.volume = targetVolume;
                    
                    // Stop the audio when fade is complete
                    if (fadeProgress >= 1) {
                        audioPlayer.pause();
                        audioPlayer.currentTime = 0;
                        audioPlayer.volume = 1; // Reset volume
                        clearInterval(fadeInterval);
                    }
                }
            }, 100); // Check every 100ms for smooth fade
        });
        
        audioPlayer.addEventListener('pause', () => {
            // Reset volume and clear interval when paused
            audioPlayer.volume = 1;
            if (fadeInterval) clearInterval(fadeInterval);
        });
        
        audioPlayer.addEventListener('ended', () => {
            // Reset volume and clear interval when ended
            audioPlayer.volume = 1;
            if (fadeInterval) clearInterval(fadeInterval);
        });
    }
});
