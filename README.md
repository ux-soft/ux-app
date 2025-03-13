# ux-os-app

| **Package**                    | **Compilador**   | **Scripts Clave**                             |
|--------------------------------|------------------|-----------------------------------------------|
| **Root (`/`)**                 | -                | `"build"`, `"dev"`, `"clean"`                 |
| **Common (`packages/common`)** | `tsc`            | `"build"`, `"watch"`, `"clean"`               |
| **Web (`apps/webapp`)**        | Vite             | `"dev"`, `"build"`, `"preview"`               |
| **Mobile (`apps/mobile`)**     | Vite + Capacitor | `"dev"`, `"build"`, `"sync"`, `"run:android"` |
| **Desktop (`apps/desktop`)**   | Vite + Electron  | `"dev"`, `"build"`, `"start"`                 |
