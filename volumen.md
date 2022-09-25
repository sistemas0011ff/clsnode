# Volumenes

### Como se crea un volumen

docker volume create <NOMBRE VOLUMEN>
docker volume create vol-mysql
or
docker volume create mysql-vol

# ejemplo como se hace referenia al volumen nombrado
docker run -d -p 3310:3306 --name mysqlserver -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=1234 -e MYSQL_DATABASE=bdventas -v mysql-vol:/var/lib/mysql mysql:8 


# Volumen anónimo
tIENE la desventa que cuando se elimina el contendor tambein se elimina el volumen
Los volumenes anonimos no persisten informción, cuando son usados sin la -f(v) sin la v
solo se queda lo que es la base de datos, y no contiene información de tabls

docker run -d -p 3310:3306 --name mysqlserver -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=user -e MYSQL_PASSWORD=1234 -e MYSQL_DATABASE=bdventas -v /var/lib/mysql mysql:8 

# Para eliminar el contenedor y tawmbien el volumen anonimo
docker rm -fv <NAME CONTAINER | IDE CONTAINER>
docker rm -fv mysqlserver


