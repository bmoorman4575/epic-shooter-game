
if (typeof gdjs.evtsExt__btm_game_helper_extention__caption !== "undefined") {
  gdjs.evtsExt__btm_game_helper_extention__caption.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__btm_game_helper_extention__caption = {};
gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1= [];
gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects2= [];


gdjs.evtsExt__btm_game_helper_extention__caption.mapOfGDgdjs_9546evtsExt_9595_9595btm_9595game_9595helper_9595extention_9595_9595caption_9546GDcaptiontextObjects1Objects = Hashtable.newFrom({"captiontext": gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1});
gdjs.evtsExt__btm_game_helper_extention__caption.mapOfGDgdjs_9546evtsExt_9595_9595btm_9595game_9595helper_9595extention_9595_9595caption_9546GDcaptiontextObjects1Objects = Hashtable.newFrom({"captiontext": gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1});
gdjs.evtsExt__btm_game_helper_extention__caption.asyncCallback13829044 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("captiontext"), gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects2);

{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
gdjs.evtsExt__btm_game_helper_extention__caption.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1) asyncObjectsList.addObject("captiontext", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("time")) || 0 : 0)), (runtimeScene) => (gdjs.evtsExt__btm_game_helper_extention__caption.asyncCallback13829044(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__btm_game_helper_extention__caption.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__btm_game_helper_extention__caption.mapOfGDgdjs_9546evtsExt_9595_9595btm_9595game_9595helper_9595extention_9595_9595caption_9546GDcaptiontextObjects1Objects, 0, 0, "ui");
}{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1[i].setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("caption") : ""));
}
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.evtsExt__btm_game_helper_extention__caption.mapOfGDgdjs_9546evtsExt_9595_9595btm_9595game_9595helper_9595extention_9595_9595caption_9546GDcaptiontextObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1[i].setY(gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1[i].getY() + (250));
}
}
{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__caption.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("time")) || 0 : 0) == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("captiontext"), gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1);
{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.debuggerTools.log("Caption time cannot be zero", "error", "BTM Extention");
}}

}


};

gdjs.evtsExt__btm_game_helper_extention__caption.func = function(runtimeScene, caption, time, captiontext, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"captiontext": captiontext
},
  _objectArraysMap: {
"captiontext": gdjs.objectsListsToArray(captiontext)
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
if (argName === "caption") return caption;
if (argName === "time") return time;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects1.length = 0;
gdjs.evtsExt__btm_game_helper_extention__caption.GDcaptiontextObjects2.length = 0;

gdjs.evtsExt__btm_game_helper_extention__caption.eventsList1(runtimeScene, eventsFunctionContext);

return eventsFunctionContext.task
}

gdjs.evtsExt__btm_game_helper_extention__caption.registeredGdjsCallbacks = [];