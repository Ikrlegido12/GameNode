> **⚠ AVISO ⚠**  
> Esta programación pertenece a LyricalString (Node-Discord-Bot)
<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="🤖 Node" src="https://i.goopics.net/52j27r.jpg">

# Node

[![⭐ GitHub](https://img.shields.io/github/stars/LyricalString/Node-Discord-Bot.svg?style=social&label=Stars&style=flat)](https://github.com/LyricalString/Node-Discord-Bot/stargazers) 
[![Blog](https://ikrlegidoplus.com)
[![](https://img.shields.io/badge/discord.js-v13.12.0-blue.svg?logo=npm)](https://github.com/discordjs)
[![DevServer](https://discordapp.com/api/guilds/834440041010561074/widget.png?style=shield)](https://discord.gg/SbsFVV5dNG)
[![](https://img.shields.io/github/languages/top/LyricalString/Node-Discord-Bot)]()

> Este bot es usado por más de 3.000.000 usuarios de Discord y más de 28.000 servidores.

Node es un bot multifunción, multilenguaje, programado en [Discord.js](https://discord.js.org) y [Mongoose](https://mongoosejs.com/docs/api.html) por [LyricalString](https://github.com/LyricalString/Node-Discord-Bot).  
¡Añade una ⭐ al repositorio para promocionar el proyecto!


## ⚙️ Configuración

Siguiendo el formato más abajo, deberás de crear un archivo llamado `.env` para añadir las credenciales.

⚠️ **Nota: Nunca publiques o muestres tu token o las claves de API's públicamente**

```json
mode = "[development/production]"
token = "token del bot"
prefix = "prefijo predefinido"
MONGO_URL =  "url de Mongo para que se conecte el bot"
EMBED_COLOR = "color predefinido para los embeds"
errorWebhookURL = "URL del webhook donde se enviarán los errores"
errorChannel = "id del canal de errores"
topggToken = "token de topGG"
clientIDSpotify = "id del cliente de Spotify"
clientSecretSpotify = "token del cliente de Spotify"
guildAddWebhookURL = "URL del webhook donde se enviarán las notificaciones para nuevos servidores"
OsuSecret = "clave API para OSU"
trnAPIKey = "clave API para TRN (comando de fnprofile)"
```

Para facilitar el proceso de configuración puede ejecutar el comando

```cmd
npm run config
```

el cual le pedirá los datos para la creación automáctica del archivo `.env`. Los datos que no tenga a la mano podrá omitirlos con un simple `Enter` y ejecutar el script mas tarde sin necesidad de rellenar nuevamente los datos ya dados; _no se preocupe que los datos omitidos no se sobrescribirán._

🚨 **Como mínimo deberás de rellenar hasta el MONGO_URL para poder iniciarlo, el resto te darán error los comandos que lo usen.** 🚨

## 🛠️ Características

### Bot completo

Lista de funciones:

-   ✉️ Prefijo global o prefijo por servidor, además de la propia mención al bot.
-   🇪🇸 Multilenguaje (Español e Inglés)
-   ⚙️ Configuración en Mongo por servidor (prefijo, canales de escucha, etc...)
-   😀 Comandos únicos en embeds

### Categorías de comandos

Node tiene más de 100 comandos repartidos en **7 categorías**:

-   👩‍💼 **Administración**
-   🛡 **Moderación**
-   🎵 **Música**
-   😂 **Diversión**
-   🚩 **Información y Utilidades**
-   🫂 **Interacción**
-   💻 **Desarrollo** (Comandos que estaban en desarrollo, sin acabar)

## 📎 Links

-   [Discord](https://discord.gg/smZ4uXZdN9)
-   [Github](https://github.com/LyricalString)

## 🤝 Contribuciones

Antes de **reportar un error**, por favor asegúrate de que no ha sido reportado/sugerido anteriormente.  
Si tienes cualquier duda, pregúntanosla en el [servidor de Discord](https://discord.me/mcZeusRP) en vez de crear un reporte.
Si quieres contribuir, siéntete libre de bifurcar el repositorio y solicitar una pull request.

## 📝 Créditos
- [@ikrlegido](https://github.com/IkrlegidO) Director del proyecto
- [@Franlegido] (Discord: pipi_15) Ayudante inigualable
- [@soymel] (Discord: .soymel)

-- CREADORES ORIGINALES --
-   [@amadeusgray](https://github.com/amadeusgray) Por ser mi mano derecha en el proyecto.
-   [@soyultro](https://github.com/SoyUltro) Por la ayuda creando comandos y el multilenguaje.
-   [@didacus12](https://github.com/Didacus12) Por tu ayuda en el desarrollo del bot.
-   [@usarral](https://github.com/usarral) Por tus aportes en Node.
-   [@andressantamaria2003](https://github.com/andressantamaria2003) Por prestarnos tu ayuda desde el hosting hasta en la seguridad de Node.

## 📜 Licencia

Node esta licenciado bajo la licencia GPL 3.0. Revisa el archivo `LICENSE` para más información. Si planeas usar cualquier parte de este código base en tu propio bot, estaría agradecido si se me incluyese en los créditos.
