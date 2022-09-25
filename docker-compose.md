# Docker Compose
# Su condiguración por defecto se encuentra en archivos YAML
# En docker compose se hablan de servicios y son estos servicios que levantan los contenedores


# Para ejecutar un DockerComposer YAML
# Ejecución vincula - Cuando se cierra el terminal se elimina el contenedor
docker compose up

# Ejecución desvinculada - Cuando se cierra el terminal no se elimina el contenedor
docker compose up -d

# Para eliminar
docker compose down

### Para ver el estado de los contenedores
docker compose ps

### Ejecutando solo un servicio del docker compose

docker compose up -d <NAME SERVICES>


# Nota 
docker run : Permite crear un contenedor desde una imagen