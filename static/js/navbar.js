// Hamburger menu functionality
(function() {
  console.log('Navbar script starting...');
  
  function initHamburgerMenu() {
    // Try different selectors to find navbar elements
    const navbar = document.querySelector('.navbar') || document.querySelector('[class*="navbar"]');
    const navbarItems = document.querySelector('.navbar__items--right') || 
                       document.querySelector('[class*="navbar__items"]') ||
                       document.querySelector('[class*="navbar-items"]');
    
    console.log('Looking for navbar elements...');
    console.log('Navbar found:', !!navbar);
    console.log('Navbar items found:', !!navbarItems);
    console.log('Navbar element:', navbar);
    console.log('Navbar items element:', navbarItems);
    
    if (!navbar || !navbarItems) {
      console.log('Required elements not found, retrying in 100ms...');
      setTimeout(initHamburgerMenu, 100);
      return;
    }
    
    // Check if hamburger button already exists
    let hamburgerButton = document.querySelector('.navbar__toggle');
    console.log('Existing hamburger button:', hamburgerButton);
    
    if (!hamburgerButton) {
      console.log('Creating hamburger button...');
      
      // Create hamburger button
      hamburgerButton = document.createElement('button');
      hamburgerButton.className = 'navbar__toggle';
      hamburgerButton.setAttribute('aria-label', 'Toggle navigation menu');
      hamburgerButton.setAttribute('aria-expanded', 'false');
      hamburgerButton.innerHTML = '<span class="navbar__toggle-icon"></span>';
      
      // Insert hamburger button into navbar
      const navbarInner = navbar.querySelector('.navbar__inner') || navbar;
      console.log('Inserting into:', navbarInner);
      navbarInner.appendChild(hamburgerButton);
      
      console.log('Hamburger button created and added to navbar');
      console.log('Hamburger button element:', hamburgerButton);
      console.log('Hamburger button HTML:', hamburgerButton.outerHTML);
    }
    
    // Verify the button is in the DOM
    const verifyButton = document.querySelector('.navbar__toggle');
    console.log('Verification - hamburger button in DOM:', verifyButton);
    
    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'mobile-menu-overlay';
      document.body.appendChild(overlay);
    }
    
    // Toggle menu function
    function toggleMenu() {
      console.log('=== TOGGLE MENU CALLED ===');
      const isOpen = navbarItems.classList.contains('navbar__items--show');
      console.log('Current state - isOpen:', isOpen);
      console.log('Navbar items classes before:', navbarItems.className);
      console.log('Hamburger button aria-expanded before:', hamburgerButton.getAttribute('aria-expanded'));
      
      if (isOpen) {
        console.log('Closing menu...');
        navbarItems.classList.remove('navbar__items--show');
        hamburgerButton.classList.remove('navbar__toggle--active');
        hamburgerButton.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
      } else {
        console.log('Opening menu...');
        navbarItems.classList.add('navbar__items--show');
        hamburgerButton.classList.add('navbar__toggle--active');
        hamburgerButton.setAttribute('aria-expanded', 'true');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
      
      console.log('Navbar items classes after:', navbarItems.className);
      console.log('Hamburger button aria-expanded after:', hamburgerButton.getAttribute('aria-expanded'));
      console.log('=== TOGGLE COMPLETE ===');
    }
    
    // Remove any existing event listeners
    const newHamburgerButton = hamburgerButton.cloneNode(true);
    hamburgerButton.parentNode.replaceChild(newHamburgerButton, hamburgerButton);
    hamburgerButton = newHamburgerButton;
    
    // Add click event to hamburger button
    hamburgerButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('=== HAMBURGER BUTTON CLICKED ===');
      console.log('Event target:', e.target);
      console.log('Event currentTarget:', e.currentTarget);
      toggleMenu();
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
      console.log('Overlay clicked - closing menu');
      navbarItems.classList.remove('navbar__items--show');
      hamburgerButton.classList.remove('navbar__toggle--active');
      hamburgerButton.setAttribute('aria-expanded', 'false');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target) && !overlay.contains(e.target)) {
        console.log('Click outside - closing menu');
        navbarItems.classList.remove('navbar__items--show');
        hamburgerButton.classList.remove('navbar__toggle--active');
        hamburgerButton.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on a link
    navbarItems.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        console.log('Link clicked - closing menu');
        setTimeout(() => {
          navbarItems.classList.remove('navbar__items--show');
          hamburgerButton.classList.remove('navbar__toggle--active');
          hamburgerButton.setAttribute('aria-expanded', 'false');
          overlay.classList.remove('show');
          document.body.style.overflow = '';
        }, 100);
      }
    });
    
    // Close menu on window resize (if screen becomes larger)
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        console.log('Window resized to desktop - closing menu');
        navbarItems.classList.remove('navbar__items--show');
        hamburgerButton.classList.remove('navbar__toggle--active');
        hamburgerButton.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
    
    console.log('Hamburger menu initialized successfully');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHamburgerMenu);
  } else {
    initHamburgerMenu();
  }
  
  // Also try to initialize after a short delay as fallback
  setTimeout(initHamburgerMenu, 500);
})();
