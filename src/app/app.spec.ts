import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('agrega y completa tareas', () => {
    const app = TestBed.createComponent(App).componentInstance;
    const input = document.createElement('input');
    input.value = 'Estudiar';
    app.agregar(input);
    expect(app.tareas().length).toBe(1);
    expect(app.pendientes()).toBe(1);
    app.alternar(1);
    expect(app.pendientes()).toBe(0);
  });
});
