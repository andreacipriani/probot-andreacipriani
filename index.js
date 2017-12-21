module.exports = (robot) => {
  // Your code here
  console.log('probot-andreacipriani has started listening')

  robot.on('issues.opened', async context => {
    console.log('new issue was openend with' + context.payload)
    context.log(context.payload)
  })
}
