import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2022-01-01"),
  },
  {
    _id: "2",
    title: "How to learn Next.js?",
    description: "I want to learn Next.js, can anyone help me?",
    tags: [
      { _id: "1", name: "Next.js" },
      { _id: "2", name: "React" },
    ],
    author: { _id: "2", name: "Jane Smith" },
    upvotes: 15,
    answers: 3,
    views: 150,
    createdAt: new Date("2022-02-01"),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Home({ searchParams }: SearchParams) {
  const { query = "", filter = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION} className="max-sm:w-full">
            Ask a Question
          </Link>
        </Button>
      </section>
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route={ROUTES.HOME}
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          iconPosition="left"
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        <div className="mt-10 flex w-full flex-col gap-6">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}
