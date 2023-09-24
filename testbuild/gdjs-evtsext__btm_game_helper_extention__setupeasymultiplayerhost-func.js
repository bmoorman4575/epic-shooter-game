
if (typeof gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost !== "undefined") {
  gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost = {};


gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("amultiplayerinformation").getChild("setup"), true);
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("Easy Multiplayer is allready running!, resetting the variables and disconnecting runtime.", "error", "BTM Extention");
}{gdjs.evtTools.p2p.disconnectFromAll();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("maxplayers")) || 0 : 0) > 250);
}
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log("P2P Only supports players up to 250!", "error", "BTM Extention");
}}

}


};gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount3 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("maxplayers")) || 0 : 0);
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup").add(1);
}{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("bhostinformationout").getChild("p").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))).getChild("angle").setNumber(0);
}{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("bhostinformationout").getChild("p").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))).getChild("currentanimation").setString("");
}{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("bhostinformationout").getChild("p").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))).getChild("currentanimation").setString("");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("bhostinformationout").getChild("p").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))).getChild("isflipped"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("bhostinformationout").getChild("p").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))).getChild("isflipped"), false);
}{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("bhostinformationout").getChild("p").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))).getChild("x").setNumber(0);
}{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("bhostinformationout").getChild("p").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))).getChild("y").setNumber(0);
}{gdjs.evtTools.debuggerTools.log("player " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup"))) + " Variables loaded", "", "BTM Extention");
}}
}

}


};gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("demention") : "") == "2D");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("amultiplayerinformation").getChild("dementiontype").setString("2D");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("amultiplayerinformation").getChild("setup"), true);
}{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("amultiplayerinformation").getChild("howmanyplayers").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("maxplayers")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("easymultiplayer").getChild("tempdata").getChild("howmanyplayerssetup").setNumber(0);
}
{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("connctbrokerserver") : false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{


gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList3(runtimeScene, eventsFunctionContext);
}


{



}


};gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("maxplayers")) || 0 : 0) < 251);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.func = function(runtimeScene, connctbrokerserver, maxplayers, demention, samesceneforce, parentEventsFunctionContext) {
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
if (argName === "connctbrokerserver") return connctbrokerserver;
if (argName === "maxplayers") return maxplayers;
if (argName === "demention") return demention;
if (argName === "samesceneforce") return samesceneforce;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.eventsList5(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__btm_game_helper_extention__setupeasymultiplayerhost.registeredGdjsCallbacks = [];