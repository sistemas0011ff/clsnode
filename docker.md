# Útiles

### Acceder a un contenedor
docker exec -i -t 
docker exec -it server01 sh 
# -i : Significa que lo que escriba se va a ir a un programa que esta dentro del contenedor
# -t : Es lo contrario, lo que el contenedor escriba en ese programa, se verá en la terminal
### Para inspeccionar contenedores
# por que necesito saber su dirección IP
docker inspect <SERVER-NAME>
docker inspect server02
