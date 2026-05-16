const fs = require('fs');
let html = fs.readFileSync('mt-prototype-pricing.html', 'utf8');

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
                        <li class="flex items-start gap-3 text-sm font-semibold text-white">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>Priority job listing approvals</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-white">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>24/7 Premium dedicated support</span>
                        </li>
                    </ul>`;

html = html.replace(diamondRegex, newDiamondList);

fs.writeFileSync('mt-prototype-pricing.html', html);
