
const firmwareType = {
  snapmaker2: Symbol('snapmaker2'),
  j1: Symbol('j1'),
  artisan: Symbol('artisan'),
  original: Symbol('original')
}
const firmwareMap = new Map()
firmwareMap.set(firmwareType.snapmaker2, '/v1/fabscreen/version')
firmwareMap.set(firmwareType.j1, '/v1/j1/version')
firmwareMap.set(firmwareType.artisan, '/v1/a400/version')
firmwareMap.set(firmwareType.original, '/v1/original/version')

export {
  firmwareMap,
  firmwareType
}
