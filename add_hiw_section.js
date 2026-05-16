const fs = require('fs');

let html = fs.readFileSync('mt-prototype-home.html', 'utf8');

// The new How It Works section
const newSection = `
    <!-- SECTION 3.5: HOW IT WORKS (TOGGLE) -->
    <section class="py-12 md:py-24 bg-white relative border-t border-slate-100" id="how-it-works">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">How It Works</h2>
                
                <!-- Toggle Switch -->
                <div class="inline-flex bg-slate-50 p-1.5 rounded-full relative border border-slate-200 shadow-sm mx-auto">
                    <div id="hiw-slider" class="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(50%-6px)] bg-mt-blue rounded-full transition-transform duration-500 ease-out shadow-md"></div>
                    <button id="btn-hiw-candidate" class="relative z-10 px-8 py-3 text-sm font-bold text-white transition-colors w-40 sm:w-48" onclick="toggleHIW('candidate')">Candidate</button>
                    <button id="btn-hiw-employer" class="relative z-10 px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors w-40 sm:w-48" onclick="toggleHIW('employer')">Employer</button>
                </div>
            </div>

            <!-- Content Area -->
            <div class="relative min-h-[500px] md:min-h-[400px]">
                
                <!-- Candidate View -->
                <div id="hiw-candidate-content" class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-500 opacity-100 translate-y-0 absolute top-0 left-0 w-full lg:relative">
                    <!-- Video -->
                    <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-video group cursor-pointer border border-slate-100 bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Candidate Video" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                            <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white text-white text-xl">
                                <i class="fa-solid fa-play ml-1"></i>
                            </div>
                        </div>
                    </div>
                    <!-- Explanations -->
                    <div class="space-y-8">
                        <div class="flex gap-5">
                            <div class="w-12 h-12 rounded-full bg-blue-50 text-mt-blue flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 shadow-sm">1</div>
                            <div>
                                <h4 class="text-xl font-bold text-slate-900 mb-2">Build Your Profile</h4>
                                <p class="text-slate-600 leading-relaxed">Upload your CV and let our AI optimize it to U.S. standards. Highlight your skills and select your desired programs.</p>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="w-12 h-12 rounded-full bg-blue-50 text-mt-blue flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 shadow-sm">2</div>
                            <div>
                                <h4 class="text-xl font-bold text-slate-900 mb-2">Match & Interview</h4>
                                <p class="text-slate-600 leading-relaxed">Get instantly matched with verified U.S. employers based on your profile. Schedule interviews directly through the platform.</p>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="w-12 h-12 rounded-full bg-blue-50 text-mt-blue flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 shadow-sm">3</div>
                            <div>
                                <h4 class="text-xl font-bold text-slate-900 mb-2">Visa & Arrival</h4>
                                <p class="text-slate-600 leading-relaxed">We handle your J-1 Visa sponsorship paperwork (DS-2019). Complete your pre-arrival training and begin your American journey.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Employer View -->
                <div id="hiw-employer-content" class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-500 opacity-0 absolute top-0 left-0 w-full pointer-events-none translate-y-4">
                    <!-- Video -->
                    <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-video group cursor-pointer border border-slate-100 bg-slate-100">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Employer Video" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                            <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white text-white text-xl">
                                <i class="fa-solid fa-play ml-1"></i>
                            </div>
                        </div>
                    </div>
                    <!-- Explanations -->
                    <div class="space-y-8">
                        <div class="flex gap-5">
                            <div class="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">1</div>
                            <div>
                                <h4 class="text-xl font-bold text-slate-900 mb-2">Post Your Requirements</h4>
                                <p class="text-slate-600 leading-relaxed">Define your roles, seasons, and skill requirements. Set it once and let our AI engine source from a global talent pool.</p>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">2</div>
                            <div>
                                <h4 class="text-xl font-bold text-slate-900 mb-2">Review AI Shortlists</h4>
                                <p class="text-slate-600 leading-relaxed">Skip the resume parsing. Receive a ranked shortlist of culturally-aligned, visa-eligible candidates instantly.</p>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">3</div>
                            <div>
                                <h4 class="text-xl font-bold text-slate-900 mb-2">Hire & Onboard</h4>
                                <p class="text-slate-600 leading-relaxed">Extend offers with one click. Our compliance team handles the DS-2019 issuance and embassy tracking for you.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
`;

html = html.replace('<!-- SECTION 4: THE HYBRID RECRUITMENT MODEL -->', newSection + '\n    <!-- SECTION 4: THE HYBRID RECRUITMENT MODEL -->');

// Remove the old SECTION 6 Timeline
html = html.replace(/<!-- SECTION 6: HOW IT WORKS \(TIMELINE\) -->[\s\S]*?<!-- SECTION 7: SUCCESS STORIES -->/, '<!-- SECTION 7: SUCCESS STORIES -->');

// Inject the Toggle JS script at the bottom
const toggleJS = `
    <script>
        function toggleHIW(type) {
            const btnCand = document.getElementById('btn-hiw-candidate');
            const btnEmp = document.getElementById('btn-hiw-employer');
            const slider = document.getElementById('hiw-slider');
            const contentCand = document.getElementById('hiw-candidate-content');
            const contentEmp = document.getElementById('hiw-employer-content');

            if (type === 'candidate') {
                slider.style.transform = 'translateX(0)';
                
                btnCand.classList.replace('text-slate-500', 'text-white');
                btnCand.classList.remove('hover:text-slate-800');
                
                btnEmp.classList.replace('text-white', 'text-slate-500');
                btnEmp.classList.add('hover:text-slate-800');

                // Show Candidate
                contentCand.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                contentCand.classList.add('opacity-100', 'translate-y-0');
                contentCand.classList.add('lg:relative');
                
                // Hide Employer
                contentEmp.classList.remove('opacity-100', 'translate-y-0');
                contentEmp.classList.remove('lg:relative');
                contentEmp.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            } else {
                slider.style.transform = 'translateX(100%)';
                
                btnEmp.classList.replace('text-slate-500', 'text-white');
                btnEmp.classList.remove('hover:text-slate-800');
                
                btnCand.classList.replace('text-white', 'text-slate-500');
                btnCand.classList.add('hover:text-slate-800');

                // Show Employer
                contentEmp.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
                contentEmp.classList.add('opacity-100', 'translate-y-0');
                contentEmp.classList.add('lg:relative');
                
                // Hide Candidate
                contentCand.classList.remove('opacity-100', 'translate-y-0');
                contentCand.classList.remove('lg:relative');
                contentCand.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            }
        }
`;

html = html.replace(/<script>\s*document\.addEventListener\('DOMContentLoaded', \(\) => {/g, toggleJS + "\n" + "        document.addEventListener('DOMContentLoaded', () => {");

fs.writeFileSync('mt-prototype-home.html', html);
