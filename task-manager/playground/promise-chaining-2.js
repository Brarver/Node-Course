//findByIdAndDelete
require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5de3e2986e165537b96b55df').then((task) => {
  console.log(task)
  return Task.countDocuments({ completed: false })
}).then((results) => {
  console.log(results)
}).catch((e) => {
  console.log(e)
})