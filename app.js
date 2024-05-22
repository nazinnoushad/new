const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
  mode: 'htmlmixed',
  lineNumbers: true,
  theme: 'monokai',
});

const preview = document.getElementById('preview');
const iframe = preview.contentWindow.document;

iframe.open();
iframe.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Preview</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
      </style>
    </head>
    <body>
    </body>
  </html>
`);
iframe.close();

const runButton = document.getElementById('run-button');

runButton.addEventListener('click', () => {
  const html = editor.getValue();
  iframe.body.innerHTML = html;
});