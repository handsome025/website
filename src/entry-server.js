import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    const meta = app.$meta() // here
    router.push(context.url)
    
    // router.push(meta) // and here
    context.meta = meta // and here

    // console.info(9999,context)

    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents.length) {
      return reject({code: 404})
    }

    Promise.all(matchedComponents.map(Component => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route: router.currentRoute
        })
      }
    })).then(() => {
      context.state = store.state
      resolve(app)
    }).catch(reject)
  })
}
