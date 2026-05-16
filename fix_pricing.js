const fs = require('fs');

let text = fs.readFileSync('mt-prototype-pricing.html', 'utf8');

// Tier 1 (Silver)
text = text.replace('<h3 class="text-2xl font-bold text-slate-900 mb-2">Standard Posting</h3>', '<h3 class="text-2xl font-bold text-slate-900 mb-2">Silver</h3>');
text = text.replace('<span class="text-3xl md:text-4xl font-extrabold text-slate-900">$299</span>', '<span class="text-4xl md:text-5xl font-extrabold text-slate-900">$0</span>');
text = text.replace('<span class="text-slate-500 font-medium mb-1">/ post</span>', '<span class="text-slate-500 font-medium mb-1.5 ml-1">/ month</span>');

// Tier 2 (Gold)
text = text.replace('<h3 class="text-2xl font-bold text-slate-900 mb-2">Growth Subscription</h3>', '<h3 class="text-2xl font-bold text-slate-900 mb-2">Gold</h3>');
text = text.replace('<span class="text-4xl md:text-5xl font-extrabold text-mt-blue">$899</span>', '<span class="text-4xl md:text-5xl font-extrabold text-mt-blue">$10</span>');
text = text.replace('<p class="text-xs text-mt-blue font-semibold mt-2">Billed annually at $10,788</p>', '');

// Tier 3 (Diamond)
text = text.replace('<h3 class="text-2xl font-bold text-white mb-2">Enterprise Partner</h3>', '<h3 class="text-2xl font-bold text-white mb-2">Diamond</h3>');
text = text.replace('<span class="text-3xl md:text-4xl font-extrabold text-white">Custom Quoted</span>', '<span class="text-4xl md:text-5xl font-extrabold text-white">$20</span><span class="text-slate-400 font-medium mb-1.5 ml-1">/ month</span>');
text = text.replace('<p class="text-xs text-slate-400 mt-2">Volume-based pricing structure</p>', '');

// "Everything in" updates
text = text.replace('Everything in Standard, plus:', 'Everything in Silver, plus:');
text = text.replace('Everything in Growth, plus:', 'Everything in Gold, plus:');

// FAQ Fix
text = text.replace('Can I cancel my Growth Subscription at any time?', 'Can I cancel my Gold Subscription at any time?');

fs.writeFileSync('mt-prototype-pricing.html', text);
