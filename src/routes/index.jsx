import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "../components/layout/layout"

const Home = lazy(() => import("../pages/home"))
const About = lazy(() => import("../pages/about"))
const Projects = lazy(() => import("../pages/projects"))
const Services = lazy(() => import("../pages/services"))
const Investors = lazy(() => import("../pages/investors"))
const Insights = lazy(() => import("../pages/insights"))
const Careers = lazy(() => import("../pages/careers"))
const Contact = lazy(() => import("../pages/contact"))
const NotFound = lazy(() => import("../pages/not-found"))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-muted">Loading...</p>
      </div>
    </div>
  )
}

function SuspenseWrapper({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <SuspenseWrapper><Home /></SuspenseWrapper> },
      { path: "about", element: <SuspenseWrapper><About /></SuspenseWrapper> },
      { path: "projects", element: <SuspenseWrapper><Projects /></SuspenseWrapper> },
      { path: "services", element: <SuspenseWrapper><Services /></SuspenseWrapper> },
      { path: "investors", element: <SuspenseWrapper><Investors /></SuspenseWrapper> },
      { path: "insights", element: <SuspenseWrapper><Insights /></SuspenseWrapper> },
      { path: "careers", element: <SuspenseWrapper><Careers /></SuspenseWrapper> },
      { path: "contact", element: <SuspenseWrapper><Contact /></SuspenseWrapper> },
      { path: "*", element: <SuspenseWrapper><NotFound /></SuspenseWrapper> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
