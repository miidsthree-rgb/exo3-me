import React, { useState } from 'react';
import { STEP_EXERCISES_3EME, SUBJECTS } from '../data/questionsData';
import { HelpCircle, Eye, EyeOff, CheckCircle2, Sparkles, Trophy } from 'lucide-react';

export default function StepExerciseRunner({ selectedSubject, onExerciseComplete }) {
  const [activeExoIndex, setActiveExoIndex] = useState(0);
  const [revealedHints, setRevealedHints] = useState({});
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});

  const filteredExos = selectedSubject
    ? STEP_EXERCISES_3EME.filter(e => e.subject === selectedSubject)
    : STEP_EXERCISES_3EME;

  if (filteredExos.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center space-y-4 max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
          📝
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          Pas d'exercice de rédaction spécifique pour cette matière actuellement
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Revenez sur "Toutes les matières" ou sélectionnez Mathématiques, Français ou Histoire-Géo pour traiter des épreuves types du Brevet 3ème.
        </p>
      </div>
    );
  }

  const currentExo = filteredExos[activeExoIndex];
  const subjectObj = SUBJECTS.find(s => s.id === currentExo.subject);

  const toggleHint = (stepIdx) => {
    setRevealedHints(prev => ({ ...prev, [stepIdx]: !prev[stepIdx] }));
  };

  const toggleSolution = (stepIdx) => {
    setRevealedSolutions(prev => ({ ...prev, [stepIdx]: !prev[stepIdx] }));
  };

  const markStepDone = (stepIdx) => {
    setCompletedSteps(prev => {
      const next = { ...prev, [stepIdx]: true };
      if (Object.keys(next).length === currentExo.steps.length && onExerciseComplete) {
        onExerciseComplete(currentExo.points);
      }
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header Selector for exercises */}
      <div className="flex flex-wrap gap-2">
        {filteredExos.map((exo, idx) => (
          <button
            key={exo.id}
            onClick={() => {
              setActiveExoIndex(idx);
              setRevealedHints({});
              setRevealedSolutions({});
              setCompletedSteps({});
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
              idx === activeExoIndex
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
            }`}
          >
            Sujet #{idx + 1} - {exo.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Main Exercise Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
        
        {/* Title & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700/60 pb-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${subjectObj ? subjectObj.badgeColor : 'bg-slate-200 text-slate-800'}`}>
                {subjectObj ? subjectObj.name : currentExo.subject}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                {currentExo.level}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {currentExo.title}
            </h2>
          </div>

          <div className="flex items-center space-x-1.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-xl text-xs font-bold">
            <Trophy className="w-4 h-4 text-indigo-500" />
            <span>{currentExo.points} points DNB</span>
          </div>
        </div>

        {/* Énoncé Box */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
          <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            Énoncé du sujet :
          </h3>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium whitespace-pre-line leading-relaxed">
            {currentExo.statement}
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-6 pt-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Questions et résolution guidée :
          </h3>

          {currentExo.steps.map((step, idx) => {
            const isDone = completedSteps[idx];

            return (
              <div 
                key={idx} 
                className={`p-5 rounded-2xl border transition-all ${
                  isDone 
                    ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800' 
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                }`}
              >
                {/* Question header */}
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                    {step.question}
                  </h4>

                  <button
                    onClick={() => markStepDone(idx)}
                    className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                      isDone
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:border-emerald-500'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isDone ? 'Résolu ✔' : 'Marquer comme fait'}</span>
                  </button>
                </div>

                {/* Hint Button & Box */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => toggleHint(idx)}
                    className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>{revealedHints[idx] ? 'Masquer l\'indice' : 'Besoin d\'un indice ?'}</span>
                  </button>

                  <button
                    onClick={() => toggleSolution(idx)}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    {revealedSolutions[idx] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{revealedSolutions[idx] ? 'Masquer la correction' : 'Voir la correction détaillée'}</span>
                  </button>
                </div>

                {/* Revealed Hint */}
                {revealedHints[idx] && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 animate-fade-in">
                    <strong>💡 Indice :</strong> {step.hint}
                  </div>
                )}

                {/* Revealed Solution */}
                {revealedSolutions[idx] && (
                  <div className="mt-3 p-4 rounded-xl bg-indigo-50/90 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-sm text-indigo-950 dark:text-indigo-200 space-y-1 animate-fade-in">
                    <strong className="block text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400">
                      Correction étape par étape :
                    </strong>
                    <p className="whitespace-pre-line leading-relaxed font-mono text-xs sm:text-sm">
                      {step.solution}
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
