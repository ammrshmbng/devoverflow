import { auth } from "@/auth";

export default async function Home() {
  const sesstion = await auth();

  console.log(sesstion);

  return (
    <>
      <h1 className="text-3xl font-bold underline">welcome nextjs</h1>
    </>
  );
}
