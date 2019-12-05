require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// 5de3e652d454e2384dd55e55

// User.findByIdAndUpdate('5de3f01562c5583a18f115a7', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age })
//   const count = await User.countDocuments({ age })
//   return count
// }

// updateAgeAndCount('5de3f01562c5583a18f115a7', 2).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('5de3e963ff742638df436f6a').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})