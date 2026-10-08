/**
 * Newspaper Portfolio - JavaScript
 * Minimal enhancements for future dynamic content
 */

(function () {
    'use strict';

    // Update date and time dynamically
    function updateDateTime() {
        const dateTimeElement = document.querySelector('.date-time');
        if (dateTimeElement) {
            const now = new Date();
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                // Reduced compact format for mobile single-line fit: e.g. "Oct 8, 2026 | 10:40 PM"
                const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
                const dateString = now.toLocaleDateString('en-US', dateOptions);
                const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
                const timeString = now.toLocaleTimeString('en-US', timeOptions);
                dateTimeElement.textContent = `${dateString} | ${timeString}`;
            } else {
                // Desktop full format
                const dateOptions = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                };
                const dateString = now.toLocaleDateString('en-US', dateOptions);
                const timeOptions = {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                };
                const timeString = now.toLocaleTimeString('en-US', timeOptions);
                dateTimeElement.textContent = `${dateString} | ${timeString}`;
            }
        }
    }

    // Calculate years of professional experience (Main Experience: Crystal Lotus + IIT Madras)
    function calculateExperience() {
        // Main professional experience:
        // - Crystal Lotus Solutions: Jun 2024 - Dec 2024 (7 mos)
        // - IIT Madras: Jan 2025 - Sep 2025 (9 mos)
        // Total main experience = 16 months (~1.3+ years)
        const totalMonths = 16;
        const roundedYears = (totalMonths / 12).toFixed(1);
        const experienceText = roundedYears + '+';

        // Update all elements with experience-years or dynamic-experience class
        const experienceElements = document.querySelectorAll('.experience-years, .dynamic-experience');
        experienceElements.forEach(function (element) {
            element.textContent = experienceText;
        });
    }

    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', function () {
        // Update immediately
        updateDateTime();
        calculateExperience();

        // Update every second to keep time current
        setInterval(updateDateTime, 1000);

        // Update experience monthly (check once per day)
        setInterval(calculateExperience, 24 * 60 * 60 * 1000);

        // Mobile navigation hamburger toggle & sticky header
        let navToggle = document.getElementById('navToggle');
        const newspaperNav = document.querySelector('.newspaper-nav');
        const masthead = document.querySelector('.masthead');

        if (newspaperNav) {
            if (!navToggle) {
                navToggle = document.createElement('button');
                navToggle.className = 'nav-toggle';
                navToggle.id = 'navToggle';
                navToggle.setAttribute('aria-label', 'Toggle Navigation Menu');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.innerHTML =
                    '<span class="hamburger-icon" aria-hidden="true"><span></span><span></span><span></span></span>';
                newspaperNav.parentNode.insertBefore(navToggle, newspaperNav);
            }

            navToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                const isOpen = newspaperNav.classList.toggle('open');
                navToggle.classList.toggle('open', isOpen);
                navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });

            // Close when clicking outside
            document.addEventListener('click', function (e) {
                if (
                    !newspaperNav.contains(e.target) &&
                    !navToggle.contains(e.target) &&
                    newspaperNav.classList.contains('open')
                ) {
                    newspaperNav.classList.remove('open');
                    navToggle.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });

            // Close on Escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && newspaperNav.classList.contains('open')) {
                    newspaperNav.classList.remove('open');
                    navToggle.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.focus();
                }
            });
        }

        // Sticky header on mobile: activates upon scrolling
        function handleScrollHeader() {
            if (!masthead) return;
            const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
            const isMobile = window.innerWidth <= 768;

            if (isMobile && scrollY > 30) {
                masthead.classList.add('scrolled');
            } else {
                masthead.classList.remove('scrolled');
                // Auto close mobile nav if scrolled back to top
                if (scrollY <= 30 && newspaperNav && newspaperNav.classList.contains('open')) {
                    newspaperNav.classList.remove('open');
                    if (navToggle) {
                        navToggle.classList.remove('open');
                        navToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScrollHeader, { passive: true });
        window.addEventListener('resize', function () {
            updateDateTime();
            handleScrollHeader();
        });
        handleScrollHeader();
    });

    // Optional: Add print-friendly behavior
    window.addEventListener('beforeprint', function () {
        // Could adjust styles for printing
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', function () {
        document.body.classList.remove('printing');
    });

    // Toggle proposal full content
    window.toggleProposal = function (proposalId) {
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
    citationLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
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

    // Helper to display a lightweight feedback toast
    function showMailToast(message) {
        let toast = document.getElementById('global-mail-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'global-mail-toast';
            toast.className = 'mail-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(function () {
            toast.classList.remove('show');
        }, 3500);
    }

    // Ensure all mailto links trigger reliably across desktop/mobile/file:// contexts
    document.addEventListener('click', function (e) {
        const mailLink = e.target.closest('a[href^="mailto:"]');
        if (!mailLink) return;

        const href = mailLink.getAttribute('href');
        if (!href) return;

        // Copy email to clipboard as dependable fallback
        const email = 'chandu.kalluru@outlook.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(email)
                .then(function () {
                    showMailToast('Opening email client · ' + email + ' copied');
                })
                .catch(function () {
                    showMailToast('Opening email client for ' + email);
                });
        } else {
            showMailToast('Opening email client for ' + email);
        }

        // Programmatically trigger dispatch
        window.location.href = href;
    });
})();
