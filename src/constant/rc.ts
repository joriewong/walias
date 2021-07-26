import os from "os";
import path from "path";

const homedir = os.homedir();

export const zshrcPath = path.join(homedir, ".zshrc");

export const bashrcPath = path.join(homedir, ".bashrc");
