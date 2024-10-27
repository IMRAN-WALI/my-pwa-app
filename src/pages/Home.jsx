import { lazy, Suspense } from "react";
import Layout from "../Components/Layout";

const LazyComponent = lazy(() => import("../Components/LazyComponent"));

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to our PWA</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </Layout>
  );
}
