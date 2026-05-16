const fs = require('fs');

let html = fs.readFileSync('mt-prototype-pricing.html', 'utf8');

// Replace Gold
const goldRegex = /<p class="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest">Everything in Silver, plus:<\/p>\s*<ul class="space-y-4">[\s\S]*?<\/ul>/;

const newGoldList = `<p class="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest">Everything in Silver, plus:</p>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>60-day active job listing</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>Up to 50 total job postings</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>AI Offer Letter Generation</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>Advanced AI Match scoring & ranking</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-400 opacity-50">
                            <i class="fa-solid fa-xmark text-slate-300 mt-1"></i>
                            <span>AI Hiring Talent Agent</span>
                        </li>
                    </ul>`;

html = html.replace(goldRegex, newGoldList);

// Replace Diamond Button
html = html.replace(
    '<button class="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors mt-auto">Contact Sales Team</button>', 
    '<button class="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors mt-auto shadow-lg">Start 14-Day Free Trial</button>'
);

// Replace Diamond List
const diamondRegex = /<p class="text-xs font-bold text-slate-300 mb-4 uppercase tracking-widest">Everything in Gold, plus:<\/p>\s*<ul class="space-y-4">[\s\S]*?<\/ul>/;

const newDiamondList = `<p class="text-xs font-bold text-slate-300 mb-4 uppercase tracking-widest">Everything in Gold, plus:</p>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3 text-sm font-semibold text-white">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>Unlimited total job postings</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-white">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>Unlimited active job listings</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-white">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>AI Hiring Talent Agent</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>Custom branded onboarding portals</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>API integration with your existing ATS</span>
                        </li>
                    </ul>`;

html = html.replace(diamondRegex, newDiamondList);

// Fix FAQ Visa Mention
html = html.replace(
    'No. Our Enterprise and Growth plans include the facilitation of the DS-2019. The actual SEVIS and Embassy fees are typically paid by the candidate or subsidized depending on your specific hiring agreement.',
    'No. Our pricing is strictly for platform access and AI recruitment tools. You will never be charged hidden processing fees by the platform. Any external or third-party costs are handled entirely off-platform.'
);

fs.writeFileSync('mt-prototype-pricing.html', html);
