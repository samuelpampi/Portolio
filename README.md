# ?? Portfolio Web � Samuel Pampillón

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-6366F1?style=for-the-badge&logo=vite&logoColor=FFD166) ![CSS](https://img.shields.io/badge/CSS3-0B6BCB?style=for-the-badge&logo=css3&logoColor=white)

Un portfolio personal moderno y centrado en CTAs (LinkedIn, Github y descarga de CV) para presentar experiencia, tecnolog�as y proyectos con foco en claridad y desempe�o.

## ?? Navegaci�n r�pida
- Hero con headline y CTA de contacto/descarga.
- L�nea temporal de experiencia con badges de tecnolog�as.
- Secciones reutilizables y estilo consistente con tokens de color.

## ?? Demo local (TL;DR)
```bash
npm install
npm run dev
# abre http://localhost:5173
```

## ? Caracter�sticas
- UI limpia sobre fondo oscuro con gradientes suaves y microinteracciones en los botones.
- Botones con iconos SVG propios (LinkedIn, Github, descarga de CV, calendario, JS).
- Badges de stack (JavaScript, React) y timeline de experiencia en cards.
- Tokens de color centralizados en `src/index.css` para mantener coherencia visual.

## ??? Stack
- React + Vite (HMR, build r�pida)
- CSS modular por componente (sin frameworks pesados)
- SVG inline para iconograf�a escalable

## ?? Estructura breve
- `src/components/sections/Hero/` � secci�n hero con CTAs e imagen.
- `src/components/sections/Experience/` � timeline y badges de tech por rol.
- `src/components/ui/` � botones, avatares, iconos, badges y contenedores reutilizables.
- `src/components/data/` � datos tipados por secciones (ej. experiencia, tech badges).

## ?? Scripts �tiles
- `npm run dev` � entorno local con recarga r�pida.
- `npm run build` � build de producci�n optimizada.
- `npm run lint` � validaci�n de reglas ESLint.

## ?? C�mo contribuir
1. Haz un fork y crea una rama: `git checkout -b feature/tu-feature`.
2. Asegura que lint/build pasan.
3. Env�a un PR con un resumen breve del cambio y capturas si afectan al UI.

## ?? Contacto
�Te interesa colaborar o tienes feedback? Abre un issue o env�a un mensaje por tu canal preferido. �Gracias por pasarte!
