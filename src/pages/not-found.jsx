import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "../components/ui/button"
import { SEO } from "../components/shared/seo"

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />

      <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl md:text-9xl font-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-heading">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-body max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/">
                <Home size={18} />
                Back to Home
              </Link>
            </Button>
            <Button variant="secondary" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft size={18} />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  )
}
