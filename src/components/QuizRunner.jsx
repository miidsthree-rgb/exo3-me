import React, { useState, useEffect } from 'react';
import { QUESTIONS_DATA, SUBJECTS } from '../data/questionsData';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle, Trophy, Lightbulb, Sparkles } from 'lucide-react';

export default function QuizRunner({ selectedSubject, selectedLevel, onQuizComplete }) {
  // Aggregate questions based on filters
  const getFilteredQuestions = () => {
    let pool = [];
    const subjectsToUse = selectedSubject 
      ? [selectedSubject] 
      : Object.keys(QUESTIONS_DATA);

    subjectsToUse.forEach(subjKey => {
      const qList = QUESTIONS_DATA[subjKey] || [];
      qList.forEach(q => {
        if (selectedLevel === 'all' || q.level === selectedLevel) {
          pool.push({ ...q, subjectKey: subjKey });
        }
      });
    });

    return pool;
  };

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const list = getFilteredQuestions();
    setQuestions(list);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setQuizFinished(false);
  }, [selectedSubject, selectedLevel]);

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center space-y-4 shadow-sm max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/40 text-amber-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
          🔎
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          Aucune question disponible pour ce filtre
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Essayez de changer le niveau ({selectedLevel}) ou la matière pour faire apparaître des quiz.
        </p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const subjectObj = SUBJECTS.find(s => s.id === currentQ.subjectKey);

  const handleSelectOption = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;

    const isCorrect = selectedOption === currentQ.correct;
    setIsSubmitted(true);

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        userIndex: selectedOption,
        correctIndex: currentQ.correct,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
      if (onQuizComplete) {
        onQuizComplete(score + (selectedOption === currentQ.correct ? 1 : 0), questions.length);
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setQuizFinished(false);
  };

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    let gradeMsg = "Continue tes efforts ! 💡";
    let badge = "Élève Studieux";
    if (percentage >= 90) {
      gradeMsg = "Félicitations ! Excellence Brevet ! 🏆";
      badge = "Major du Brevet 👑";
    } else if (percentage >= 70) {
      gradeMsg = "Très bon résultat ! Tu maîtrises ton sujet ! 👏";
      badge = "Expert du Collège 🏅";
    } else if (percentage >= 50) {
      gradeMsg = "Pas mal ! Encore quelques révisions pour viser le 20/20. 👍";
      badge = "Apprenti Brevet ⭐";
    }

    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl text-center space-y-6 animate-fade-in">
        <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto text-4xl shadow-lg shadow-amber-500/20 text-white">
          🏆
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 mb-2">
            Badge Débloqué : {badge}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Quiz Terminé !
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {gradeMsg}
          </p>
        </div>

        {/* Score Ring / Card */}
        <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-sm mx-auto flex justify-around items-center">
          <div>
            <span className="block text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {score} / {questions.length}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
              Bonnes réponses
            </span>
          </div>
          <div className="h-10 w-px bg-slate-300 dark:bg-slate-700"></div>
          <div>
            <span className="block text-4xl font-extrabold text-emerald-500">
              {percentage}%
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
              Taux de réussite
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleRestartQuiz}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-500/20"
          >
            <RotateCcw className="w-4 h-4" />
            Recommencer ce Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Top Bar: Progress & Subject Tag */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${subjectObj ? subjectObj.badgeColor : 'bg-slate-200 text-slate-800'}`}>
            {subjectObj ? subjectObj.name : currentQ.subjectKey}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Niveau {currentQ.level}
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs font-bold text-slate-600 dark:text-slate-400">
          <span>Question {currentIndex + 1} / {questions.length}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
        
        {/* Topic & Question Text */}
        <div>
          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            {currentQ.topic}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
            {currentQ.question}
          </h3>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {currentQ.options.map((optionText, idx) => {
            let optionStyle = "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500";
            let icon = null;

            if (selectedOption === idx) {
              optionStyle = "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/30 font-bold";
            }

            if (isSubmitted) {
              if (idx === currentQ.correct) {
                optionStyle = "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/30";
                icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
              } else if (selectedOption === idx && idx !== currentQ.correct) {
                optionStyle = "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-bold ring-2 ring-rose-500/30";
                icon = <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
              } else {
                optionStyle = "opacity-50 bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-500";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between text-sm sm:text-base ${optionStyle}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-xs">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{optionText}</span>
                </div>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Submit or Next Button */}
        <div className="pt-2 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedOption === null}
              className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md ${
                selectedOption !== null
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Valider ma réponse</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20 animate-bounce"
            >
              <span>{currentIndex + 1 < questions.length ? 'Question suivante' : 'Voir mon résultat final'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Explanation Card after submission */}
        {isSubmitted && (
          <div className="mt-6 p-5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2 animate-fade-in">
            <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <Lightbulb className="w-5 h-5 text-amber-600" />
              <span>Explication pédagogique :</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-7">
              {currentQ.explanation}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
