require('shelljs/global')

const path = require('path')

const child_process = require('child_process')

const root = path.resolve(__dirname, '../')
const exampleRoot = path.resolve(__dirname, '../examples')

// redux 所在位置
const reduxSrc = `${root}/src/`
const examplesSrc = `${root}/examples/src/redux/`

// 由于examples 中的react项目不能引入项目之外的相对目录文件
// 所以每次通过`npm run example`的方式启动测试用例
// 会通过先拷贝再启动项目的方式
rm('-rf', examplesSrc)
cp('-R', reduxSrc, examplesSrc)

child_process.execSync(`cd ${exampleRoot} && npm start`)
// process.stdout.write()
