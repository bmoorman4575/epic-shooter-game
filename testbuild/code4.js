gdjs.blackCode = {};


gdjs.blackCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.blackCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.blackCode.eventsList0(runtimeScene);

return;

}

gdjs['blackCode'] = gdjs.blackCode;
