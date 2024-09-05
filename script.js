function income() {
    const incomeType = document.getElementById('inctype').value.trim();
    const incomeAmount = document.getElementById('incamt').value.trim();
    
    if (incomeType && incomeAmount) {
        const amount = parseFloat(incomeAmount);
        
        if (!isNaN(amount) && amount > 0) {
            const incomeTable = document.getElementById('income-table');
            const row = incomeTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = incomeType;
            cell2.textContent = `${amount.toFixed(2)}`;
            
            // Update balance
            updateBalance(amount);
            
            // // Update the pie chart
            // updatePieChart();
            
            // Clear input fields
            document.getElementById('inctype').value = '';
            document.getElementById('incamt').value = '';
        } else {
            alert('Please enter a valid amount greater than 0.');
        }
    } else {
        alert('Please fill out both the Type of Income and Amount fields.');
    }
}

function expense() {
    const expenseType = document.getElementById('exptype').value.trim();
    const expenseAmount = document.getElementById('expamt').value.trim();
    
    if (expenseType && expenseAmount) {
        const amount = parseFloat(expenseAmount);
        
        if (!isNaN(amount) && amount > 0) {
            const expenseTable = document.getElementById('expense-table');
            const row = expenseTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = expenseType;
            cell2.textContent = `${amount.toFixed(2)}`;
            
            // Update balance
            updateBalance(-amount);
            
           
            
            // Clear input fields
            document.getElementById('exptype').value = '';
            document.getElementById('expamt').value = '';
        } else {
            alert('Please enter a valid amount greater than 0.');
        }
    } else {
        alert('Please fill out both the Type of Expense and Amount fields.');
    }
}

// Function to update the balance
function updateBalance(amount) {
    const balanceElement = document.getElementById('balance');
    let currentBalance = parseFloat(balanceElement.textContent.replace('₹', '')) || 0;
    const newBalance = currentBalance + amount;
    balanceElement.textContent = `₹${newBalance.toFixed(2)}`;
}


// Function to handle logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('USERNAME');
    window.location.href = './login.html';
}