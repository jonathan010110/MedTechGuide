/**
 * =====================================================
 * MEDIZINTECHNIK-GERÄTE DATENBANK
 * Vollständige Daten für Vergleichsfunktion
 * =====================================================
 */

const MedicalDevicesDatabase = {
  devices: [
    // ===== DIABETES-TECHNOLOGIEN =====
    {
      id: 'cgm-sensor',
      name: 'CGM-Sensor (Continuous Glucose Monitoring)',
      category: 'Diabetes',
      icon: '📊',
      description: 'Kontinuierliche Glukose-Überwachung für Diabetes-Management',
      
      metrics: {
        accuracy: 95,           // 0-100 Prozent
        cost: 45,               // € pro Monat (0-100 relative Skala)
        risk: 15,               // Komplikationen/Fehlerr (0-100)
        usability: 85,          // Bedienungsfreundlichkeit (0-100)
        effectiveness: 90       // Therapeutische Effektivität (0-100)
      },

      details: {
        principle: 'Enzymatische Glukose-Oxidase-Methode',
        accuracy_range: '±15%',
        battery_life: '14 Tage',
        measurement_frequency: 'Alle 15 Sekunden',
        connectivity: 'Bluetooth LE',
        data_storage: 'Cloud-basiert',
        certifications: 'CE, FDA'
      },

      applications: ['Typ-1-Diabetes', 'Typ-2-Diabetes (intensiv)', 'Gravidität'],
      suitability: {
        forChildren: true,
        forElderly: true,
        forPregnant: true,
        forHospital: false,
        forHome: true
      },

      advantages: [
        'Echtzeitdaten',
        'Nicht-invasiver als Blutzuckermessungen',
        'Alarm-Funktionen',
        'Trend-Pfeile'
      ],

      disadvantages: [
        'Kosten',
        'Noch nicht bei allen Krankenkassen erstattet',
        'Kalibrierungsfehler möglich',
        'Hautreaktionen möglich'
      ],

      alternatives: ['Blutzuckermessgerät', 'Insulin-Pumpe', 'Sensor-Pflaster'],
      reliability: 96,
      maintenance: 'Monatlich'
    },

    {
      id: 'insulin-pump',
      name: 'Insulinpumpe (CSII)',
      category: 'Diabetes',
      icon: '💉',
      description: 'Tragbare programmierbare Insulinabgabesystem',

      metrics: {
        accuracy: 92,
        cost: 80,
        risk: 20,
        usability: 70,
        effectiveness: 95
      },

      details: {
        principle: 'Programmierte Insulin-Infusion',
        insulinCapacity: '300 Einheiten',
        battery_life: '7-14 Tage',
        bolusCalculation: 'Automatisch',
        connectivity: 'Wireless (Modelle)',
        data_storage: 'Interner Speicher',
        certifications: 'CE, FDA'
      },

      applications: ['Typ-1-Diabetes', 'Typ-2-Diabetes (Insulin)', 'Schwangerschaft'],
      suitability: {
        forChildren: true,
        forElderly: false,
        forPregnant: true,
        forHospital: true,
        forHome: true
      },

      advantages: [
        'Präzise Insulinabgabe',
        'Flexible Dosierung',
        'Bessere HbA1c-Werte',
        'Nächtliche Sicherheit'
      ],

      disadvantages: [
        'Hohe Kosten',
        'Schulung erforderlich',
        'Infektionsrisiko',
        'Psychologische Last'
      ],

      alternatives: ['Mehrfachinjektionen', 'CGM-Sensor', 'Pen-Injektoren'],
      reliability: 94,
      maintenance: 'Wöchentlich'
    },

    // ===== BILDGEBUNG =====
    {
      id: 'ct-scan',
      name: 'CT-Scan (Computertomographie)',
      category: 'Bildgebung',
      icon: '🖥️',
      description: 'Schichtbildverfahren mit Röntgenstrahlung',

      metrics: {
        accuracy: 98,
        cost: 85,
        risk: 35,
        usability: 75,
        effectiveness: 96
      },

      details: {
        principle: 'Röntgen-Querschnittsbildgebung',
        radiation_dose: '7 mSv (Thorax)',
        scan_time: '10-30 Sekunden',
        resolution: '0.5-1 mm',
        field_of_view: '50 cm',
        data_storage: 'DICOM',
        certifications: 'DIN, CE'
      },

      applications: ['Lungenkrebs-Screening', 'Traumadiagnostik', 'Abdomen-Diagnostik'],
      suitability: {
        forChildren: false,
        forElderly: true,
        forPregnant: false,
        forHospital: true,
        forHome: false
      },

      advantages: [
        'Hohe räumliche Auflösung',
        'Schnelle Akquisition',
        'Kontrast-Optimierbar',
        ' 3D-Rekonstruktion möglich'
      ],

      disadvantages: [
        'Strahlenbelastung',
        'Kontrastmittel-Nebenwirkungen',
        'Hohe Kosten',
        'Überdiagnose möglich'
      ],

      alternatives: ['MRT', 'Röntgen', 'Ultraschall'],
      reliability: 99,
      maintenance: 'Täglich'
    },

    {
      id: 'mri-scan',
      name: 'MRT (Magnetresonanztomographie)',
      category: 'Bildgebung',
      icon: '🧲',
      description: 'Magnetfeld-basierte hochauflösende Bildgebung',

      metrics: {
        accuracy: 97,
        cost: 95,
        risk: 5,
        usability: 65,
        effectiveness: 94
      },

      details: {
        principle: 'Magnetische Kernresonanz',
        radiation_dose: 0,
        scan_time: '30-60 Minuten',
        resolution: '1-2 mm',
        field_of_view: '40-50 cm',
        data_storage: 'DICOM',
        certifications: 'CE, FDA'
      },

      applications: ['Hirn-Diagnostik', 'Wirbelsäule', 'Weichteil-Diagnostik'],
      suitability: {
        forChildren: true,
        forElderly: true,
        forPregnant: true,
        forHospital: true,
        forHome: false
      },

      advantages: [
        'Keine Strahung',
        'Ausgezeichnete Weichteile',
        'Mehrere Parametrierungen',
        'Sicher in der Schwangerschaft'
      ],

      disadvantages: [
        'Lange Scan-Zeit',
        'Laut',
        'Teuer',
        'Kontraindikationen (Metalle)'
      ],

      alternatives: ['CT', 'Röntgen', 'Ultraschall'],
      reliability: 98,
      maintenance: 'Täglich'
    },

    // ===== KARDIO =====
    {
      id: 'ekg-monitor',
      name: 'EKG-Monitor (Elektrokardiogramm)',
      category: 'Kardiologie',
      icon: '❤️',
      description: 'Tragbare kontinuierliche Herzrhythmus-Überwachung',

      metrics: {
        accuracy: 94,
        cost: 30,
        risk: 8,
        usability: 90,
        effectiveness: 85
      },

      details: {
        principle: 'Elektrische Herzaktivität-Messung',
        channels: '6-12 Kanäle',
        battery_life: '24-48 Stunden',
        sampling_rate: '500-1000 Hz',
        connectivity: 'Bluetooth',
        data_storage: 'Cloud',
        certifications: 'CE, FDA'
      },

      applications: ['Arrhythmie-Detektion', 'MI-Monitoring', 'Prävention'],
      suitability: {
        forChildren: false,
        forElderly: true,
        forPregnant: false,
        forHospital: true,
        forHome: true
      },

      advantages: [
        'Nicht-invasiv',
        'Günstig',
        'Tragbar',
        'Echtzeit-Daten'
      ],

      disadvantages: [
        'Bewegungsartefakte',
        'Begrenzte Kanäle',
        'Batterie-abhängig',
        'Hautreizung'
      ],

      alternatives: ['12-Kanal-EKG', 'Holter-Monitor', 'Event-Rekorder'],
      reliability: 92,
      maintenance: 'Täglich'
    },

    {
      id: 'pacemaker',
      name: 'Schrittmacher (Pacemaker)',
      category: 'Kardiologie',
      icon: '🔌',
      description: 'Implantiertes elektronisches Gerät zur Herzfrequenz-Regelung',

      metrics: {
        accuracy: 99,
        cost: 70,
        risk: 25,
        usability: 80,
        effectiveness: 98
      },

      details: {
        principle: 'Elektrische Impulse zur Herzreizung',
        battery_life: '8-10 Jahre',
        sensor_type: 'Atmungs- or Bewegungssensor',
        programmable: true,
        connectivity: 'Wireless-telemetry',
        data_storage: 'Gerätespeicher',
        certifications: 'CE, FDA'
      },

      applications: ['Bradykardie', 'Herzblock', 'Sleep-Apnoe'],
      suitability: {
        forChildren: false,
        forElderly: true,
        forPregnant: false,
        forHospital: true,
        forHome: false
      },

      advantages: [
        'Sehr zuverlässig',
        'Programmierbar',
        'Remote-Monitoring',
        'Gute Lebensqualität'
      ],

      disadvantages: [
        'Invasive Implantation',
        'MRT-Kontraindikation',
        'Batterie-Verschleiß',
        'Infektionsrisiko'
      ],

      alternatives: ['ICD', 'Externe Impulsgeber', 'Medikamentös'],
      reliability: 99,
      maintenance: 'Implantation: 45 Min'
    },

    // ===== NEUROLOGIE =====
    {
      id: 'eeg-headset',
      name: 'EEG-Headset (Elektroenzephalogramm)',
      category: 'Neurologie',
      icon: '🧠',
      description: 'Tragare Gehirnaktivitäts-Messung',

      metrics: {
        accuracy: 85,
        cost: 40,
        risk: 3,
        usability: 75,
        effectiveness: 80
      },

      details: {
        principle: 'Messung von Hirnstromaktivitäten',
        channels: '1-32 Kanäle',
        sampling_rate: '250-2000 Hz',
        battery_life: '8-12 Stunden',
        connectivity: 'Bluetooth',
        data_storage: 'Cloud',
        certifications: 'CE'
      },

      applications: ['Schlaf-Monitoring', 'Fokus-Messung', 'Anfalls-Detektion'],
      suitability: {
        forChildren: true,
        forElderly: true,
        forPregnant: true,
        forHospital: false,
        forHome: true
      },

      advantages: [
        'Nicht-invasiv',
        'Tragbar',
        'Günstig',
        'Echtzeit-Feedback'
      ],

      disadvantages: [
        'Artefakte',
        'Geringe räumliche Auflösung',
        'Lernkurve',
        'Datenverlust'
      ],

      alternatives: ['EEG-Labor', 'MEG', 'fMRT'],
      reliability: 82,
      maintenance: 'Täglich'
    },

    // ===== ORTHOPÄDIE =====
    {
      id: 'exoskeleton',
      name: 'Exoskelett (Motorisiert)',
      category: 'Orthopädie',
      icon: '🦾',
      description: 'Tragbare Robotik zur Bewegungsunterstützung',

      metrics: {
        accuracy: 90,
        cost: 90,
        risk: 15,
        usability: 60,
        effectiveness: 88
      },

      details: {
        principle: 'Motor-unterstützte Gelenk-Bewegung',
        weight: '15-25 kg',
        battery_life: '6-8 Stunden',
        power: '500-1500 Watt',
        degrees_of_freedom: '4-6',
        connectivity: 'Wireless',
        certifications: 'CE, FDA'
      },

      applications: ['Rehabilitation', 'Mobilität-Hilfe', 'Lauf-Training'],
      suitability: {
        forChildren: false,
        forElderly: true,
        forPregnant: false,
        forHospital: true,
        forHome: false
      },

      advantages: [
        'Motorische Unterstützung',
        'Ermutigt Bewegung',
        'Verbesser Balance',
        'Effektive Rehabilitation'
      ],

      disadvantages: [
        'Sehr teuer',
        'Schwer',
        'Lange Trainingszeit',
        'Wartungsintensiv'
      ],

      alternatives: ['Gehstock', 'Rollator', 'Rollstuhl'],
      reliability: 88,
      maintenance: 'Wöchentlich'
    },

    // ===== ZAHNMEDIZIN =====
    {
      id: 'intraoral-scanner',
      name: 'Intraoral-Scanner',
      category: 'Zahnmedizin',
      icon: '🦷',
      description: 'Digitale 3D-Zahnabformung',

      metrics: {
        accuracy: 96,
        cost: 60,
        risk: 2,
        usability: 80,
        effectiveness: 92
      },

      details: {
        principle: 'Struktuiertes-Licht 3D-Scanning',
        accuracy_range: '±10 µm',
        scan_time: '2-5 Minuten',
        data_format: 'STL, OBJ',
        connectivity: 'USB, Wireless',
        data_storage: 'Cloud',
        certifications: 'CE, FDA'
      },

      applications: ['Provisorische Versorgung', 'Implantologie', 'Orthodontie'],
      suitability: {
        forChildren: true,
        forElderly: true,
        forPregnant: true,
        forHospital: false,
        forHome: false
      },

      advantages: [
        'Keine Abformungs-Masse',
        'Schneller',
        'Genauer',
        'Digitale Planung'
      ],

      disadvantages: [
        'Teuer',
        'Lernkurve',
        'Abhängig von Licht',
        'Begrenzte Tiefe'
      ],

      alternatives: ['Konventionelle Abform', 'CBCT', 'Laborscanner'],
      reliability: 95,
      maintenance: 'Monatlich'
    }
  ],

  /**
   * Suche Gerät nach ID
   */
  getDeviceById(id) {
    return this.devices.find(d => d.id === id);
  },

  /**
   * Alle Geräte einer Kategorie
   */
  getDevicesByCategory(category) {
    return this.devices.filter(d => d.category === category);
  },

  /**
   * Alle Kategorien
   */
  getCategories() {
    return [...new Set(this.devices.map(d => d.category))];
  },

  /**
   * Suche nach Namen
   */
  searchDevices(query) {
    const lowerQuery = query.toLowerCase();
    return this.devices.filter(d =>
      d.name.toLowerCase().includes(lowerQuery) ||
      d.description.toLowerCase().includes(lowerQuery)
    );
  }
};
