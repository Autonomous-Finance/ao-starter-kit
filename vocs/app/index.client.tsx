import './styles/index.css.js'

import { hydrateRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { ConfigProvider, getConfig } from './hooks/useConfig.js'
import { routes } from './routes.js'
import { hydrateLazyRoutes } from './utils/hydrateLazyRoutes.js'
import { removeTempStyles } from './utils/removeTempStyles.js'
import { useEffect, useState } from 'react'

//hydrate()

function App() {
  const [router, setRouter] = useState<ReturnType<typeof createHashRouter> | null>(null)

  useEffect(() => {
    async function init() {
      const basePath = getConfig().basePath
      await hydrateLazyRoutes(routes, basePath)
      removeTempStyles()
      const newRouter = createHashRouter(routes, { basename: basePath })
      setRouter(newRouter)
    }
    init()
  }, [])

  if (!router) {
    return <div>Loading...</div>
  }

  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}


hydrateRoot(document.getElementById('app')!, <App />)
