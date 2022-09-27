# MVC Template NestJS

## Description

API mvc description

## Link app deployment

http://localhost:3000/

## ENV

Crea el archivo .env a partir del archivo .env.example

## Run with pm2

```bash
pm2 start ecosystem.config.js --env development
pm2 start ecosystem.config.js --env production
```

## Run with docker-compose

```bash
# Crear imagen con docker
docker-compose up -d --build
```

## Run with docker

```bash
# Crear imagen con docker
docker build -t mainapi .

# Crear un contenedor a partir de una imagen con docker en el puerto X
docker run -dp 3000:3000 mainapi

# Crear un contenedor a partir de una imagen con docker en el puerto X incluye un argumento extra
docker run -dp 3000:3000 --add-host=networklocalhost:192.168.0.13 mainapi
```

## Ports assigned

<table>
<tr>
<th colspan="1" rowspan="2">Enviroment</th>
<th colspan="2">Nodejs</th>
<th colspan="2">Nginx</th>
</tr>
<tr>
<th>Port External</th>
<th>Port Internal</th>
<th>Port External</th>
<th>Port Internal</th>
</tr>
<tr>
<td>local</td>
<td>3000</td>
<td>3000</td>
<td>3000</td>
<td>3000</td>
</tr>
<tr>
<td>development</td>
<td>3000</td>
<td>3000</td>
<td>3001</td>
<td>3001</td>
</tr>
</table>

## Doc

https://www.prisma.io/nestjs
</br>
https://docs.nestjs.com/recipes/prisma
</br>
https://docs.nestjs.com/recipes/prisma#set-up-prisma
</br>
https://docs.nestjs.com/recipes/prisma#set-the-database-connection
</br>
https://docs.nestjs.com/recipes/prisma#create-two-database-tables-with-prisma-migrate
</br>
https://docs.nestjs.com/recipes/prisma#install-and-generate-prisma-client
</br>
https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services
</br>
