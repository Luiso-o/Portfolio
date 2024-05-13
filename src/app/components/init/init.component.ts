import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParallaxDirective } from '../../directives/parallax.directive';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [CommonModule, ParallaxDirective],
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent {
  nombre: string = 'Luis Trujillo';
  redes: any[] = [
    { id: 1, icon: 'bi-github', url: 'https://github.com/Luiso-o'},
    { id: 2, icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/luistrujilloportillo/'},
    { id: 3, icon: 'bi-envelope-fill', url: 'mailto:cheportillo@gmail.com'}
  ];

  ngAfterViewInit(): void {
    this.startTypingEffect();
  }

  private startTypingEffect(): void {
    const textElement = document.getElementById('web-developer-text') as HTMLElement;
    const text = "Web developer.";
    let i = 0;
    const typingSpeed = 300;
    const cursorHtml = '<span class="cursor">|</span>';

    const typeWriter = () => {
      if (i < text.length) {
        textElement.innerHTML = textElement.innerHTML.replace(cursorHtml, "") + text.charAt(i) + cursorHtml;
        i++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        textElement.innerHTML = textElement.innerHTML.replace(cursorHtml, "") + cursorHtml;
        this.blinkCursor();
      }
    };

    typeWriter();
  }

  private blinkCursor(): void {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    setInterval(() => {
      cursor.style.opacity = (cursor.style.opacity === '0' ? '1' : '0');
    }, 500);
  }
}
