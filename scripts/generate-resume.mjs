import { copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SOURCE = "D:/kanishka_documents/kanishkaresume.pdf";
const DEST = path.resolve("public", "kanishka-s-resume.pdf");

async function main() {
  if (existsSync(SOURCE)) {
    await copyFile(SOURCE, DEST);
    console.log("Successfully copied provided resume from", SOURCE, "to", DEST);
  } else {
    console.log("Source resume not found at", SOURCE);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
