exportàfunctionàcreatePulseDisplayCanvas(widthà=à512,àheightà=à256)à{
ààconstàcanvasà=àdocument.createElement('canvas');
ààcanvas.widthà=àwidth;
ààcanvas.heightà=àheight;
ààconstàctxà=àcanvas.getContext('2d');

ààreturnà{
ààààcanvas,
ààààdraw({àoxygen,àpulse,àtimeà})à{
ààààààctx.clearRect(0,à0,àwidth,àheight);

ààààààconstàbgà=àctx.createLinearGradient(0,à0,à0,àheight);
ààààààbg.addColorStop(0,à'#091325');
ààààààbg.addColorStop(1,à'#0f1e3a');
ààààààctx.fillStyleà=àbg;
ààààààctx.fillRect(0,à0,àwidth,àheight);

ààààààctx.fillStyleà=à'#8fe5ff';
ààààààctx.fontà=à'boldà44pxàSegoeàUI';
ààààààctx.fillText(`${oxygen}%àSpO₂`,à22,à58);

ààààààctx.fillStyleà=à'#bcd4ff';
ààààààctx.fontà=à'28pxàSegoeàUI';
ààààààctx.fillText(`${pulse}àbpm`,à22,à98);

ààààààctx.save();
ààààààctx.translate(0,à180);
ààààààctx.strokeStyleà=à'#40f48c';
ààààààctx.lineWidthà=à4;
ààààààctx.beginPath();

ààààààconstàampà=à18;
ààààààforà(letàxà=à0;àxà<àwidth;àx++)à{
ààààààààconstànà=à(xà+àtimeà*à180)à/à46;
ààààààààconstàwaveà=àMath.sin(n)à*àampà*à0.6;
ààààààààconstàspikeà=àMath.exp(-Math.pow((xà%à85)à-à8,à2)à/à70)à*à-36;
ààààààààconstàyà=àwaveà+àspike;
ààààààààifà(xà===à0)àctx.moveTo(x,ày);
ààààààààelseàctx.lineTo(x,ày);
àààààà}
ààààààctx.stroke();
ààààààctx.restore();

ààààààctx.strokeStyleà=à'rgba(120,175,255,0.3)';
ààààààctx.strokeRect(5,à5,àwidthà-à10,àheightà-à10);
àààà},
àà};
}

exportàfunctionàcreateEKGCanvas(widthà=à1024,àheightà=à512)à{
ààconstàcanvasà=àdocument.createElement('canvas');
ààcanvas.widthà=àwidth;
ààcanvas.heightà=àheight;
ààconstàctxà=àcanvas.getContext('2d');

ààreturnà{
ààààcanvas,
ààààdraw({àheartRate,àtimeà})à{
ààààààctx.clearRect(0,à0,àwidth,àheight);

ààààààconstàbgà=àctx.createLinearGradient(0,à0,à0,àheight);
ààààààbg.addColorStop(0,à'#061020');
ààààààbg.addColorStop(1,à'#0b1730');
ààààààctx.fillStyleà=àbg;
ààààààctx.fillRect(0,à0,àwidth,àheight);

ààààààctx.strokeStyleà=à'rgba(100,à150,à220,à0.28)';
ààààààctx.lineWidthà=à1;
ààààààforà(letàyà=à0;àyà<=àheight;àyà+=à30)à{
ààààààààctx.beginPath();
ààààààààctx.moveTo(0,ày);
ààààààààctx.lineTo(width,ày);
ààààààààctx.stroke();
àààààà}
ààààààforà(letàxà=à0;àxà<=àwidth;àxà+=à40)à{
ààààààààctx.beginPath();
ààààààààctx.moveTo(x,à0);
ààààààààctx.lineTo(x,àheight);
ààààààààctx.stroke();
àààààà}

ààààààconstàbaselineà=àheightà*à0.52;
ààààààconstàbpmFactorà=àheartRateà/à72;
ààààààconstàspeedà=à240à*àbpmFactor;

ààààààctx.strokeStyleà=à'#50ff8c';
ààààààctx.lineWidthà=à5;
ààààààctx.beginPath();

ààààààforà(letàxà=à0;àxà<àwidth;àx++)à{
ààààààààconstàphaseà=à((xà+àtimeà*àspeed)à%à220)à/à220;

ààààààààletàsignalà=à0;
ààààààààifà(phaseà<à0.14)àsignalà=àMath.sin((phaseà/à0.14)à*àMath.PI)à*à6;
ààààààààelseàifà(phaseà<à0.22)àsignalà=à-3;
ààààààààelseàifà(phaseà<à0.255)àsignalà=à-80à*àMath.sin(((phaseà-à0.22)à/à0.035)à*àMath.PI);
ààààààààelseàifà(phaseà<à0.32)àsignalà=à30à*àMath.sin(((phaseà-à0.255)à/à0.065)à*àMath.PI);
ààààààààelseàifà(phaseà<à0.5)àsignalà=à8à*àMath.sin(((phaseà-à0.32)à/à0.18)à*àMath.PI);

ààààààààconstàyà=àbaselineà+àsignal;

ààààààààifà(xà===à0)àctx.moveTo(x,ày);
ààààààààelseàctx.lineTo(x,ày);
àààààà}
ààààààctx.stroke();

ààààààctx.fillStyleà=à'#9fd3ff';
ààààààctx.fontà=à'boldà42pxàSegoeàUI';
ààààààctx.fillText(`HFà${heartRate}àbpm`,à24,à54);
àààà},
àà};
}
