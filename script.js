document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ballot-container');
    
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
    document.querySelector('.group-content').classList.add('active');

    // Handle Form Submission
    const form = document.getElementById('ballot-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        btn.textContent = "Submitting...";
        btn.disabled = true;

        // Collect Data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);

        // SEND TO GOOGLE SHEETS (We will set this URL up in the next step)
        // Replace 'YOUR_SCRIPT_URL_HERE' with the actual URL later
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxPszDc4RoMLe3s_K9Lvcuos0rkG0xmaS1M3wvHrgqzbdyGAkRhs3GqkYcEl-AdP19d/exec';

        fetch(scriptURL, { method: 'POST', body: JSON.stringify(data) })
            .then(response => {
                document.querySelector('.user-info').style.display = 'none';
                document.getElementById('success-message').style.display = 'block';
                window.scrollTo(0, document.body.scrollHeight);
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert("Something went wrong. Please try again.");
                btn.textContent = "Submit Ballot";
                btn.disabled = false;
            });
    });
});