/// <reference path="../types/docker-compose.d.ts" />
const yaml = require('js-yaml')
const shell = require('shelljs')
const fs = require('fs')
const path = require('path')

async function pull_images(){

  let config = /**@type {Docker.config}*/(yaml.safeLoad(fs.readFileSync(path.join(__dirname,'../docker-compose.yml'),'utf8')))

  for( let key in config.services ){

    let { image } = config.services[key]

    shell.exec(`docker pull ${image}`)
    
  }

}

pull_images()
