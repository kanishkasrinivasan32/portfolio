# Kanishka S — AI & ML Portfolio (local recreation)

React + TypeScript + Vite + Tailwind CSS 3, Framer Motion, Lenis smooth-scroll, lucide-react.
Rebuilt from the saved rendered DOM + compiled CSS of the Emergent preview site.

## Run
```bash
npm install
npm run fetch-assets   # downloads the ORIGINAL images + resume PDF from the live preview
npm run dev            # http://localhost:5173
npm run build          # production build -> dist/
npm run preview
```
If `fetch-assets` fails, open each URL in a browser and save the file into `public/`:
`images/{hero-art,portrait,project-rag,project-vgg19,project-ids,project-intellora,contact-art}.jpg`, `kanishka-s-resume.pdf`.

## Features & Setup
- `npm run dev`: Starts the local development server at `http://localhost:5173`.
- `npm run build`: Type-checks and creates production bundle in `dist/`.
- `npm run generate-resume`: Regenerates the professional A4 PDF resume saved to `public/kanishka-s-resume.pdf`.
- Case Studies: All 4 project case studies (Advanced Metadata Generation RAG, VGG-19 Skin Disease Diagnosis, IDS Autoencoder + XGBoost, Intellora AI Learning Companion) are fully implemented with the rich 2-column dark modal matching the original live preview design.

