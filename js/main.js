var swURL = '../service-worker.js';

// window.addEventListener('DOMContentLoaded', async () => {
//   // Set up the editor
//   const { Editor } = await import('./app/editor.js');
//   const editor = new Editor(document.body);

//   // Set up the menu
//   const { Menu } = await import('./app/menu.js');
//   new Menu(document.querySelector('.actions'), editor);

//   // Set the initial state in the editor
//   const defaultText = `# Welcome to PWA Edit!\n\nTo leave the editing area, press the \`esc\` key, then \`tab\` or \`shift+tab\`.`;

//   editor.setContent(defaultText);
// });


// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      const reg = await navigator.serviceWorker.register(swURL);
      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}
