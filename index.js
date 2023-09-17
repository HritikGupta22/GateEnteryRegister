const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const rollNumber = document.getElementById('rollNumber').value;
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `rollNumber=${rollNumber}`
      });
      const data = await response.text();
      resultDiv.innerHTML = data;
    });