/**
 * =====================================================
 * WEITERE SELBSTTESTS - Modul
 * Angst, Burnout, Stress, Schlafqualität
 * Jeder Test mit 40 Fragen
 * =====================================================
 */

// ===== TEST 1: ANGSTTEST =====
const AnxietyTest = {
  testId: 'anxiety',
  testName: 'Angst-Selbsttest',
  testDescription: 'Selbsttest zur Einschätzung von Angststörungen (40 Fragen)',

  answerOptions: [
    { value: 0, label: 'Nie', color: '#22c55e' },
    { value: 1, label: 'An einzelnen Tagen', color: '#f59e0b' },
    { value: 2, label: 'An mehr als der Hälfte der Tage', color: '#f97316' },
    { value: 3, label: 'Fast täglich', color: '#ef4444' }
  ],

  questions: [
    // ALLGEMEINE ANGST (5 Fragen)
    { id: 1, category: 'Allgemeine Angst', question: 'Ich habe ein diffuses Gefühl von Besorgnis oder Unruhe.' },
    { id: 2, category: 'Allgemeine Angst', question: 'Ich mache mir Sorgen um alltägliche Dinge.' },
    { id: 3, category: 'Allgemeine Angst', question: 'Ich bin nervös oder angespannt.' },
    { id: 4, category: 'Allgemeine Angst', question: 'Ich habe Angst, dass etwas Schlimmes passier wird.' },
    { id: 5, category: 'Allgemeine Angst', question: 'Ich bin leicht zu erschrecken.' },

    // PANIKATTACKEN (5 Fragen)
    { id: 6, category: 'Panik', question: 'Ich erlebe plötzliche Angstschübe ohne offensichtlichen Grund.' },
    { id: 7, category: 'Panik', question: 'Ich habe ein Gefühl der Beklemmung oder Beklemmung.' },
    { id: 8, category: 'Panik', question: 'Mein Herz rast während Angstepisoden.' },
    { id: 9, category: 'Panik', question: 'Ich habe Angst davor, die Kontrolle zu verlieren.' },
    { id: 10, category: 'Panik', question: 'Ich habe Angst vor erneuten Angstattacken.' },

    // KÖRPERLICHE SYMPTOME (5 Fragen)
    { id: 11, category: 'Körperlich', question: 'Ich habe Kopfschmerzen oder Migräne.' },
    { id: 12, category: 'Körperlich', question: 'Ich habe Magen- oder Darmprobleme.' },
    { id: 13, category: 'Körperlich', question: 'Ich habe Muskelangespannung oder Zittern.' },
    { id: 14, category: 'Körperlich', question: 'Ich habe Schwierigkeiten, tiefe Atemzüge zu nehmen.' },
    { id: 15, category: 'Körperlich', question: 'Ich schwitze exzessiv, besonders bei Angst.' },

    // SOZIALE ANGST (5 Fragen)
    { id: 16, category: 'Soziale Angst', question: 'Ich habe Angst davor, in sozialen Situationen nicht zurechtzukommen.' },
    { id: 17, category: 'Soziale Angst', question: 'Ich fürchte mich davor, von anderen negativ beurteilt zu werden.' },
    { id: 18, category: 'Soziale Angst', question: 'Ich vermeide öffentliche Auftritte oder Reden.' },
    { id: 19, category: 'Soziale Angst', question: 'Ich bin selbstbewusst in sozialen Situationen.' },
    { id: 20, category: 'Soziale Angst', question: 'Ich habe Angst, mit fremden Menschen zu sprechen.' },

    // SPEZIFISCHE PHOBIEN (5 Fragen)
    { id: 21, category: 'Phobien', question: 'Ich habe intensive Angst vor bestimmten Situationen (Höhe, Fliegen, etc.).' },
    { id: 22, category: 'Phobien', question: 'Ich vermeide Situationen, die meine Angst auslösen.' },
    { id: 23, category: 'Phobien', question: 'Meine Angst ist disproportional zum tatsächlichen Risiko.' },
    { id: 24, category: 'Phobien', question: 'Meine Angst beeinträchtigt mein Leben.' },
    { id: 25, category: 'Phobien', question: 'Ich wisse, dass meine Angst irrational ist, kann sie aber nicht kontrollieren.' },

    // SEPARATION ANGST / BESORGNIS ANGST (5 Fragen)
    { id: 26, category: 'Besorgnis', question: 'Ich mache mir Sorgen um die Sicherheit meiner Lieben.' },
    { id: 27, category: 'Besorgnis', question: 'Ich bin überbesorgt um meine Gesundheit oder die Gesundheit anderer.' },
    { id: 28, category: 'Besorgnis', question: 'Kleine Symptome lassen mich befürchten, ich hätte eine ernsthafte Krankheit.' },
    { id: 29, category: 'Besorgnis', question: 'Ich überprüfe wiederholt meine Gesundheit oder Sicherheit.' },
    { id: 30, category: 'Besorgnis', question: 'Katastrophisches Denken belinst mich Gedanken.' },

    // AUSWIRKUNGEN (5 Fragen)
    { id: 31, category: 'Auswirkungen', question: 'Meine Angst beeinträchtigt meine Arbeit oder Schule.' },
    { id: 32, category: 'Auswirkungen', question: 'Meine Angst beeinträchtigt meine Beziehungen.' },
    { id: 33, category: 'Auswirkungen', question: 'Meine Angst beschränkt mein Leben und meine Aktivitäten.' },
    { id: 34, category: 'Auswirkungen', question: 'Ich finde es schwer, mich zu entspannen.' },
    { id: 35, category: 'Auswirkungen', question: 'Ich versuche, angstauslösende Situationen zu vermeiden.' },

    // KOGNITIVE SYMPTOME (5 Fragen)
    { id: 36, category: 'Kognitiv', question: 'Ich kann meine ängstlichen Gedanken nicht stoppen.' },
    { id: 37, category: 'Kognitiv', question: 'Ich stelle mir das Schlimmste vor.' },
    { id: 38, category: 'Kognitiv', question: 'Ich habe schwarzweiß-Denken beim Umgang mit Unsicherheit.' },
    { id: 39, category: 'Kognitiv', question: 'Ich kann mich schwer konzentrieren wegen Angstgedanken.' },
    { id: 40, category: 'Kognitiv', question: 'Mein Gedächtnis ist wegen Angst beeinträchtigt.' }
  ],

  calculateScore(answers) {
    return Object.values(answers).reduce((sum, val) => sum + (val || 0), 0);
  },

  getInterpretation(score) {
    if (score <= 15) {
      return {
        level: 'Minimal',
        color: '#22c55e',
        description: 'Minimale Angstsymptome',
        text: 'Sie zeigen minimale Angstsymptome. Dies liegt im normalen Bereich.'
      };
    } else if (score <= 30) {
      return {
        level: 'Leicht',
        color: '#f59e0b',
        description: 'Leichte Angstsymptome',
        text: 'Sie zeigen leichte Angstsymptome. Diese sollten beobachtet werden.'
      };
    } else if (score <= 50) {
      return {
        level: 'Moderat',
        color: '#f97316',
        description: 'Moderate Angstsymptome',
        text: 'Sie zeigen moderate Angstsymptome. Professionelle Hilfe wird empfohlen.'
      };
    } else {
      return {
        level: 'Schwer',
        color: '#ef4444',
        description: 'Schwere Angstsymptome',
        text: 'Sie zeigen schwere Angstsymptome. Dringende professionelle Hilfe wird empfohlen.'
      };
    }
  },

  medicalDisclaimer: `
    <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin-top: 2rem; border-radius: 8px;">
      <p style="margin: 0; font-weight: 600; color: #7f1d1d;">⚠️ Wichtiger Hinweis:</p>
      <p style="margin: 0.5rem 0 0 0; color: #5f3738; font-size: 0.95rem;">
        Dieser Test dient nur zur groben Orientierung und ersetzt keine medizinische Diagnose. Bei anhaltenden oder belastenden Beschwerden wenden Sie sich bitte an eine Ärztin, einen Arzt oder eine psychologische Fachperson.
      </p>
    </div>
  `
};

// ===== TEST 2: BURNOUT-TEST =====
const BurnoutTest = {
  testId: 'burnout',
  testName: 'Burnout-Selbsttest',
  testDescription: 'Selbsttest zum Burnout-Risiko (40 Fragen)',

  answerOptions: [
    { value: 0, label: 'Nie', color: '#22c55e' },
    { value: 1, label: 'An einzelnen Tagen', color: '#f59e0b' },
    { value: 2, label: 'An mehr als der Hälfte der Tage', color: '#f97316' },
    { value: 3, label: 'Fast täglich', color: '#ef4444' }
  ],

  questions: [
    // EMOTIONALE ERSCHÖPFUNG (8 Fragen)
    { id: 1, category: 'Emotionale Erschöpfung', question: 'Ich fühle mich emotional ausgelaugt von meiner Arbeit.' },
    { id: 2, category: 'Emotionale Erschöpfung', question: 'Ich bin am Ende meines Arbeitstages völlig erschöpft.' },
    { id: 3, category: 'Emotionale Erschöpfung', question: 'Ich bin müde, wenn ich aufwache und muss arbeiten.' },
    { id: 4, category: 'Emotionale Erschöpfung', question: 'Ich bin chronisch müde und verausgabt.' },
    { id: 5, category: 'Emotionale Erschöpfung', question: 'Meine Arbeit stellt mich emotional vor Herausforderungen.' },
    { id: 6, category: 'Emotionale Erschöpfung', question: 'Ich höre nie auf zu arbeiten, selbst wenn ich zu Hause bin.' },
    { id: 7, category: 'Emotionale Erschöpfung', question: 'Ich übernehme mehr Verantwortung als ich verkraften kann.' },
    { id: 8, category: 'Emotionale Erschöpfung', question: 'Meine Grenzen zwischen Arbeit und Freizeit sind verschwunden.' },

    // DEPERSONALISIERUNG (8 Fragen)
    { id: 9, category: 'Depersonalisierung', question: 'Ich bin zynisch gegenüber meiner Arbeit geworden.' },
    { id: 10, category: 'Depersonalisierung', question: 'Meine Arbeit wird mir zunehmend sinnlos.' },
    { id: 11, category: 'Depersonalisierung', question: 'Ich fühle mich isoliert und allein bei der Arbeit.' },
    { id: 12, category: 'Depersonalisierung', question: 'Ich bin entfremdet von meinen Kollegen.' },
    { id: 13, category: 'Depersonalisierung', question: 'Ich sehe meine Arbeit mit Gleichgültigkeit.' },
    { id: 14, category: 'Depersonalisierung', question: 'Ich habe Schwierigkeiten, empatte mit meinen Klienten/Kunden zu sein.' },
    { id: 15, category: 'Depersonalisierung', question: 'Ich bin hartherzig geworden Richtung anderer Menschen.' },
    { id: 16, category: 'Depersonalisierung', question: 'Mich interessiert nicht mehr, wie andere mir ergent.' },

    // REDUZIERTE LEISTUNG (8 Fragen)
    { id: 17, category: 'Leistung', question: 'Ich kann meine Arbeit nicht mehr so effizient bewältigenю' },
    { id: 18, category: 'Leistung', question: 'Ich verliere Vertrauen in meine Fähigkeiten.' },
    { id: 19, category: 'Leistung', question: 'Meine Produktivität sinkt.' },
    { id: 20, category: 'Leistung', question: 'Ich kann mich bei der Arbeit nicht konzentrieren.' },
    { id: 21, category: 'Leistung', question: 'Ich habe weniger Initiative bei der Workbench.' },
    { id: 22, category: 'Leistung', question: 'Meine Arbeit ist weniger kreativ als früher.' },
    { id: 23, category: 'Leistung', question: 'Ich kann keine Herausforderungen mehr annehmen.' },
    { id: 24, category: 'Leistung', question: 'Ich zweifle, ob ich in meinem Job weiterarbeiten kann.' },

    // KÖRPERLICHE SYMPTOME (8 Fragen)
    { id: 25, category: 'Körperlich', question: 'Ich habe häufige Kopfschmerzen oder Migräne.' },
    { id: 26, category: 'Körperlich', question: 'Ich habe Magen- oder Darmprobleme.' },
    { id: 27, category: 'Körperlich', question: 'Ich schlafe schlecht oder bin unausgeruht.' },
    { id: 28, category: 'Körperlich', question: 'Mein Blutdruck ist erhöht oder ich habe Herzräcing.' },
    { id: 29, category: 'Körperlich', question: 'Ich bin anfälliger für Krankheiten.' },
    { id: 30, category: 'Körperlich', question: 'Ich habe Muskelverspannungen oder Rückenschmerzen.' },
    { id: 31, category: 'Körperlich', question: 'Ich schwítze mehr als gewöhnlich.' },
    { id: 32, category: 'Körperlich', question: 'Mein Appetit hat sich verändert.' },

    // PERSÖNLICHE BEZIEHUNGEN (4 Fragen)
    { id: 33, category: 'Beziehungen', question: 'Meine Beziehungen zum Partner leiden unter meinem Stress.' },
    { id: 34, category: 'Beziehungen', question: 'Ich bin reizbar Richtung Familie und Freunde.' },
    { id: 35, category: 'Beziehungen', question: 'Ich ziehe mich von sozialen Aktivitäten zurück.' },
    { id: 36, category: 'Beziehungen', question: 'Ich habe weniger Geduld mit Unterstützung anderen.' },

    // SELBSTPFLEGE UND HOBBYS (4 Fragen)
    { id: 37, category: 'Selbstpflege', question: 'Ich vernachlässige meine Selbstpflege (Schlaf, Ernährung, Sport).' },
    { id: 38, category: 'Selbstpflege', question: 'Ich hab Zeit für Hobbys und zeitgemäße Aktivitäten gegeben.' },
    { id: 39, category: 'Selbstpflege', question: 'Ich vergesse, mich selbst zu kümmern.' },
    { id: 40, category: 'Selbstpflege', question: 'Mein soziallives ist mangelhaft geworden.' }
  ],

  calculateScore(answers) {
    return Object.values(answers).reduce((sum, val) => sum + (val || 0), 0);
  },

  getInterpretation(score) {
    if (score <= 15) {
      return {
        level: 'Minimal',
        color: '#22c55e',
        description: 'Minimales Burnout-Risiko',
        text: 'Sie zeigen ein minimales Burnout-Risiko.'
      };
    } else if (score <= 30) {
      return {
        level: 'Leicht',
        color: '#f59e0b',
        description: 'Leichtes Burnout-Risiko',
        text: 'Es gibt erste Zeichen von Burnout. Achtsamkeit und Selbstpflege werden empfohlen.'
      };
    } else if (score <= 50) {
      return {
        level: 'Moderat',
        color: '#f97316',
        description: 'Moderates Burnout-Risiko',
        text: 'Sie zeigen Zeichen von Burnout. Professionelle Unterstützung wird empfohlen.'
      };
    } else {
      return {
        level: 'Schwer',
        color: '#ef4444',
        description: 'Schweres Burnout-Risiko',
        text: 'Sie zeigen deutliche Burnout-Symptome. Dringende Unterstützung wird empfohlen.'
      };
    }
  },

  medicalDisclaimer: `
    <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin-top: 2rem; border-radius: 8px;">
      <p style="margin: 0; font-weight: 600; color: #7f1d1d;">⚠️ Wichtiger Hinweis:</p>
      <p style="margin: 0.5rem 0 0 0; color: #5f3738; font-size: 0.95rem;">
        Dieser Test dient nur zur groben Orientierung und ersetzt keine medizinische Diagnose. Bei anhaltenden oder belastenden Beschwerden wenden Sie sich bitte an eine Ärztin, einen Arzt oder eine psychologische Fachperson.
      </p>
    </div>
  `
};

// ===== TEST 3: STRESSTEST =====
const StressTest = {
  testId: 'stress',
  testName: 'Stressbelastungstest',
  testDescription: 'Selbsttest zur Messung von Stressbelastung (40 Fragen)',

  answerOptions: [
    { value: 0, label: 'Nie', color: '#22c55e' },
    { value: 1, label: 'An einzelnen Tagen', color: '#f59e0b' },
    { value: 2, label: 'An mehr als der Hälfte der Tage', color: '#f97316' },
    { value: 3, label: 'Fast täglich', color: '#ef4444' }
  ],

  questions: [
    // WAHRNEHMUNG VON KONTROLLIERBARKEIT (5 Fragen)
    { id: 1, category: 'Kontrolle', question: 'Ich fühle mich überfordert von Ereignissen außerhalb meiner Kontrolle.' },
    { id: 2, category: 'Kontrolle', question: 'Ich bin unsicher, wie ich Probleme bewältigen soll.' },
    { id: 3, category: 'Kontrolle', question: 'Dinge werden schneller schlecht als ich sie reparieren kann.' },
    { id: 4, category: 'Kontrolle', question: 'Ich kann Herausforderungen in meinem Leben nicht bewältigen.' },
    { id: 5, category: 'Kontrolle', question: 'Ich fühle mich der Situation nicht gewachsen.' },

    // LEBENSVERÄNDERUNGEN (5 Fragen)
    { id: 6, category: 'Veränderungen', question: 'Ich erlebe große Veränderungen in meinem Leben.' },
    { id: 7, category: 'Veränderungen', question: 'Meine Lebensumstände haben sich erheblich verändert.' },
    { id: 8, category: 'Veränderungen', question: 'Ich habe schwierige persönliche Übergänge erlebt.' },
    { id: 9, category: 'Veränderungen', question: 'Unerwartete Ereignisse haben mein Leben beeinflusst.' },
    { id: 10, category: 'Veränderungen', question: 'Ich versuche, mich an neue Situationen anzupassen.' },

    // BERUFLICHER STRESS (5 Fragen)
    { id: 11, category: 'Beruflich', question: 'Meine Arbeit ist stressig und zeitaufwändig.' },
    { id: 12, category: 'Beruflich', question: 'Ich habe Konflikte mit meinen Kollegen oder meinem Boss.' },
    { id: 13, category: 'Beruflich', question: 'Meine Arbeit bietet wenig Anerkennung.' },
    { id: 14, category: 'Beruflich', question: 'Meine Arbeitsplatzicherheit ist bedroht.' },
    { id: 15, category: 'Beruflich', question: 'Ich habe zu viel Verantwortung bei der Arbeit.' },

    // FINANZIELLE SORGEN (5 Fragen)
    { id: 16, category: 'Finanziell', question: 'Ich habe finanzielle Schwierigkeiten.' },
    { id: 17, category: 'Finanziell', question: 'Ich sorge mich um meine wirtschaftliche Stabilität.' },
    { id: 18, category: 'Finanziell', question: 'Unerwartete Ausgaben verursachen mir Stress.' },
    { id: 19, category: 'Finanziell', question: 'Geldmangel beeinflusst meine Gesundheit.' },
    { id: 20, category: 'Finanziell', question: 'Ich habe Schulden, die mich stressen.' },

    // ZWISCHENMENSCHLICHE KONFLIKTE (5 Fragen)
    { id: 21, category: 'Beziehungen', question: 'Ich habe Konflikte mit meinem Partner oder meiner Familie.' },
    { id: 22, category: 'Beziehungen', question: 'Meine Beziehungen sind angespannt.' },
    { id: 23, category: 'Beziehungen', question: 'Ich fühle mich missverstanden von Nahestehenden.' },
    { id: 24, category: 'Beziehungen', question: 'Einsamkeit oder Isolation stressen mich.' },
    { id: 25, category: 'Beziehungen', question: 'Ich habe Schwierigkeiten mit Kommunikation in Beziehungen.' },

    // EMOTIONALE REAKTIONEN (5 Fragen)
    { id: 26, category: 'Emotional', question: 'Ich fühle mich reizbar oder leicht frustriert.' },
    { id: 27, category: 'Emotional', question: 'Meine Stimmung ist schnellen Schwankungen ausgesetzt.' },
    { id: 28, category: 'Emotional', question: 'Ich fühle mich emotional ausgelaugt.' },
    { id: 29, category: 'Emotional', question: 'Ich habe negative oder katastrophale Gedanken.' },
    { id: 30, category: 'Emotional', question: 'Ich fühle mich hoffnungslos in stressigen Situationen.' },

    // KÖRPERLICHE MANIFESTATIONEN (5 Fragen)
    { id: 31, category: 'Körperlich', question: 'Stress verursacht mir körperliche Beschwerden.' },
    { id: 32, category: 'Körperlich', question: 'Mein Schlaf ist durch Stress beeinträchtigt.' },
    { id: 33, category: 'Körperlich', question: 'Ich habe Muskelverspannungen durch Stress.' },
    { id: 34, category: 'Körperlich', question: 'Meine Verdauung ist durch Stress beeinträchtigt.' },
    { id: 35, category: 'Körperlich', question: 'Ich bin anfälliger für Erkältungen und Krankheiten.' },

    // BEWÄLTIGUNGSMECHANISMEN (5 Fragen)
    { id: 36, category: 'Bewältigung', question: 'Ich greifte zu untauglichen Bewältigungsmechanismen (Alkohol, Essen, etc.).' },
    { id: 37, category: 'Bewältigung', question: 'Ich habe Schwierigkeiten, gesunde Grenzen zu setzen.' },
    { id: 38, category: 'Bewältigung', question: 'Ich übernehme zu viel und vernachlässige mich selbst.' },
    { id: 39, category: 'Bewältigung', question: 'Ich habe Schwierigkeiten, mich zu entspannen.' },
    { id: 40, category: 'Bewältigung', question: 'Ich vermeide Probleme statt sie zu lösen.' }
  ],

  calculateScore(answers) {
    return Object.values(answers).reduce((sum, val) => sum + (val || 0), 0);
  },

  getInterpretation(score) {
    if (score <= 15) {
      return {
        level: 'Gering',
        color: '#22c55e',
        description: 'Geringe Stressbelastung',
        text: 'Sie zeigen eine geringe Stressbelastung. Das ist ein gesundes Niveau.'
      };
    } else if (score <= 30) {
      return {
        level: 'Leicht-Moderat',
        color: '#f59e0b',
        description: 'Leicht bis mäßige Stressbelastung',
        text: 'Sie zeigen leichte bis mäßige Stressbelastung. Achtsamkeit und Entspannungstechniken werden empfohlen.'
      };
    } else if (score <= 50) {
      return {
        level: 'Moderat-Schwer',
        color: '#f97316',
        description: 'Mäßig bis schwere Stressbelastung',
        text: 'Sie zeigen mäßig bis schwere Stressbelastung. Professionelle Unterstützung wird empfohlen.'
      };
    } else {
      return {
        level: 'Schwer',
        color: '#ef4444',
        description: 'Schwere Stressbelastung',
        text: 'Sie zeigen schwere Stressbelastung. Dringende professionelle Hilfe wird empfohlen.'
      };
    }
  },

  medicalDisclaimer: `
    <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin-top: 2rem; border-radius: 8px;">
      <p style="margin: 0; font-weight: 600; color: #7f1d1d;">⚠️ Wichtiger Hinweis:</p>
      <p style="margin: 0.5rem 0 0 0; color: #5f3738; font-size: 0.95rem;">
        Dieser Test dient nur zur groben Orientierung und ersetzt keine medizinische Diagnose. Bei anhaltenden oder belastenden Beschwerden wenden Sie sich bitte an eine Ärztin, einen Arzt oder eine psychologische Fachperson.
      </p>
    </div>
  `
};

// ===== TEST 4: SCHLAFQUALITÄTSTEST =====
const SleepQualityTest = {
  testId: 'sleep',
  testName: 'Schlafqualitäts-Test',
  testDescription: 'Selbsttest zur Bewertung der Schlafqualität (40 Fragen)',

  answerOptions: [
    { value: 0, label: 'Nie', color: '#22c55e' },
    { value: 1, label: 'An einzelnen Nächten', color: '#f59e0b' },
    { value: 2, label: 'An mehr als der Hälfte der Nächte', color: '#f97316' },
    { value: 3, label: 'Jede Nacht oder fast jede Nacht', color: '#ef4444' }
  ],

  questions: [
    // EINSCHLAFSTÖRUNGEN (5 Fragen)
    { id: 1, category: 'Einschlafen', question: 'Ich habe Schwierigkeiten, einzuschlafen.' },
    { id: 2, category: 'Einschlafen', question: 'Ich wälze mich im Bett, bevor ich einschlafe.' },
    { id: 3, category: 'Einschlafen', question: 'Es dauert länger als 30 Minuten, bis ich einschlafe.' },
    { id: 4, category: 'Einschlafen', question: 'Mein Verstand ist überaktiv, wenn ich versuche einzuschlafen.' },
    { id: 5, category: 'Einschlafen', question: 'Ich bin nervös oder angespannt, wenn ich ins Bett gehe.' },

    // DURCHSCHLAFSTÖRUNGEN (5 Fragen)
    { id: 6, category: 'Durchschlafen', question: 'Ich wache nachts auf.' },
    { id: 7, category: 'Durchschlafen', question: 'Ich wache mehrmals pro Nacht auf.' },
    { id: 8, category: 'Durchschlafen', question: 'Ich habe Schwierigkeiten, nach dem Aufwachen wieder einzuschlafen.' },
    { id: 9, category: 'Durchschlafen', question: 'Ich erlebe lange Zeiträume des Wachseins in der Nacht.' },
    { id: 10, category: 'Durchschlafen', question: 'Mein Schlaf ist fragmentiert oder unterbrochen.' },

    // FRÜHMORGLICHES ERWACHEN (5 Fragen)
    { id: 11, category: 'Frühes Aufwachen', question: 'Ich wache sehr früh am Morgen auf (vor 5 Uhr).' },
    { id: 12, category: 'Frühes Aufwachen', question: 'Ich kann nicht länger schlafen, wenn ich früh aufwache.' },
    { id: 13, category: 'Frühes Aufwachen', question: 'Ich fühle mich tagsüber müde wegen frühem Aufwachen.' },
    { id: 14, category: 'Frühes Aufwachen', question: 'Meine Schlafenszeit ist zu kurz.' },
    { id: 15, category: 'Frühes Aufwachen', question: 'Ich verbringe viel Zeit im Bett ohne zu schlafen.' },

    // SCHLAFQUALITÄT (5 Fragen)
    { id: 16, category: 'Qualität', question: 'Mein Schlaf ist nicht erholsam.' },
    { id: 17, category: 'Qualität', question: 'Ich fühle mich tagsüber müde und ausgelaugt.' },
    { id: 18, category: 'Qualität', question: 'Mein Schlaf ist leicht oder oberflächlich.' },
    { id: 19, category: 'Qualität', question: 'Ich träume lebhaft oder habe Albträume.' },
    { id: 20, category: 'Qualität', question: 'Ich schwitzer exzessiv während des Schlafes.' },

    // SCHLAFMITTEL ABHÄNGIGKEIT (5 Fragen)
    { id: 21, category: 'Abhängigkeit', question: 'Ich brauche Schlafmittel, um zu schlafen.' },
    { id: 22, category: 'Abhängigkeit', question: 'Ich nutze Alkohol, um besser zu schlafen.' },
    { id: 23, category: 'Abhängigkeit', question: 'Ich nutze Kräuter Schlafmittel oder Nahrungsergänzungsmittel.' },
    { id: 24, category: 'Abhängigkeit', question: 'Meine Schlafmittel sind weniger wirksam als früher.' },
    { id: 25, category: 'Abhängigkeit', question: 'Ich bin besorgt über meine Abhängigkeit von Schlafmitteln.' },

    // TAGESSCHLÄFRIGKEIT (5 Fragen)
    { id: 26, category: 'Tagesschläfrigkeit', question: 'Ich bin tagsüber schläfrig.' },
    { id: 27, category: 'Tagesschläfrigkeit', question: 'Ich nicke tagsüber ein.' },
    { id: 28, category: 'Tagesschläfrigkeit', question: 'Ich kann mich wegen Müdigkeit nicht konzentrieren.' },
    { id: 29, category: 'Tagesschläfrigkeit', question: 'Ich bin langsamer und weniger produktiv während des Tages.' },
    { id: 30, category: 'Tagesschläfrigkeit', question: 'Meine Tagesschläfrigkeit beeinflusst meine Sicherheit (fahren, etc.).' },

    // SCHLAFHYGIENE (5 Fragen)
    { id: 31, category: 'Hygiene', question: 'Mein Schlafzimmer ist nicht dunkel genug.' },
    { id: 32, category: 'Hygiene', question: 'Mein Schlafzimmer ist zu laut oder zu leise.' },
    { id: 33, category: 'Hygiene', question: 'Die Temperatur meines Schlafzimmers ist nicht komfortabel.' },
    { id: 34, category: 'Hygiene', question: 'Ich verwende mein Bett für andere Aktivitäten als Schlafen.' },
    { id: 35, category: 'Hygiene', question: 'Ich verwende elektronische Geräte vor dem Schlafengehen.' },

    // SCHLAFMUSTER (5 Fragen)
    { id: 36, category: 'Muster', question: 'Meine Schlafens- und Aufwachzeiten sind unregelmäßig.' },
    { id: 37, category: 'Muster', question: 'Ich arbeite in Schichten oder habe unregelmäßige Arbeitszeiten.' },
    { id: 38, category: 'Muster', question: 'Ich schlafe zu viel am Wochenende (Social Jet Lag).' },
    { id: 39, category: 'Muster', question: 'Ich reise häufig und muss meine Schlafmuster anpassen.' },
    { id: 40, category: 'Muster', question: 'Mein Körper hat keine konsistente Schlaf-Wach-Routine.' }
  ],

  calculateScore(answers) {
    return Object.values(answers).reduce((sum, val) => sum + (val || 0), 0);
  },

  getInterpretation(score) {
    if (score <= 15) {
      return {
        level: 'Gut',
        color: '#22c55e',
        description: 'Gute Schlafqualität',
        text: 'Sie zeigen eine gute Schlafqualität. Ihre Schlafmuster sind gesund.'
      };
    } else if (score <= 30) {
      return {
        level: 'Ausreichend',
        color: '#f59e0b',
        description: 'Ausreichende Schlafqualität mit leichten Problemen',
        text: 'Sie zeigen ausreichende Schlafqualität, aber mit einigen Problemen. Schlafhygiene-Verbesserungen können helfen.'
      };
    } else if (score <= 50) {
      return {
        level: 'Schlecht',
        color: '#f97316',
        description: 'Schlechte Schlafqualität',
        text: 'Sie zeigen schlechte Schlafqualität. Professionelle Unterstützung wird empfohlen.'
      };
    } else {
      return {
        level: 'Sehr schlecht',
        color: '#ef4444',
        description: 'Sehr schlechte Schlafqualität',
        text: 'Sie zeigen sehr schlechte Schlafqualität. Dringende professionelle Hilfe wird empfohlen.'
      };
    }
  },

  medicalDisclaimer: `
    <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 1rem; margin-top: 2rem; border-radius: 8px;">
      <p style="margin: 0; font-weight: 600; color: #7f1d1d;">⚠️ Wichtiger Hinweis:</p>
      <p style="margin: 0.5rem 0 0 0; color: #5f3738; font-size: 0.95rem;">
        Dieser Test dient nur zur groben Orientierung und ersetzt keine medizinische Diagnose. Bei anhaltenden oder belastenden Beschwerden wenden Sie sich bitte an eine Ärztin, einen Arzt oder eine psychologische Fachperson.
      </p>
    </div>
  `
};
