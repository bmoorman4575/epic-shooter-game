
if (typeof gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime !== "undefined") {
  gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime = {};
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1= [];
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2= [];
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects3= [];
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects4= [];


gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13502756);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "walkingdelay");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walkingjuststart"), true);
}}

}


};gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13504324);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "walkingdelay");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walkingjuststart"), true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13506196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "walkingdelay");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walkingjuststart"), true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13508076);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "walkingdelay");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walkingjuststart"), true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("walktyperightorleft")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenVariableNumber2(runtimeScene, "leftrotation", runtimeScene.getScene().getVariables().get("headrotation"), gdjs.randomFloatInRange(0.7, 1.3), 400, "easeInOutQuad");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("walktyperightorleft")) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("walktyperightorleft").setNumber(0);
}{gdjs.evtTools.tween.tweenVariableNumber2(runtimeScene, "leftrotation", runtimeScene.getScene().getVariables().get("headrotation"), gdjs.randomFloatInRange(-(1.3), -(0.7)), 400, "easeInOutQuad");
}}

}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


};gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length !== 0 ? gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[0] : null), true, "", 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length === 0 ) ? 0 :gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[0].getZ()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length === 0 ) ? 0 :gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[0].getZ()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, -((( gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length === 0 ) ? 0 :gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[0].getRotationY())) + 90, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, (( gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length === 0 ) ? 0 :gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[0].getRotationX()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, (( gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length === 0 ) ? 0 :gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[0].getAngle()) + 90, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].addPolarForce((gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].getAngle()), 100, 0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walking"), true);
}
{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].addPolarForce((gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].getAngle()) - 90, 100, 0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walking"), true);
}
{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].addPolarForce((gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].getAngle()) + 90, 100, 0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walking"), true);
}
{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].addPolarForce((gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].getAngle()), -(100), 0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walking"), true);
}
{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("walking"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "walkingdelay") >= 0.4;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("walkingjuststart"), true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "walkingdelay");
}{runtimeScene.getScene().getVariables().get("walkingnumbertemp").setNumber(gdjs.randomInRange(1, 8));
}{runtimeScene.getScene().getVariables().get("walktyperightorleft").add(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walkingjuststart"), false);
}
{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].setRotationX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("headrotation")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13519732);
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("walking"), false);
}{gdjs.evtTools.tween.tweenVariableNumber2(runtimeScene, "backup", runtimeScene.getScene().getVariables().get("headrotation"), 0, 500, "easeInOutBack");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2);
{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].setAngle(gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2[i].getAngle() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("player"), gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1);
{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1[i].setRotationY(gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1[i].getRotationY() + (gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1[i].setRotationY(gdjs.evtTools.common.clamp((gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1[i].getRotationY()), -(80), 80));
}
}}

}


};gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.func = function(runtimeScene, player, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"player": player
},
  _objectArraysMap: {
"player": gdjs.objectsListsToArray(player)
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

gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects1.length = 0;
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects2.length = 0;
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects3.length = 0;
gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.GDplayerObjects4.length = 0;

gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.eventsList6(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__btm_game_helper_extention__fpscameraruntime.registeredGdjsCallbacks = [];