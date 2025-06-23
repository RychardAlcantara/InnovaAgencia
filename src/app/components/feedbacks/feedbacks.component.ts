import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.css'
})
export class FeedbacksComponent implements OnInit {
  feedbackIndex = 0;
  intervalId: any;
  show = false;

  feedbacks = [
    {
      nome: 'João Silva',
      cargo: 'Empresário - Loja Virtual',
      mensagem: 'A InnovaAgência transformou totalmente a presença da minha loja online! Com as estratégias de tráfego pago e otimização para SEO, nossas vendas cresceram mais de 60% em apenas 3 meses. Atendimento impecável e resultados reais!',
      foto: '/feedbacks/joao.png'
    },
    {
      nome: 'Maria Oliveira',
      cargo: 'Gestora de Marketing - Clínica Bem Estar',
      mensagem: 'Encontramos na InnovaAgência o parceiro ideal para redes sociais e campanhas locais. Os conteúdos são criativos, estratégicos e alinhados com nossa proposta. A equipe é muito engajada e entrega resultados com consistência.',
      foto: '/feedbacks/maria.png'
    },
    {
      nome: 'Carlos Pereira',
      cargo: 'Fundador - StartUp EducaTech',
      mensagem: 'O branding e o reposicionamento feitos pela Innova foram fundamentais para nossa expansão. O trabalho visual ficou moderno, coerente com nossa missão, e o suporte constante nos deu segurança desde o início.',
      foto: '/feedbacks/carlos.png'
    },
    {
      nome: 'Fernanda Lima',
      cargo: 'Arquiteta e Influenciadora',
      mensagem: 'A Innova cuida de todo meu marketing digital: posts, impulsionamento, e até parcerias estratégicas. Meu engajamento dobrou desde que comecei com eles. São atentos, ágeis e criativos!',
      foto: '/feedbacks/fernanda.png'
    },
    {
      nome: 'Rafael Menezes',
      cargo: 'Diretor Comercial - Rede de Franquias',
      mensagem: 'Trabalhamos com a InnovaAgência há mais de um ano e posso dizer que eles realmente entendem de performance. Desde Google Ads até landing pages otimizadas, tudo é feito com foco em conversão. Excelente retorno sobre investimento!',
      foto: '/feedbacks/rafael.png'
    }
  ];

  get feedbackAtual() {
    return this.feedbacks[this.feedbackIndex];
  }

  get feedbackAnterior() {
    const index = (this.feedbackIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
    return this.feedbacks[index];
  }

  get feedbackProximo() {
    const index = (this.feedbackIndex + 1) % this.feedbacks.length;
    return this.feedbacks[index];
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.show = false;
      setTimeout(() => this.show = true, 50);

      this.intervalId = setInterval(() => {
        this.show = false;
        setTimeout(() => {
          this.feedbackIndex = (this.feedbackIndex + 1) % this.feedbacks.length;
          this.show = true;
        }, 600); // tempo igual ao transition do CSS
      }, 5000);
    }
  }
}
