import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
}) 

//Mantiene el icono de los componentes del header si se hace click en ellos
export class HeaderComponent implements OnInit{
  activeEmoji: any;
  ngOnInit(): void {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', (event: Event) => {
       
        if (this.activeEmoji) {
          this.activeEmoji.classList.remove('active-emoji');
        }

        const emojiInsideClickedLink = (link as HTMLElement).querySelector('.emoji');
        if (emojiInsideClickedLink) {
          emojiInsideClickedLink.classList.add('active-emoji');
          this.activeEmoji = emojiInsideClickedLink as HTMLElement; 
        }
      });
    });
  }

}
