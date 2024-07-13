import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Models/movie.model'; // Importación del modelo Movie

@Component({
  selector: 'app-movie', // Selector del componente
  standalone: true, // Propiedad no estándar, puede ser un error (debería ser standalone)
  imports: [], // Importaciones del módulo (no se deben incluir aquí)
  templateUrl: './movie.component.html', // Plantilla HTML del componente
  styleUrl: './movie.component.css' // Estilos CSS del componente
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie; // Entrada de tipo Movie para recibir datos del componente padre

  constructor() {}

  ngOnInit() {
    // Método de inicialización del componente
  }
}