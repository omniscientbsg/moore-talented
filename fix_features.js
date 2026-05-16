const fs = require('fs');
let html = fs.readFileSync('mt-prototype-pricing.html', 'utf8');

// Replace Silver Features
const silverRegex = /<p class="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest">What's included<\/p>\s*<ul class="space-y-4">[\s\S]*?<\/ul>/;

const newSilverList = `<p class="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest">What's included</p>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3 text-sm text-slate-600">
                            <i class="fa-solid fa-check text-mt-accent mt-1"></i>
                            <span>30-day active job listing</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-600">
                            <i class="fa-solid fa-check text-mt-accent mt-1"></i>
                            <span>Up to 10 total job postings</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-600">
                            <i class="fa-solid fa-check text-mt-accent mt-1"></i>
                            <span>Basic AI Candidate Matching (Top 5)</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-600">
                            <i class="fa-solid fa-check text-mt-accent mt-1"></i>
                            <span>Direct applicant messaging</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-600">
                            <i class="fa-solid fa-check text-mt-accent mt-1"></i>
                            <span>Hiring Pipeline & CRM</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-400 opacity-50">
                            <i class="fa-solid fa-xmark text-slate-300 mt-1"></i>
                            <span>AI Offer Letter Generation</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm text-slate-400 opacity-50">
                            <i class="fa-solid fa-xmark text-slate-300 mt-1"></i>
                            <span>AI Hiring Talent Agent</span>
                        </li>
                    </ul>`;

html = html.replace(silverRegex, newSilverList);

// Replace Gold Features
const goldRegex = /<p class="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest">Everything in Silver, plus:<\/p>\s*<ul class="space-y-4">[\s\S]*?<\/ul>/;

const newGoldList = `<p class="text-xs font-bold text-slate-900 mb-4 uppercase tracking-widest">Everything in Silver, plus:</p>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>Unlimited active job postings & extended limits</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>AI Offer Letter Generation</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>Advanced AI Match scoring & ranking</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>Automated Visa Eligibility screening</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>Dedicated Visa Compliance Officer</span>
                        </li>
                        <li class="flex items-start gap-3 text-sm font-semibold text-slate-800">
                            <i class="fa-solid fa-check text-mt-blue mt-1"></i>
                            <span>Basic Pre-arrival Upskill modules</span>
                        </li>
                    </ul>`;

html = html.replace(goldRegex, newGoldList);

// Replace Diamond Features to add AI Hiring Talent Agent
const diamondRegex = /<p class="text-xs font-bold text-slate-300 mb-4 uppercase tracking-widest">Everything in Gold, plus:<\/p>\s*<ul class="space-y-4">/;

const newDiamondListStart = `<p class="text-xs font-bold text-slate-300 mb-4 uppercase tracking-widest">Everything in Gold, plus:</p>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3 text-sm text-slate-300">
                            <i class="fa-solid fa-check text-green-400 mt-1"></i>
                            <span>AI Hiring Talent Agent</span>
                        </li>`;

html = html.replace(diamondRegex, newDiamondListStart);

fs.writeFileSync('mt-prototype-pricing.html', html);
