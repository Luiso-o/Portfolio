import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InitComponent } from './components/init/init.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    HeaderComponent, InitComponent,
    AboutComponent, SkillsComponent,
    PortfolioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  ngOnInit() {
    AOS.init({
      duration: 1000, 
      delay: 50,      
      once: false,     
      mirror: true,   
    });   
    window.addEventListener('load', () => {
      AOS.refresh();
    });
  }
  
}
