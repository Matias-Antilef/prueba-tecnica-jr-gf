
# Login Angular - Prueba Jr.


## Instalación

**Se requiere tener la CLI de angular instalada**

```bash
git clone https://github.com/grupo-firma-developer/prueba-tecnica-jr.git
cd prueba-tecnica-jr
```

```bash
npm install
```


## Variables de entorno

Crear un archivo para agregar las variables de entorno en la ruta de:

```bash
src/enviroments/enviroments.ts
```

Reemplazar <URL> por tu endpoint

```bash
export const environment = {
  production: false,
  loginURL: <URL>,
};
```


## Despliegue

```bash
  ng serve
```


## Acerca de

    Tecnologías usadas:

    - Angular
    - Bootstrap
    - Karma


## Caracteristicas implementadas:

    Obligatorias:

    ✅ Diseño responsivo: Utilizar Tailwind o Bootstrap.

    ✅ Navegación entre vistas con Angular Router.

    ✅ Protección de vistas con un guard de ruta.

    ✅ Utilización de servicios de Angular.

    ✅ Utilización de Git y Github para manejo de versiones y ramas.

    ✅ Documentación básica para la instalación.

    Deseables:

    ✅ Validación de formulario.

    ✅ Integrar animaciones en algunos elementos.

    ✅ Página de error para rutas no encontradas (page error 404).

    ✅ Buenas prácticas de programación (Código limpio, buen nombramiento de variables, principios SOLID, etc.).
 
    ✅ Pruebas unitarias (E2E, Jasmine, Karma).

    ✅ Subirlo a un servicio cloud gratuito (GitHub Pages, Render, Vercel, etc.).

    ✅ Manejo de errores (Alertas, Try Catch, etc.).

    ✅ Diagrama de flujo de usuario (Caso de uso, Diagrama de flujo que muestre lo que el usuario puede o no puede hacer).

