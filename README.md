# Lista de tareas

Aplicación para gestionar tareas pendientes y completadas, desarrollada con Angular.

🔗 **Demo:** https://angela-aponte.github.io/lista-tareas-angular/

## Funcionalidades

- Agregar tareas (con el botón o con Enter)
- Marcar tareas como hechas
- Eliminar tareas
- Filtrar por todas, pendientes o hechas
- Contador de tareas pendientes

## Tecnologías

- Angular (componentes standalone, Signals, `computed` y control de flujo `@for` / `@empty`)
- TypeScript, HTML y CSS
- GitHub Actions y GitHub Pages

## Ejecución local

```bash
git clone https://github.com/angela-aponte/lista-tareas-angular.git
cd lista-tareas-angular
npm install
ng serve
```

## Pruebas

```bash
ng test
```

## Despliegue

Cada `push` a `main` ejecuta el pipeline de GitHub Actions: compila la aplicación, la publica en GitHub Pages y verifica que el sitio responda correctamente.

## Autora

Angela Aponte · Ingeniería de Sistemas, UCEVA · Arquitectura de Software