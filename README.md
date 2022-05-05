## LADEN

Proyecto realizado con Next.js y Prisma.

### 1. Requisitos

-   Node.js 16.14.2 LTS
-   MySQL 8

### 2. Instalación

Para correr el proyecto necesitas instalar las dependencias ejecutando el
siguiente comando en la terminal:

```bash
npm install
# O bien
yarn install
```

Una vez que tengas instaladas las dependencias renombra el archivo `.env.template` a `.env`,
aquí tendrás que declarar las variables de entorno para el correcto
funcionamiento de la aplicación.

### 3. Conectar la base de datos

Abre tu cliente de MySQL, puedes utilizar XAMPP, MySQL Workbench, TablePlus o a
través de comandos. Accede con tu usuario y contraseña, después crea una base de
datos con el siguiente query:

```sql
CREATE DATABASE laden;
```

Una vez creada la base de datos, ubícate en la raíz del proyecto, abre una
terminal y ejecuta los siguientes comandos:

```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

Recuerda no desesperarte si llega a tardar unos minutos en terminar la ejeución
de algún comando.


### 4. Ejecutar el proyecto

Correremos el proyecto en un servidor de desarrollo, para ello tendremos que
ejecutar el siguiente comando:

```
npm run dev
```
