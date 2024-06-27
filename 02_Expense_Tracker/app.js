const expenseForm = document.getElementById("expenses");
const expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const desc = document.getElementById("desc").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;

  if (document && category && !isNaN(amount)) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${desc}</td>
        
        <td>${category}</td>
        <td>${amount}</td>
        
        `;
      
      expenseList.appendChild(newRow)
      document.getElementById('desc').value=''
      document.getElementById('category').value=''
      document.getElementById('amount').value=''
  } else {
      alert('Please fill out all fields with valid data')
  }

});
