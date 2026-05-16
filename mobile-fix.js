const fs = require('fs');
const path = require('path');
const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  let text = fs.readFileSync(path.join(dir, f), 'utf8');

  // 1. Content Replacements
  text = text.replace(/120\+/g, '4+');
  text = text.replace(/Countries Reached/gi, 'Countries Serving');
  text = text.replace(/Candidates from 4\+ Countries/gi, 'Serving 4+ Countries');

  // 2. Mobile paddings
  text = text.replace(/\bpy-24\b/g, 'py-12 md:py-24');
  text = text.replace(/\bpy-32\b/g, 'py-12 md:py-32');
  text = text.replace(/\bpy-20\b/g, 'py-10 md:py-20');
  text = text.replace(/\bpy-16\b/g, 'py-10 md:py-16');

  text = text.replace(/\bp-10\b/g, 'p-6 md:p-10');
  text = text.replace(/\bp-8\b/g, 'p-6 md:p-8');
  text = text.replace(/\bp-12\b/g, 'p-6 md:p-12');
  text = text.replace(/\bp-6\b/g, 'p-4 md:p-6');

  // 3. Gaps & Layouts
  text = text.replace(/\bgap-16\b/g, 'gap-8 md:gap-16');
  text = text.replace(/\bgap-12\b/g, 'gap-6 md:gap-12');
  text = text.replace(/\bgap-8\b/g, 'gap-5 md:gap-8');
  
  text = text.replace(/grid-cols-2 md:grid-cols-4/g, 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4');
  
  // Specifically fix grid-cols-2 that don't have responsive prefixes
  text = text.replace(/class="([^"]*?)grid-cols-2([^"]*?)"/g, (match, before, after) => {
      if (!before.includes('md:grid-cols-') && !after.includes('md:grid-cols-') && !before.includes('sm:grid-cols-') && !after.includes('sm:grid-cols-')) {
          return `class="${before}grid-cols-1 sm:grid-cols-2${after}"`;
      }
      return match;
  });
  
  text = text.replace(/flex gap-4/g, 'flex flex-col sm:flex-row gap-4');
  
  // Fix divide lines on mobile for stat grids
  text = text.replace(/divide-x divide-slate-100/g, 'divide-y sm:divide-y-0 sm:divide-x divide-slate-100');
  
  // Fix absolute positioned blobs that cause horizontal scrolling on mobile
  text = text.replace(/class="([^"]*?absolute[^"]*?w-96[^"]*?)"/g, (match, classes) => {
      if (!classes.includes('hidden') && !classes.includes('md:block') && !classes.includes('lg:block')) {
          return `class="${classes} hidden md:block"`;
      }
      return match;
  });

  // 4. Hero text sizing for mobile
  text = text.replace(/text-5xl lg:text-7xl/g, 'text-4xl md:text-5xl lg:text-7xl');
  text = text.replace(/text-5xl lg:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
  text = text.replace(/text-4xl md:text-5xl/g, 'text-3xl md:text-5xl');
  text = text.replace(/text-4xl font-extrabold/g, 'text-3xl md:text-4xl font-extrabold');

  // Fix the split hero on candidates/home so they don't break horizontal scroll
  text = text.replace(/w-full relative/g, 'w-full max-w-full relative overflow-hidden md:overflow-visible');
  
  // Fix video cards grid on candidates page
  text = text.replace(/grid-cols-1 md:grid-cols-3/g, 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3');
  
  // Fix stat numbers clipping on mobile
  text = text.replace(/text-5xl font-extrabold/g, 'text-4xl md:text-5xl font-extrabold');

  fs.writeFileSync(path.join(dir, f), text);
});
console.log('Mobile fixes applied successfully!');
