# Propuesta TP DSW - Volquetes Los Hermanos

## Grupo
### Integrantes
* 47245 - Pereyra, Camilo
* 33862 - Virgolini, Pablo

### Repositorios
* [frontend app](http://hyperlinkToGihubOrGitlab)
* [backend app](http://hyperlinkToGihubOrGitlab)

## Tema
### Descripción
Negocio basado en una empresa familiar llamada "Volquetes Los Hermanos" dedicada al alquiler de volquetes.

### Modelo
![Volquetes Los Hermanos drawio](https://github.com/caamilopereyra01/VolquetesLosHermanos/assets/165169940/6580b5eb-53ef-48a9-8a6b-cca7c8f5df06)
(https://github.com/caamilopereyra01/VolquetesLosHermanos/assets/165169940/0cc23d0f-cf61-46c8-810c-40afc6a4bbe3)

https://app.diagrams.net/#G1E0hckj9nMg5dv8HiMYNPCsiGVsgqHcir#%7B%22pageId%22%3A%22R2lEEEUBdFMjLlhIrx00%22%7D

## Alcance Funcional 
La empresa "Volquetes Los Hermanos" nos contacta para llevar a cabo la gestion de alquileres y cobranzas de sus volquetes.

|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Cliente<br>2. CRUD Tipo Volquete<br>3. CRUD Gastos|
|CRUD dependiente|1. CRUD Volquete {depende de} CRUD Tipo Volquete<br>2. CRUD Alquiler {depende de} CRUD Volquete y CRUD Cliente<br>3. CRUD Pago {depende de} CRUD Alquiler
|Listado<br>+<br>detalle| 1. Listado de Volquetes filtrado por nro de volquete, mostrando marca, fecha de fabricacion y fecha de compra. => detalle CRUD Volquete<br> 2. Listado un alquiler mostrando el volquete, cliente y el ultimo estado del alquiler => detalle CRUD Alquiler<br> 3. Listado todos los pagos de un alquiler => detalle CRUD Pagos|
|CUU/Epic|1. Registrar un alquiler para un volquete<br>2. Emitir una factura de un alquiler<br>3. Actualizar valor de un tipo de volquete|
|Otros|1. Envío alerta cuando un volquete pasa mas de diez días de estadía|
