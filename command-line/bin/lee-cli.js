#!/usr/bin/env node

var porgram = require('commander');

porgram
  .version(require('../package').version)
  .usage('<command> [options]')

porgram
  .command('push <pathname>')
  .description('上传图片')
  .option('-r, --recursive', '扫描当前文件下所有图片')
  .action((pathname, cmd) => {
    require('../lib/push')(pathname, cmd)
  })

porgram.parse(process.argv);

if(!process.argv.slice(2).length){
  porgram.outputHelp();
}

