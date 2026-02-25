/**
 * =====================================================
 * DEPRESSIONSTEST - Modul
 * Selbsttest zur groben Einschätzung depressiver Symptome
 * Orientierung: PHQ-9 Struktur erweitert
 * =====================================================
 */

const DepressionTest = {
  testId: 'depression',
  testName: 'Depressionstest',
  testDescription: 'Grobe Einschätzung depressiver Symptome (40 Fragen)',
  
  // 4-stufige Antwortskala
  answerOptions: [
    { value: 0, label: 'Nie', color: '#22c55e' },
    { value: 1, label: 'An einzelnen Tagen', color: '#f59e0b' },
    { value: 2, label: 'An mehr als der Hälfte der Tage', color: '#f97316' },
    { value: 3, label: 'Fast täglich', color: '#ef4444' }
  ],

  // 40 wissenschaftlich strukturierte Fragen
  questions: [
    // === STIMMUNG (5 Fragen) ===
    { id: 1, category: 'Stimmung', question: 'Ich fühle mich niedergeschlagen oder traurig.' },
    { id: 2, category: 'Stimmung', question: 'Ich habe das Gefühl, eigentlich nicht mehr am Leben teilzunehmen.' },
    { id: 3, category: 'Stimmung', question: 'Alles erlebt mich grau und hoffnungslos an.' },
    { id: 4, category: 'Stimmung', question: 'Ich kann nichts finden, das mich freut.' },
    { id: 5, category: 'Stimmung', question: 'Meine Stimmung ist sehr labyrinthisch und unbeständig.' },

    // === ANTRIEB (5 Fragen) ===
    { id: 6, category: 'Antrieb', question: 'Mir fällt es schwer, mich zu alltäglichen Dingen aufzuraffen.' },
    { id: 7, category: 'Antrieb', question: 'Ich bin müde und erschöpft, selbst wenn ich ausreichend geschlafen habe.' },
    { id: 8, category: 'Antrieb', question: 'Ich habe weniger Energie als sonst.' },
    { id: 9, category: 'Antrieb', question: 'Aktivitäten, die mir früher Spaß gemacht haben, interessieren mich nicht mehr.' },
    { id: 10, category: 'Antrieb', question: 'Ich bin langsamer als gewöhnlich bei Gedanken und Handlungen.' },

    // === SCHLAF (5 Fragen) ===
    { id: 11, category: 'Schlaf', question: 'Ich habe Schwierigkeiten einzuschlafen.' },
    { id: 12, category: 'Schlaf', question: 'Ich wache nachts mehrmals auf und kann nicht wieder einschlafen.' },
    { id: 13, category: 'Schlaf', question: 'Ich wache sehr früh auf und kann nicht mehr einschlafen.' },
    { id: 14, category: 'Schlaf', question: 'Ich schlafe deutlich mehr als sonst.' },
    { id: 15, category: 'Schlaf', question: 'Mein Schlaf ist nicht erholsam.' },

    // === KONZENTRATION (5 Fragen) ===
    { id: 16, category: 'Konzentration', question: 'Ich kann mich nicht konzentrieren oder meine Gedanken abschweifen lassen.' },
    { id: 17, category: 'Konzentration', question: 'Mir fällt es schwer, Entscheidungen zu treffen.' },
    { id: 18, category: 'Konzentration', question: 'Ich kann mich schwer auf Aufgaben konzentrieren.' },
    { id: 19, category: 'Konzentration', question: 'Mein Gedächtnis ist schlechter geworden.' },
    { id: 20, category: 'Konzentration', question: 'Ich verliere leicht den Faden bei Gesprächen.' },

    // === SELBSTWERT (5 Fragen) ===
    { id: 21, category: 'Selbstwert', question: 'Ich fühle mich wertlos oder ein Versager.' },
    { id: 22, category: 'Selbstwert', question: 'Ich bin unzufrieden mit mir selbst.' },
    { id: 23, category: 'Selbstwert', question: 'Ich habe das Gefühl, für andere eine Last zu sein.' },
    { id: 24, category: 'Selbstwert', question: 'Ich traue mir nichts zu.' },
    { id: 25, category: 'Selbstwert', question: 'Ich kritisiere mich selbst ständig.' },

    // === HOFFNUNGSLOSIGKEIT (5 Fragen) ===
    { id: 26, category: 'Hoffnungslosigkeit', question: 'Ich sehe die Zukunft düster.' },
    { id: 27, category: 'Hoffnungslosigkeit', question: 'Ich glaube nicht, dass es mir in Zukunft besser gehen wird.' },
    { id: 28, category: 'Hoffnungslosigkeit', question: 'Ich fühle mich hoffnungslos.' },
    { id: 29, category: 'Hoffnungslosigkeit', question: 'Nichts wird sich jemals ändern.' },
    { id: 30, category: 'Hoffnungslosigkeit', question: 'Ich sehe keinen Ausweg aus meiner Situation.' },

    // === SUIZIDGEDANKEN (3 Fragen - sensibel formuliert) ===
    { id: 31, category: 'Suizidgedanken', question: 'Manchmal denke ich, dass es besser wäre, nicht zu leben.' },
    { id: 32, category: 'Suizidgedanken', question: 'Ich habe Gedanken, mir selbst Schaden zuzufügen.' },
    { id: 33, category: 'Suizidgedanken', question: 'Ich denke darüber nach, nicht mehr existieren zu wollen.' },

    // === SOZIALER RÜCKZUG (4 Fragen) ===
    { id: 34, category: 'Sozialer Rückzug', question: 'Ich möchte mich von anderen Menschen zurückziehen.' },
    { id: 35, category: 'Sozialer Rückzug', question: 'Ich habe weniger Lust auf soziale Kontakte.' },
    { id: 36, category: 'Sozialer Rückzug', question: 'Ich fühle mich von anderen isoliert oder unverstanden.' },
    { id: 37, category: 'Sozialer Rückzug', question: 'Ich habe das Gefühl, dass meine Familie oder Freunde mich nicht verstehen.' },

    // === PSYCHOSOMATISCHE SYMPTOME (3 Fragen) ===
    { id: 38, category: 'Psychosomatik', question: 'Ich habe körperliche Beschwerden wie Kopfschmerzen, Magenschmerzen oder Verspannungen.' },
    { id: 39, category: 'Psychosomatik', question: 'Mein Appetit hat sich verändert (zu viel oder zu wenig).' },
    { id: 40, category: 'Psychosomatik', question: 'Ich bin aggressiver oder reizbar als sonst.' }
  ],

  /**
   * Berechnet den Gesamtscore (0-120)
   */
  calculateScore(answers) {
    return Object.values(answers).reduce((sum, val) => sum + (val || 0), 0);
  },

  /**
   * Liefert die Interpretation der Score
   */
  getInterpretation(score) {
    if (score <= 15) {
      return {
        level: 'Minimal',
        color: '#22c55e',
        description: 'Minimal Symptome',
        text: 'Ihre Antworten deuten auf minimal depressive Symptome hin. Dies ist völlig normal und liegt im Bereich typischer Alltagserfahrungen.'
      };
    } else if (score <= 30) {
      return {
        level: 'Leicht',
        color: '#f59e0b',
        description: 'Leichte Symptome',
        text: 'Sie zeigen leichte Anzeichen depressiver Symptome. Dies ist relativ häufig, sollte aber im Blick behalten werden.'
      };
    } else if (score <= 50) {
      return {
        level: 'Moderat',
        color: '#f97316',
        description: 'Moderate Symptome',
        text: 'Ihre Symptome sind moderat belastend. Professionelle Unterstützung könnte sinnvoll sein.'
      };
    } else if (score <= 80) {
      return {
        level: 'Schwer',
        color: '#ef4444',
        description: 'Schwere Symptome',
        text: 'Sie zeigen schwere depressive Symptome. Es wird dringend empfohlen, professionelle Hilfe zu suchen.'
      };
    } else {
      return {
        level: 'Sehr schwer',
        color: '#991b1b',
        description: 'Sehr schwere Symptome',
        text: 'Ihre Symptome sind sehr belastend und beeinflussen bedeutsam Ihren Alltag. Dringende professionelle Hilfe wird empfohlen.'
      };
    }
  },

  /**
   * Medizinischer Hinweis (wird am Ende angezeigt)
   */
  medicalDisclaimer: `
    <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin-top: 2rem; border-radius: 8px;">
      <p style="margin: 0; font-weight: 600; color: #7f1d1d;">⚠️ Wichtiger Hinweis:</p>
      <p style="margin: 0.5rem 0 0 0; color: #5f3738; font-size: 0.95rem;">
        Dieser Test dient nur zur groben Orientierung und ersetzt keine medizinische Diagnose. Bei anhaltenden oder belastenden Beschwerden wenden Sie sich bitte an eine Ärztin, einen Arzt oder eine psychologische Fachperson.
      </p>
    </div>
  `
};
