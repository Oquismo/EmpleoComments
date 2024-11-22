import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser());

// Rutas de ejemplo
router.get('/', async (ctx) => {
  ctx.body = '¡Bienvenido a tu servidor Koa!';
});

router.post('/comentarios', async (ctx) => {
  const { nombre, comentario } = ctx.request.body;
  ctx.body = {
    message: 'Comentario recibido',
    data: { nombre, comentario },
  };
});

// Usar el enrutador
app.use(router.routes()).use(router.allowedMethods());

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
