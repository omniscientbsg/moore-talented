const fs = require('fs');

let text = fs.readFileSync('mt-prototype-home.html', 'utf8');

const sliderHTML = `
            <div class="relative max-w-4xl mx-auto" id="testimonial-slider">
                <div class="overflow-hidden relative rounded-2xl">
                    <div class="flex transition-transform duration-500 ease-in-out" id="slider-track">
                        <!-- Slide 1 -->
                        <div class="w-full flex-shrink-0">
                            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm mx-2">
                                <i class="fa-solid fa-quote-left text-4xl text-blue-500/50 mb-6"></i>
                                <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">"Moore Talented completely removed the headache of international hiring. We secured 15 J-1 interns for our peak summer season in record time, and the compliance was entirely handled by their portal."</p>
                                <div class="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="David Chen" class="w-14 h-14 rounded-full border-2 border-mt-blue object-cover">
                                    <div>
                                        <h4 class="font-bold text-white">David Chen</h4>
                                        <p class="text-sm text-blue-300">HR Director, Mountain Resort Group</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Slide 2 -->
                        <div class="w-full flex-shrink-0">
                            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm mx-2">
                                <i class="fa-solid fa-quote-left text-4xl text-blue-500/50 mb-6"></i>
                                <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">"The AI Match engine instantly connected me with an architecture firm in Chicago. The Visa Readiness courses made my embassy interview a breeze. I'm living my American dream!"</p>
                                <div class="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Elena Rodriguez" class="w-14 h-14 rounded-full border-2 border-mt-blue object-cover">
                                    <div>
                                        <h4 class="font-bold text-white">Elena Rodriguez</h4>
                                        <p class="text-sm text-blue-300">J-1 Architect Trainee from Spain</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Slide 3 -->
                        <div class="w-full flex-shrink-0">
                            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm mx-2">
                                <i class="fa-solid fa-quote-left text-4xl text-blue-500/50 mb-6"></i>
                                <p class="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">"I was struggling to find legitimate J-1 sponsors until I joined this platform. The pre-arrival training modules are brilliant and the support team is world-class."</p>
                                <div class="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Ahmed K." class="w-14 h-14 rounded-full border-2 border-mt-blue object-cover">
                                    <div>
                                        <h4 class="font-bold text-white">Ahmed K.</h4>
                                        <p class="text-sm text-blue-300">Engineering Intern, NYC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Controls -->
                <button id="slider-prev" class="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-mt-blue text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20 shadow-lg">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button id="slider-next" class="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-mt-blue text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20 shadow-lg">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                
                <div class="flex justify-center gap-2 mt-8" id="slider-dots">
                    <button class="w-2.5 h-2.5 rounded-full bg-mt-blue transition-all slider-dot" data-index="0"></button>
                    <button class="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 transition-all slider-dot" data-index="1"></button>
                    <button class="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 transition-all slider-dot" data-index="2"></button>
                </div>
            </div>
            
            <script>
                document.addEventListener('DOMContentLoaded', () => {
                    const track = document.getElementById('slider-track');
                    if(!track) return;
                    const prevBtn = document.getElementById('slider-prev');
                    const nextBtn = document.getElementById('slider-next');
                    const dots = document.querySelectorAll('.slider-dot');
                    let currentIndex = 0;
                    const maxIndex = dots.length - 1;

                    function updateSlider(index) {
                        currentIndex = index;
                        track.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
                        dots.forEach((dot, i) => {
                            if (i === currentIndex) {
                                dot.classList.replace('bg-white/20', 'bg-mt-blue');
                                dot.classList.remove('hover:bg-white/40');
                            } else {
                                dot.classList.replace('bg-mt-blue', 'bg-white/20');
                                dot.classList.add('hover:bg-white/40');
                            }
                        });
                    }

                    prevBtn.addEventListener('click', () => {
                        let newIndex = currentIndex - 1;
                        if (newIndex < 0) newIndex = maxIndex;
                        updateSlider(newIndex);
                    });

                    nextBtn.addEventListener('click', () => {
                        let newIndex = currentIndex + 1;
                        if (newIndex > maxIndex) newIndex = 0;
                        updateSlider(newIndex);
                    });

                    dots.forEach(dot => {
                        dot.addEventListener('click', (e) => {
                            updateSlider(parseInt(e.target.dataset.index));
                        });
                    });
                    
                    // Auto advance
                    setInterval(() => {
                        let newIndex = currentIndex + 1;
                        if (newIndex > maxIndex) newIndex = 0;
                        updateSlider(newIndex);
                    }, 5000);
                });
            </script>
`;

text = text.replace(/<div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">[\s\S]*?<\/section>/, sliderHTML + '\n        </div>\n    </section>');
fs.writeFileSync('mt-prototype-home.html', text);
