const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#Sign-up-userName').value.trim();
    const email = document.querySelector('#sign-up-email').value.trim();
    const password = document.querySelector('#sign-up-pwd').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

 const signUpBtn = document.getElementById('signUpBtn')

 signUpBtn.addEventListener('click', signupFormHandler)