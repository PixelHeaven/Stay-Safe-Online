document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabLinks = document.querySelectorAll('a[data-tab]');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab to show
            const tabId = this.getAttribute('data-tab');
            
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show the selected tab
            document.getElementById(tabId).classList.add('active');
            
            // Update active state in nav
            document.querySelectorAll('nav a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Mark current nav link as active
            document.querySelectorAll(`nav a[data-tab="${tabId}"]`).forEach(navLink => {
                navLink.classList.add('active');
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Make footer links work with tabs too
    document.querySelectorAll('footer a[data-tab]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tabId = this.getAttribute('data-tab');
            
            // Click the corresponding nav link
            document.querySelector(`nav a[data-tab="${tabId}"]`).click();
        });
    });

    // Language switching functionality
    const languageButtons = document.querySelectorAll('.lang-btn');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            
            // Remove active class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set language class on body
            if (language === 'sv') {
                document.body.classList.add('swedish');
            } else {
                document.body.classList.remove('swedish');
            }
        });
    });

    // Resource tabs in Mental Health section
    const resourceTabs = document.querySelectorAll('.resource-tab');
    
    resourceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const region = this.getAttribute('data-region');
            
            // Remove active class from all resource tabs
            resourceTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all resource content
            document.querySelectorAll('.resource-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected resource content
            document.getElementById(`${region}-resources`).classList.add('active');
        });
    });
});
