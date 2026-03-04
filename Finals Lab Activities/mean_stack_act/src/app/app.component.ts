import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";
  constructor(private http: HttpClient) {}
  books: any = [];

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => { this.books = data; });
  }
  ngOnInit() { this.refreshBooks(); }

  addBook() {
  var newBook   = (<HTMLInputElement>document.getElementById("newBook")).value;
  var newDesc   = (<HTMLInputElement>document.getElementById("newDesc")).value;
  var newPrice  = (<HTMLInputElement>document.getElementById("newPrice")).value;
  var newAuthor = (<HTMLInputElement>document.getElementById("newAuthor")).value;  // ← must match HTML id
  var newGenre  = (<HTMLInputElement>document.getElementById("newGenre")).value;

  var formData = new FormData();
  formData.append("title", newBook);
  formData.append("description", newDesc);
  formData.append("price", newPrice.toString());
  formData.append("author", newAuthor);   // ← key must be "author"
  formData.append("genre", newGenre);

  this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
    alert(data);
    this.refreshBooks();
  });
}

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(data => {
      alert(data); this.refreshBooks();
    });
  }

  getSprite(type: string): string {
    const m: any = { fire:'🔥',water:'💧',grass:'🌿',electric:'⚡',psychic:'🔮',
      normal:'⭐',flying:'🦅',poison:'☠️',ground:'🌍',rock:'🪨',ice:'❄️',
      dragon:'🐉',dark:'🌑',steel:'⚙️',fairy:'🌸',fighting:'🥊',bug:'🐛',ghost:'👻' };
    return m[type] || '❓';
  }

  getHpPct(hp: number): string { return Math.min((hp/999)*100,100)+'%'; }

  getHpColor(hp: number): string {
    const p = (hp/999)*100;
    if (p > 60) return 'linear-gradient(90deg,#00c853,#69f0ae)';
    if (p > 30) return 'linear-gradient(90deg,#ff6f00,#ffca28)';
    return 'linear-gradient(90deg,#b71c1c,#ef5350)';
  }

  getTypePill(type: string): any {
    const m: any = {
      fire:     { color:'#ff6d00', borderColor:'rgba(255,109,0,0.3)',   background:'rgba(255,109,0,0.08)' },
      water:    { color:'#29b6f6', borderColor:'rgba(41,182,246,0.3)',  background:'rgba(41,182,246,0.08)' },
      grass:    { color:'#66bb6a', borderColor:'rgba(102,187,106,0.3)', background:'rgba(102,187,106,0.08)' },
      electric: { color:'#ffee58', borderColor:'rgba(255,238,88,0.3)',  background:'rgba(255,238,88,0.08)' },
      psychic:  { color:'#e91e63', borderColor:'rgba(233,30,99,0.3)',   background:'rgba(233,30,99,0.08)' },
      ice:      { color:'#00e5ff', borderColor:'rgba(0,229,255,0.3)',   background:'rgba(0,229,255,0.08)' },
      dragon:   { color:'#7986cb', borderColor:'rgba(121,134,203,0.3)', background:'rgba(121,134,203,0.08)' },
      dark:     { color:'#a1887f', borderColor:'rgba(161,136,127,0.3)', background:'rgba(161,136,127,0.08)' },
      fairy:    { color:'#f48fb1', borderColor:'rgba(244,143,177,0.3)', background:'rgba(244,143,177,0.08)' },
      ghost:    { color:'#9575cd', borderColor:'rgba(149,117,205,0.3)', background:'rgba(149,117,205,0.08)' },
      steel:    { color:'#90a4ae', borderColor:'rgba(144,164,174,0.3)', background:'rgba(144,164,174,0.08)' },
      normal:   { color:'#bdbdbd', borderColor:'rgba(189,189,189,0.3)', background:'rgba(189,189,189,0.06)' },
      fighting: { color:'#ef5350', borderColor:'rgba(239,83,80,0.3)',   background:'rgba(239,83,80,0.08)' },
      flying:   { color:'#64b5f6', borderColor:'rgba(100,181,246,0.3)', background:'rgba(100,181,246,0.08)' },
      poison:   { color:'#ab47bc', borderColor:'rgba(171,71,188,0.3)',  background:'rgba(171,71,188,0.08)' },
      ground:   { color:'#ffa726', borderColor:'rgba(255,167,38,0.3)',  background:'rgba(255,167,38,0.08)' },
      rock:     { color:'#a1887f', borderColor:'rgba(161,136,127,0.3)', background:'rgba(161,136,127,0.08)' },
      bug:      { color:'#9ccc65', borderColor:'rgba(156,204,101,0.3)', background:'rgba(156,204,101,0.08)' },
    };
    return m[type] || m['normal'];
  }

  getMaxHp(): number {
    if (!this.books.length) return 0;
    if (!this.books.length) return 0;
    return Math.max(...this.books.map((b: any) => Number(b.price) || 0));
  }

  getTypeCount(): number {
    return new Set(this.books.map((b: any) => b.genre)).size;
  }
}
