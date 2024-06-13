// src/functions/submit.js
export async function post(request) {
    const formData = new URLSearchParams(await request.text());
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  
    // Here you can handle the form data, like sending an email or storing it in a database
  
    return {
        headers: { 'location': '/thank-you?success=true' },
        status: 302
      };
  }