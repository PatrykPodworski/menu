import { PageProps } from "$fresh/server.ts";

const Layout = ({ Component }: PageProps) => (
  <div className="bg-slate-900 min-h-dvh text-white">
    <main className="max-w-full 2xl:max-w-screen-xl p-4 lg:p-8 mx-auto">
      <Component />
    </main>
  </div>
);

export default Layout;
