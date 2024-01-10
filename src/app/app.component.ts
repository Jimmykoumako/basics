import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "jimmy"
  imgURL = "https://picsum.photos/id/407/367/267"
  images = [
    "https://picsum.photos/id/607/367/267",
    "https://picsum.photos/id/700/367/267",
    "https://picsum.photos/id/507/367/267"
  ]
  currentDate  = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    t: ["peperoni", "beacon"],
    s: "Large"
  }
  
  lodImg(event: string){
    console.log(event)
  }

  blueClass = false
  fontSize = 20

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }
}
