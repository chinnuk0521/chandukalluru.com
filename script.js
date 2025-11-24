/**
 * Newspaper Portfolio - JavaScript
 * Minimal enhancements for future dynamic content
 */

(function() {
    'use strict';

    // Update date and time dynamically
    function updateDateTime() {
        const dateTimeElement = document.querySelector('.date-time');
        if (dateTimeElement) {
            const now = new Date();
            
            // Format date
            const dateOptions = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const dateString = now.toLocaleDateString('en-US', dateOptions);
            
            // Format time
            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            const timeString = now.toLocaleTimeString('en-US', timeOptions);
            
            // Combine date and time
            dateTimeElement.textContent = `${dateString} | ${timeString}`;
        }
    }

    // Calculate years of professional experience
    function calculateExperience() {
        // Professional start date: May 2022 (using May 1, 2022 as start)
        const startDate = new Date(2022, 4, 1); // Month is 0-indexed, so 4 = May
        const currentDate = new Date();
        
        // Calculate difference in years
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();
        
        // Adjust if current month is before start month
        if (months < 0) {
            years--;
            months += 12;
        }
        
        // If we're in the same month but before the start day, adjust
        if (months === 0 && currentDate.getDate() < startDate.getDate()) {
            years--;
            months = 11;
        }
        
        // Calculate total years as decimal (years + months/12)
        const totalYears = years + (months / 12);
        
        // Round to 1 decimal place
        const roundedYears = Math.round(totalYears * 10) / 10;
        
        // Format: if >= 1 year, show as "X.X years", otherwise show months
        let experienceText;
        if (roundedYears >= 1) {
            experienceText = roundedYears.toFixed(1) + '+';
        } else {
            experienceText = months + '+ months';
        }
        
        // Update all elements with experience-years class
        const experienceElements = document.querySelectorAll('.experience-years');
        experienceElements.forEach(function(element) {
            element.textContent = experienceText;
        });
    }

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', function() {
        // Update immediately
        updateDateTime();
        calculateExperience();
        
        // Update every second to keep time current
        setInterval(updateDateTime, 1000);
        
        // Update experience monthly (check once per day)
        setInterval(calculateExperience, 24 * 60 * 60 * 1000);
        
        // Future: Add dynamic content loading here
        // Future: Add smooth scroll behavior
        // Future: Add print stylesheet toggle
    });

    // Optional: Add print-friendly behavior
    window.addEventListener('beforeprint', function() {
        // Could adjust styles for printing
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });

    // Toggle proposal full content
    window.toggleProposal = function(proposalId) {
        const fullContent = document.getElementById(proposalId);
        if (fullContent) {
            if (fullContent.classList.contains('expanded')) {
                fullContent.classList.remove('expanded');
            } else {
                fullContent.classList.add('expanded');
                // Smooth scroll to the expanded content
                setTimeout(() => {
                    fullContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        }
    };

    // Handle citation link clicks for smooth scrolling (for same-page links)
    const citationLinks = document.querySelectorAll('.citation-link');
    citationLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.includes('#')) {
                const parts = href.split('#');
                if (parts.length === 2) {
                    const anchor = parts[1];
                    const targetElement = document.getElementById(anchor);
                    
                    // If target is on same page, handle smooth scroll
                    if (targetElement && !href.startsWith('http')) {
                        e.preventDefault();
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Add highlight effect
                        targetElement.style.transition = 'background-color 0.3s ease';
                        targetElement.style.backgroundColor = 'rgba(255, 255, 0, 0.2)';
                        setTimeout(() => {
                            targetElement.style.backgroundColor = '';
                        }, 2000);
                    }
                }
            }
        });
    });

})();

