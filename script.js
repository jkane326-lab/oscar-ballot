document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ballot-container');
    
    // Safety check: Ensure categories exist before running
    if (typeof categories === 'undefined') {
        console.error("Error: 'categories' is not defined. Make sure nominees.js is loaded before script.js.");
        container.innerHTML = "<p style='color: red; text-align: center;'>Error: Could not load nominees. Please check that nominees.js is in the same folder.</p>";
        return;
    }

    // Group categories by their 'group' key from nominees.js
    const groups = {};
    categories.forEach((cat, index) => {
        if (!groups[cat.group]) groups[cat.group] = [];
        groups[cat.group].push({ ...cat, originalIndex: index });
    });

    // Render the groups
    for (const [groupName, groupCats] of Object.entries(groups)) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        
        // Header (Click to expand)
        groupDiv.innerHTML = `
            <div class="group-header">
                ${groupName} <span>▼</span>
            </div>
            <div class="group-content">
                </div>
        `;
        
        const contentDiv = groupDiv.querySelector('.group-content');
        
        // Render Categories inside the group
        groupCats.forEach(cat => {
            const catDiv = document.createElement('div');
            catDiv.className = 'category-card';
            
            let optionsHTML = cat.nominees.map((nom, i) => {
                const isWinner = cat.winner === i;
                const winnerClass = isWinner ? 'winner-highlight' : '';
                const badge = isWinner ? '<span class="winner-badge">WINNER</span>' : '';
                
                return `
                    <label class="${winnerClass}">
                        <input type="radio" name="category-${cat.originalIndex}" value="${nom}" required>
                        <span>${nom}</span>
                        ${badge}
                    </label>
                `;
            }).join('');

            catDiv.innerHTML = `
                <h3 class="category-title">${cat.name}</h3>
                ${optionsHTML}
            `;
            contentDiv.appendChild(catDiv);
        });

        // Accordion Logic
        groupDiv.querySelector('.group-header').addEventListener('click', () => {
            contentDiv.classList.toggle('active');
        });

        container.appendChild(groupDiv);
    }
    
    // Open the first group by default
    const firstGroup = document.querySelector('.group-content');
    if(firstGroup) firstGroup.classList.add('active');

    // Handle Form Submission
    const form = document.getElementById('ballot-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            btn.textContent = "Submitting...";
            btn.disabled = true;

            // Collect Data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            // SEND TO GOOGLE SHEETS
            // This is your specific Google Script URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxPszDc4RoMLe3s_K9Lvcuos0rkG0xmaS1M3wvHrgqzbdyGAkRhs3GqkYcEl-AdP19d/exec';

            fetch(scriptURL, { 
                method: 'POST', 
                body: JSON.stringify(data),
                mode: 'no-cors', // CRITICAL: This allows the data to send without error
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                    // Because of 'no-cors', we won't get a readable response, 
                    // so we assume success if it didn't crash.
                    document.querySelector('.user-info').style.display = 'none';
                    document.getElementById('success-message').style.display = 'block';
                    window.scrollTo(0, document.body.scrollHeight);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert("Something went wrong. Please check your internet connection and try again.");
                    btn.textContent = "Submit Ballot";
                    btn.disabled = false;
                });
        });
    }
});
