import fs from 'fs'
import rc from '../constant/rc'

const { zshrcPath } = rc

function append(cmd: string, alias: string) {
  const aliasStr = `alias ${alias}="${cmd}"\n`
  try {
    fs.appendFile(zshrcPath, aliasStr, 'utf8', (err: any) => {
      if (err) {
        console.log(err)
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export default append
