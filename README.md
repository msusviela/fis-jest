# TypeScript, Vite y Vitest

Proyecto de ejemplo para aprender testing unitario con TypeScript. El proyecto
usa Vite como herramienta de desarrollo y Vitest como runner de pruebas.

## Requisitos

- [Node.js](https://nodejs.org/es) versión 18 o superior

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev       # inicia el servidor de desarrollo de Vite
npm run build     # comprueba los tipos y genera el build de producción
npm test          # ejecuta las pruebas una vez y genera el coverage
npm run test:watch # ejecuta Vitest en modo watch
```

## Configuración

### TypeScript y módulos ES

El proyecto está configurado como módulo ES mediante `"type": "module"` en
`package.json`. Los archivos de código y pruebas usan la sintaxis moderna de
imports y exports:

```ts
import { Calculator } from './calculator';
```

La configuración del compilador está en `tsconfig.json`. El comando `build`
ejecuta primero `tsc --noEmit` para comprobar los tipos y después genera el
build con Vite.

### Vitest

Vitest se configura en `vite.config.ts` y comparte la configuración del
ecosistema Vite. Las pruebas se encuentran en `src/domain/test/` y pueden
escribirse con las APIs de Vitest:

```ts
import { describe, expect, it } from 'vitest';
```

El comando `npm test` también genera el reporte de cobertura con el proveedor
V8. El reporte HTML se guarda en `coverage/`.

## Ejemplo

El proyecto contiene pruebas unitarias para las clases `Calculator` y
`Country`, ubicadas junto al dominio en `src/domain/`.

Para ejecutar una prueba concreta:

```bash
npx vitest run src/domain/test/calculator.test.ts
```

## Documentación

- [TypeScript: documentación oficial](https://www.typescriptlang.org/docs/)
- [Vite: guía de inicio](https://vite.dev/guide/)
- [Vitest: guía de inicio](https://vitest.dev/guide/)
- [Vitest: assertions y matchers](https://vitest.dev/api/expect.html)
- [Vitest: setup y teardown](https://vitest.dev/api/)
