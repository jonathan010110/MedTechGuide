/**
 * =====================================================
 * PERSÖNLICHKEITSTEST - MBTI-System
 * Vollständiger Persönlichkeitstest nach MBTI-Modell
 * 4 Dimensionen mit je 10 Fragen
 * =====================================================
 */

const PersonalityTest = {
  testId: 'personality',
  testName: 'Persönlichkeitstest (MBTI)',
  testDescription: 'Persönlichkeitstest nach dem MBTI-Modell (40 Fragen)',

  // 5-stufige Likert-Skala
  answerOptions: [
    { value: -2, label: 'Stimme überhaupt nicht zu', color: '#ef4444' },
    { value: -1, label: 'Eher nicht', color: '#f59e0b' },
    { value: 0, label: 'Neutral', color: '#6b7280' },
    { value: 1, label: 'Eher ja', color: '#84cc16' },
    { value: 2, label: 'Stimme sehr zu', color: '#22c55e' }
  ],

  // 40 Fragen - 10 pro Dimension
  questions: [
    // === EXTRAVERSION (E) vs. INTROVERSION (I) - 10 Fragen ===
    { id: 1, dimension: 'EI', polarity: 'E', question: 'Ich genieße Großveranstaltungen und bin gerne unter vielen Menschen.' },
    { id: 2, dimension: 'EI', polarity: 'I', question: 'Ich brauche viel Zeit allein, um aufzutanken.' },
    { id: 3, dimension: 'EI', polarity: 'E', question: 'Ich liebe neue Menschen kennenzulernen und freunde mich schnell an.' },
    { id: 4, dimension: 'EI', polarity: 'I', question: 'Ich fühle mich in eins-zu-eins-Gesprächen wohler als in Gruppen.' },
    { id: 5, dimension: 'EI', polarity: 'E', question: 'Ich rede gerne und kann von mir selbst erzählen.' },
    { id: 6, dimension: 'EI', polarity: 'I', question: 'Ich denke lieber nach als zu reden.' },
    { id: 7, dimension: 'EI', polarity: 'E', question: 'Mich spricht es an, spontan etwas zu unternehmen.' },
    { id: 8, dimension: 'EI', polarity: 'I', question: 'Ich verbringe gerne Zeit mit meinen engsten Vertrauten.' },
    { id: 9, dimension: 'EI', polarity: 'E', question: 'Ich bin die lebendige Seele auf Partys und Treffen.' },
    { id: 10, dimension: 'EI', polarity: 'I', question: 'Ich zünde mich lieber in Bücher oder Hobbys ein, als auszugehen.' },

    // === SENSING (S) vs. INTUITION (N) - 10 Fragen ===
    { id: 11, dimension: 'SN', polarity: 'S', question: 'Ich vertraue auf konkrete Fakten und praktische Erfahrungen.' },
    { id: 12, dimension: 'SN', polarity: 'N', question: 'Ich sehe gerne größere Muster und Zusammenhänge.' },
    { id: 13, dimension: 'SN', polarity: 'S', question: 'Ich mag klare Anweisungen und bewährte Wege.' },
    { id: 14, dimension: 'SN', polarity: 'N', question: 'Ich träume gerne von Möglichkeiten und der Zukunft.' },
    { id: 15, dimension: 'SN', polarity: 'S', question: 'Details sind mir wichtig und ich bemerke sie normalerweise.' },
    { id: 16, dimension: 'SN', polarity: 'N', question: 'Ich verliere mich gerne in abstrakten Ideen und Theorien.' },
    { id: 17, dimension: 'SN', polarity: 'S', question: 'Ich konzentriere mich auf das Hier und Jetzt.' },
    { id: 18, dimension: 'SN', polarity: 'N', question: 'Ich habe oft intuitive Hunches, die sich später als richtig erweisen.' },
    { id: 19, dimension: 'SN', polarity: 'S', question: 'Ich mag praktische, handfeste Probleme lösen.' },
    { id: 20, dimension: 'SN', polarity: 'N', question: 'Ich liebe konzeptionelle und kreative Herausforderungen.' },

    // === THINKING (T) vs. FEELING (F) - 10 Fragen ===
    { id: 21, dimension: 'TF', polarity: 'T', question: 'Ich treffe Entscheidungen logisch basierend auf Fakten.' },
    { id: 22, dimension: 'TF', polarity: 'F', question: 'Ich berücksichtige Gefühle und Beziehungen bei Entscheidungen.' },
    { id: 23, dimension: 'TF', polarity: 'T', question: 'Kritik ist für mich sachlich und hat nichts mit mir persönlich zu tun.' },
    { id: 24, dimension: 'TF', polarity: 'F', question: 'Ich bin empfindlich gegenüber Kritik an mir.' },
    { id: 25, dimension: 'TF', polarity: 'T', question: 'Ich bevorzuge Effizienz und Leistung über Harmonie.' },
    { id: 26, dimension: 'TF', polarity: 'F', question: 'Harmonie in Beziehungen ist mir sehr wichtig.' },
    { id: 27, dimension: 'TF', polarity: 'T', question: 'Ich stelle gerne Fragen und sei skeptisch gegenüber Annahmen.' },
    { id: 28, dimension: 'TF', polarity: 'F', question: 'Ich sympathisiere leicht mit anderen Menschen.' },
    { id: 29, dimension: 'TF', polarity: 'T', question: 'Ich zerlege Probleme mit analytischer Strenge.' },
    { id: 30, dimension: 'TF', polarity: 'F', question: 'Ich orientiere mich an Werten und tieferen Bedeutungen.' },

    // === JUDGING (J) vs. PERCEIVING (P) - 10 Fragen ===
    { id: 31, dimension: 'JP', polarity: 'J', question: 'Ich liebe Pläne und Strukturen.' },
    { id: 32, dimension: 'JP', polarity: 'P', question: 'Ich bin flexibel und improvisiere gerne.' },
    { id: 33, dimension: 'JP', polarity: 'J', question: 'Ich möchte Dinge erledigt haben und abschließen.' },
    { id: 34, dimension: 'JP', polarity: 'P', question: 'Ich behalte gerne Optionen offen.' },
    { id: 35, dimension: 'JP', polarity: 'J', question: 'Ich arbeite besser mit Deadline und Struktur.' },
    { id: 36, dimension: 'JP', polarity: 'P', question: 'Ich arbeite besser unter Zeitdruck und Spontaneität.' },
    { id: 37, dimension: 'JP', polarity: 'J', question: 'Ich bin organisiert und plane voraus.' },
    { id: 38, dimension: 'JP', polarity: 'P', question: 'Ich bin spontan und lebe eher im Moment.' },
    { id: 39, dimension: 'JP', polarity: 'J', question: 'Ich mag klare eindeutige Ergebnisse.' },
    { id: 40, dimension: 'JP', polarity: 'P', question: 'Ich halte gerne mehrere Wege offen und entscheide mich spät.' }
  ],

  // MBTI Typen und ihre Beschreibungen
  types: {
    ENTJ: {
      name: 'Der Stratege (ENTJ)',
      strength: '🎯 Strategisch, Führend, Ehrgeiziger, Entschlossener',
      challenges: '⚠️ Ungeduldig, Direkt, Fokus nur auf Effizienz',
      workplace: 'Management, Strategische Planung, Unternehmertum',
      description: 'ENTJs sind natürliche Anführer mit strategischem Verstand. Sie lieben Herausforderungen und arbeiten effizient auf Ziele hin.'
    },
    ENTJ: {
      name: 'Der Stratege (ENTJ)',
      strength: '🎯 Strategisch, Führend, Ehrgeiziger, Entschlossener',
      challenges: '⚠️ Ungeduldig, Direkt, Fokus nur auf Effizienz',
      workplace: 'Management, Strategische Planung, Unternehmertum',
      description: 'ENTJs sind natürliche Anführer mit strategischem Verstand. Sie lieben Herausforderungen und arbeiten effizient auf Ziele hin.'
    },
    INTJ: {
      name: 'Der Architekt (INTJ)',
      strength: '🏗️ Visionar, Unabhängig, Planungsorientiert, Intellektuello',
      challenges: '⚠️ Zu kritisch, Unflexibel, Kann emotionale Nuancen übersehen',
      workplace: 'Wissenschaft, Forschung, Strategische Analysen, Softwareentwicklung',
      description: 'INTJs sind visionäre Denker, die komplexe Systeme durchschauen. Sie sind unabhängig und zielbewusst.'
    },
    ENTP: {
      name: 'Der Visionar (ENTP)',
      strength: '⚡ Kreativ, Debattierfreudig, flexibel, Innovativer',
      challenges: '⚠️ Verliert Fokus, Ungeduldig, Kann andere reizen mit Debaten',
      workplace: 'Unternehmertum, Consulting, Produktentwicklung, Vertrieb',
      description: 'ENTPs sind clever und voller Ideen. Sie lieben Debatten und kreative Herausforderungen.'
    },
    INTP: {
      name: 'Der Denker (INTP)',
      strength: '🧠 Logisch, Analytischer, Unabhängiger, Origineller',
      challenges: '⚠️ Kann sozial unbeholfen sein, Perfektionist, Prokrastiniert',
      workplace: 'Forschung, Programmierung, Akademie, Wissenschaft',
      description: 'INTPs sind tiefe Denker und Problemlöser. Sie lieben Logik und sind oft Pioniere in ihren Bereichen.'
    },
    ESFJ: {
      name: 'Der Konsul (ESFJ)',
      strength: '💙 Warmherzig, Verantwortungsvoll, Kontaktfreudig, Unterstützender',
      challenges: '⚠️ Kann zu geschwätzig sein, Braucht viel Bestätigung, Unhaft neuer Ideen',
      workplace: 'Bildung, Pflege, Soziales, HR',
      description: 'ESFJs sind warmherzig und verantwortungsvoll. Sie kümmern sich um andere und mögen Strukturen.'
    },
    ISFJ: {
      name: 'Der Beschützer (ISFJ)',
      strength: '🛡️ Zuverlässig, Geduldig, Unterstützender, Praktischer',
      challenges: '⚠️ Zu zurückhaltend, Kann Ärger anstauen, Schwer mit Kritik',
      workplace: 'Pflege, Bildung, Administration, Sozialarbeit',
      description: 'ISFJs sind zuverlässige Helfer. Sie arbeiten gerne mit Details und achten auf andere.'
    },
    ESFP: {
      name: 'Der Entertainer (ESFP)',
      strength: '🎉 Lebhaft, Spontan, Kontaktfreudig, Präsenter',
      challenges: '⚠️ Kann oberflächlich sein, Schwierigkeiten mit langen Frist-Aufgaben',
      workplace: 'Event-Management, Verkauf, Entertainment, Marketing',
      description: 'ESFPs sind die Lebenskünstler. Sie lieben Action, Menschen und leben im Hier und Jetzt.'
    },
    ISFP: {
      name: 'Der Abenteurer (ISFP)',
      strength: '🎨 Künstlerisch, Flexibel, Sensitiv, Abenteuerlustig',
      challenges: '⚠️ Kann sich zu emotional in Dinge verfangen, Schwierigkeiten mit Hierachien',
      workplace: 'Kunst, Design, Handwerk, Coaching, Adventure Tourism',
      description: 'ISFPs sind sensible und künstlerische Geister. Sie leben nach ihren Werten und genießen die Vielfalt.'
    },
    ESTJ: {
      name: 'Der Logistiker (ESTJ)',
      strength: '📋 Organisiert, Verantwortungsvoll, Treuer, Hardworker',
      challenges: '⚠️ Kann zu rigid sein, Schwierigkeiten mit unkonventionellen Ideen',
      workplace: 'Management, Militär, Verwaltung, Handwerk',
      description: 'ESTJs sind praktische Organisatoren. Sie lieben Regeln, Effizienz und klare Hierarchien.'
    },
    ISTJ: {
      name: 'Der Logistiker (ISTJ)',
      strength: '⚙️ Verantwortungsvoll, Praktisch, Loyal, Gründlic',
      challenges: '⚠️ Kann zu steif sein, Schwierigkeiten mit Veränderungen',
      workplace: 'Buchhaltung, Ingenieurwesen, IT, Administration',
      description: 'ISTJs sind pflichtbewusst und zuverlässig. Sie arbeiten methodisch und wertschätzen Stabilität.'
    },
    ESTP: {
      name: 'Der Unternehmer (ESTP)',
      strength: '🚀 Wagemutig, Pragmatisch, Charismativ, Risikobereiter',
      challenges: '⚠️ Kann rücksichtslos sein, Schwierigkeiten mit Planung',
      workplace: 'Verkauf, Unternehmertum, Sport, Militär',
      description: 'ESTPs sind gewage Macher. Sie leben für Action und lieben die Herausforderung.'
    },
    ISTP: {
      name: 'Der Handwerker (ISTP)',
      strength: '🔧 Praktisch, Unabhängig, Logisch, Problemlöser',
      challenges: '⚠️ Kann unflexibel sein, Schwierigkeiten mit emotionaler Kommunikation',
      workplace: 'Handwerk, Ingenieurwesen, Techniker, Mechaniker',
      description: 'ISTPs sind praktische Problemlöser. Sie verstehen, wie Dinge funktionieren und mögen es konkret.'
    },
    ENFJ: {
      name: 'Der Protagonist (ENFJ)',
      strength: '👥 Charismatisch, Inspirierend, Organisiert, Einfühlsam',
      challenges: '⚠️ Kann zu idealistisch sein, Braucht viel soziale Validierung',
      workplace: 'Training, Coaching, Politik, Psychologie',
      description: 'ENFJs sind inspirierende Führungspersonen. Sie kümmern sich um andere und mobilisieren sie für Ziele.'
    },
    INFJ: {
      name: 'Der Berater (INFJ)',
      strength: '🔮 Einfühlsam, Idealistisch, Intuitiv, Tiefgründig',
      challenges: '⚠️ Kann zu perfektionistisch sein, Überfordert durch zu viele Anfragen',
      workplace: 'Beratung, Psychologie, Schreiben, Künstlerisches',
      description: 'INFJs sind tiefe und idealistical Denker. Sie sehen großes Potenzial bei anderen und wollen helfen.'
    },
    ENFP: {
      name: 'Der Kampagner (ENFP)',
      strength: '🌟 Charismatisch, Spontan, Kreativ, Enthusiastisch',
      challenges: '⚠️ Kann unstet sein, Schwierigkeiten mit Fokus',
      workplace: 'Marketing, PR, Kreative Branchen, Training',
      description: 'ENFPs sind charismatisch und voller Enthusiasmus. Sie lieben Vielfalt und regen andere an.'
    },
    INFP: {
      name: 'Der Mediator (INFP)',
      strength: '💫 Authentisch, Kreativ, Idealistisch, Individualistisch',
      challenges: '⚠️ Kann verletzlich sein, Schwierigkeiten mit Konflikten',
      workplace: 'Schreiben, Künstlerisches, Beratung, Nonprofits',
      description: 'INFPs sind authentische Idealisten. Sie wollen authentisch sein und einen sinnvollen Beitrag leisten.'
    }
  },

  /**
   * Berechnet den Persönlichkeitstyp basierend auf Antworten
   */
  calculateType(answers) {
    const scores = {
      E: 0, I: 0,  // Extraversion vs. Introversion
      S: 0, N: 0,  // Sensing vs. Intuition
      T: 0, F: 0,  // Thinking vs. Feeling
      J: 0, P: 0   // Judging vs. Perceiving
    };

    this.questions.forEach(q => {
      const answerValue = answers[q.id] || 0;
      const dimension = q.dimension;

      if (dimension === 'EI') {
        if (q.polarity === 'E' && answerValue > 0) scores.E += answerValue;
        else if (q.polarity === 'I' && answerValue > 0) scores.I += answerValue;
        if (q.polarity === 'E' && answerValue < 0) scores.I += Math.abs(answerValue);
        else if (q.polarity === 'I' && answerValue < 0) scores.E += Math.abs(answerValue);
      } else if (dimension === 'SN') {
        if (q.polarity === 'S' && answerValue > 0) scores.S += answerValue;
        else if (q.polarity === 'N' && answerValue > 0) scores.N += answerValue;
        if (q.polarity === 'S' && answerValue < 0) scores.N += Math.abs(answerValue);
        else if (q.polarity === 'N' && answerValue < 0) scores.S += Math.abs(answerValue);
      } else if (dimension === 'TF') {
        if (q.polarity === 'T' && answerValue > 0) scores.T += answerValue;
        else if (q.polarity === 'F' && answerValue > 0) scores.F += answerValue;
        if (q.polarity === 'T' && answerValue < 0) scores.F += Math.abs(answerValue);
        else if (q.polarity === 'F' && answerValue < 0) scores.T += Math.abs(answerValue);
      } else if (dimension === 'JP') {
        if (q.polarity === 'J' && answerValue > 0) scores.J += answerValue;
        else if (q.polarity === 'P' && answerValue > 0) scores.P += answerValue;
        if (q.polarity === 'J' && answerValue < 0) scores.P += Math.abs(answerValue);
        else if (q.polarity === 'P' && answerValue < 0) scores.J += Math.abs(answerValue);
      }
    });

    const type =
      (scores.E > scores.I ? 'E' : 'I') +
      (scores.S > scores.N ? 'S' : 'N') +
      (scores.T > scores.F ? 'T' : 'F') +
      (scores.J > scores.P ? 'J' : 'P');

    return type;
  },

  /**
   * Gibt die Typbeschreibung zurück
   */
  getTypeInfo(type) {
    return this.types[type] || {
      name: type,
      strength: 'Einzigartige Qualitäten',
      challenges: 'Entwicklungsbereiche',
      workplace: 'Verschiedene Umgebungen',
      description: 'Dieser Typ hat eine einzigartige Kombination von Eigenschaften.'
    };
  },

  // KEIN medizinischer Hinweis für Persönlichkeitstest
  medicalDisclaimer: ''
};
