# **ByC Ingeniería**

E-Commmerce de alquiler de maquinaria y herramientas para obras.

# Instrucciones para usar la aplicación localmente:

1. Descargar las dependencias desde el directorio raiz con:
   ### `npm install`
2. Correr la aplicación localmente en: [localhost:3000](http://localhost:3000) con:
   ### `npm start`
3. Para hacer un build de deployment (produccíon) usar:
   ### `npm build`

# Dependencias:
La aplicación utiliza las siguientes dependencias:
- React-Bootstrap (Framework de estilos)
- Bootstrap (por uso de clases)
- Bootstrap-icons (uso de iconos)
- React-icons (idem item superior)
- Firebase (uso de base de datos)
- SweetAlerts2 (libreria de JavaScript para mostrar alertas)
- React-router-dom (para navegación)
- React-router-hash-link (navegación entre hashs internos de la aplicación)

## **Preentregas** 

# Versión 1 (Preentrega 1)

En una primera instancia procedí a la creación del proyecto por medio del comando `create-react-app`.
Finalizado el proceso de creación y cofiguración del mismo, realice un primer commit para dejar asentado la creación del proyecto.
Posteriormente realice la creación de los primeros componente del proyecto.
1. Un componente Navbar obtenido de la librería de boostrap.
2. Los componentes ItemListContainer y ItemList para practicar el paso de props entre componentes.
3. Y por último el componente CartWidget con el ícono del carrito.

Luego agregué Un logo y realicé la edición de algunos estilos de los componentes.

Posteriormente hice la primer preentrega del proyecto con lo realizado hasta el momento.

# Versión 1.5 (Correciones de la prentrega 1)

Se realizaron algunas correciones en el componente ItemListContainer.

# Versión 2 (Preentrega 2)

Para la preentrega 2 Se incorporó el uso del router-dom 

En el componente Navbar se creo un dropdown con todas las categorías de los productos del E-Commerce, las cuales fueron linkeadas para ser utilizadas como rutas para el posterior renderizado de los productos por categoría.
En los componentes ItemList e ItemListContainer se realizó toda la lógica para el renderizado de los mismos, a partir de la creación de estados con el useState y con efectos del useEffect.
Los productos fueron traidos de una base de datos localizada en un archivo .JSON 
Se creó  un componente Item para el renderizado de las cards de cada producto en el catálogo.
Además se crearon dos componentes ItemDetailContainer e ItemDetail para el renderizado del detalle de cada producto.
Y por último un componente ItemCount para el renderizado de un contador para agregar o quitar cantidades de los productos en el carrito

# Versión 3 (Preentrega 3)

En esta preentrega agregamos el uso del componente CartContext para el cart y firebase para traer los productos desde una base de datos. Se sincronizaron todos los componentes para el funcionamiento correcto de la aplicación.
Se crearon los componentes CartView y CartItem con su respectiva lógica para el renderizado de los productos en el carrito de compras. 
Finalmente se procedió a la creación de los componentes Order y OrderItem con su lógica para realizar el checkout del pedido del cliente, con la posterior subida de los datos a la base de datos en firebase.