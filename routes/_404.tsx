import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Menu - Page not found</title>
      </Head>
      <div class="flex gap-8 min-h-dvh">
        <img
          src="/cocktails/gin-tonic.png"
          alt="Gin and tonic"
          class="h-64"
        />
        <div class="flex flex-col items-center">
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
