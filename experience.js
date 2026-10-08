document.addEventListener('DOMContentLoaded', function () {
    const experienceElements = document.querySelectorAll('.dynamic-experience');
    if (experienceElements.length > 0) {
        // Main professional experience only:
        // - Crystal Lotus Solutions: Jun 2024 - Dec 2024 (7 mos)
        // - IIT Madras: Jan 2025 - Sep 2025 (9 mos)
        // Total main experience = 16 months (~1.3+ years)
        const mainExperienceMonths = 16;
        const yearsDecimal = (mainExperienceMonths / 12).toFixed(1);
        const experienceString = `${yearsDecimal}+`;

        experienceElements.forEach((element) => {
            element.textContent = experienceString;
        });
    }
});
