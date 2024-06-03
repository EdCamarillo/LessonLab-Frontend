import React from 'react'
import Header from '../components/page-components/composite/header'
import SideBarQuiz from '../components/page-components/composite/sideBarQuiz'
import QuizComponent from '../components/page-components/composite/quizComponent'

const Quiz = () => {
  return (
    <>
        <Header />
        <SideBarQuiz />
        <QuizComponent />
    </>
  )
}

export default Quiz