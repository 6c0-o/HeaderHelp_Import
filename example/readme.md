- Code in index.js
```js
import { Header } from '../index.js';
var header = new Header({
    bannerTitle: 'Header',
    bannerStyle: 'ANSI Shadow',
    bannerColor: ['#090979', '#00d4ff'],
    littleTitle: true,
    clear: true
}, {
    separator: `—`,
    name: ` 💻 Machine Information `,
    info: [`CPU: 57%`, `RAM: 85%`]
}, {
    separator: `—`,
    name: ` 🕷 Other Information `,
    info: [`Error: Memory Leak.`, `In: C++`]
})

header.print();
```
- Output in console
<img src='https://media.discordapp.net/attachments/1095383942565220524/1105609580630769697/image.png'>
