import { Outlet } from '@remix-run/react'
import Sidebar from '~/components/sidebar'

const AppLayout = () => {
  return (
    <main className="flex">
      <Sidebar />

      <div className="p-8 w-full">
        <Outlet />
      </div>
    </main>
  )
}

export default AppLayout
