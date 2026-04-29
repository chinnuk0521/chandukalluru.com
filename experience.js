document.addEventListener('DOMContentLoaded', function() {
    const experienceElements = document.querySelectorAll('.dynamic-experience');
    if (experienceElements.length > 0) {
        const startDate = new Date('2022-03-01');
        const currentDate = new Date();
        
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();
        
        if (months < 0) {
            years--;
            months += 12;
        }
        
        let experienceString = `${years}`;
        if (months > 0) {
            const decimal = months / 12;
            experienceString = (years + decimal).toFixed(1);
        }
        
        experienceElements.forEach(element => {
            element.textContent = `${experienceString}+`;
        });
    }
});