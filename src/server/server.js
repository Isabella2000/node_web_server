import express from "express";
import path from "path";

const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  //* para usar la carpeta public o la que se ponga en los .env dinamicamente , se definira como estatica, o sea la que tendra los archivos que se presentaran
  app.use(express.static(public_path));

  //* response y request siendo * cualquier cosa que escribas en /la lupa
  //* __dirname el name del directorio mas el archivo al que se redirige, por ultimo siendo la respuesta a enviar
  app.get("*", (res, req) => {
    const indexpath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexpath);
  });
  app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
  });
};

export { startServer };
