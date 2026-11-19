document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Sidebar Active State Logic
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      sidebarItems.forEach(i => {
        i.classList.remove('active', 'text-[#a855f7]', 'bg-white/5', 'border-l-4', 'border-[#a855f7]');
        i.classList.add('text-gray-400');
      });
      this.classList.add('active', 'text-[#a855f7]', 'bg-white/5', 'border-l-4', 'border-[#a855f7]');
      this.classList.remove('text-gray-400');
    });
  });
  
  // 2. Copy Script Function
  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = document.getElementById('mainScriptCode').innerText;
      const icon = document.getElementById('copyIcon');
      const text = document.getElementById('copyText');
      
      navigator.clipboard.writeText(code).then(() => {
        // Change to success state
        copyBtn.classList.add('copied-active');
        copyBtn.classList.remove('btn-gradient');
        icon.classList.remove('fa-regular', 'fa-copy');
        icon.classList.add('fa-solid', 'fa-check');
        text.innerText = 'Copied!';
        
        // Revert back after 2 seconds
        setTimeout(() => {
          copyBtn.classList.remove('copied-active');
          copyBtn.classList.add('btn-gradient');
          icon.classList.remove('fa-solid', 'fa-check');
          icon.classList.add('fa-regular', 'fa-copy');
          text.innerText = 'Copy Script';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy script. Please copy manually.');
      });
    });
  }
});