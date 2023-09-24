gdjs.menuCode = {};
gdjs.menuCode.GDloadingtxtObjects1= [];
gdjs.menuCode.GDloadingtxtObjects2= [];
gdjs.menuCode.GDcreditsbtmgamesObjects1= [];
gdjs.menuCode.GDcreditsbtmgamesObjects2= [];
gdjs.menuCode.GDgradiantObjects1= [];
gdjs.menuCode.GDgradiantObjects2= [];
gdjs.menuCode.GDblackObjects1= [];
gdjs.menuCode.GDblackObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maingamescene", false);
}}

}


{



}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDloadingtxtObjects1.length = 0;
gdjs.menuCode.GDloadingtxtObjects2.length = 0;
gdjs.menuCode.GDcreditsbtmgamesObjects1.length = 0;
gdjs.menuCode.GDcreditsbtmgamesObjects2.length = 0;
gdjs.menuCode.GDgradiantObjects1.length = 0;
gdjs.menuCode.GDgradiantObjects2.length = 0;
gdjs.menuCode.GDblackObjects1.length = 0;
gdjs.menuCode.GDblackObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
