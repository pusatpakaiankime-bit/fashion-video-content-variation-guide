const toast=document.querySelector('.toast');
function copied(){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1400)}
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{await navigator.clipboard.writeText(b.dataset.copy);copied()}));
document.querySelectorAll('.copy-button').forEach(b=>b.addEventListener('click',async()=>{const text=b.closest('.prompt').querySelector('pre').innerText;await navigator.clipboard.writeText(text);copied()}));
