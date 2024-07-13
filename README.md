# Sprint 2 y 3 - MJLL

Ehub - de "Entertainment" y "Hub"
Maria Jose Lopez Llano
mahou.png @ discord

## Descripcion

Se desarrolla una app de películas donde existe una lista predeterminada de ellas y además se puede acceder a los detalles de cada una, ocultarlas y agregarlas a favoritos. En la sección de configuración, también se pueden revisar las películas ocultas y mostrarlas.

## Objetivo

Aplicar conceptos de desarollo de Angular, JS, HTML, CSS, Testing.

## Screenshots
![1](https://github.com/mahouras/ehub-master/blob/main/ss/1.png)
![2](https://github.com/mahouras/ehub-master/blob/main/ss/2.png)
![3](https://github.com/mahouras/ehub-master/blob/main/ss/3.png)
![4](https://github.com/mahouras/ehub-master/blob/main/ss/4.png)
![5](https://github.com/mahouras/ehub-master/blob/main/ss/5.png)

### Instrucciones
Una vez que tengas el repositorio abierto en VSCode...
-run ng serve, si cambia alguno de los archivos, la app recargara y aplicara los cambios.
-la app se cargara en localhost 4200


### Proceso

Primero, decidi que funcionalidades y ventanas conservaria para el proyecto. Cree una maqueta en css y html para decidir como se veria cada ventana y que es lo que contendria. Al ser la primera vez que trabajaba con Angular, tuve que esforzarme para crear los modulos y componentes, y definir bien las rutas, junto con servicios como MovieService, FavoritesService, y HiddenService. Integre enrutamiento para la navegación entre vistas, aplique diseño y estilo utilizando CSS, e implemente funcionalidades específicas como la gestión de favoritos y películas ocultas usando RxJS. Realice pruebas unitarias.`

Angular Core: Fundamental para el desarrollo de la aplicación Angular.
RxJS: Para la programación reactiva y la gestión de flujos de datos asincrónicos.
Angular Router: Para la navegación entre vistas y la configuración de rutas.
Local Storage: Para el almacenamiento local de datos como las películas favoritas y ocultas.

### Problemas conocidos
Al ser una persona que solo ha trabajado en la creacion de experiencia de usuario e interfaces de usuario, me ha resultado dificil adaptarme a las necesidades de construir una aplicacion completa por mi misma. Muchas veces tuve errores que no supe bien como resolver, pero con determinacion y ayuda de la comunidad lo pude lograr.

La app se ve muy fea por el momento. Es la verdad T_T.


### Retrospectiva
### ¿Qué hice bien?
-Usar RxJs para manejar flujos de datos asincrónicos e implementar Local Storage para almacenar de forma persistente las películas favoritas y ocultas del usuario.

### ¿Qué no hice bien?
-No he hecho una buena gestion del tiempo debido a que estaba fuera del pais y ademas me enferme, ademas de no haber documentado bien el codigo desde el inicio, lo cual me costo aun mas tiempo, pues me perdia.

### ¿Qué podría mejorar?
-La interfaz grafica, definitivamente.