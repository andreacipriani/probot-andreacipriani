/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */

module.exports = app => {
  app.log('probot-andreacipriani is running!')

  app.on('push', async context => {
    const prNumber = context.payload.number
    app.log('PR synchronized with number ${prNumber}')

//    context.github.pulls.listFiles
  })
}
