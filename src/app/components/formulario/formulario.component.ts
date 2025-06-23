import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  enviado = false;

  onFormSubmit() {
    this.enviado = true;

    // Esconde a mensagem depois de alguns segundos
    setTimeout(() => {
      this.enviado = false;
      window.location.reload();
    }, 5000);
  }
}
