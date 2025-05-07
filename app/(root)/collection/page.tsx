interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Collections = async ({ searchParams }: SearchParams) => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
    </>
  );
};

export default Collections;
