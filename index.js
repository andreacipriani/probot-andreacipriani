/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */

module.exports = app => {
  app.log('probot-andreacipriani is running!')

  app.on('push', async context => {
    context.log(context)
  })

  // app.on('*', async context => {
  //   context.log({ event: context.event, action: context.payload.action })
  // })

}
