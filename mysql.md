# Crear un servidor de MYSQL usando docker

### 1. Descargar la imagen de MYSQL

docker pull mysql:8

### Para listar imagenes 

docker images
# para filtrar 
docker images | grep mysql

### Crear un contener

# Esto es como insalar un office en una pc, se instala pero no lo inicia "ejemplo"
docker create --name mysqlserver mysql:8

# Lista los contenedores que hayan sido creado y que se esten ejecutando

docker ps

# Lista los contenedores que se esten ejecutando y los que no se estan ejecuntando

docker ps -a




# Iniciando el contenedor

docker start


# Ver el log del contenedor
docker logs <Nombre de imagen | identificador>

# Para eliminar un contenedor que se está ejecutando , este comando detiene y elimina

docker rm -f <Nombre de imagen | identificador>

# Otra alternativa para eliminar contendor


docker stop <Nombre de imagen | identificador>
docker rm <Nombre de imagen | identificador>

# Para crear un contenedor y descarga previamente su imagen

# viculado -- Se detiene el contenedor cuando se cierra la terminal

docker run <Nombre de la imagen>:<Versión>

# No vilculado -- No Se detiene el contenedor cuando se cierra la terminal

docker run -d <Nombre de la imagen>:<Versión>


docker run -d <Nombre de la imagen>:<Versión>
docker run -d mysql:8 

# No vincula, variable de entorno 
docker run -d -e  <VARIABLE DE ENTORNO>=<VALOR> <Nombre de la imagen>:<Versión>
docker run -d -e MYSQL_ROOT_PASSWORD=12345 mysql:8 

# No vincula, variable de entorno y nombre al contenerdor
docker run -d --name <NOMBRE DEL CONTENEDOR> -e  <VARIABLE DE ENTORNO>=<VALOR> <Nombre de la imagen>:<Versión>
docker run -d --name mysqlserver -e MYSQL_ROOT_PASSWORD=12345 mysql:8 


# No vincula, variable de entorno,  nombre al contenerdor y conexión con el puerto host interno 
docker run -d  -<Puerto HOST>:<Puerto DOCKER>  --name <NOMBRE DEL CONTENEDOR> -e  <VARIABLE DE ENTORNO>=<VALOR> <Nombre de la imagen>:<Versión>
docker run -d -p 3310:3306 --name mysqlserver -e MYSQL_ROOT_PASSWORD=12345 mysql:8 
