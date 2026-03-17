let extensions = [
  'xdebug.php-pack',
  'donjayamanne.python-extension-pack',
  'ms-vscode.notepadplusplus-keybindings',
  'pkief.material-icon-theme',
  'yzhang.markdown-all-in-one',
  'tomoki1207.pdf',
  'hossaini.bootstrap-intellisense',
  'xabikos.javascriptsnippets',
  'svelte.svelte-vscode',
  'vue.volar',
  'jawandarajbir.react-vscode-extension-pack',
  'bradlc.vscode-tailwindcss',
  'austenc.tailwind-docs'
];

let uniqueExtensions = [...new Set(extensions)];
console.log(uniqueExtensions);
