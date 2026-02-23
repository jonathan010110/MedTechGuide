/* ========== NAVIGATION ========== */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ========== SCROLL TO TOP BUTTON ========== */
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ========== RELATED LINKS - DYNAMISCHE LINKS PRO THEMA ========== */
const relatedLinksData = {
  diabetes: [
    ["International Diabetes Federation", "https://idf.org/", "idf.org"],
    ["Deutsche Diabetes Gesellschaft", "https://www.deutsche-diabetes-gesellschaft.de/", "ddg.info"],
    ["American Diabetes Association", "https://www.diabetes.org/", "diabetes.org"],
    ["WHO - Diabetes", "https://www.who.int/health-topics/diabetes", "who.int"],
    ["CDC - Diabetes", "https://www.cdc.gov/diabetes/", "cdc.gov"],
    ["NIH - Diabetes Research", "https://www.niddk.nih.gov/", "niddk.nih.gov"]
  ],
  allergie: [
    ["Österreichische Gesellschaft für Allergologie", "https://www.oegaai.at/", "oegaai.at"],
    ["Deutsche Gesellschaft für Allergologie und klinische Immunologie", "https://www.dgaki.de/", "dgaki.de"],
    ["American Academy of Allergy, Asthma & Immunology", "https://www.aaaai.org/", "aaaai.org"],
    ["WHO - Allergies", "https://www.who.int/", "who.int"],
    ["Pollenwarndienst Europa", "https://www.pollenwarndienst.at/", "pollenwarndienst.at"],
    ["Allergy & Asthma Network", "https://www.allergyasthmanetwork.org/", "allergyasthmanetwork.org"]
  ],
  herz: [
    ["Deutsche Herzstiftung", "https://www.herzstiftung.de/", "herzstiftung.de"],
    ["American Heart Association", "https://www.heart.org/", "heart.org"],
    ["European Heart Rhythm Association", "https://www.ehra.org/", "ehra.org"],
    ["British Heart Foundation", "https://www.bhf.org.uk/", "bhf.org.uk"],
    ["Mayo Clinic - Heart Diseases", "https://www.mayoclinic.org/diseases-conditions/heart-disease/", "mayoclinic.org"],
    ["NIH - Heart Institute", "https://www.nhlbi.nih.gov/", "nhlbi.nih.gov"]
  ],
  bildgebung: [
    ["Radiopaedia - Medical Imaging", "https://radiopaedia.org/", "radiopaedia.org"],
    ["European Society of Radiology", "https://www.myesr.org/", "myesr.org"],
    ["American College of Radiology", "https://www.acr.org/", "acr.org"],
    ["MRI Explained", "https://mriexplained.com/", "mriexplained.com"],
    ["FDA - Medical Imaging", "https://www.fda.gov/radiation-emitting-products/", "fda.gov"],
    ["Nature - Medical Imaging Research", "https://www.nature.com/", "nature.com"]
  ],
  neurochips: [
    ["BCI Society", "https://www.bci-info.org/", "bci-info.org"],
    ["Neuralink Public Information", "https://neuralink.com/", "neuralink.com"],
    ["Brain-Computer Interfaces - TU Graz", "https://bci.tugraz.at/", "tugraz.at"],
    ["Frontiers in Neuroscience", "https://www.frontiersin.org/journals/neuroscience/", "frontiersin.org"],
    ["NINDS - Brain Research", "https://www.ninds.nih.gov/", "ninds.nih.gov"],
    ["Nature Neuroscience", "https://www.nature.com/articles/s41593-021-00928-z", "nature.com"]
  ],
  exoskelette: [
    ["Exoskeleton Report", "https://exoskeletonreport.com/", "exoskeletonreport.com"],
    ["ReWalk Robotics", "https://rewalk.com/", "rewalk.com"],
    ["Ekso Bionics", "https://eksobionics.com/", "eksobionics.com"],
    ["ScienceDirect - Exoskeletons", "https://www.sciencedirect.com/topics/engineering/exoskeleton", "sciencedirect.com"],
    ["IEEE - Robotics & Automation", "https://www.ieee.org/", "ieee.org"],
    ["Wearable Robotics - Research", "https://www.frontiersin.org/", "frontiersin.org"]
  ],
  genetik: [
    ["Genome.gov - NIH", "https://www.genome.gov/", "genome.gov"],
    ["Learn Genetics - University of Utah", "https://learn.genetics.utah.edu/", "utah.edu"],
    ["YourGenome - Wellcome Sanger Institute", "https://www.yourgenome.org/", "yourgenome.org"],
    ["Nature Genetics", "https://www.nature.com/subjects/genetics", "nature.com"],
    ["CRISPR Gene Editing Database", "https://www.ebi.ac.uk/", "ebi.ac.uk"],
    ["American Society of Human Genetics", "https://www.ashg.org/", "ashg.org"]
  ],
  ki: [
    ["AI in Healthcare - Stanford", "https://aihealth.stanford.edu/", "stanford.edu"],
    ["WHO - AI Guidelines for Health", "https://www.who.int/publications/i/item/9789240029200", "who.int"],
    ["Nature Machine Intelligence", "https://www.nature.com/subjects/machine-learning", "nature.com"],
    ["OpenAI - Research on AI Safety", "https://openai.com/research/", "openai.com"],
    ["MIT - AI for Healthcare", "https://dspace.mit.edu/", "mit.edu"],
    ["IEEE Xplore - AI in Medicine", "https://ieeexplore.ieee.org/", "ieee.org"]
  ],
  zukunft: [
    ["MIT Technology Review - Healthcare", "https://www.technologyreview.com/topic/health/", "technologyreview.com"],
    ["WHO - Digital Health", "https://www.who.int/health-topics/digital-health", "who.int"],
    ["Nature - Medical Research", "https://www.nature.com/subjects/medical-research", "nature.com"],
    ["NIH - Medical Research", "https://www.nih.gov/", "nih.gov"],
    ["EU Digital Health Policy", "https://ec.europa.eu/health/", "ec.europa.eu"],
    ["Sciencedaily - Medical News", "https://www.sciencedaily.com/", "sciencedaily.com"]
  ]
};

function setRelatedLinks(topic) {
  const links = relatedLinksData[topic];
  const relatedLinksContainer = document.getElementById('related-links');
  
  if (!links || !relatedLinksContainer) return;
  
  relatedLinksContainer.innerHTML = '';
  
  links.forEach(([title, url]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = title;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    li.appendChild(a);
    relatedLinksContainer.appendChild(li);
  });
}

/* ========== INITIALISIERUNG ========== */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
});
