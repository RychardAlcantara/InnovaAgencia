import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { ServicosComponent } from "./components/servicos/servicos.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FeedbacksComponent } from "./components/feedbacks/feedbacks.component";
import { CommonModule } from '@angular/common';
import { FormularioComponent } from "./components/formulario/formulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, SobreComponent, ServicosComponent, ContatoComponent, FooterComponent, FeedbacksComponent, CommonModule, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showScrollTop = false;
  title = 'innova-agencia';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Mostra o botão se rolou mais que 100px
    this.showScrollTop = window.scrollY > 100;
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
