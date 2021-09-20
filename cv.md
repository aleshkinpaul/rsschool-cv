
# Aleshkin Paul

### Contacts
* Telegram: @aleshkin
* GitHub: github.com/aleshkinpaul/

### About
I graduated from Moscow State University with a Mechanics and Mathematics degree in 2019.
For 4.5 years I worked as System Analyst in Moscow.

Some years ago I have interested in front-end developing. I love coding, solving tasks, making algoritms and working with visual components.

I expect to become a front-end developer soon.

### Education
- 2013-2019: Moscow State University, Faculty of Mechanics and Mathematics, Department of Probability theory
- 2020: RSSchool (JavaScript/Front-end 2021Q3 / Stage 2)

### Experience
- 2017-current time: System Analyst

### Skills
- Programming languages:
	- HTML
	- CSS
	- JavaScript (+ Angular basics)
	- SQL
	- Python (basics)
- Version control systems:
	- Visual Studio
	- Git (basics)
- Soft:
	- Photoshop
	- Illustrator
	- PowerPoint

### Languages
- Russian (native)
- English (A1)

### Project
- [Virtual Keyboard](https://aleshkinpaul.github.io/virtual-keyboard/) - This application emulates keyboard behaviour. This project I have done on Stage 2 of the course "JavaScript/Front-end 2020Q1" (RS School).

## Code example
```js
var WordDictionary = function () {
  this.dictionary = [];
};

WordDictionary.prototype.addWord = function (word) {
   this.dictionary.push(word);
};

WordDictionary.prototype.search = function (word) {
  let dictForWord = this.dictionary.filter(x => { return x.length === word.length });
   for (let i = 0; i < dictForWord.length; i++) {
     if (dictForWord[i].match(word)) return true;
   }
   return false;
};
```