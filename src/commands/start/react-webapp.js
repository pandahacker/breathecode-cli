const {Command, flags} = require('@oclif/command')
let BashScripts = require('../../utils/bash/index')
let Console = require('../../utils/console')
class SingleCommand extends Command {
  async run() {
    const {flags} = this.parse(SingleCommand)

    Console.info(`Creating React.js project...`)
    BashScripts.installBoilerplate('react-webapp', flags)
  }
}

SingleCommand.description = 'Start a new React project using the React Context API'
SingleCommand.flags = {
 root: flags.boolean({char:'r', description: 'install on the root directory'}),
 mode: flags.string({char:'m', description: 'install a particular branch or version for the boilerplate'}),
 name: flags.string({char:'n', description: 'app name', default: 'hello-rigo'})
}
module.exports = SingleCommand
