const buttons=[...document.querySelectorAll('[data-lang]')];
const policies=[...document.querySelectorAll('[data-policy]')];
const preferred=(navigator.language||'en').toLowerCase().startsWith('uk')?'uk':(navigator.language||'en').toLowerCase().startsWith('ru')?'ru':'en';
function select(language){buttons.forEach(button=>button.classList.toggle('active',button.dataset.lang===language));policies.forEach(policy=>policy.classList.toggle('active',policy.dataset.policy===language));document.documentElement.lang=language;localStorage.setItem('aurora-policy-language',language)}
buttons.forEach(button=>button.addEventListener('click',()=>select(button.dataset.lang)));
select(localStorage.getItem('aurora-policy-language')||preferred);
document.getElementById('year').textContent=new Date().getFullYear();
