
if (typeof gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded = {};


gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13492812);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("amultiplayerinformation").getChild("howmanyplayers").setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("amultiplayerinformation").getChild("setup"), false);
}{gdjs.evtTools.debuggerTools.log("BTM Extension initialized", "info", "BTM Extention");
}}

}


};

gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__btm_game_helper_extention__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
