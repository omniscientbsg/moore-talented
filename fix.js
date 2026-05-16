const fs = require('fs');

let text = fs.readFileSync('mt-prototype-home.html', 'utf8');

text = text.replace('class="relative z-30 -mt-12 max-w-6xl mx-auto px-6"', 'class="relative z-30 mt-8 lg:-mt-12 max-w-6xl mx-auto px-6"');

text = text.replace('Trusted by Premier Organizations Across America', 'Trusted by premier universities across the globe');

const newLogos = `
                <!-- Logos -->
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" class="marquee-logo" alt="IIT Bombay">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/University_of_Delhi_Seal.svg/1200px-University_of_Delhi_Seal.svg.png" class="marquee-logo" alt="Delhi University">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" class="marquee-logo" alt="BITS Pilani">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Amity_University_logo.svg/1200px-Amity_University_logo.svg.png" class="marquee-logo" alt="Amity University">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/American_University_in_Dubai_logo.svg/1200px-American_University_in_Dubai_logo.svg.png" class="marquee-logo" alt="American University Dubai">
                
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" class="marquee-logo" alt="IIT Bombay">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/University_of_Delhi_Seal.svg/1200px-University_of_Delhi_Seal.svg.png" class="marquee-logo" alt="Delhi University">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" class="marquee-logo" alt="BITS Pilani">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Amity_University_logo.svg/1200px-Amity_University_logo.svg.png" class="marquee-logo" alt="Amity University">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/American_University_in_Dubai_logo.svg/1200px-American_University_in_Dubai_logo.svg.png" class="marquee-logo" alt="American University Dubai">
`;

text = text.replace(/<div class="marquee-content">[\s\S]*?<\/div>/, '<div class="marquee-content">\n' + newLogos + '\n            </div>');

fs.writeFileSync('mt-prototype-home.html', text);
