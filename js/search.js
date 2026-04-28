/**
à*à===================================================================
à*à°àMEDTECHGUIDEà-àGLOBALàSEARCHàSYSTEMà(Refactored)
à*à===================================================================
à*àFunktionen:
à*à-àGlobaleàSucheàüberàalleàSeitenà(viaàsearch-index.json)
à*à-àLive-SucheàmitàDebounce
à*à-àDropdownàmitàErgebnissen
à*à-àAnklickbareàLinksàzuàSeiten
à*à-àHighlightàaufàZielseite
à*à-àLeere-Zustand-Anzeige
à*/

//à===================================================================
//à°¦àSEARCHàINDEXà-àwirdàasynchronàgeladen
//à===================================================================

letàSEARCH_INDEXà=ànull;
letàsearchCacheà=à{};à//àCacheàfüràhäufigeàSuchen

/**
à*àLädtàdenàSearchàIndexàausàsearch-index.json
à*/
asyncàfunctionàloadSearchIndex()à{
ààifà(SEARCH_INDEX)àreturnàSEARCH_INDEX;à//àCache

ààtryà{
ààààconstàresponseà=àawaitàfetch('search-index.json');
ààààifà(!response.ok)àthrowànewàError(`HTTPà${response.status}`);
ààààSEARCH_INDEXà=àawaitàresponse.json();
ààààconsole.log('àSearchàIndexàgeladen:',àSEARCH_INDEX.pages.length,à'Seiten');
ààààreturnàSEARCH_INDEX;
àà}àcatchà(error)à{
ààààconsole.warn(' —¯¸àSearchàIndexàkonnteànichtàgeladenàwerden:',àerror);
ààààreturnànull;
àà}
}

//à===================================================================
//à° —¯¸àUTILITYàFUNCTIONS
//à===================================================================

/**
à*àNormalisiertàTextàfüràbessereàSucheà(lowercase,àUmlauteàetc)
à*/
functionànormalizeSearchText(text)à{
ààifà(!text)àreturnà'';
ààreturnàtext
àààà.toLowerCase()
àààà.replace(/ä/g,à'a')
àààà.replace(/ö/g,à'o')
àààà.replace(/ü/g,à'u')
àààà.replace(/—/g,à'ss')
àààà.trim();
}

/**
à*àErstelltàeinenàText-PreviewàausàlängerenàInhalten
à*/
functionàcreatePreview(text,àsearchTermà=à'',àmaxLengthà=à120)à{
ààifà(!text)àreturnà'';
àà
ààconstànormalizedà=ànormalizeSearchText(text);
ààconstànormalizedTermà=ànormalizeSearchText(searchTerm);
àà
ààletàpreviewà=àtext;
àà
àà//àVersucheàKontextàumàdenàSuchbegriffàzuàfinden
ààconstàindexà=ànormalized.indexOf(normalizedTerm);
ààifà(indexà!==à-1à&&àtext.lengthà>àmaxLength)à{
ààààconstàstartà=àMath.max(0,àindexà-à40);
ààààconstàendà=àMath.min(text.length,àstartà+àmaxLength);
ààààpreviewà=à(startà>à0à?à'...'à:à'')à+àtext.substring(start,àend)à+à(endà<àtext.lengthà?à'...'à:à'');
àà}àelseàifà(preview.lengthà>àmaxLength)à{
ààààpreviewà=àpreview.substring(0,àmaxLength)à+à'...';
àà}
àà
ààreturnàpreview;
}

/**
à*àHervorhebungàvonàSuchbegriffenàimàmarkiertenàText
à*/
functionàhighlightSearchTerm(text,àsearchTerm)à{
ààifà(!searchTermà||à!text)àreturnàtext;
àà
ààconstàregexà=ànewàRegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g,à'\\$&')})`,à'gi');
ààreturnàtext.replace(regex,à'<strong>$1</strong>');
}

//à===================================================================
//à°àSEARCHàFUNCTION
//à===================================================================

/**
à*àFührtàSucheàdurchàdenàIndexàdurch
à*à@paramà{string}àqueryà-àSuchbegriff
à*à@returnsà{Array}àErgebnisseàmitàScore
à*/
functionàperformSearch(query)à{
ààifà(!SEARCH_INDEX)à{
ààààconsole.warn('SearchàIndexànochànichtàgeladen');
ààààreturnà[];
àà}

ààifà(!queryà||àquery.trim().lengthà<à2)à{
ààààreturnà[];
àà}

ààconstànormalizedQueryà=ànormalizeSearchText(query);
ààconstàresultsà=à[];

àà//àDurchsucheàalleàSeiten
ààSEARCH_INDEX.pages.forEach(pageà=>à{
ààààletàscoreà=à0;
ààààletàmatchedContentà=à'';

àààà//à1.àTitelàhatàhöchstenàScoreà(4àPunkte)
ààààifà(normalizeSearchText(page.title).includes(normalizedQuery))à{
ààààààscoreà+=à4;
ààààààmatchedContentà=àpage.title;
àààà}

àààà//à2.àDescriptionà&àKeywordsà(2àPunkte)
ààààifà(normalizeSearchText(page.description).includes(normalizedQuery))à{
ààààààscoreà+=à2;
ààààààmatchedContentà=àmatchedContentà||àpage.description;
àààà}

ààààifà(page.keywordsà&&àpage.keywords.some(kwà=>ànormalizeSearchText(kw).includes(normalizedQuery)))à{
ààààààscoreà+=à2;
àààà}

àààà//à3.àSectionsàdurchsuchenà(1àPunktàproàMatch)
ààààifà(page.sections)à{
ààààààpage.sections.forEach(sectionà=>à{
ààààààààifà(normalizeSearchText(section.heading).includes(normalizedQuery))à{
ààààààààààscoreà+=à1.5;
àààààààà}
ààààààààifà(normalizeSearchText(section.content).includes(normalizedQuery))à{
ààààààààààscoreà+=à1;
ààààààààààifà(!matchedContent)à{
ààààààààààààmatchedContentà=àsection.content;
àààààààààà}
àààààààà}
àààààà});
àààà}

àààà//àNuràhinzufügenàwennàmindestensàeinàMatch
ààààifà(scoreà>à0)à{
ààààààresults.push({
ààààààààpage:àpage.title,
ààààààààurl:àpage.url,
ààààààààdescription:àpage.description,
ààààààààpreview:àcreatePreview(matchedContentà||àpage.description,àquery),
ààààààààscore:àscore,
ààààààààid:àpage.id
àààààà});
àààà}
àà});

àà//àNachàScoreàsortierenà(höchsteàzuerst)
ààresults.sort((a,àb)à=>àb.scoreà-àa.score);

ààreturnàresults.slice(0,à10);à//àMaxà10àErgebnisse
}

//à===================================================================
//à°¨àUIàRENDERING
//à===================================================================

/**
à*àRendertàSuchergebnisseàalsàDropdown
à*/
functionàrenderSearchResults(results,àsearchTerm)à{
ààconstàresultsContainerà=àdocument.getElementById('searchResults');
ààifà(!resultsContainer)àreturn;

àà//àLeeren
ààresultsContainer.innerHTMLà=à'';

àà//àKeineàErgebnisse
ààifà(!resultsà||àresults.lengthà===à0)à{
ààààconstàemptyStateà=àdocument.createElement('div');
ààààemptyState.classNameà=à'search-empty-state';
ààààemptyState.innerHTMLà=à`
àààààà<divàclass="search-empty-icon">°</div>
àààààà<pàclass="search-empty-text">KeineàErgebnisseàfürà"${searchTerm}"</p>
àààààà<pàclass="search-empty-hint">VersucheàandereàBegriffeàoderàdurchsucheàdieàSeiteàmanuell</p>
àààà`;
ààààresultsContainer.appendChild(emptyState);
ààààreturn;
àà}

àà//àErgebnisseàrendern
ààconstàresultsListà=àdocument.createElement('div');
ààresultsList.classNameà=à'search-results-list';

ààresults.forEach((result,àindex)à=>à{
ààààconstàresultItemà=àdocument.createElement('a');
ààààresultItem.hrefà=àresult.url;
ààààresultItem.classNameà=à'search-result-item';
ààààresultItem.setAttribute('data-search-result',àresult.id);
àààà
àààà//àSpeichiereàSuchbegriffàimàSessionàStorageàfüràspäteràHighlighting
ààààresultItem.addEventListener('click',à()à=>à{
ààààààsessionStorage.setItem('highlightTerm',àsearchTerm);
ààààààsessionStorage.setItem('searchSource',àresult.url);
àààà});

ààààresultItem.innerHTMLà=à`
àààààà<divàclass="search-result-rank">${indexà+à1}</div>
àààààà<divàclass="search-result-content">
àààààààà<divàclass="search-result-title">${highlightSearchTerm(result.page,àsearchTerm)}</div>
àààààààà<divàclass="search-result-preview">${result.preview}</div>
àààààà</div>
àààààà<divàclass="search-result-arrow"></div>
àààà`;

ààààresultsList.appendChild(resultItem);
àà});

àà//àResultàCounter
ààconstàcounterà=àdocument.createElement('div');
ààcounter.classNameà=à'search-results-counter';
ààcounter.textContentà=à`${results.length}à${results.lengthà===à1à?à'Ergebnis'à:à'Ergebnisse'}àgefunden`;

ààresultsContainer.appendChild(counter);
ààresultsContainer.appendChild(resultsList);
}

//à===================================================================
//à±—¯¸àDEBOUNCEàSEARCH
//à===================================================================

letàsearchTimeout;

/**
à*àDebouncedàSucheàfüràbessereàPerformance
à*/
functionàdebouncedSearch(query)à{
ààclearTimeout(searchTimeout);

ààifà(!queryà||àquery.trim().lengthà<à2)à{
ààààdocument.getElementById('searchResults')?.innerHTMLà=à'';
ààààreturn;
àà}

àà//àZeigeàLoadingàState
ààconstàresultsContainerà=àdocument.getElementById('searchResults');
ààifà(resultsContainer)à{
ààààresultsContainer.innerHTMLà=à'<divàclass="search-loading">°àSucheàläuft...</div>';
àà}

ààsearchTimeoutà=àsetTimeout(()à=>à{
ààààconstàresultsà=àperformSearch(query);
ààààrenderSearchResults(results,àquery);
àà},à150);à//à150msàDebounce
}

//à===================================================================
//à°"àHIGHLIGHTINGàAUFàZIELSEITE
//à===================================================================

/**
à*àHervorhebungàdesàSuchbegriffsàaufàderàZielseiteàdurchführen
à*/
functionàhighlightOnPageIfNeeded()à{
ààconstàhighlightTermà=àsessionStorage.getItem('highlightTerm');
ààconstàsearchSourceà=àsessionStorage.getItem('searchSource');

ààifà(!highlightTermà||àsearchSourceà!==àwindow.location.pathname.split('/').pop())à{
ààààreturn;
àà}

àà//àCleanupàSessionàStorage
ààsessionStorage.removeItem('highlightTerm');
ààsessionStorage.removeItem('searchSource');

àà//àDurchsucheàalleàText-Elementeàundàhighlight
ààconstàsearchableElementsà=àdocument.querySelectorAll'h2,àh3,àp,àli,àtd');
ààconstànormalizedTermà=ànormalizeSearchText(highlightTerm);
ààletàfirstMatchà=ànull;

ààsearchableElements.forEach(elà=>à{
ààààconstàtextà=àel.textContent;
ààààifà(normalizeSearchText(text).includes(normalizedTerm))à{
ààààààconstàregexà=ànewàRegExp(`(${highlightTerm.replace(/[.*+?^${}()|[\]\\]/g,à'\\$&')})`,à'gi');
ààààààel.innerHTMLà=àtext.replace(regex,à'<markàclass="search-highlight">$1</mark>');

ààààààifà(!firstMatch)à{
ààààààààfirstMatchà=àel;
àààààà}
àààà}
àà});

àà//àScrollàzuàerstemàMatch
ààifà(firstMatch)à{
ààààsetTimeout(()à=>à{
ààààààfirstMatch.scrollIntoView({àbehavior:à'smooth',àblock:à'center'à});
àààà},à300);
àà}
}

//à===================================================================
//à°àINITIALIZATION
//à===================================================================

functionàinitGlobalSearch()à{
ààconstàsearchInputà=àdocument.getElementById('globalSearch');
ààifà(!searchInput)àreturn;

àà//àLadeàIndexàbeimàSeitenload
ààloadSearchIndex();

àà//àInputàEventàListener
ààsearchInput.addEventListener('input',à(e)à=>à{
ààààdebouncedSearch(e.target.value);
àà});

àà//àCloseàdropdownàbeiàClickàau—erhalb
ààdocument.addEventListener('click',à(e)à=>à{
ààààifà(!e.target.closest('.nav-search'))à{
ààààààdocument.getElementById('searchResults')?.innerHTMLà=à'';
àààà}
àà});

àà//àHighlightàwennàaufàdieseràSeiteàangekommen
ààhighlightOnPageIfNeeded();
}

//à===================================================================
//à°àEXPORTàfüràexterneàNutzungà(optional)
//à===================================================================

ifà(typeofàmoduleà!==à'undefined'à&&àmodule.exports)à{
ààmodule.exportsà=à{
ààààinitGlobalSearch,
ààààperformSearch,
ààààloadSearchIndex
àà};
}

//àInitialisierungàwennàDOMContentLoaded
ifà(document.readyStateà===à'loading')à{
ààdocument.addEventListener('DOMContentLoaded',àinitGlobalSearch);
}àelseà{
ààinitGlobalSearch();
}
