// Beta, waitlist and review forms: sent in the background, then the form closes and the answer appears in
// its place. If something goes wrong, the form stays open with everything typed kept. Without script the
// forms post normally and the server shows the same answer as a page.
document.querySelectorAll('form.beta-form').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type=submit]');
    const label = button.textContent;
    let note = form.nextElementSibling && form.nextElementSibling.classList.contains('form-note') ? form.nextElementSibling : null;
    if (!note) {
      note = document.createElement('p');
      note.className = 'form-note';
      note.setAttribute('role', 'status');
      note.tabIndex = -1;
      form.after(note);
    }
    button.disabled = true; button.textContent = 'Sending…'; note.textContent = ''; note.classList.remove('done', 'error');
    try {
      const response = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new URLSearchParams(new FormData(form)) });
      const isJson = (response.headers.get('Content-Type') || '').includes('application/json');
      const answer = isJson ? await response.json() : { ok: response.ok, message: response.ok ? 'Thank you! It\'s in.' : 'That didn\'t go through. Please try again in a minute.' };
      note.textContent = answer.message;
      if (answer.ok) {
        form.hidden = true;
        note.classList.add('done');
        note.focus();
      } else {
        note.classList.add('error');
      }
    } catch {
      note.textContent = 'That didn\'t go through. Please check your connection and try again.';
      note.classList.add('error');
    } finally {
      button.disabled = false; button.textContent = label;
    }
  });
});
