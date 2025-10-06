# Guía de despliegue

## GitHub Pages

1. Crea un repositorio en GitHub y sube el proyecto.
2. Activa GitHub Pages en el repositorio (`Settings` → `Pages`) con la fuente `GitHub Actions`.
3. Mantén la rama principal como `main` (o ajusta el workflow si usas otro nombre).
4. Verifica que el archivo `.github/workflows/deploy.yml` esté presente. El workflow ejecuta `npm run export`, publica la carpeta `out` y entrega la web en GitHub Pages.
5. Si tu sitio se aloja en un dominio raíz (`username.github.io`), elimina o deja vacío `NEXT_PUBLIC_BASE_PATH` en el paso "Build static site" del workflow.
6. Para un repositorio de proyecto (por ejemplo `username.github.io/turamerica`), deja el valor por defecto o establece `NEXT_PUBLIC_BASE_PATH` manualmente con el mismo nombre del repositorio.
7. Cada `git push` a `main` regenerará y publicará el sitio.

## Cloudflare como capa de protección

Para mitigar ataques (DDoS, inyección de código malicioso en recursos externos, etc.) se recomienda colocar Cloudflare delante de GitHub Pages.

1. Crea una cuenta en Cloudflare y añade tu dominio personalizado.
2. En la lista de DNS, crea un registro `CNAME` apuntando al dominio asignado por GitHub Pages (`<usuario>.github.io`). Activa la opción "Proxied" (nube naranja) para que Cloudflare intermedie el tráfico.
3. En Cloudflare → `SSL/TLS`, usa el modo `Full` para forzar HTTPS.
4. Activa el Web Application Firewall (`Security` → `WAF`) con el conjunto de reglas administradas. Esto filtra ataques comunes como inyecciones y bots maliciosos.
5. En `Security` → `Bots`, habilita la administración de bots y, si necesitas más control, crea reglas de rate limiting.
6. Añade una regla de página que fuerce HTTPS y otra que bloquee países o IPs si hiciera falta.
7. Si tu sitio recibe formularios en el futuro, considera integrar [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) para evitar spam.

### Cabeceras en Cloudflare

Ya que GitHub Pages no permite definir cabeceras personalizadas, configúralas en Cloudflare (`Rules` → `Transform Rules` → `Modify Response Header`).

Recomendadas:

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' https://images.unsplash.com data:; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Verificación

Tras desplegar, ejecuta:

```bash
curl -I https://tu-dominio
```

Deberías ver las cabeceras de seguridad añadidas desde Cloudflare y la respuesta servida por GitHub Pages.
