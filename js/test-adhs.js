/**
 * =====================================================
 * ADHS-TEST - Modul
 * Strukturierter ADHS-Screening-Test (Jugendliche & Erwachsene)
 * Orientierung: DSM-5-Symptomcluster
 * =====================================================
 */

const ADHSTest = {
  testId: 'adhs',
  testName: 'ADHS-Test',
  testDescription: 'ADHS-Screening für Jugendliche & Erwachsene (40 Fragen)',

  // 5-stufige Antwortskala für mehr Differenzierung
  answerOptions: [
    { value: 0, label: 'Nie', color: '#22c55e' },
    { value: 1, label: 'Selten', color: '#84cc16' },
    { value: 2, label: 'Manchmal', color: '#f59e0b' },
    { value: 3, label: 'Häufig', color: '#f97316' },
    { value: 4, label: 'Sehr häufig', color: '#ef4444' }
  ],

  // 40 Fragen zu den 5 Problembereichen (8 pro Bereich)
  questions: [
    // === UNAUFMERKSAMKEIT (8 Fragen) ===
    { id: 1, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Ich habe Schwierigkeiten, auf Details zu achten.' },
    { id: 2, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Mir fällt es schwer, mich über längere Zeit auf Aufgaben zu konzentrieren.' },
    { id: 3, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Ich verliere leicht den Faden bei Gesprächen oder beim Lesen.' },
    { id: 4, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Wichtige Aufgaben bleiben unvollständig, weil ich mich nicht konzentrieren kann.' },
    { id: 5, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Ich werde leicht durch äußere Reize abgelenkt.' },
    { id: 6, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Mir ist es schwer, Anweisungen zu folgen.' },
    { id: 7, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Ich vergesse häufig alltägliche Aufgaben oder Verpflichtungen.' },
    { id: 8, category: 'Unaufmerksamkeit', subcategory: 'Unaufmerksamkeit', question: 'Ich mache Flüchtigkeitsfehler bei der Arbeit oder in der Schule.' },

    // === HYPERAKTIVITÄT (8 Fragen) ===
    { id: 9, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich bin ständig in Bewegung oder kann schwer stillsitzen.' },
    { id: 10, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich zappele mit meinen Händen oder Füßen.' },
    { id: 11, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich verlasse oft meinen Sitz, wenn ich sitzen sollte.' },
    { id: 12, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich kann schwer ruhige Aktivitäten ausführen.' },
    { id: 13, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich fühle mich innere Unruhe oder Rastlosigkeit.' },
    { id: 14, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich rede mehr als andere oder es fällt mir schwer zu schweigen.' },
    { id: 15, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich bin impulsiv dabei, mich auf Aktivitäten einzulassen.' },
    { id: 16, category: 'Hyperaktivität', subcategory: 'Hyperaktivität', question: 'Ich bin ständig "in Aktion" oder "auf Sparflammen".' },

    // === IMPULSIVITÄT (8 Fragen) ===
    { id: 17, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Ich sage oder mache Dinge, ohne nachzudenken.' },
    { id: 18, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Ich schneide anderen im Gespräch das Wort ab.' },
    { id: 19, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Ich habe Schwierigkeiten, zu warten, bis ich dran bin.' },
    { id: 20, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Ich treffe ich schnelle Entscheidungen, die ich später bereue.' },
    { id: 21, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Ich bin leicht reizbar oder temperamentvoll.' },
    { id: 22, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Ich handle ohne die Konsequenzen zu bedenken.' },
    { id: 23, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Meine Stimmung wechselt schnell und heftig.' },
    { id: 24, category: 'Impulsivität', subcategory: 'Impulsivität', question: 'Ich platze oft mit Antworten heraus, ohne abzuwarten.' },

    // === ORGANISATIONSPROBLEME (8 Fragen) ===
    { id: 25, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Mir fällt es schwer, zu planen und zu organisieren.' },
    { id: 26, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Ich verliere häufig wichtige Gegenstände (Schlüssel, Dokumente, etc.).' },
    { id: 27, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Mein Arbeitsplatz oder Zimmer ist chaotisch und unorganisiert.' },
    { id: 28, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Mir fällt es schwer, Fristen einzuhalten.' },
    { id: 29, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Ich vergesse Termine und Verpflichtungen.' },
    { id: 30, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Ich habe Schwierigkeiten, mehrstufige Aufgaben zu strukturieren.' },
    { id: 31, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Ich prokrastiniere häufig.' },
    { id: 32, category: 'Organisation', subcategory: 'Organisationsprobleme', question: 'Ich kann keine Prioritäten setzen.' },

    // === ALLTAGSBEEINTRÄCHTIGUNG (8 Fragen) ===
    { id: 33, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Diese Symptome beeinträchtigen meine schulische oder berufliche Leistung.' },
    { id: 34, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Diese Symptome beeinträchtigen meine sozialen Beziehungen.' },
    { id: 35, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Diese Symptome beeinträchtigen meine Familie und mein Zuhause.' },
    { id: 36, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Diese Symptome beeinträchtigen meine Freizeit und Hobbys.' },
    { id: 37, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Ich fühle mich in meinen Fähigkeiten beeinträchtigt.' },
    { id: 38, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Mein Selbstvertrauen leidet unter diesen Symptomen.' },
    { id: 39, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Ich vermute, dass diese Symptome vermutlich schon seit meiner Kindheit bestehen.' },
    { id: 40, category: 'Alltagsauswirkungen', subcategory: 'Alltagsbeeinträchtigung', question: 'Meine Familie oder enge Personen haben mir schon gesagt, dass ich diese Symptome zeige.' }
  ],

  /**
   * Berechnet Subscores für jede Kategorie
   */
  calculateSubscores(answers) {
    const categories = {};
    this.questions.forEach(q => {
      if (!categories[q.subcategory]) {
        categories[q.subcategory] = 0;
      }
      categories[q.subcategory] += answers[q.id] || 0;
    });
    return categories;
  },

  /**
   * Berechnet Gesamtscore (0-160)
   */
  calculateScore(answers) {
    return Object.values(answers).reduce((sum, val) => sum + (val || 0), 0);
  },

  /**
   * Liefert die Interpretation des Scores
   */
  getInterpretation(score) {
    if (score <= 32) {
      return {
        level: 'Gering',
        color: '#22c55e',
        description: 'Geringe Symptomausprägung',
        text: 'Ihre Antworten deuten auf geringe ADHS-Symptome hin.'
      };
    } else if (score <= 64) {
      return {
        level: 'Leicht-Moderat',
        color: '#f59e0b',
        description: 'Leicht bis moderate Symptomausprägung',
        text: 'Sie zeigen leicht bis mäßig ausgeprägte ADHS-Symptome. Professionelle Evaluation wird empfohlen.'
      };
    } else if (score <= 96) {
      return {
        level: 'Moderat-Schwer',
        color: '#f97316',
        description: 'Mäßig bis schwere Symptomausprägung',
        text: 'Ihre Symptome sind deutlich. Professionelle Unterstützung wird dringend empfohlen.'
      };
    } else {
      return {
        level: 'Schwer',
        color: '#ef4444',
        description: 'Schwere Symptomausprägung',
        text: 'Sie zeigen erhebliche ADHS-Symptome. Eine psychiatrische Bewertung durch einen Fachmann wird dringend empfohlen.'
      };
    }
  },

  /**
   * Medizinischer Hinweis
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
