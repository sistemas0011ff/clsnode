### Tipos de redes en contenedores

# BRIDGE : en este tipo de redes, los contenedores se pueden ver entre ellos a travez de sus nombres o a travez de sus IP'S y en caso de docker compose.. tambien a travez de los nomrbes de sus servicios

# HOST : esta es la misma red de nuestra computadora

# NONE :  Esta red de tipo none , es simplemente ausencia de la red.. estos contenedores no tienen q interactuar con ningún otro servicio


# por defecto cualquier contenedor que se cree estan en tipo bridge... y solo se ven a travez de sus # ips y si quiero q se vean por sus nombres tengo que crear red de tipo bridge

# Redes

### Crear una red de tipo bridge


docker network create <NOMBRE DE LA RED A CREAR> -d bridge
docker network create net-nodjs -d bridge

# Eliminar una de las redes creadas
docker network rm a7a426e4b8cf


# Creando 3 contenedores que utilicen la imagen de ngnex servidor web

# server1
docker run -d --name server01 nginx:alpine
docker run -d --name server02 nginx:alpine
docker run -d --name server03 nginx:alpine

# Eliminando el contendor 3
docker rm -f server03


# Crear contenedor con una red específica
docker run -d --name server03 --network net-nodejs nginx:alpine

# Para vincular contenedores exsitentes a una red 

# Connet la red "net-nodejs" a los servidores  o contenedores server02 y server02
docker network connect net-nodejs server01
docker network connect net-nodejs server02

# Inspeccionar la RED

docker ( network | volumen ) inspect net-nodejs
docker network inspect net-nodejs

# Para desvincular contenedors de una red específica
docker network disconnect net-nodejs server01
docker network disconnect net-nodejs server02

