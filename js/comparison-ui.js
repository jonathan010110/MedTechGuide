/**
à*à=====================================================
à*àCOMPARISONàUIàMODULE
à*àHandlingàDOMàinteractionsàforàtheàcomparisonàpage
à*à=====================================================
à*/

classàComparisonUIà{
ààààconstructor()à{
ààààààààthis.deviceGridà=àdocument.getElementById('deviceGrid');
ààààààààthis.categoryFilterà=àdocument.getElementById('categoryFilter');

àààààààà//àCheckàifàweàareàonàtheàcomparisonàpage
ààààààààifà(!this.deviceGridà||à!this.categoryFilter)àreturn;

ààààààààthis.currentCategoryà=à'all';
ààààààààthis.selectedDevicesà=à[];

ààààààààthis.init();
àààà}

ààààinit()à{
ààààààààthis.renderCategoryFilters();
ààààààààthis.renderDevices();
ààààààààthis.attachFilterEvents();
ààààààààthis.attachDeviceSelectionEvents();
àààà}

àààà/**
ààààà*àRenderàcategoryàfilteràbuttonsàbasedàonàdatabase
ààààà*/
ààààrenderCategoryFilters()à{
ààààààààconstàcategoriesà=àMedicalDevicesDatabase.getCategories();

àààààààà//àAddàdynamicàcategoryàbuttonsànextàtoà"all"
ààààààààcategories.forEach(categoryà=>à{
ààààààààààààconstàbtnà=àdocument.createElement('button');
ààààààààààààbtn.classNameà=à'filter-btn';
ààààààààààààbtn.dataset.categoryà=àcategory;
ààààààààààààbtn.textContentà=àcategory;
ààààààààààààthis.categoryFilter.appendChild(btn);
àààààààà});
àààà}

àààà/**
ààààà*àRenderàdevicesàintoàtheàgrid
ààààà*/
ààààrenderDevices()à{
ààààààààthis.deviceGrid.innerHTMLà=à'';

ààààààààletàdevicesToRenderà=àMedicalDevicesDatabase.devices;

ààààààààifà(this.currentCategoryà!==à'all')à{
ààààààààààààdevicesToRenderà=àMedicalDevicesDatabase.getDevicesByCategory(this.currentCategory);
àààààààà}

ààààààààifà(devicesToRender.lengthà===à0)à{
ààààààààààààthis.deviceGrid.innerHTMLà=à'<pàclass="no-results">KeineàGeräteàinàdieseràKategorieàgefunden.</p>';
ààààààààààààreturn;
àààààààà}

ààààààààdevicesToRender.forEach(deviceà=>à{
ààààààààààààconstàisSelectedà=àthis.selectedDevices.includes(device.id);

ààààààààààààconstàcardà=àdocument.createElement('div');
ààààààààààààcard.classNameà=à`device-cardàdevice-card-selectà${isSelectedà?à'selected'à:à''}`;
ààààààààààààcard.dataset.deviceIdà=àdevice.id;

ààààààààààààcard.innerHTMLà=à`
àààààààà<divàclass="card-header"àstyle="display:àflex;àjustify-content:àspace-between;àalign-items:àcenter;àmargin-bottom:à1rem;">
àààààààààà<div>
àààààààààààà<spanàclass="device-icon"àstyle="font-size:à2rem;àmargin-right:à0.5rem;">${device.icon}</span>
àààààààààààà<spanàclass="device-category"àstyle="background:àvar(--bg-light);àpadding:à0.25remà0.5rem;àborder-radius:à4px;àfont-size:à0.8rem;àcolor:àvar(--accent);àfont-weight:à600;">${this.categoryShortener(device.category)}</span>
àààààààààà</div>
àààààààààà<inputàtype="checkbox"àclass="card-checkbox"à${isSelectedà?à'checked'à:à''}àaria-label="AuswählenàfüràVergleich">
àààààààà</div>
àààààààà<h3àstyle="margin:à0à0à0.5remà0;àfont-size:à1.1rem;àcolor:àvar(--primary);">${device.name}</h3>
àààààààà<pàstyle="margin:à0;àcolor:àvar(--text-secondary);àfont-size:à0.9rem;àline-height:à1.4;">${device.description.substring(0,à80)}...</p>
àààààà`;

ààààààààààààthis.deviceGrid.appendChild(card);
àààààààà});
àààà}

àààà//àHelperàforàshorteràcategoryànamesàinàbadge
ààààcategoryShortener(category)à{
ààààààààifà(categoryà===à"Zahnmedizin")àreturnà"Zahn";
ààààààààreturnàcategory;
àààà}

àààà/**
ààààà*àFilteràEventàListeners
ààààà*/
ààààattachFilterEvents()à{
ààààààààthis.categoryFilter.addEventListener('click',à(e)à=>à{
ààààààààààààifà(e.target.tagNameà!==à'BUTTON')àreturn;

àààààààààààà//àUpdateàactiveàstate
ààààààààààààthis.categoryFilter.querySelectorAll'.filter-btn').forEach(btnà=>à{
ààààààààààààààààbtn.classList.remove('active');
àààààààààààà});
ààààààààààààe.target.classList.add('active');

àààààààààààà//àUpdateàcategoryàandàre-render
ààààààààààààthis.currentCategoryà=àe.target.dataset.category;
ààààààààààààthis.renderDevices();
àààààààà});
àààà}

àààà/**
ààààà*àDeviceàSelectionàListeners
ààààà*/
ààààattachDeviceSelectionEvents()à{
ààààààààthis.deviceGrid.addEventListener('click',à(e)à=>à{
ààààààààààààconstàcardà=àe.target.closest('.device-card-select');
ààààààààààààifà(!card)àreturn;

ààààààààààààconstàdeviceIdà=àcard.dataset.deviceId;

àààààààààààà//àPreventàdoubleàtoggleàifàtheyàclickedàtheàcheckboxàdirectly
ààààààààààààifà(e.target.typeà!==à'checkbox')à{
ààààààààààààààààconstàcheckboxà=àcard.querySelector('.card-checkbox');
ààààààààààààààààcheckbox.checkedà=à!checkbox.checked;
àààààààààààà}

ààààààààààààthis.handleSelectionToggle(deviceId,àcard);
àààààààà});
àààà}

àààà/**
ààààà*àLogicàforàselecting/deselecting
ààààà*/
ààààhandleSelectionToggle(deviceId,àcardElement)à{
ààààààààconstàisSelectedà=àthis.selectedDevices.includes(deviceId);
ààààààààconstàcheckboxà=àcardElement.querySelector('.card-checkbox');

ààààààààifà(isSelected)à{
àààààààààààà//àDeselect
ààààààààààààthis.selectedDevicesà=àthis.selectedDevices.filter(idà=>àidà!==àdeviceId);
ààààààààààààcardElement.classList.remove('selected');
ààààààààààààifà(checkbox)àcheckbox.checkedà=àfalse;

àààààààààààà//àTellàComparisonModule
ààààààààààààifà(window.comparisonModuleInstance)à{
ààààààààààààààààwindow.comparisonModuleInstance.removeDevice(deviceId);
àààààààààààà}

àààààààà}àelseà{
àààààààààààà//àSelectà(Maxà2)
ààààààààààààifà(this.selectedDevices.lengthà>=à2)à{
ààààààààààààààààalert('Sieàkönnenàmaximalà2àGeräteàfüràdenàVergleichàauswählen.');
ààààààààààààààààifà(checkbox)àcheckbox.checkedà=àfalse;
ààààààààààààààààreturn;
àààààààààààà}

ààààààààààààthis.selectedDevices.push(deviceId);
ààààààààààààcardElement.classList.add('selected');
ààààààààààààifà(checkbox)àcheckbox.checkedà=àtrue;

àààààààààààà//àTellàComparisonModule
ààààààààààààifà(window.comparisonModuleInstance)à{
ààààààààààààààààwindow.comparisonModuleInstance.selectDevice(deviceId);
àààààààààààà}
àààààààà}

ààààààààthis.updateSelectionStatus();
àààà}

àààà/**
ààààà*àUpdateàStatusàBar
ààààà*/
ààààupdateSelectionStatus()à{
ààààààààconstàstatusTextà=àdocument.getElementById('selectionStatus');
ààààààààconstàcompareBtnà=àdocument.getElementById('compareBtn');

ààààààààconstàcountà=àthis.selectedDevices.length;

ààààààààifà(statusText)à{
ààààààààààààifà(countà===à0)à{
ààààààààààààààààstatusText.textContentà=à'WählenàSieà2àGeräteàfüràdenàVergleichàaus';
ààààààààààààààààstatusText.style.colorà=à'#6b7280';
àààààààààààà}àelseàifà(countà===à1)à{
ààààààààààààààààconstàdevà=àMedicalDevicesDatabase.getDeviceById(this.selectedDevices[0]);
ààààààààààààààààstatusText.textContentà=à`${dev.name}àausgewählt.àWählenàSieà1àweiteresàGerät.`;
ààààààààààààààààstatusText.style.colorà=à'#d97706';
àààààààààààà}àelseàifà(countà===à2)à{
ààààààààààààààààstatusText.textContentà=à'2àGeräteàausgewählt.àBereitàfüràdenàVergleich!';
ààààààààààààààààstatusText.style.colorà=à'#16a34a';
àààààààààààà}
àààààààà}

ààààààààifà(compareBtn)à{
ààààààààààààcompareBtn.textContentà=à`Vergleichenà(${count}/2)`;
ààààààààààààcompareBtn.disabledà=àcountà<à2;
àààààààà}
àààà}
}

//àInitàwhenàDOMàReady
document.addEventListener('DOMContentLoaded',à()à=>à{
àààànewàComparisonUI();
});
