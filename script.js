let records = [];

// Page Switching Logic
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Add Record Logic
function addEntry() {
    let sub = document.getElementById('subject').value;
    let mrk = parseFloat(document.getElementById('marks').value);

    if(sub && mrk) {
        records.push({sub, mrk});
        updateUI();
        document.getElementById('subject').value = '';
        document.getElementById('marks').value = '';
    } else {
        alert("Please fill all fields!");
    }
}

function updateUI() {
    // Update Table
    let table = document.getElementById('tableBody');
    table.innerHTML = "";
    let total = 0;

    records.forEach(item => {
        total += item.mrk;
        let status = item.mrk >= 40 ? "Pass" : "Fail";
        table.innerHTML += `<tr><td>${item.sub}</td><td>${item.mrk}</td><td>${status}</td></tr>`;
    });

    // Update Report Page
    let avg = records.length > 0 ? (total / records.length).toFixed(2) : 0;
    document.getElementById('totalSub').innerText = records.length;
    document.getElementById('avgVal').innerText = avg + "%";
    
    let grade = "N/A";
    if(avg >= 90) grade = "A+";
    else if(avg >= 75) grade = "A";
    else if(avg >= 50) grade = "B";
    else if(avg > 0) grade = "C";
    document.getElementById('grade').innerText = grade;
}

function resetAll() {
    records = [];
    updateUI();
    showPage('home');
}