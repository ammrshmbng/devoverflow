import Hello from "./components/hello";

export default function Home() {
  
  console.log("what am i doing here CLIENT/SERVER")


  return (
   <>
      <h1 className="text-3xl font-bold underline">welcome nextjs</h1>
      <Hello/>
   </>
  );
}
