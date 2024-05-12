import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  backTools = [
    { id: 1, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { id: 2, icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
    { id: 3, icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { id: 4, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
    { id: 5, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { id: 6, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" },
    { id: 7, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
    { id: 8, icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { id: 9, icon: "https://www.svgrepo.com/show/354420/swagger.svg" },
    { id: 10, icon: "https://cdn-icons-png.flaticon.com/128/3098/3098090.png" },
    { id: 11, icon: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
    { id: 12, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
    { id: 13, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/512px-IntelliJ_IDEA_Icon.svg.png" },
    { id: 14, icon: "https://cdn.icon-icons.com/icons2/3110/PNG/96/eclipse_icon_191751.png" },
    { id: 15, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/888px-Apache_NetBeans_Logo.svg.png" }
  ];

  frontTools = [
    { id: 1, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", name: "HTML5" },
    { id: 2, icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", name: "CSS3" },
    { id: 3, icon: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png", name: "JavaScript" },
    { id: 4, icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", name: "TypeScript" },
    { id: 5, icon: "https://sass-lang.com/assets/img/styleguide/seal-color.png", name: "Sass" },
    { id: 6, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png", name: "Bootstrap" },
    { id: 7, icon: "https://img.icons8.com/?size=48&id=iWpVsSkAqPpZ&format=png", name: "Thymeleaf" },
    { id: 8, icon: "https://asset.brandfetch.io/idg6b_zEHS/idy-QAnJ4g.png?updated=1701837880678", name: "Uigradients" },
    { id: 9, icon: "https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png", name: "Visual Studio Code" }
  ];
}
