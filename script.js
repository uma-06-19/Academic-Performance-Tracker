let records = [];

function addRecord() {
    const subject = document.getElementById("subject").value;
    const marks = parseInt(document.getElementById("marks").value);

    if (!subject || isNaN(marks)) {
        alert("Enter valid data");
        return;
    }

    records.push({ subject, marks });

    displayRecords();
    calculateAverage();

    document.getElementById("subject").value = "";
    document.getElementById("marks").value = "";
}

function displayRecords() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    records.forEach((record, index) => {
        const li = document.createElement("li");
        li.textContent = `${record.subject}: ${record.marks}`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteRecord(index);

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function deleteRecord(index) {
    records.splice(index, 1);
    displayRecords();
    calculateAverage();
}

function calculateAverage() {
    if (records.length === 0) {
        document.getElementById("average").textContent = "Average: 0";
        return;
    }

    let total = records.reduce((sum, r) => sum + r.marks, 0);
    let avg = (total / records.length).toFixed(2);

    document.getElementById("average").textContent = "Average: " + avg;
}