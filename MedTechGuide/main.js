importà{àApp3Dà}àfromà'./modules/core/App3D.js';
importà{àsetupUIà}àfromà'./modules/ui/setupUI.js';

constàcanvasà=àdocument.getElementById('scene');
constàloaderà=àdocument.getElementById('loader');
constàinfoPanelà=àdocument.getElementById('infoPanel');
constàinfoTextà=àdocument.getElementById('infoText');
constàheartRateSliderà=àdocument.getElementById('heartRateSlider');
constàheartRateValueà=àdocument.getElementById('heartRateValue');
constàpressureFillà=àdocument.getElementById('pressureFill');
constàbpResultà=àdocument.getElementById('bp-result');

constàshowLoaderMessageà=à(message)à=>à{
ààconstàtextNodeà=àloader?.querySelector('p');
ààifà(textNode)à{
ààààtextNode.textContentà=àmessage;
àà}
};

ifà(window.location.protocolà===à'file:')à{
ààshowLoaderMessage('BitteàüberàlokalenàServeràöffnen:àz.àB.àpythonà-màhttp.serverà8080àundàdannà/MedTechGuide/.');
}

ifà(window.location.protocolà!==à'file:')à{
ààconstàappà=ànewàApp3D({
ààààcanvas,
ààààinfoPanel,
ààààinfoText,
ààààheartRateSlider,
ààààpressureFill,
ààààbpResult,
àà});

ààsetupUI({
ààààapp,
ààààloader,
ààààheartRateSlider,
ààààheartRateValue,
àà});

ààtryà{
ààààapp.init();
àà}àcatchà(error)à{
ààààconsole.error('MedTechGuideàkonnteànichtàinitialisiertàwerden:',àerror);
ààààshowLoaderMessage('Startfehler:àPrüfeàBrowser-KonsoleàundànutzeàeinenàlokalenàHTTP-Server.');
àà}
}
