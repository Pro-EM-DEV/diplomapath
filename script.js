// ===== SPA ROUTER =====
const routes = { home:'home', colleges:'colleges', admission:'admission', careers:'careers', about:'about', faq:'faq' };
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
