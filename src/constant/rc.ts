import os from 'os'
import path from 'path'

const homedir = os.homedir()

const zshrc = path.join(homedir, '.zshrc')

const bashrc = path.join(homedir, '.bashrc')

export default { zshrcPath: zshrc, bashrcPath: bashrc }
