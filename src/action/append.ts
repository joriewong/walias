import fs from "fs";
import { zshrcPath, bashrcPath } from "../constant/rc";

function append(alias: string, cmd: string) {
  const aliasStr = `alias ${alias}="${cmd}"\n`;
  try {
    fs.appendFile(zshrcPath, aliasStr, "utf8", (err: any) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
  try {
    fs.appendFile(bashrcPath, aliasStr, "utf8", (err: any) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export default append;
