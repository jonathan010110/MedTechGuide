/**
à*à=====================================================
à*àSELF-TESTSàCONTROLLERà-àHaupt-Modul
à*àKoordiniertàalleàTestsàundàsteuertàdieàUI
à*à=====================================================
à*/

classàSelfTestsControllerà{
ààconstructor()à{
ààààthis.allTestsà=à[
ààààààDepressionTest,
ààààààADHSTest,
ààààààPersonalityTest,
ààààààAnxietyTest,
ààààààBurnoutTest,
ààààààStressTest,
ààààààSleepQualityTest
àààà];

ààààthis.currentTestà=ànull;
ààààthis.currentQuestionà=à0;
ààààthis.answersà=à{};
ààààthis.testStartedà=àfalse;

ààààthis.initializeEventListeners();
àà}

ààinitializeEventListeners()à{
àààà//àTestàKartenàClickàHandler
ààààdocument.querySelectorAll'.test-card').forEach(cardà=>à{
ààààààcard.addEventListener('click',à(e)à=>à{
ààààààààconstàtestIdà=àcard.dataset.testId;
ààààààààconstàtestà=àthis.allTests.find(tà=>àt.testIdà===àtestId);
ààààààààifà(test)à{
ààààààààààthis.startTest(test);
àààààààà}
àààààà});
àààà});

àààà//àNavigationàButtons
ààààdocument.getElementById('btnBack')?.addEventListener('click',à()à=>àthis.previousQuestion());
ààààdocument.getElementById('btnNext')?.addEventListener('click',à()à=>àthis.nextQuestion());
ààààdocument.getElementById('btnSubmit')?.addEventListener('click',à()à=>àthis.submitTest());
ààààdocument.getElementById('btnReset')?.addEventListener('click',à()à=>àthis.resetTest());
àà}

àà/**
ààà*àStartetàeinenàTest
ààà*/
ààstartTest(test)à{
ààààthis.currentTestà=àtest;
ààààthis.currentQuestionà=à0;
ààààthis.answersà=à{};
ààààthis.testStartedà=àtrue;

àààà//àHideàtestàcards,àshowàinterface
ààààdocument.querySelectorAll'.test-card').forEach(cardà=>à{
ààààààcard.style.displayà=à'none';
àààà});

ààààdocument.querySelector('.tests-header').style.displayà=à'none';
ààààdocument.querySelector('.test-interface').classList.add('active');
ààààdocument.querySelector('.results-section').classList.remove('active');

ààààthis.renderQuestion();
àà}

àà/**
ààà*àRendertàdieàaktuelleàFrage
ààà*/
ààrenderQuestion()à{
ààààconstàquestionà=àthis.currentTest.questions[this.currentQuestion];
ààààifà(!question)àreturn;

ààààconstàtestInterfaceà=àdocument.querySelector('.test-interface');

àààà//àUpdateàTitle
ààààdocument.querySelector('.test-title').textContentà=àthis.currentTest.testName;

àààà//àUpdateàProgress
ààààconstàprogressà=à((this.currentQuestion)à/àthis.currentTest.questions.length)à*à100;
ààààdocument.querySelector('.progress-bar').style.widthà=àprogressà+à'%';
ààààdocument.querySelector('.progress-text').textContentà=à
àààààà`${this.currentQuestion}/${this.currentTest.questions.length}`;

àààà//àRenderàQuestion
ààààconstàquestionSectionà=àdocument.querySelector('.test-question-section');
ààààquestionSection.innerHTMLà=à`
àààààà<divàclass="question-number">Frageà${this.currentQuestionà+à1}àvonà${this.currentTest.questions.length}</div>
àààààà${question.categoryà?à`<divàclass="question-category">${question.category}</div>`à:à''}
àààààà<divàclass="question-text">${question.question}</div>
àààà`;

àààà//àRenderàAnsweràOptions
ààààconstàanswerSectionà=àdocument.querySelector('.answer-options');
ààààanswerSection.innerHTMLà=à'';

ààààthis.currentTest.answerOptions.forEach((option,àindex)à=>à{
ààààààconstàisCheckedà=àthis.answers[question.id]à===àoption.value;
ààààààconstàoptionHTMLà=à`
àààààààà<labelàclass="answer-option">
àààààààààà<inputà
ààààààààààààtype="radio"à
ààààààààààààname="answer-${question.id}"à
ààààààààààààvalue="${option.value}"à
àààààààààààà${isCheckedà?à'checked'à:à''}
ààààààààààààdata-question-id="${question.id}"
àààààààààà/>
àààààààààà<spanàclass="answer-color-indicator"àstyle="background-color:à${option.color};"></span>
àààààààààà<spanàclass="answer-label">${option.label}</span>
àààààààà</label>
àààààà`;
ààààààanswerSection.innerHTMLà+=àoptionHTML;
àààà});

àààà//àAddàchangeàlistener
ààààdocument.querySelectorAll'input[type="radio"]').forEach(radioà=>à{
ààààààradio.addEventListener('change',à(e)à=>à{
ààààààààthis.answers[e.target.dataset.questionId]à=àparseInt(e.target.value);
àààààà});
àààà});

àààà//àUpdateàButtonàStates
ààààdocument.getElementById('btnBack').disabledà=àthis.currentQuestionà===à0;
ààààdocument.getElementById('btnNext').style.displayà=à
ààààààthis.currentQuestionà<àthis.currentTest.questions.lengthà-à1à?à'block'à:à'none';
ààààdocument.getElementById('btnSubmit').style.displayà=à
ààààààthis.currentQuestionà===àthis.currentTest.questions.lengthà-à1à?à'block'à:à'none';
àà}

àà/**
ààà*àNächsteàFrage
ààà*/
àànextQuestion()à{
ààààifà(this.currentQuestionà<àthis.currentTest.questions.lengthà-à1)à{
ààààààthis.currentQuestion++;
ààààààthis.renderQuestion();
ààààààwindow.scrollTo({àtop:à0,àbehavior:à'smooth'à});
àààà}
àà}

àà/**
ààà*àVorherigeàFrage
ààà*/
ààpreviousQuestion()à{
ààààifà(this.currentQuestionà>à0)à{
ààààààthis.currentQuestion--;
ààààààthis.renderQuestion();
ààààààwindow.scrollTo({àtop:à0,àbehavior:à'smooth'à});
àààà}
àà}

àà/**
ààà*àTestàabsendenàundàErgebnisseàanzeigen
ààà*/
ààsubmitTest()à{
ààààifà(Object.keys(this.answers).lengthà<àthis.currentTest.questions.length)à{
ààààààalert('BitteàbeantwortenàSieàalleàFragenàbevoràSieàabsenden.');
ààààààreturn;
àààà}

ààààdocument.querySelector('.test-interface').classList.remove('active');
ààààthis.renderResults();
àà}

àà/**
ààà*àRendertàdieàErgebnisseàbasierendàaufàTesttyp
ààà*/
ààrenderResults()à{
ààààconstàresultsSectionà=àdocument.querySelector('.results-section');
ààààresultsSection.classList.add('active');

ààààletàresultsHTMLà=à`
àààààà<divàclass="result-header">
àààààààà<h2àclass="result-title">${this.currentTest.testName}à-àErgebnisse</h2>
àààààà</div>
àààà`;

àààà//àGenerischeràScoreàfüràalleàTests
ààààconstàscoreà=àthis.currentTest.calculateScore(this.answers);
ààààconstàinterpretationà=àthis.currentTest.getInterpretation(score);

ààààresultsHTMLà+=à`
àààààà<divàclass="result-score-box">
àààààààà<divàclass="result-score">${score}</div>
àààààààà<divàclass="result-max">vonà${this.currentTest.questions.lengthà*à3}àPunkten</div>
àààààààà<divàclass="result-level-badge"àstyle="background-color:à${interpretation.color};">
àààààààààà${interpretation.level}
àààààààà</div>
àààààààà<divàstyle="font-weight:à600;àcolor:à#374151;àmargin-top:à1rem;">
àààààààààà${interpretation.description}
àààààààà</div>
àààààà</div>
àààà`;

ààààresultsHTMLà+=à`
àààààà<divàclass="result-interpretation">
àààààààà<h3>IhreàErgebnisse:</h3>
àààààààà<p>${interpretation.text}</p>
àààààà</div>
àààà`;

àààà//àADHS:àSubscoresàanzeigen
ààààifà(this.currentTest.testIdà===à'adhs')à{
ààààààconstàsubscoresà=àthis.currentTest.calculateSubscores(this.answers);
ààààààresultsHTMLà+=à`<divàclass="subscore-grid">`;
ààààààforà(constà[category,àvalue]àofàObject.entries(subscores))à{
ààààààààconstàpercentageà=à(valueà/à(8à*à4))à*à100;
ààààààààresultsHTMLà+=à`
àààààààààà<divàclass="subscore-item">
àààààààààààà<divàclass="subscore-label">${category}</div>
àààààààààààà<divàclass="subscore-value">${value}</div>
àààààààààààà<divàclass="subscore-bar">
àààààààààààààà<divàclass="subscore-fill"àstyle="width:à${percentage}%;"></div>
àààààààààààà</div>
àààààààààà</div>
àààààààà`;
àààààà}
ààààààresultsHTMLà+=à`</div>`;
àààà}

àààà//àMBTI:àTypàanzeigen
ààààifà(this.currentTest.testIdà===à'personality')à{
ààààààconstàtypeà=àthis.currentTest.calculateType(this.answers);
ààààààconstàtypeInfoà=àthis.currentTest.getTypeInfo(type);

ààààààresultsHTMLà+=à`
àààààààà<divàclass="personality-type-display">
àààààààààà<divàclass="type-acronym">${type}</div>
àààààààààà<divàclass="type-name">${typeInfo.name}</div>
àààààààààà<divàclass="type-description">${typeInfo.description}</div>
àààààààà</div>

àààààààà<divàclass="trait-section">
àààààààààà<divàclass="trait-title">°ªàStärken</div>
àààààààààà<divàclass="trait-listàstrengths">
àààààààààààà<divàclass="trait-item">
àààààààààààààà<span>${typeInfo.strength}</span>
àààààààààààà</div>
àààààààààà</div>
àààààààà</div>

àààààààà<divàclass="trait-section">
àààààààààà<divàclass="trait-title"> —¯¸àHerausforderungen</div>
àààààààààà<divàclass="trait-listàchallenges">
àààààààààààà<divàclass="trait-item">
àààààààààààààà<span>${typeInfo.challenges}</span>
àààààààààààà</div>
àààààààààà</div>
àààààààà</div>

àààààààà<divàclass="trait-section">
àààààààààà<divàclass="trait-title">°¯àPassendeàArbeitsumfelder</div>
àààààààààà<divàclass="trait-list">
àààààààààààà<divàclass="trait-item">
àààààààààààààà<span>${typeInfo.workplace}</span>
àààààààààààà</div>
àààààààààà</div>
àààààààà</div>
àààààà`;
àààà}

àààà//àMedizinischeràHintà(au—eràMBTI)
ààààifà(this.currentTest.medicalDisclaimer)à{
ààààààresultsHTMLà+=àthis.currentTest.medicalDisclaimer;
àààà}

àààà//àResetàButton
ààààresultsHTMLà+=à`
àààààà<divàstyle="text-align:àcenter;àmargin-top:à2rem;">
àààààààà<buttonàclass="btn-reset">àEinenàanderenàTestàmachen</button>
àààààà</div>
àààà`;

ààààresultsSection.innerHTMLà=àresultsHTML;

àààà//àResetàButtonàHandler
ààààdocument.querySelector('.btn-reset').addEventListener('click',à()à=>àthis.resetTest());

ààààwindow.scrollTo({àtop:à0,àbehavior:à'smooth'à});
àà}

àà/**
ààà*àTestàzurücksetzen
ààà*/
ààresetTest()à{
ààààthis.currentTestà=ànull;
ààààthis.currentQuestionà=à0;
ààààthis.answersà=à{};
ààààthis.testStartedà=àfalse;

àààà//àShowàtestàcardsàagain
ààààdocument.querySelectorAll'.test-card').forEach(cardà=>à{
ààààààcard.style.displayà=à'block';
àààà});

ààààdocument.querySelector('.tests-header').style.displayà=à'block';
ààààdocument.querySelector('.test-interface').classList.remove('active');
ààààdocument.querySelector('.results-section').classList.remove('active');

ààààwindow.scrollTo({àtop:à0,àbehavior:à'smooth'à});
àà}
}

//àInitializeàwhenàDOMàisàready
document.addEventListener('DOMContentLoaded',à()à=>à{
àànewàSelfTestsController();
});
