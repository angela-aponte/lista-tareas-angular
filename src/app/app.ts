import { Component, computed, signal } from '@angular/core';

interface Tarea {
  id: number;
  texto: string;
  hecha: boolean;
}
type Filtro = 'todas' | 'pendientes' | 'hechas';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  filtros: Filtro[] = ['todas', 'pendientes', 'hechas'];
  tareas = signal<Tarea[]>([]);
  filtro = signal<Filtro>('todas');
  private siguienteId = 1;

  visibles = computed(() => {
    const f = this.filtro();
    return this.tareas().filter(
      (t) => f === 'todas' || (f === 'hechas' ? t.hecha : !t.hecha),
    );
  });
  pendientes = computed(() => this.tareas().filter((t) => !t.hecha).length);

  agregar(input: HTMLInputElement) {
    const texto = input.value.trim();
    if (!texto) return;
    this.tareas.update((l) => [...l, { id: this.siguienteId++, texto, hecha: false }]);
    input.value = '';
  }

  alternar(id: number) {
    this.tareas.update((l) => l.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)));
  }

  eliminar(id: number) {
    this.tareas.update((l) => l.filter((t) => t.id !== id));
  }

  cambiarFiltro(f: Filtro) {
    this.filtro.set(f);
  }
}