const {getApp} = require("firebase-app")
const { getFunctions, connectFunctionsEmulator } = require("firebase-functions")


const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "localhost", 5000);