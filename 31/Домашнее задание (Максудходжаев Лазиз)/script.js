// 1. Задание

/* class PrintMaсhine {
   constructor(fontSize, color, fontFamily) {
      this.fontSize = fontSize;
      this.color = color;
      this.fontFamily = fontFamily;
   }

   print(text) {
      document.write(`<p style="font-size: ${this.fontSize}px; color: ${this.color}; font-family: ${this.fontFamily};">${text}</p>`);
   }
}

let printMaсhine = new PrintMaсhine(14, 'red', 'sans-serif');
console.log(printMaсhine);
printMaсhine.print('asd'); */


// 2. Задание

/* class News {
   constructor(name, text, date, ...tags) {
      this.name = name;
      this.text = text;
      this.date = new Date(date);
      this.tags = tags;
   }

   formatDate(date) {
      let ms = Date.parse(date); //количество миллисекунд
      let diff = new Date() - ms; // разница в миллисекундах
      let hour = Math.floor(diff / 3600000); // преобразовать разницу в часы

      let dayOfMonth = date.getDate();
      dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

      let month = date.getMonth() + 1;
      month = month < 10 ? '0' + month : month;

      let year = date.getFullYear();

      if (hour < 24) return 'Today';
      if (hour >= 24 && hour < 48) return '2 days ago';
      if (hour >= 48 && hour < 72) return '3 days ago';
      if (hour >= 72 && hour < 96) return '4 days ago';
      if (hour >= 96 && hour < 120) return '5 days ago';
      if (hour >= 120 && hour < 144) return '6 days ago';
      if (hour >= 144) return `${dayOfMonth}.${month}.${year}`;
   }

   print() {
      document.write(`<p><b style="font-size: 24px;">${this.name}</b></p>
   <p>${this.formatDate(this.date)}</p>
   <p>${this.text}<br>
   ${this.text}<br>
   ${this.text}<br>
   ${this.text}</p>
   <p>${this.tags.join(' ')}</p>`);
   }
}

let news = new News('What is Lorem Ipsum?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, at iste.', '2022-11-05T19:00:00', '#lorem', '#ipsum', '#text');
news.print(); */


// 3. Задание

/* class NewsList {
   constructor(...news) {
      this.news = news;
   }

   get allNews() {
      return this.news.length;
   }

   printAllNews() {
      for (news of this.news) {
         news.print();
      }
   }

   addNews(name, text, date, ...tags) {
      this.news.push(new News(name, text, date, ...tags));
   }

   removeNews() {
      this.news.pop();
   }

   sortByDate() {
      return this.news.sort((a, b) => a.date > b.date ? -1 : b.date > a.date ? 1 : 0);
   }

   searchByTag(tag) {
      return this.news.filter((news) => news.tags.includes(tag));
   }
}

let newsList1 = new NewsList(new News('News One', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, at iste.', '2022-11-01T19:00:00', '#lorem', '#ipsum', '#text'),
   new News('News Two', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, at iste.', '2022-01-03T19:00:00', '#text'))

console.log(newsList1);
console.log(newsList1.allNews);
console.log(newsList1.printAllNews());
console.log(newsList1.addNews('News Three', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, at iste.', '2022-11-05T19:00:00', '#lorem'));
console.log(newsList1.printAllNews());
console.log(newsList1.removeNews());
console.log(newsList1.printAllNews());
console.log(newsList1.sortByDate());
console.log(newsList1.printAllNews());
console.log(newsList1.searchByTag('#lorem')); */