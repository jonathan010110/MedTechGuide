exportàfunctionàsetupUI({àapp,àloader,àheartRateSlider,àheartRateValueà})à{
ààconstàdeviceButtonsà=à[...document.querySelectorAll'.device-btn')];
ààconstàekgControlsà=àdocument.getElementById('ekg-controls');
ààconstàbloodControlsà=àdocument.getElementById('blood-controls');

ààconstàsetControlVisibilityà=à(deviceId)à=>à{
ààààekgControls.hiddenà=àdeviceIdà!==à'ekg';
ààààbloodControls.hiddenà=àdeviceIdà!==à'blood';
àà};

ààdeviceButtons.forEach((button)à=>à{
ààààbutton.addEventListener('click',à()à=>à{
ààààààconstàtargetà=àbutton.dataset.device;
ààààààifà(!target)àreturn;

ààààààdeviceButtons.forEach((btn)à=>àbtn.classList.toggle('active',àbtnà===àbutton));
ààààààsetControlVisibility(target);
ààààààapp.setDevice(target);
àààà});
àà});

ààheartRateSlider.addEventListener('input',à()à=>à{
ààààheartRateValue.textContentà=àheartRateSlider.value;
àà});

ààsetControlVisibility('pulse');

ààwindow.setTimeout(()à=>à{
ààààloader.classList.add('hidden');
àà},à850);
}
