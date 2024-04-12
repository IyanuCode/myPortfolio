import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      {/* ANIMATE PRESENCE MODE = "wait" used for animating elements when they enter or exit the DOM. The mode="wait" attribute tells it to wait for any animations to complete before removing elements from the DOM. */}
      <AnimatePresence mode="wait">
        {/* The key={router.route} prop is used to trigger re-renders when the route changes, ensuring animations are applied appropriately. */}
        <motion.div key={router.route} className="h-full">
          <Transition />
          {/* actual page content or component is rendered. */}
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
