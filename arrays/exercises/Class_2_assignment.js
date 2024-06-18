engineIndicatorLight = "red blinking"
spaceSuitsOn = true
shuttleCabinReady = true
crewStatus = spaceSuitsOn && shuttleCabinReady
computerStatusCode = 200
shuttleSpeed = 15000
fuelLevel = 21000
engineTemperature = 1
engineIndicatorLight = 1



if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }
 
 if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
  } else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
  } else {
    console.log("Stable speed.");
  }

  if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }
 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }

 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }