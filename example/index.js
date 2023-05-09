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

console.log(process.stdout.columns)