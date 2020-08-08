
import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
// import { uglify } from 'rollup-plugin-uglify'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import glob from 'glob'

const process = require('process')
const path = require('path')

const cwd = process.cwd()

/**
 * 解析路径
 * @param {*} dir
 */
const resolveFile = (dir) => {
  return path.resolve(cwd, dir)
}

/**
 * 获取入口列表
 * @param {} pattern
 */
const getEntry = () => {
  return glob.sync(resolveFile('./src/*.ts')).map((input) => {
    const baseName = path.basename(input)
    const name = baseName.substring(0, baseName.indexOf('.'))
    // const file = `lib/${name}.js`
    console.log(`input=${input}`)
    return {
      input,
      // file,
      name
    }
  })
}

const extensions = [
  '.js', '.ts'
]

/**
 * 导出列表
 */
const configList = getEntry().map(({ input, name }) => {
  return {
    input,
    output: [
      {
        file: `lib/${name}.es.js`,
        format: 'es',
        global: {
          'axios': 'axios'
        }
      },
      {
        file: `lib/${name}.js`,
        format: 'umd',
        name: 'toolCommon',
        global: {
          'axios': 'axios'
        }
        // format: 'cjs'
      }
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.build.json'
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
        include: ['dist/**/*'],
        babelHelpers: 'bundled'
      }),
      // uglify(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
        // 将自定义选项传递给解析插件
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
      commonjs()
    ],
    // 指出应将哪些模块视为外部模块
    external: ['axios']
  }
})
module.exports = configList
