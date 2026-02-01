import { alertElements } from "./elements.js"
export function showToast(title, message, type = 'success') {
    const toast = document.getElementById('universal-toast');
    const toastBg = document.getElementById('toast-bg');
    
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-message').innerText = message;
    
    // Set theme
    toastBg.className = type; // Adds 'success', 'error', etc.
    
    // Animate in
    toast.classList.add('show');
    
    // Auto hide after 4 seconds
    setTimeout(hideToast, 4000);
}

function hideToast() {
    document.getElementById('universal-toast').classList.remove('show');
}

// Make hideToast available globally for onclick handlers
window.hideToast = hideToast