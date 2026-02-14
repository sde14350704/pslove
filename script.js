/* ===================================
   Saji ❤️ Bernix - Love Story Script
   =================================== */

// ===================================
// IMAGE DATA - Organized by Phases
// ===================================
const imagePhases = {
    1: { // Initial Meetup → 01, 02, 03
        name: "Initial Meetup",
        images: ["01", "02", "03"]
    },
    2: { // Blossom Through Chat → 04, 05, 06
        name: "Blossom Through Chat",
        images: ["04", "05", "06"]
    },
    3: { // Engagement Moment → 07 to 20
        name: "Engagement Moment",
        images: ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
    },
    4: { // Post Engagement Love → 21, 22, 23
        name: "Post Engagement Love",
        images: ["21", "22", "23"]
    },
    5: { // Her Birthday → 23a to 42
        name: "Her Birthday",
        images: ["23a", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42"]
    },
    6: { // New Year → 43
        name: "New Year",
        images: ["43"]
    },
    7: { // January Outing → 44 to 60
        name: "January Outing",
        images: ["44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
    }
};

// All image files in assets folder with their full names
const allImageFiles = [
    "01_first_meet_pheonix_mall_09_11_2025.jpeg",
    "02_his_love_confession_insta_09_13_2025.jpeg",
    "03_second_meet_in_ibaco_icecream_date_09_14_2025.jpeg",
    "04_her_black_board_love_matching.jpeg",
    "05_our_gemini_ai_couple_edit_1.jpeg",
    "06_our_gemini_ai_couple_edit_2.jpeg",
    "07_welcome_proposal_to_his_queen_on_engagement__arrival_morning_10_30_2026.png",
    "08_our_2nd_ice_cream_date_before_engagement_day_10_30_2025.png",
    "09_engagement_morning_with_murugan_blessings_10_31_2025.jpeg",
    "10_our_engagement_day_10_31_2025.jpeg",
    "11_engaged_ring.JPG",
    "12_happily_engaged_forever_10_31_2025.JPG",
    "13_engaged_love_from_her_eyes_10_31_2025.jpeg",
    "14_engagement_eve_ice_cream_date_spoonfed_by_him_to_her_with_love_10_31_2025.jpg",
    "15_his_love_letter_to_her_starts_the_next_day_of_engagement_11_01_2025.png",
    "16_stunned_with_valparai_scenaries_and_love_11_01_2025.jpeg",
    "17_looking_towards_the_future_together_in_valparai_estate_11_01_2025.jpeg",
    "18_sun_kiss_in_aliyar_dam_with_lot_of_kiss_11_01_2025.png",
    "19_our_love_colours_in_her_hand_as_mehandi_11_01_2025.jpeg",
    "20_the_promise_we_made_to_hold_hands_together_forever_11_01_2025.jpeg",
    "21_her_tracing_art_of_us_covered_in_love.jpeg",
    "22_the_cute_little_doodle_highlights_from_my_queen.jpeg",
    "23_found_that_dad_already_made_decided_saji_for_me_and_blessing_us_with_god.png",
    "23a_her_birthday_started_with_a_ride_towards_our_first_couple_outing(she_being_my_premium_rapido)_12_06_2025.jpg",
    "24_taking_my_love_to_the_zootopia_2_ride.jpg",
    "25_when_movie_ends_her_punishment_for_my_sweet_disturbance_in_movie.jpg",
    "26_revisiting_our_first_meet_and_capturing_the_moments_in_pheonix_mall.jpg",
    "27_captured_the_beauty_of_the_christmas_tree_which_looks_as_shining_as_our_love.jpg",
    "28_a_gift_for_her_that_i_will_be_there_for_her_all_the_time.jpg",
    "29_a_truffle_to_load_her_tummy_on_birthday_eve.jpg",
    "30_a_mandatory_birthday_click_with_the_cake_for_my_love.jpg",
    "31_our_heart_beats_heard_among_us_on_the_birthday_night.jpg",
    "32_our_morning_beach_visit_felt_private_to_make_our_love_public.jpg",
    "33_when_he_got_to_know_that_her_love_has_no_limits_as_like_the_ocean.jpg",
    "34_we_stayed_there_even_at_the_lower_point_after_the_wave_as_we_will_be_in_life.jpg",
    "35_got_captured_him_when_he_tried_to_eat_her_in_play_bae.jpg",
    "36_unlocked_the_pookie_version_of_him_in_play_bae.jpg",
    "37_the_artist(my_queen)_who_got_succeeded_in_unlocking_his_pookie_version.jpg",
    "38_the_paint_of_love_blossomed_in_play_bae.jpg",
    "39_when_the_mirror_found_us_it_took_a_click_of_our_love(got_a_fav_shirt_from_my_saji).jpg",
    "40_moments_that_are_made_in_photobooth_before_the_actual_click_and_before_the_screen_change.jpg",
    "41_our_last_drink_to_fill_her_tummy_got_to_know_abt_her_wings_to_fly_to_me_soon.jpg",
    "42_our_love_checkpoint_at_the_end_of_her_birthday_weekend_in_star_bucks.jpg",
    "43_our_virtual_new_year_2026_felt_like_closer_and_happier.jpeg",
    "44_our_next_outing_started_with_a_parashakthi_movie_01_10_2026.jpg",
    "45_revisit_the_zudio_mirror_who_became_a_fan_of_out_love_we_became_a_fan_of_one_shirt_again.jpg",
    "46_our_shopping_bucketlist_started_with_the_noon_ride_with_breeze_climate_01_10_2026.jpg",
    "47_visiting_our_private_beach_for_a_sweet_morning_again_with_a_cute_proposal_to_my_love_01_11_2026.jpg",
    "48_when_we_found_that_our_vibe_is_high_on_this_beach.jpg",
    "49_found_that_sun_got_too_shy_to_see_my_queen_such_a_pleasant_climate_boosting_our_love.jpg",
    "50_the_sand_art_got_to_the_next_level_with_our_names_that_are_glittered_by_my_saji.jpg",
    "51_her_happy_face_which_i_always_want_to_see_at_every_moment.jpg",
    "52_when_the_mirror_selfie_pronounced_that_our_love_is_rare.jpg",
    "53_she_being_in_trial_of_a_good_pic_and_pick_in_rare_love_fashion_for_him.jpg",
    "54_when_we_wanted_that_this_ride_should_never_end_at_any_moment.jpg",
    "55_our_visit_to_dakshina_chitra_as_a_love_birds.jpg",
    "56_the_mirror_spoke_more_about_our_love_in_this_pic.jpg",
    "57_while_her_pottery_skill_came_out_and_slayed_like_a_queen.jpg",
    "58_while_my_whole_control_was_kept_on_hold_for_a_pottery_class.jpg",
    "59_our_happy_face_on_being_in_the_honey_moon_phase_of_the_love.jpg",
    "60_our_heart_will_always_be_connected_like_this_my_love.jpg"
];

// No button escape messages
const noMessages = [
    "Nice try.",
    "Not an available option.",
    "Already approved in 2024.",
    "System blocked that choice.",
    "Bernix will cry.",
    "Return to YES."
];

// Love letter lines
const loveLetterLines = [
    "We started as two normal people.",
    "Now we are planning a wedding.",
    "",
    "From one message…",
    "To thousands of memories…",
    "",
    "You didn't enter my life.",
    "You became my life.",
    "",
    "And this… is just the beginning."
];

// Wedding date
const weddingDate = new Date('May 29, 2026 00:00:00').getTime();

// ===================================
// DOM ELEMENTS
// ===================================
const loadingScreen = document.getElementById('loading-screen');
const introScreen = document.getElementById('intro-screen');
const proposalScreen = document.getElementById('proposal-screen');
const loveLetter = document.getElementById('love-letter-screen');
const countdownScreen = document.getElementById('countdown-screen');
const timelineScreen = document.getElementById('timeline-screen');
const finalScreen = document.getElementById('final-screen');

const progressBar = document.querySelector('.progress-bar');
const startBtn = document.getElementById('start-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const noMessage = document.getElementById('no-message');
const typewriter = document.getElementById('typewriter');
const continueBtn = document.getElementById('continue-btn');
const timelineBtn = document.getElementById('timeline-btn');
const timelineContainer = document.getElementById('timeline-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finalBtn = document.getElementById('final-btn');
const revealBtn = document.getElementById('reveal-btn');
const finalMessage = document.getElementById('final-message');
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
const introMusic = document.getElementById('intro-music');
const emotionalMusic = document.getElementById('emotional-music');
const floatingHearts = document.getElementById('floating-hearts');
const finalHearts = document.getElementById('final-hearts');

// ===================================
// STATE
// ===================================
let imagesLoaded = 0;
let totalImages = allImageFiles.length;
let isMuted = false;
let currentMusic = null;

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Generate caption from filename
function generateCaption(filename) {
    // Remove extension
    let name = filename.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, '');
    
    // Remove leading number and underscore
    name = name.replace(/^\d+[a-z]?_/, '');
    
    // Remove date patterns like _09_11_2025
    name = name.replace(/_\d{2}_\d{2}_\d{4}$/, '');
    
    // Replace underscores with spaces
    name = name.replace(/_/g, ' ');
    
    // Capitalize first letter
    name = name.charAt(0).toUpperCase() + name.slice(1);
    
    return name;
}

// Find image file by number
function findImageByNumber(num) {
    return allImageFiles.find(file => {
        const match = file.match(/^(\d+[a-z]?)_/);
        return match && match[1] === num;
    });
}

// Get phase for image number
function getPhaseForImage(num) {
    for (const [phaseNum, phase] of Object.entries(imagePhases)) {
        if (phase.images.includes(num)) {
            return { number: phaseNum, name: phase.name };
        }
    }
    return { number: 1, name: "Unknown" };
}

// Switch screens with animation
function switchScreen(from, to) {
    from.classList.remove('active');
    from.style.opacity = '0';
    
    setTimeout(() => {
        from.style.display = 'none';
        to.style.display = 'flex';
        to.classList.add('active');
        
        // Trigger reflow
        to.offsetHeight;
        to.style.opacity = '1';
    }, 300);
}

// Create floating heart element
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = ['❤️', '💕', '💗', '💖', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = (16 + Math.random() * 20) + 'px';
    floatingHearts.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => heart.remove(), 10000);
}

// Start floating hearts background
function startFloatingHearts() {
    setInterval(createFloatingHeart, 1000);
    // Create initial hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingHeart, i * 200);
    }
}

// Create rising heart for confetti effect
function createRisingHeart(x) {
    const heart = document.createElement('div');
    heart.className = 'rising-heart';
    heart.textContent = ['❤️', '💕', '💗'][Math.floor(Math.random() * 3)];
    heart.style.left = x + 'px';
    heart.style.bottom = '0';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 4000);
}

// ===================================
// IMAGE PRELOADER
// ===================================
function preloadImages() {
    return new Promise((resolve) => {
        let loaded = 0;
        
        allImageFiles.forEach((file) => {
            const img = new Image();
            img.onload = img.onerror = () => {
                loaded++;
                const progress = (loaded / totalImages) * 100;
                progressBar.style.width = progress + '%';
                
                if (loaded === totalImages) {
                    resolve();
                }
            };
            img.src = 'assets/' + file;
        });
    });
}

// ===================================
// MUSIC FUNCTIONS
// ===================================
function playIntroMusic() {
    introMusic.volume = 0.5;
    introMusic.play().catch(e => console.log('Audio autoplay blocked by browser:', e.message));
    currentMusic = introMusic;
}

function fadeOutIntroMusic(callback) {
    const fadeInterval = setInterval(() => {
        if (introMusic.volume > 0.05) {
            introMusic.volume -= 0.05;
        } else {
            introMusic.pause();
            introMusic.volume = 0.5;
            clearInterval(fadeInterval);
            if (callback) callback();
        }
    }, 100);
}

function playEmotionalMusic() {
    emotionalMusic.volume = 0;
    emotionalMusic.play().catch(e => console.log('Audio autoplay blocked by browser:', e.message));
    currentMusic = emotionalMusic;
    
    // Fade in
    const fadeInterval = setInterval(() => {
        if (emotionalMusic.volume < 0.5) {
            emotionalMusic.volume += 0.05;
        } else {
            clearInterval(fadeInterval);
        }
    }, 100);
}

function toggleMusic() {
    isMuted = !isMuted;
    
    if (currentMusic) {
        currentMusic.muted = isMuted;
    }
    
    musicIcon.textContent = isMuted ? '🔇' : '🔊';
}

// ===================================
// PROPOSAL SCREEN - NO BUTTON ESCAPE
// ===================================
let noMessageIndex = 0;

function moveNoButton() {
    const container = proposalScreen.querySelector('.proposal-content');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate new random position within container bounds
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    const newX = Math.max(20, Math.random() * maxX);
    const newY = Math.max(20, Math.random() * maxY);
    
    // Apply position relative to container
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    
    // Show escape message
    noMessage.textContent = noMessages[noMessageIndex % noMessages.length];
    noMessageIndex++;
}

// ===================================
// CONFETTI EFFECT
// ===================================
function triggerConfetti() {
    // Canvas confetti burst (if available)
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffd6e0', '#fff0f3']
        });
        
        // Additional burst
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
            });
        }, 200);
        
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
            });
        }, 400);
    }
    
    // Rising hearts (always works as fallback)
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createRisingHeart(Math.random() * window.innerWidth);
        }, i * 100);
    }
}

// ===================================
// TYPEWRITER EFFECT
// ===================================
function typeWriterEffect() {
    return new Promise((resolve) => {
        let lineIndex = 0;
        
        function typeLine() {
            if (lineIndex < loveLetterLines.length) {
                const line = loveLetterLines[lineIndex];
                const p = document.createElement('p');
                p.className = 'typewriter-line';
                p.textContent = line || '\u00A0'; // Non-breaking space for empty lines
                typewriter.appendChild(p);
                
                lineIndex++;
                setTimeout(typeLine, 800);
            } else {
                resolve();
            }
        }
        
        typeLine();
    });
}

// ===================================
// COUNTDOWN TIMER
// ===================================
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(3, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ===================================
// TIMELINE BUILDER
// ===================================
function buildTimeline() {
    timelineContainer.innerHTML = '';
    
    // Go through all phases and create cards
    for (const [phaseNum, phase] of Object.entries(imagePhases)) {
        phase.images.forEach((imgNum) => {
            const filename = findImageByNumber(imgNum);
            if (!filename) return;
            
            const caption = generateCaption(filename);
            
            const card = document.createElement('div');
            card.className = 'timeline-card';
            card.dataset.phase = phaseNum;
            
            card.innerHTML = `
                <img src="assets/${filename}" alt="${caption}" loading="lazy">
                <div class="timeline-card-content">
                    <span class="timeline-phase">${phase.name}</span>
                    <p class="timeline-caption">${caption}</p>
                </div>
            `;
            
            timelineContainer.appendChild(card);
        });
    }
    
    // Setup IntersectionObserver for reveal animations
    setupTimelineObserver();
}

function setupTimelineObserver() {
    const options = {
        root: timelineContainer,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);
    
    document.querySelectorAll('.timeline-card').forEach(card => {
        observer.observe(card);
    });
}

// Timeline navigation
function scrollTimeline(direction) {
    const scrollAmount = 320; // Card width + gap
    const currentScroll = timelineContainer.scrollLeft;
    timelineContainer.scrollTo({
        left: currentScroll + (direction === 'next' ? scrollAmount : -scrollAmount),
        behavior: 'smooth'
    });
}

// Phase indicator click handling
function setupPhaseIndicators() {
    const indicators = document.querySelectorAll('.phase-indicator');
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const phase = indicator.dataset.phase;
            const firstCardOfPhase = document.querySelector(`.timeline-card[data-phase="${phase}"]`);
            
            if (firstCardOfPhase) {
                firstCardOfPhase.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                
                // Update active indicator
                indicators.forEach(ind => ind.classList.remove('active'));
                indicator.classList.add('active');
            }
        });
    });
}

// ===================================
// FINAL MESSAGE HEARTS
// ===================================
function startFinalHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'rising-heart';
        heart.textContent = ['❤️', '💕', '💗', '💖'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '0';
        finalHearts.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }, 500);
}

// ===================================
// EVENT LISTENERS
// ===================================

// Start button - begins the journey
startBtn.addEventListener('click', () => {
    playIntroMusic();
    switchScreen(introScreen, proposalScreen);
});

// NO button escape - desktop
noBtn.addEventListener('mouseenter', moveNoButton);

// NO button escape - mobile
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// YES button click
yesBtn.addEventListener('click', () => {
    triggerConfetti();
    
    fadeOutIntroMusic(() => {
        playEmotionalMusic();
    });
    
    setTimeout(() => {
        switchScreen(proposalScreen, loveLetter);
        
        // Start typewriter after screen transition
        setTimeout(async () => {
            await typeWriterEffect();
            continueBtn.classList.remove('hidden');
        }, 500);
    }, 2000);
});

// Continue to countdown
continueBtn.addEventListener('click', () => {
    switchScreen(loveLetter, countdownScreen);
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// Go to timeline
timelineBtn.addEventListener('click', () => {
    buildTimeline();
    setupPhaseIndicators();
    switchScreen(countdownScreen, timelineScreen);
    
    // Make initial cards visible
    setTimeout(() => {
        const cards = document.querySelectorAll('.timeline-card');
        cards.forEach((card, index) => {
            if (index < 3) {
                card.classList.add('visible');
            }
        });
    }, 300);
});

// Timeline navigation
prevBtn.addEventListener('click', () => scrollTimeline('prev'));
nextBtn.addEventListener('click', () => scrollTimeline('next'));

// Go to final screen
finalBtn.addEventListener('click', () => {
    switchScreen(timelineScreen, finalScreen);
    startFinalHearts();
});

// Reveal final message
revealBtn.addEventListener('click', () => {
    revealBtn.style.display = 'none';
    finalMessage.classList.remove('hidden');
});

// Music toggle
musicToggle.addEventListener('click', toggleMusic);

// ===================================
// INITIALIZATION
// ===================================
async function init() {
    // Start floating hearts
    startFloatingHearts();
    
    // Preload all images
    await preloadImages();
    
    // Small delay for smooth transition
    setTimeout(() => {
        switchScreen(loadingScreen, introScreen);
    }, 500);
}

// Start the experience
document.addEventListener('DOMContentLoaded', init);
