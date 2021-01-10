import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwindcssapp';
  movieName: string;
  prefixForSearch: string = "https://www.google.com/search?q=intitle:index.of? mkv ";


  search(form: NgForm) {
    let movie = form.value.movieName;
    window.open(`${this.prefixForSearch}${movie}`);
    form.resetForm();
  }
}
