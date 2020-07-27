import React from "react"
import Subtitle from "../components/Subtitle"
import QuestionComponent from "../components/QuestionComponent"
import GetInTouchCard from "../components/GetInTouchCard"
import { graphql, useStaticQuery } from "gatsby"
const GeneralQuestionSection = () => {
  const questionsQuery = useStaticQuery(graphql`
    query {
      allContentfulFaq {
        nodes {
          question {
            question
          }
          answer {
            answer
          }
        }
      }
    }
  `)
  const questions = questionsQuery.allContentfulFaq.nodes
  return (
    <div className="pt-48 px-6 md:px-10 ">
      <div className=" xl:block xl:flex xl:justify-end">
        <div className="hidden xl:block">
          <GetInTouchCard />
        </div>
        <div className="xl:pl-48 xl:w-3/4">
          <Subtitle subtitle="general questions" pb="null" />
          {questions.map((iquestion, index) => {
            return (
              <QuestionComponent
                question={iquestion.question.question}
                answer={iquestion.answer.answer}
                id={index}
                key={index}
              />
            )
          })}
        </div>
        <div className="block pt-8 xl:hidden">
          <GetInTouchCard />
        </div>
      </div>
    </div>
  )
}

export default GeneralQuestionSection
