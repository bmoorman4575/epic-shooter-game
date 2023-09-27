gdjs.menuCode = {};
gdjs.menuCode.GDloadingtxtObjects1= [];
gdjs.menuCode.GDloadingtxtObjects2= [];
gdjs.menuCode.GDcreditsbtmgamesObjects1= [];
gdjs.menuCode.GDcreditsbtmgamesObjects2= [];
gdjs.menuCode.GDgradiantObjects1= [];
gdjs.menuCode.GDgradiantObjects2= [];
gdjs.menuCode.GDblackObjects1= [];
gdjs.menuCode.GDblackObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcreditsbtmgamesObjects1Objects = Hashtable.newFrom({"creditsbtmgames": gdjs.menuCode.GDcreditsbtmgamesObjects1});
gdjs.menuCode.asyncCallback14457404 = function (runtimeScene, asyncObjectsList) {
}
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDloadingtxtObjects1Objects = Hashtable.newFrom({"loadingtxt": gdjs.menuCode.GDloadingtxtObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.menuCode.GDloadingtxtObjects1);

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__btm_game_helper_extention__caption.func(runtimeScene, "", 1, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDloadingtxtObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.menuCode.asyncCallback14457404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.menuCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("creditsbtmgames"), gdjs.menuCode.GDcreditsbtmgamesObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maingamescene", false);
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcreditsbtmgamesObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

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

gdjs.menuCode.eventsList1(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
