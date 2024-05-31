import { PageProps } from "$fresh/server.ts";

const Layout = ({ Component }: PageProps) => (
  <main className="bg-slate-900 min-h-dvh text-white">
    <article className="max-w-screen-xl mx-auto">
      <Component />
    </article>
  </main>
);

export default Layout;
