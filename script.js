let balance = 0;

function deposit() {
    const amount = Number(document.getElementById("amount").value);
    const message = document.getElementById("message");

    if (amount <= 0) {
        message.textContent = "Enter a valid amount";
        message.style.color = "red";
        return;
    }

    balance += amount;
    updateBalance();
    message.textContent = "Deposit successful";
    message.style.color = "green";
}

function withdraw() {
    const amount = Number(document.getElementById("amount").value);
    const message = document.getElementById("message");

    if (amount <= 0) {
        message.textContent = "Enter a valid amount";
        message.style.color = "red";
        return;
    }

    if (amount > balance) {
        message.textContent = "Insufficient balance";
        message.style.color = "red";
        return;
    }

    balance -= amount;
    updateBalance();
    message.textContent = "Withdrawal successful";
    message.style.color = "green";
}

function updateBalance() {
    document.getElementById("balance").textContent = balance;
    document.getElementById("amount").value = "";
}
