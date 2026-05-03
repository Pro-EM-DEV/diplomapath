// ===== SPA ROUTER =====
const routes = { home:'home', colleges:'colleges', admission:'admission', careers:'careers', about:'about', testimonials:'testimonials', faq:'faq' };
let currentPage = 'home';

function navigate(page) {
  currentPage = page;
  window.location.hash = page;
  document.querySelectorAll('.page-section').forEach(s => s.style.display = 'none');
  const el = document.getElementById('page-' + page);
  if (el) { el.style.display = 'block'; window.scrollTo({top:0,behavior:'smooth'}); }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-page') === page);
  });
  document.querySelector('.nav-links')?.classList.remove('active');
  if (page === 'colleges') renderColleges();
  if (page === 'testimonials') renderTestimonials();
  setupScrollReveal();
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1) || 'home';
  navigate(hash);
});

document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.slice(1) || 'home';
  navigate(hash);
  setupNavbar();
  setupFAQ();
  setupModal();
  setupForms();
  animateCounters();
  startTestimonialSlider();
});

// ===== CONTENT PROTECTION =====
document.addEventListener('contextmenu', e => e.preventDefault()); // Block right-click
document.addEventListener('copy', e => {
  e.clipboardData.setData('text/plain', 'Content copying is disabled by DiplomaPath India.');
  e.preventDefault();
});
document.addEventListener('dragstart', e => e.preventDefault()); // Block image dragging

// ===== RENDER COLLEGES =====
function renderColleges() {
  const grid = document.getElementById('colleges-grid');
  if (!grid || grid.children.length > 0) return;
  grid.innerHTML = allColleges.map(c => `
    <div class="college-card reveal" data-id="${c.id}">
      <div class="college-card-header">
        <div class="college-rank">#${c.rank}</div>
        <h3>${c.name}</h3>
        <div class="college-location">📍 ${c.location}</div>
        <span class="college-type-badge badge-${c.type}">${c.typeName}</span>
      </div>
      <div class="college-card-body">
        <div class="college-meta">
          <div class="meta-item"><div class="meta-label">Fees</div><div class="meta-value">${c.fees}</div></div>
          <div class="meta-item"><div class="meta-label">Placement</div><div class="meta-value">${c.placement}</div></div>
          <div class="meta-item"><div class="meta-label">Avg Package</div><div class="meta-value">${c.avg}</div></div>
          <div class="meta-item"><div class="meta-label">Est.</div><div class="meta-value">${c.est}</div></div>
        </div>
        <div class="college-courses"><h5>Courses</h5>
          <div class="course-tags">
            ${c.courses.slice(0,3).map(x=>`<span class="course-tag">${x}</span>`).join('')}
            ${c.courses.length>3?`<span class="course-tag">+${c.courses.length-3} more</span>`:''}
          </div>
        </div>
        <div class="college-card-footer">
          <a href="#" class="btn-details" onclick="openModal(${c.id});return false;">Details</a>
          <a href="${c.website}" target="_blank" class="btn-apply">Visit</a>
        </div>
      </div>
    </div>
  `).join('');
  setupScrollReveal();
}

// ===== NAVBAR =====
function setupNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const s = hamburger.querySelectorAll('span');
      if(navLinks.classList.contains('active')){s[0].style.transform='rotate(45deg) translateY(7px)';s[1].style.opacity='0';s[2].style.transform='rotate(-45deg) translateY(-7px)';}
      else{s[0].style.transform='';s[1].style.opacity='';s[2].style.transform='';}
    });
  }
}

// ===== FAQ =====
function setupFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const was = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!was) item.classList.add('active');
    });
  });
}

// ===== MODAL =====
function setupModal() {
  const ov = document.getElementById('modal-overlay');
  if(!ov)return;
  ov.addEventListener('click',e=>{if(e.target===ov)closeModal();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
}

function openModal(id) {
  const c = allColleges.find(x=>x.id===id);
  if(!c)return;
  const ov = document.getElementById('modal-overlay');
  const m = document.getElementById('modal-content');
  m.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <span class="college-type-badge badge-${c.type}">${c.typeName}</span>
    <h2>${c.name}</h2>
    <p class="modal-location">📍 ${c.location} | Est. ${c.est}</p>
    <div class="modal-section"><h4>🎓 Courses</h4><ul>${c.courses.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="modal-section"><h4>💰 Fees</h4><p>${c.fees}</p></div>
    <div class="modal-section"><h4>📝 Admission</h4><p>${c.admission}</p></div>
    <div class="modal-section"><h4>🏢 Recruiters</h4><p>${c.recruiters}</p></div>
    <div class="modal-section"><h4>📊 Placement</h4><p>${c.placement} | Avg: ${c.avg}</p></div>
    <div style="margin-top:24px;"><a href="${c.website}" target="_blank" class="btn-primary">Visit Website →</a></div>
  `;
  ov.classList.add('active');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow='';
}

// ===== FORMS =====
function setupForms() {
  // IMPORTANT: The user must replace this with their actual key from web3forms.com
  const WEB3FORMS_ACCESS_KEY = "7b599bce-aa5f-4db7-be52-56d72bc8cd27";

  const leadForm = document.getElementById('lead-form');
  if(leadForm) {
    const mobileInput = leadForm.querySelector('input[name="mobile"]');
    // Prevent typing anything other than numbers
    mobileInput.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, ''); 
    });

    leadForm.addEventListener('submit', async e => {
      e.preventDefault();
      
      // Validate strictly 10 digits
      if(mobileInput.value.length !== 10) {
        alert("Incorrect mobile number. Please enter exactly 10 digits.");
        mobileInput.focus();
        return;
      }

      const btn = leadForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = "Sending...";
      btn.disabled = true;

      const fd = new FormData(leadForm);
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("subject", "New Lead from DiplomaPath India");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: fd
        });
        if(response.ok) {
          showToast(`Thank you ${fd.get('name')}! We'll send career updates soon. 🎉`);
          leadForm.reset();
        } else {
          alert("Oops! Something went wrong. Make sure you added your Web3Forms Access Key in script.js!");
        }
      } catch (err) {
        alert("Network error. Please check your connection.");
      } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    });
  }

  const contactForm = document.getElementById('contact-owner-form');
  if(contactForm) contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = "Sending...";
    btn.disabled = true;

    const fd = new FormData(contactForm);
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("subject", "Message for Amit K Pathak from Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd
      });
      if(response.ok) {
        showToast(`Thanks ${fd.get('contactName')}! I will reach out to you shortly. 📧`);
        contactForm.reset();
      } else {
        alert("Oops! Something went wrong. Make sure you added your Web3Forms Access Key in script.js!");
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    } finally {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  });
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.classList.add('show'),10);
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300);},4000);
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.1});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ===== TESTIMONIALS DATA =====
const studentTestimonials = [
  { name: "Praveen Pawar", branch: "Mechatronics", year: "2023", rating: 5, text: "Amit Kumar Pathak sir guided me perfectly. DiplomaPath made it so easy to compare the best mechatronics colleges. Highly recommended!" },
  { name: "Ganesh Tombare", branch: "Mechatronics", year: "2023", rating: 4, text: "I was confused between mechanical and mechatronics. Amit sir's advice and this website's data helped me secure my future." },
  { name: "Pranali Shingole", branch: "Mechatronics", year: "2023", rating: 5, text: "DiplomaPath is the best resource for polytechnic students. Amit sir personally helped me through the admission process." },
  { name: "Pooja Mudliyar", branch: "Mechatronics", year: "2023", rating: 5, text: "The college details on DiplomaPath are 100% accurate. Thanks to Amit sir, I'm now studying in my dream college." },
  { name: "Bhagyashree Yadav", branch: "Mechatronics", year: "2023", rating: 4, text: "Great platform! Amit sir's mentorship and the detailed course guides on this site are invaluable for diploma aspirants." },
  { name: "Bhagyesh", branch: "Tool Design", year: "2023", rating: 5, text: "Searching for Tool Design courses was tough until I found DiplomaPath. Amit Kumar Pathak sir is a true career guru." },
  { name: "Pranav Lihe", branch: "Tool Design", year: "2023", rating: 5, text: "Amit sir's guidance on DiplomaPath helped me understand the scope of Tool Design. Forever grateful!" },
  { name: "Abhishek Bandal", branch: "Tool Design", year: "2023", rating: 4, text: "Verified college data and expert advice from Amit sir – that's what makes DiplomaPath the #1 guide in India." },
  { name: "Aman Bamre", branch: "Tool Design", year: "2023", rating: 5, text: "I highly recommend DiplomaPath. Amit Kumar Pathak sir's deep knowledge of the industry helped me choose the right path." },
  { name: "Jyoti Patel", branch: "Tool Design", year: "2023", rating: 5, text: "The best website for diploma admissions. Amit sir's support and this site's information are a winning combination." },
  { name: "Priya Raut", branch: "Computer Science", year: "2023", rating: 4, text: "Amit sir helped me choose the best CS polytechnic. DiplomaPath's comparison tool is amazing!" },
  { name: "Radhika Dorik", branch: "Computer Science", year: "2023", rating: 5, text: "Thanks to Amit Kumar Pathak sir and DiplomaPath, I avoided a wrong college choice. The reviews here are very helpful." },
  { name: "Tanuja Bhandari", branch: "Computer Science", year: "2023", rating: 5, text: "Every diploma student should use DiplomaPath. Amit sir is the best mentor for career guidance." },
  { name: "Chhavi Sahani", branch: "Mechatronics", year: "2023", rating: 4, text: "Amit sir's passion for students shows on DiplomaPath. A brilliant platform for technical career building." },
  { name: "Vikas Badure", branch: "Mechatronics", year: "2023", rating: 5, text: "I was lost after 10th. Amit sir and this website showed me the way to a great mechatronics career." },
  { name: "Aditya Garad", branch: "Mechatronics", year: "2024", rating: 5, text: "Amit sir helped me even before I started. DiplomaPath is the most trusted name for polytechnic info." },
  { name: "Ritesh", branch: "Mechatronics", year: "2024", rating: 4, text: "Looking forward to my journey. Amit Kumar Pathak sir and DiplomaPath have been my constant guides." },
  { name: "Pooja Kharik", branch: "IT", year: "2024", rating: 5, text: "IT was my dream. Amit sir ensured I got into the best college using the data from DiplomaPath." },
  { name: "Vikram Prajapati", branch: "IT", year: "2024", rating: 5, text: "The best career advice I ever got was from Amit sir on this platform. Use it if you want a bright future!" },
  { name: "Om Khandelwal", branch: "Tool Design", year: "2024", rating: 4, text: "Tool Design is a specialized field. Amit sir's expertise on DiplomaPath made the choice easy for me." },
  { name: "Damien Valson", branch: "Mechatronics", year: "2024", rating: 5, text: "Amit Kumar Pathak sir is an expert. DiplomaPath provided the clarity I needed to pick my course." },
  { name: "Vikas Yadav", branch: "Electronics", year: "2024", rating: 5, text: "Electronics was complex, but Amit sir's guidance on DiplomaPath simplified everything. I'm now in a top-tier college!" },
  { name: "Omkar", branch: "Electrical", year: "2025", rating: 4, text: "I already feel confident about my admission next year. Amit Kumar Pathak sir and DiplomaPath are the best guides for electrical aspirants." },
  { name: "Jasmin", branch: "Mechatronics", year: "2025", rating: 5, text: "The information on this site is so detailed. Amit sir helped me understand the future of mechatronics." },
  { name: "Prajyoti", branch: "Computer Science", year: "2025", rating: 5, text: "Computer Science at a polytechnic level is a great start. Thanks to Amit sir and DiplomaPath for the roadmap." },
  { name: "Sonali Thatera", branch: "Mechanical", year: "2026", rating: 4, text: "I'm planning ahead, and Amit sir's advice has been invaluable. DiplomaPath is the only site you need for diploma info." },
  { name: "Trupti", branch: "Mechatronics", year: "2026", rating: 5, text: "Amit Kumar Pathak sir is a brilliant mentor. DiplomaPath makes career planning so much less stressful." },
  { name: "Aniket Singh", branch: "Mechatronics", year: "2026", rating: 5, text: "I trust Amit sir's recommendations 100%. DiplomaPath is the most reliable platform for diploma students." },
  { name: "Dheeraj Prasad", branch: "Tool Design", year: "2026", rating: 4, text: "Excited for my future in Tool Design. Amit sir and DiplomaPath have given me a great head start." },
  { name: "Shubham Kapadi", branch: "Mechatronics", year: "2026", rating: 5, text: "Amit sir's guidance is the best. DiplomaPath is an amazing website for choosing the right career path." }
];

let testimonialIndex = 0;
let testimonialTimer;

function renderTestimonials() {
  const container = document.getElementById('testimonials-slider');
  if (!container) return;
  
  const t = studentTestimonials[testimonialIndex];
  const stars = "⭐".repeat(t.rating);
  
  container.style.opacity = 0;
  setTimeout(() => {
    container.innerHTML = `
      <div class="testimonial-card reveal visible">
        <div class="testimonial-stars">${stars}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-info">
          <h4 class="testimonial-name">${t.name}</h4>
          <p class="testimonial-meta">${t.branch} | Class of ${t.year}</p>
        </div>
      </div>
    `;
    container.style.opacity = 1;
  }, 400);
}

function startTestimonialSlider() {
  if (testimonialTimer) clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % studentTestimonials.length;
    if (currentPage === 'testimonials') {
      renderTestimonials();
    }
  }, 5000);
}

// ===== COUNTER =====
function animateCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const el=e.target, tgt=parseInt(el.dataset.count), sfx=el.dataset.suffix||'';
        let cur=0;const step=Math.ceil(tgt/60);
        const t=setInterval(()=>{cur+=step;if(cur>=tgt){cur=tgt;clearInterval(t);}el.textContent=cur+sfx;},25);
        obs.unobserve(el);
      }
    });
  },{threshold:0.5});
  document.querySelectorAll('[data-count]').forEach(c=>obs.observe(c));
}

// ===== CHATBOT GUIDE =====
let chatHistory = [];

function toggleChat() {
  const cw = document.getElementById('chat-window');
  // If currently closed, open it and wait for transition
  if (!cw.classList.contains('active')) {
    cw.style.display = 'flex';
    // Small delay to allow display:flex to apply before adding class for transition
    setTimeout(() => {
      cw.classList.add('active');
      document.getElementById('chat-input').focus();
    }, 10);
  } else {
    // If open, close it
    cw.classList.remove('active');
    setTimeout(() => {
      cw.style.display = 'none';
    }, 300); // match transition time
  }
}

function handleChatKeyPress(e) {
  if (e.key === 'Enter') {
    sendChatMessage();
  }
}

function appendMessage(text, isUser) {
  const container = document.getElementById('chat-messages');
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isUser ? 'user-msg' : 'bot-msg'}`;
  msgDiv.innerHTML = `<div class="msg-bubble">${text}</div>`;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  const ind = document.getElementById('typing-indicator');
  if (ind) ind.remove();
}

async function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const btn = document.querySelector('.chat-send-btn');
  const text = input.value.trim();
  if (!text) return;

  // Append user message
  appendMessage(text, true);
  input.value = '';
  input.disabled = true;
  btn.disabled = true;
  
  // Add to history
  chatHistory.push({ role: 'user', content: text });

  // Show typing indicator
  showTyping();

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages: chatHistory })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    removeTyping();
    appendMessage(data.reply, false);
    chatHistory.push({ role: 'assistant', content: data.reply });

  } catch (error) {
    console.error('Chat error:', error);
    removeTyping();
    appendMessage("Sorry, I'm having trouble connecting to my brain right now. Please try again later!", false);
  } finally {
    input.disabled = false;
    btn.disabled = false;
    input.focus();
  }
}
