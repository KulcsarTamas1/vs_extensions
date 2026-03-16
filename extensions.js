let extensions = [
  'xdebug.php-pack',
  'donjayamanne.python-extension-pack',
  'ms-vscode.notepadplusplus-keybindings',
  'pkief.material-icon-theme',
  'yzhang.markdown-all-in-one',
  'tomoki1207.pdf',
  'hossaini.bootstrap-intellisense',
  'bradlc.vscode-tailwindcss',
  'xabikos.javascript',
  'svelte.svelte-vscode',
  'vue.volar',
  'jawandarajbir.react-vscode-extension-pack'
];

let uniqueExtensions = [...new Set(extensions)];
console.log(uniqueExtensions);
