# Aprendiendo a manejar archivos de excel desde JS

En este repositorio se mostrarán codigos básicos para la lectura y la escritura en archivos xlsx

## Archivos xlsx

Importante: Para una lectura correcta revisar que las tablas tengan encabezados y que se encuentren en la primera fila con el siguiente formato
|Nombre|Numero |...|
|------|-------|---|
|------|-------|...|


## Dependencias
<ul>
    <li><a href="https://jestjs.io/docs/getting-started">Jest</a></li>
    <li><a href="https://www.npmjs.com/package/xlsx">xlsx</a></li>
    <li><a href="https://www.npmjs.com/package/fs-extra">fs-extra</a></li>
</ul>
<h2>Jest</h2>
<p>La dependencia de Jest se emplea en el proyecto para llevar a cabo las pruebas unitarias.</p>
<p> Se optó por usar esta dependencia debido al choque que hay con las pruebas unitarias automatizadas por GitHub y windows.</p>
<h2>xlsx</h2> 
La dependencia de xlsx se ha empleado para dar lectura a los archivos de tipo excel
<h2>Fs-Extra</h2>
fs-extra fue de utilidad para poder mover los archivos de salida a una carpeta, esto con la finalidad de tener más orden en el proyecto

## Descarga del proyecto 
Para tener el proyecto en tu ordenador realiza los siguientes pasos:
Realiza un fork de este rpositorio
En la terminal ejecuta el siguiente comando (sustituyendo username por tu usuario en gitHub)<br>
```
git clone https://github.com/[Username]/PracticaJS_xlsx
```
En la terminal ejecuta el siguiente comando<br>
```
cd PracticaJS_xlsx
```
Instala las dependencias con los siguientes comandos<br>

```
npm install jest --save
```
```
npm install xlsx
```
```
npm install fs-extra
```

<h2>Pruebas unitarias</h2>
Para correr las pruebas unitarias se ejecuta el siguiente comando

```
npm test --all
```

## Ejecución del proyecto
Antes de ejecutar el codigo, asegurate de haber colocado el archivo xlsx en la carpeta public y poner su nombre en el archivo index.js en la variable file.
Para ejecutar el proyecto se debe ejecutar el siguiente comando

```
node index.js
```
### Para ver y entender mi trabajo, puedes ver el commit line
