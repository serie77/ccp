// Modal functionality
const modal = document.getElementById('meme-modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.querySelector('.close-button');
const memeCards = document.querySelectorAll('.meme-card');

// Image paths for the memes
const memeImages = {
  '1': 'ccp1.png',
  '2': 'ccp2.png',
  '3': 'ccp3.png',
  '4': 'ccp4.png'
};

// Add click event to each meme card
memeCards.forEach(card => {
  card.addEventListener('click', () => {
    const memeId = card.dataset.meme;
    const imageSrc = memeImages[memeId];
    
    modalImage.src = imageSrc;
    modal.style.display = 'block';
    
    // Add fade-in effect
    setTimeout(() => {
      modal.style.opacity = '1';
    }, 10);
  });
});

// Close modal functionality
closeButton.addEventListener('click', closeModal);

// Close modal when clicking outside the content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

function closeModal() {
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
    modalImage.src = '';
  }, 300);
}

// Add some fun hover effects and animations
document.addEventListener('DOMContentLoaded', () => {
  // Animate stats on scroll
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;
        
        if (text === '∞') {
          target.style.animation = 'pulse 2s infinite';
        } else if (text === '100%') {
          target.style.animation = 'bounce 1s ease-in-out';
        } else {
          // Counter animation for number
          let count = 0;
          const finalCount = parseInt(text);
          const increment = finalCount / 20;
          
          const counter = setInterval(() => {
            count += increment;
            if (count >= finalCount) {
              count = finalCount;
              clearInterval(counter);
            }
            target.textContent = Math.floor(count);
          }, 50);
        }
      }
    });
  });
  
  stats.forEach(stat => observer.observe(stat));
  
  // Add floating animation to hero image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.animation = 'float 3s ease-in-out infinite';
  }
  
  // Add stagger animation to meme cards
  memeCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in');
  });
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes fade-in {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  .fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
  
  .modal {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
document.head.appendChild(style);

// Add some fun Easter eggs
let clickCount = 0;
document.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 10) {
    // Add confetti effect or something fun
    document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24, #ff9ff3, #54a0ff)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradient 3s ease infinite';
    
    setTimeout(() => {
      document.body.style.background = 'linear-gradient(135deg, #fff 0%, #fef8f8 100%)';
      document.body.style.animation = 'none';
    }, 3000);
    
    clickCount = 0;
  }
});

// Add gradient animation for Easter egg
const gradientStyle = document.createElement('style');
gradientStyle.textContent = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(gradientStyle);

// Contract Address copy functionality
function copyCA() {
  const caInput = document.getElementById('ca-input');
  caInput.select();
  caInput.setSelectionRange(0, 99999); // For mobile devices
  
  try {
    document.execCommand('copy');
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.style.background = 'linear-gradient(135deg, #059669, #047857)';
    
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.style.background = 'linear-gradient(135deg, #dc2626, #b91c1c)';
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// Make copyCA available globally
window.copyCA = copyCA;

// Gradually increasing holder count
let holderCount = 1000000;
const holderElement = document.getElementById('holder-count');
const footerHolderElement = document.getElementById('footer-holders');

function updateHolderCount() {
  // Increase by random amount between 1-5 every 3 seconds
  const increase = Math.floor(Math.random() * 5) + 1;
  holderCount += increase;
  
  const formattedCount = holderCount.toLocaleString();
  holderElement.textContent = formattedCount;
  footerHolderElement.textContent = formattedCount;
}

// Update holder count every 3 seconds
setInterval(updateHolderCount, 3000);

// Initialize with formatted number
holderElement.textContent = holderCount.toLocaleString();
footerHolderElement.textContent = holderCount.toLocaleString(); 