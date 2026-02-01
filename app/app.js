import { showToast } from "./ui.js";
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const toName = urlParams.get('to');

    const showPage = (id) => {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    };

    // --- PAGE LOGIC ---
    if (toName) {
        // We are on Page 2 (Proposal)
        showPage('page-proposal');
        document.getElementById('proposal-title').innerText = `For ${toName},`;
        
        // The Fleeing Button
        const noBtn = document.getElementById('no-btn');
        const yesBtn = document.getElementById('yes-btn');
        let scale = 1;

        noBtn.addEventListener('mouseover', () => {
            noBtn.parentElement.style.position = "fixed";
            noBtn.parentElement.style.left = Math.random() * 80 + 'vw';
            noBtn.parentElement.style.top = Math.random() * 80 + 'vh';
            scale += 0.2;
            yesBtn.parentElement.style.transform = `scale(${scale})`;
        });

        yesBtn.addEventListener('click', () => {
            showPage('page-final');
            // Trigger confetti here
        });

    } else {
        // We are on Page 1 (Generator)
        const genBtn = document.getElementById('generate-btn');
        genBtn.addEventListener('click', () => {
            const name = document.getElementById('val-name').value;
            if(!name){
                showToast("Alert","Please enter the name","error")
                return
            }
            const link = `${window.location.origin}${window.location.pathname}?to=${encodeURIComponent(name)}`;
            navigator.clipboard.writeText(link);
           showToast('success','Link copied to clipboard')
        });
    }
});