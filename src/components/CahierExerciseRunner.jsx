import React, { useState, useEffect } from 'react';
import { MANUEL_EXERCISES, SUBJECTS } from '../data/questionsData';
import { BookOpen, PenTool, Eye, EyeOff, CheckCircle2, Trophy, Printer, Bookmark, Maximize2, Minimize2, ListFilter, PanelLeftClose, PanelLeftOpen, Sparkles } from 'lucide-react';

export default function CahierExerciseRunner({ selectedSubject, onExerciseComplete }) {
  const [activeSubject, setActiveSubject] = useState(selectedSubject || 'maths');
  const [activeChapter, setActiveChapter] = useState('all');
  
  // Exercise count (1, 2, 3, or 4 exercises simultaneously)
  const [exoCount, setExoCount] = useState(4); // Default 4 exercises

  // Collapsible Left Sidebar state (Menu Rétractable vers la gauche)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Target slot to edit (0 = Exo 1, 1 = Exo 2, 2 = Exo 3, 3 = Exo 4)
  const [activeTargetSlot, setActiveTargetSlot] = useState(0);

  // IDs for slots
  const [slot1Id, setSlot1Id] = useState(null);
  const [slot2Id, setSlot2Id] = useState(null);
  const [slot3Id, setSlot3Id] = useState(null);
  const [slot4Id, setSlot4Id] = useState(null);

  // Global solution toggles
  const [showSolutions, setShowSolutions] = useState({ 0: false, 1: false, 2: false, 3: false });
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [validatedExos, setValidatedExos] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Filter exercises by subject and chapter
  const subjectExos = MANUEL_EXERCISES.filter(e => e.subject === activeSubject);
  const chapters = Array.from(new Set(subjectExos.map(e => e.chapter)));

  const filteredExos = activeChapter === 'all'
    ? subjectExos
    : subjectExos.filter(e => e.chapter === activeChapter);

  // Fallbacks for slots
  const exo1 = MANUEL_EXERCISES.find(e => e.id === slot1Id) || filteredExos[0] || MANUEL_EXERCISES[0];
  const exo2 = MANUEL_EXERCISES.find(e => e.id === slot2Id) || filteredExos[1] || filteredExos[0] || MANUEL_EXERCISES[1];
  const exo3 = MANUEL_EXERCISES.find(e => e.id === slot3Id) || filteredExos[2] || filteredExos[0] || MANUEL_EXERCISES[2];
  const exo4 = MANUEL_EXERCISES.find(e => e.id === slot4Id) || filteredExos[3] || filteredExos[0] || MANUEL_EXERCISES[3];

  const activeSlots = [exo1, exo2, exo3, exo4].slice(0, exoCount);

  // Fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Auto-adapt exoCount à 2 maximum pour le Français afin d'afficher confortablement les textes littéraires
  useEffect(() => {
    if (activeSubject === 'francais' && exoCount > 2) {
      setExoCount(2);
      if (activeTargetSlot >= 2) setActiveTargetSlot(0);
    }
  }, [activeSubject]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Erreur plein écran: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleSelectExoForSlot = (exoId) => {
    if (activeTargetSlot === 0) setSlot1Id(exoId);
    else if (activeTargetSlot === 1) setSlot2Id(exoId);
    else if (activeTargetSlot === 2) setSlot3Id(exoId);
    else if (activeTargetSlot === 3) setSlot4Id(exoId);
  };

  const handleValidateExo = (exoId) => {
    setValidatedExos(prev => {
      const isAlready = !!prev[exoId];
      if (!isAlready && onExerciseComplete) {
        onExerciseComplete(50);
      }
      return { ...prev, [exoId]: !isAlready };
    });
  };

  const toggleGlobalSlotSolution = (slotIndex) => {
    setShowSolutions(prev => ({ ...prev, [slotIndex]: !prev[slotIndex] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`transition-all ${isFullscreen ? 'p-3 bg-slate-900 text-white min-h-screen fixed inset-0 z-50 overflow-y-auto' : 'max-w-7xl mx-auto'}`}>
      
      {/* Top Controls Bar avec Bouton Rétracter le Menu */}
      <div className="mb-3 p-3 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 text-white shadow-md flex items-center justify-between gap-2 border border-blue-500/30">
        <div className="flex items-center space-x-2">
          {/* BOUTON TOGGLE DU MENU RÉTRACTABLE VERS LA GAUCHE */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md transition-transform hover:scale-105"
            title={isSidebarOpen ? "Rétracter le menu à gauche" : "Ouvrir le menu à gauche"}
          >
            {isSidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
            <span>{isSidebarOpen ? 'Masquer le menu' : 'Ouvrir le menu'}</span>
          </button>

          <div className="hidden sm:block">
            <h3 className="font-black text-xs leading-tight">
              Collection Collège 3ème - {exoCount === 4 ? 'MODE 4 EXERCICES SUR LE MÊME ÉCRAN' : `${exoCount} Exercice(s)`}
            </h3>
          </div>
        </div>

        {/* Action Buttons: Sélecteur de 1, 2, 3 ou 4 Exercices */}
        <div className="flex items-center space-x-2">
          <div className="bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/20 flex items-center space-x-1 text-[10px]">
            <span className="font-bold text-amber-300 px-1">Grille :</span>
            {(activeSubject === 'francais' ? [1, 2] : [1, 2, 3, 4]).map((count) => (
              <button
                key={count}
                onClick={() => {
                  setExoCount(count);
                  if (activeTargetSlot >= count) setActiveTargetSlot(0);
                }}
                className={`px-2.5 py-1 rounded-lg font-black transition-all ${
                  exoCount === count
                    ? 'bg-amber-400 text-slate-950 shadow-sm scale-105'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {count === 4 ? '4 Exos (Grille 2x2)' : `${count} Exo`}
              </button>
            ))}
            {activeSubject === 'francais' && (
              <span className="text-[9px] font-bold text-amber-200 px-1 italic">
                (Max 2 Exos en Français)
              </span>
            )}
          </div>

          <button
            onClick={toggleFullscreen}
            className={`px-3 py-1.5 rounded-xl text-[10px] font-bold border flex items-center gap-1 transition-all ${
              isFullscreen ? 'bg-slate-950 text-amber-400 border-amber-400' : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
            }`}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5 text-amber-300" />}
            <span>{isFullscreen ? 'Quitter' : 'Plein Écran'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold border border-white/30 flex items-center gap-1 transition-all print:hidden"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer</span>
          </button>
        </div>
      </div>

      {/* DISPOSITION DYNAMIQUE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        
        {/* COLONNE LATÉRALE GAUCHE RÉTRACTABLE */}
        {isSidebarOpen && (
          <div className="lg:col-span-3 space-y-3 bg-white dark:bg-slate-800/95 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-lg print:hidden animate-fade-in transition-all">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
              <div className="flex items-center space-x-1.5">
                <ListFilter className="w-4 h-4 text-blue-500" />
                <h3 className="font-black text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                  Menu Navigation
                </h3>
              </div>

              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                title="Rétracter le menu"
              >
                ◀ Masquer
              </button>
            </div>

            {/* SELECTEUR EXO À MODIFIER */}
            {exoCount > 1 && (
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 space-y-1.5">
                <span className="block text-[10px] font-black text-amber-900 dark:text-amber-200 uppercase tracking-wider">
                  Quel exercice modifier ?
                </span>
                <div className="grid grid-cols-2 gap-1 text-[10px]">
                  {[1, 2, 3, 4].slice(0, exoCount).map((num, slotIdx) => (
                    <button
                      key={num}
                      onClick={() => setActiveTargetSlot(slotIdx)}
                      className={`py-1.5 px-2 rounded-lg font-black transition-all border ${
                        activeTargetSlot === slotIdx
                          ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      Exo #{num}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 1. MATIERE */}
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-slate-600 dark:text-slate-400">
                1. Choisir la Matière :
              </span>
              <div className="space-y-1 max-h-[140px] overflow-y-auto pr-0.5">
                {SUBJECTS.map((subj) => {
                  const isActive = subj.id === activeSubject;
                  return (
                    <button
                      key={subj.id}
                      onClick={() => {
                        setActiveSubject(subj.id);
                        setActiveChapter('all');
                      }}
                      className={`w-full text-left p-1.5 px-2 rounded-lg border font-bold text-[10px] truncate transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                      }`}
                    >
                      {subj.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. CHAPITRE */}
            {chapters.length > 0 && (
              <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-700">
                <span className="block text-[10px] font-bold text-slate-600 dark:text-slate-400">
                  2. Choisir le Chapitre :
                </span>
                <div className="space-y-1 max-h-[120px] overflow-y-auto pr-0.5">
                  <button
                    onClick={() => setActiveChapter('all')}
                    className={`w-full text-left p-1 px-2 rounded-lg border text-[9px] font-bold ${
                      activeChapter === 'all'
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900'
                        : 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    Tous les chapitres
                  </button>
                  {chapters.map((chap) => (
                    <button
                      key={chap}
                      onClick={() => setActiveChapter(chap)}
                      className={`w-full text-left p-1 px-2 rounded-lg border text-[9px] font-bold truncate ${
                        activeChapter === chap
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                      }`}
                    >
                      {chap}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. AFFECTATION SUJET */}
            <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-700">
              <span className="block text-[10px] font-black text-blue-600 dark:text-blue-400">
                3. Cliquez pour affecter à l'Exo #{activeTargetSlot + 1} :
              </span>
              <div className="space-y-1 max-h-[220px] overflow-y-auto pr-0.5">
                {filteredExos.map((exo) => {
                  const currentSlotExoId = activeSlots[activeTargetSlot]?.id;
                  const isSelectedForTarget = currentSlotExoId === exo.id;
                  const isDone = validatedExos[exo.id];
                  return (
                    <button
                      key={exo.id}
                      onClick={() => handleSelectExoForSlot(exo.id)}
                      className={`w-full text-left p-1.5 px-2 rounded-lg border text-[10px] flex items-center justify-between transition-all ${
                        isSelectedForTarget
                          ? 'bg-amber-400 text-slate-950 border-amber-400 font-black shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                      }`}
                    >
                      <span className="truncate">{exo.title}</span>
                      {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* CONTENU PRINCIPAL À DROITE */}
        <div className={`${isSidebarOpen ? 'lg:col-span-9' : 'lg:col-span-12'} transition-all duration-300 ${isFullscreen ? 'h-[calc(100vh-70px)]' : 'h-[calc(100vh-140px)]'} flex flex-col`}>
          
          {/* GRILLE D'EXERCICES AVEC TAILLE DE POLICE DYNAMIQUE ADAPTÉE AU NOMBRE D'EXERCICES */}
          <div className={`grid gap-2 flex-1 h-full min-h-0 ${
            exoCount === 4 
              ? 'grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-full' 
              : exoCount === 2 
                ? 'grid-cols-1 xl:grid-cols-2 h-full' 
                : exoCount === 3 
                  ? 'grid-cols-1 xl:grid-cols-3 h-full' 
                  : 'grid-cols-1 h-full'
          }`}>
            
            {activeSlots.map((exoItem, slotIndex) => {
              if (!exoItem) return null;
              const isGlobalSolRevealed = showSolutions[slotIndex];
              const isTargetingThisSlot = activeTargetSlot === slotIndex && exoCount > 1;

              // Tailles de police et espacements épurés pour un visuel moderne et lisible
              const cardPadding = exoCount === 4 ? 'p-2.5 sm:p-3' : exoCount === 3 ? 'p-3' : 'p-4 sm:p-5';
              const titleSize = exoCount === 1 ? 'text-lg sm:text-xl' : exoCount === 2 ? 'text-base' : 'text-xs sm:text-sm';
              const statementMargin = exoCount === 4 ? 'my-1 p-2' : exoCount === 3 ? 'my-1.5 p-2 sm:p-2.5' : 'my-2 p-3';
              const statementSize = exoCount === 1 ? 'text-sm sm:text-base' : exoCount === 2 ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs leading-tight font-medium';
              const quoteSize = exoCount === 1 ? 'text-sm max-h-[200px]' : 'text-xs max-h-[120px]';
              const qNumSize = exoCount === 4 ? 'w-3.5 h-3.5 text-[9px]' : 'w-4 h-4 text-[10px]';
              const qTextSize = exoCount === 4 ? 'text-[11px] sm:text-xs leading-tight font-medium' : 'text-xs sm:text-sm leading-snug font-medium';
              const qItemPadding = exoCount === 4 ? 'py-0.5 px-1.5' : 'py-1 px-2';
              const qGridGap = exoCount === 4 ? 'gap-0.5' : 'gap-1';
              const correctionSize = exoCount === 4 ? 'text-[10px] p-1.5' : 'text-xs p-2';
              const badgeSize = 'text-[10px] px-2 py-0.5';
              const btnSize = 'text-xs px-2.5 py-1';

              return (
                <div 
                  key={`${exoItem.id}-${slotIndex}`}
                  onClick={() => setActiveTargetSlot(slotIndex)}
                  className={`bg-slate-900 text-slate-100 rounded-2xl ${cardPadding} border shadow-lg flex flex-col justify-between h-full transition-all cursor-pointer overflow-hidden ${
                    isTargetingThisSlot
                      ? 'border-amber-400/90 ring-2 ring-amber-400/30 shadow-amber-500/10'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* En-tête minimaliste de la carte */}
                  <div className="border-b border-slate-800 pb-1.5 flex items-center justify-between gap-2 flex-shrink-0">
                    <div className="truncate space-y-0.5">
                      <span className={`${badgeSize} font-bold rounded-md ${isTargetingThisSlot ? 'bg-amber-400 text-slate-950 font-extrabold' : 'bg-blue-500/20 text-blue-300'}`}>
                        Exercice #{slotIndex + 1} {isTargetingThisSlot ? '(Sélectionné)' : ''}
                      </span>
                      <h2 className={`${titleSize} font-bold text-white truncate`}>
                        {exoItem.title}
                      </h2>
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); toggleGlobalSlotSolution(slotIndex); }}
                      className={`${btnSize} rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold flex items-center gap-1.5 flex-shrink-0 transition-all shadow-sm`}
                    >
                      {isGlobalSolRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isGlobalSolRevealed ? 'Masquer' : 'Voir la correction'}</span>
                    </button>
                  </div>

                  {/* Énoncé / Texte Littéraire d'étude (Épuré) */}
                  <div className={`${statementMargin} rounded-r-lg bg-slate-950/70 border-l-2 border-amber-400 flex-shrink-0`}>
                    {exoItem.subject === 'francais' || exoItem.readingText ? (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-amber-300 font-bold text-xs uppercase tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                            Texte littéraire d'étude :
                          </span>
                          {exoItem.year && <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">{exoItem.year}</span>}
                        </div>
                        <blockquote className={`font-serif italic ${quoteSize} text-slate-200 leading-relaxed bg-slate-900/60 p-2 rounded border border-slate-800 overflow-y-auto`}>
                          "{exoItem.readingText || exoItem.statement}"
                        </blockquote>
                        {exoItem.author && (
                          <div className="text-xs font-bold text-right text-amber-300 italic">
                            — {exoItem.author}, <span className="underline">{exoItem.work}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className={`${statementSize} text-slate-200 leading-relaxed`}>
                        {exoItem.statement}
                      </p>
                    )}
                  </div>

                  {/* LES 10 QUESTIONS (Liste épurée et aérée) */}
                  <div className="flex-1 flex flex-col justify-between min-h-0 overflow-hidden">
                    <div className={`grid grid-cols-1 ${qGridGap} flex-1 h-full min-h-0`}>
                      {exoItem.questions.map((q, qIdx) => {
                        return (
                          <div key={qIdx} className={`${qItemPadding} rounded-md bg-slate-950/40 hover:bg-slate-800/40 flex flex-col justify-center flex-1 space-y-0.5 w-full min-h-0 transition-colors`}>
                            <div className="flex items-center space-x-2 w-full min-w-0">
                              <span className={`${qNumSize} rounded bg-blue-600/90 text-white flex items-center justify-center flex-shrink-0 font-bold`}>
                                {qIdx + 1}
                              </span>
                              <p className={`text-slate-100 ${qTextSize} flex-1 truncate sm:whitespace-normal`}>
                                {q.text}
                              </p>
                            </div>

                            {isGlobalSolRevealed && (
                              <div className={`rounded-r-md bg-amber-400/10 border-l-2 border-amber-400 text-amber-200 font-mono leading-relaxed ${correctionSize} w-full mt-0.5`}>
                                {q.correction}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}
