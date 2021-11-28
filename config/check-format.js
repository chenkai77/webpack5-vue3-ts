const nameReg = /^[\\@a-z\d-]+$/g
// 需要校验的文件
const needCheckName = ['svg', 'vue', 'png', 'jpg', 'gif']
// 不符合规范的文件名
const noSpecificationFileNameList = []
// 获取commit的文件列表
const fileNameList = process.argv.splice(2)

/**
 * @description: 检查文件名是否符合格式
 * @param { string } name : 文件名
 * @param { string } filePath : 文件全路径
 */
function checkFormatName(name) {
  // 去掉后缀
  const suffixIndex = name.lastIndexOf('.')
  const slash = name.lastIndexOf('/')
  if (suffixIndex === -1 || slash === -1) {
    return
  }
  let suffix = name.slice(suffixIndex + 1)
  if (needCheckName.indexOf(suffix.toLocaleLowerCase()) > -1) {
    let fileName = name.slice(slash + 1, suffixIndex)
    // 由于把正则赋值给一个变量重复使用，所以每次需要重置lastIndex为0
    nameReg.lastIndex = 0
    const result = nameReg.test(fileName)
    if (!result) {
      noSpecificationFileNameList.push(name)
    }
  }
}

/**
 * @description: 主流程
 */
function main() {
  fileNameList.forEach((e) => {
    checkFormatName(e)
  })
  if (noSpecificationFileNameList.length) {
    console.log(
      '\x1B[31m',
      `有${noSpecificationFileNameList.length}个文件不符合命名规范，文件路径如下：`
    )
    noSpecificationFileNameList.forEach((e) => {
      console.log(e)
    })
    console.log('\x1B[0m')
    throw '格式错误'
  }
}
main()
