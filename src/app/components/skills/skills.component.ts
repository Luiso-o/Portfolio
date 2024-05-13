import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  activateGif(event: MouseEvent): void {
    const imgElement = event.target as HTMLImageElement;
    const gifSrc = imgElement.getAttribute('data-gif') as string; 
    imgElement.src = gifSrc;
    imgElement.style.width = '80%';
  }
  
  deactivateGif(event: MouseEvent): void {
    const imgElement = event.target as HTMLImageElement;
    const staticSrc = imgElement.getAttribute('data-static') as string;
    imgElement.src = staticSrc;
    imgElement.style.width = '60%';
  }  
}
