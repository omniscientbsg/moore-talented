const fs = require('fs');

let text = fs.readFileSync('mt-prototype-home.html', 'utf8');

const clearbitLogos = `
                <!-- Logos -->
                <img src="https://logo.clearbit.com/iitb.ac.in" class="marquee-logo" alt="IIT Bombay" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://iitb.ac.in&size=128'">
                <img src="https://logo.clearbit.com/du.ac.in" class="marquee-logo" alt="Delhi University" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://du.ac.in&size=128'">
                <img src="https://logo.clearbit.com/bits-pilani.ac.in" class="marquee-logo" alt="BITS Pilani" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bits-pilani.ac.in&size=128'">
                <img src="https://logo.clearbit.com/amity.edu" class="marquee-logo" alt="Amity University" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amity.edu&size=128'">
                <img src="https://logo.clearbit.com/aud.edu" class="marquee-logo" alt="American University Dubai" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://aud.edu&size=128'">
                
                <img src="https://logo.clearbit.com/iitb.ac.in" class="marquee-logo" alt="IIT Bombay" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://iitb.ac.in&size=128'">
                <img src="https://logo.clearbit.com/du.ac.in" class="marquee-logo" alt="Delhi University" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://du.ac.in&size=128'">
                <img src="https://logo.clearbit.com/bits-pilani.ac.in" class="marquee-logo" alt="BITS Pilani" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bits-pilani.ac.in&size=128'">
                <img src="https://logo.clearbit.com/amity.edu" class="marquee-logo" alt="Amity University" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amity.edu&size=128'">
                <img src="https://logo.clearbit.com/aud.edu" class="marquee-logo" alt="American University Dubai" onerror="this.src='https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://aud.edu&size=128'">
`;

text = text.replace(
    /\.marquee-logo \{.*?\}/, 
    '.marquee-logo { display: inline-block; margin: 0 4rem; filter: grayscale(100%) opacity(0.6); transition: all 0.3s; height: 60px; width: auto; max-width: 150px; object-fit: contain; }'
);

text = text.replace(/<div class="marquee-content">[\s\S]*?<\/div>/, '<div class="marquee-content">\n' + clearbitLogos + '\n            </div>');

fs.writeFileSync('mt-prototype-home.html', text);
