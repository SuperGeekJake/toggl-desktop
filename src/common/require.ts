import * as path from 'path'
import * as fs from 'fs'

module.exports = () => {
  const CH_PERIOD = 46
  const existsCache = { d: 0 }; delete existsCache.d

  const mainModule = process['mainModule']
  if (!mainModule) throw new Error('baseUrl not defined in tsconfig.json')
  const baseUrl = path.dirname(mainModule.filename)
  
  const moduleProto = Object.getPrototypeOf(module)
  const origRequire = moduleProto.require
  moduleProto.require = function (request) {
    let existsPath = existsCache[request]
    if (existsPath === undefined) {
      existsPath = ''
      if (!path.isAbsolute(request) && request.charCodeAt(0) !== CH_PERIOD) {
        const ext = path.extname(request)
        const basedRequest = path.join(baseUrl, ext ? request : request + '.js')
        if (fs.existsSync(basedRequest)) existsPath = basedRequest
        else {
          const basedIndexRequest = path.join(baseUrl, request, 'index.js')
          existsPath = fs.existsSync(basedIndexRequest) ? basedIndexRequest : ''
        }
      }
      existsCache[request] = existsPath
    }
    return origRequire.call(this, existsPath || request)
  }
}