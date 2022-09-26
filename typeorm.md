# Instalar type orm e indicarle que vamos a trabajar con mysql
npx typeorm init --name <P. NAME> --database <BASE DE DATOS>
npx typeorm init --name prycpe --database mysql

# Dar privilegios en caso de errores - MYSQL
GRANT ALL PRIVILEGES ON *.* TO 'devus'@'%';
