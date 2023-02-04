/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./mayhem_overload/Screen.js":
/*!***********************************!*\
  !*** ./mayhem_overload/Screen.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Screen {\n  constructor() {\n    if (this.constructor == Screen) throw new Error(\"Abstract classes can't be instantiated.\");\n    this.running = false;\n    this.ctx = undefined;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Screen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYXloZW1fb3ZlcmxvYWQvU2NyZWVuLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFNLENBQUM7RUFFVEMsV0FBVyxHQUFHO0lBQ1YsSUFBSSxJQUFJLENBQUNBLFdBQVcsSUFBSUQsTUFBTSxFQUMxQixNQUFNLElBQUlFLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztJQUU5RCxJQUFJLENBQUNDLE9BQU8sR0FBRyxLQUFLO0lBQ3BCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQyxTQUFTO0VBRXhCO0FBQ0o7QUFFQSwrREFBZUwsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3VudGl0bGVkLWdhbWUtb2YtbWljcm9nYW1lcy8uL21heWhlbV9vdmVybG9hZC9TY3JlZW4uanM/NGQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTY3JlZW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yID09IFNjcmVlbikgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFic3RyYWN0IGNsYXNzZXMgY2FuJ3QgYmUgaW5zdGFudGlhdGVkLlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdHggPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JlZW47Il0sIm5hbWVzIjpbIlNjcmVlbiIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJydW5uaW5nIiwiY3R4IiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mayhem_overload/Screen.js\n");

/***/ }),

/***/ "./mayhem_overload/game.js":
/*!*********************************!*\
  !*** ./mayhem_overload/game.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./mayhem_overload/user.js\");\n/* harmony import */ var _titlescreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./titlescreen */ \"./mayhem_overload/titlescreen.js\");\n/* harmony import */ var _loadscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadscreen */ \"./mayhem_overload/loadscreen.js\");\n/* harmony import */ var _gamescreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamescreen */ \"./mayhem_overload/gamescreen.js\");\n\n\n\n\nclass Game {\n  constructor() {\n    this.user = new _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.titleScreen = new _titlescreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.loadScreen = new _loadscreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.gameScreen = new _gamescreen__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.microgames = [];\n    this.addDefaultMicrogames();\n  }\n\n  // add default microgames set by the developer\n  addDefaultMicrogames() {\n    // add microgame #1\n    // add microgame #2\n    // add microgame #3\n    // add microgame #4\n    // add microgame #5\n  }\n  preAnimate() {\n    // check if gameScreen.microgame is won then add score to user\n    this.user.updateScore();\n    // set microgame and randomize it\n\n    // probably more\n  }\n\n  animate(ctx) {\n    // if (this.titleScreening.running === true || this.loadingScreen.running === true) this.preAnimate();\n\n    // if (this.titleScreen.running === true) this.titleScreen.animate();\n    // else if (this.gameScreen.running === true) this.gameScreen.animate();\n    // else this.loadScreen.animate();\n  }\n  setCtx(ctx) {\n    this.titleScreen.ctx = ctx;\n    this.loadScreen.ctx = ctx;\n    this.gameScreen.ctx = ctx;\n  }\n}\nGame.DIM_X = window.innerWidth;\nGame.DIM_Y = window.innerHeight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYXloZW1fb3ZlcmxvYWQvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUNjO0FBQ0Y7QUFDQTtBQUd0QyxNQUFNSSxJQUFJLENBQUM7RUFFUEMsV0FBVyxHQUFHO0lBQ1YsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSU4sNkNBQUksRUFBRTtJQUN0QixJQUFJLENBQUNPLFdBQVcsR0FBRyxJQUFJTixvREFBVyxFQUFFO0lBQ3BDLElBQUksQ0FBQ08sVUFBVSxHQUFHLElBQUlOLG1EQUFVLEVBQUU7SUFDbEMsSUFBSSxDQUFDTyxVQUFVLEdBQUcsSUFBSU4sbURBQVUsRUFBRTtJQUNsQyxJQUFJLENBQUNPLFVBQVUsR0FBRyxFQUFFO0lBQ3BCLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUU7RUFDL0I7O0VBRUE7RUFDQUEsb0JBQW9CLEdBQUc7SUFDbkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBO0VBR0pDLFVBQVUsR0FBRztJQUNUO0lBQ0EsSUFBSSxDQUFDTixJQUFJLENBQUNPLFdBQVcsRUFBRTtJQUN2Qjs7SUFFQTtFQUNKOztFQUVBQyxPQUFPLENBQUNDLEdBQUcsRUFBRTtJQUNUOztJQUVBO0lBQ0E7SUFDQTtFQUFBO0VBR0pDLE1BQU0sQ0FBQ0QsR0FBRyxFQUFFO0lBQ1IsSUFBSSxDQUFDUixXQUFXLENBQUNRLEdBQUcsR0FBR0EsR0FBRztJQUMxQixJQUFJLENBQUNQLFVBQVUsQ0FBQ08sR0FBRyxHQUFHQSxHQUFHO0lBQ3pCLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxHQUFHLEdBQUdBLEdBQUc7RUFDN0I7QUFFSjtBQUVBWCxJQUFJLENBQUNhLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVO0FBQzlCZixJQUFJLENBQUNnQixLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVztBQUUvQiwrREFBZWpCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZC1nYW1lLW9mLW1pY3JvZ2FtZXMvLi9tYXloZW1fb3ZlcmxvYWQvZ2FtZS5qcz9mM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IFRpdGxlU2NyZWVuIGZyb20gXCIuL3RpdGxlc2NyZWVuXCI7XHJcbmltcG9ydCBMb2FkU2NyZWVuIGZyb20gXCIuL2xvYWRzY3JlZW5cIjtcclxuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSBcIi4vZ2FtZXNjcmVlblwiO1xyXG5cclxuXHJcbmNsYXNzIEdhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy50aXRsZVNjcmVlbiA9IG5ldyBUaXRsZVNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMubG9hZFNjcmVlbiA9IG5ldyBMb2FkU2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NyZWVuID0gbmV3IEdhbWVTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLm1pY3JvZ2FtZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmFkZERlZmF1bHRNaWNyb2dhbWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGRlZmF1bHQgbWljcm9nYW1lcyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgYWRkRGVmYXVsdE1pY3JvZ2FtZXMoKSB7XHJcbiAgICAgICAgLy8gYWRkIG1pY3JvZ2FtZSAjMVxyXG4gICAgICAgIC8vIGFkZCBtaWNyb2dhbWUgIzJcclxuICAgICAgICAvLyBhZGQgbWljcm9nYW1lICMzXHJcbiAgICAgICAgLy8gYWRkIG1pY3JvZ2FtZSAjNFxyXG4gICAgICAgIC8vIGFkZCBtaWNyb2dhbWUgIzVcclxuICAgIH1cclxuXHJcbiAgICBwcmVBbmltYXRlKCkge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIGdhbWVTY3JlZW4ubWljcm9nYW1lIGlzIHdvbiB0aGVuIGFkZCBzY29yZSB0byB1c2VyXHJcbiAgICAgICAgdGhpcy51c2VyLnVwZGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgLy8gc2V0IG1pY3JvZ2FtZSBhbmQgcmFuZG9taXplIGl0XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcHJvYmFibHkgbW9yZVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoY3R4KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMudGl0bGVTY3JlZW5pbmcucnVubmluZyA9PT0gdHJ1ZSB8fCB0aGlzLmxvYWRpbmdTY3JlZW4ucnVubmluZyA9PT0gdHJ1ZSkgdGhpcy5wcmVBbmltYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnRpdGxlU2NyZWVuLnJ1bm5pbmcgPT09IHRydWUpIHRoaXMudGl0bGVTY3JlZW4uYW5pbWF0ZSgpO1xyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMuZ2FtZVNjcmVlbi5ydW5uaW5nID09PSB0cnVlKSB0aGlzLmdhbWVTY3JlZW4uYW5pbWF0ZSgpO1xyXG4gICAgICAgIC8vIGVsc2UgdGhpcy5sb2FkU2NyZWVuLmFuaW1hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdHgoY3R4KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZVNjcmVlbi5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5sb2FkU2NyZWVuLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmdhbWVTY3JlZW4uY3R4ID0gY3R4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuR2FtZS5ESU1fWCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5HYW1lLkRJTV9ZID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiVXNlciIsIlRpdGxlU2NyZWVuIiwiTG9hZFNjcmVlbiIsIkdhbWVTY3JlZW4iLCJHYW1lIiwiY29uc3RydWN0b3IiLCJ1c2VyIiwidGl0bGVTY3JlZW4iLCJsb2FkU2NyZWVuIiwiZ2FtZVNjcmVlbiIsIm1pY3JvZ2FtZXMiLCJhZGREZWZhdWx0TWljcm9nYW1lcyIsInByZUFuaW1hdGUiLCJ1cGRhdGVTY29yZSIsImFuaW1hdGUiLCJjdHgiLCJzZXRDdHgiLCJESU1fWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJESU1fWSIsImlubmVySGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mayhem_overload/game.js\n");

/***/ }),

/***/ "./mayhem_overload/gamescreen.js":
/*!***************************************!*\
  !*** ./mayhem_overload/gamescreen.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen */ \"./mayhem_overload/Screen.js\");\n\nclass GameScreen extends _Screen__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameScreen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYXloZW1fb3ZlcmxvYWQvZ2FtZXNjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUE2QjtBQUU3QixNQUFNQyxVQUFVLFNBQVNELCtDQUFNLENBQUM7RUFFNUJFLFdBQVcsR0FBRztJQUNWLEtBQUssRUFBRTtFQUNYO0FBQ0o7QUFFQSwrREFBZUQsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3VudGl0bGVkLWdhbWUtb2YtbWljcm9nYW1lcy8uL21heWhlbV9vdmVybG9hZC9nYW1lc2NyZWVuLmpzP2MyOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9TY3JlZW5cIlxyXG5cclxuY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVTY3JlZW47Il0sIm5hbWVzIjpbIlNjcmVlbiIsIkdhbWVTY3JlZW4iLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./mayhem_overload/gamescreen.js\n");

/***/ }),

/***/ "./mayhem_overload/loadscreen.js":
/*!***************************************!*\
  !*** ./mayhem_overload/loadscreen.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen */ \"./mayhem_overload/Screen.js\");\n\nclass LoadScreen extends _Screen__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadScreen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYXloZW1fb3ZlcmxvYWQvbG9hZHNjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUE2QjtBQUU3QixNQUFNQyxVQUFVLFNBQVNELCtDQUFNLENBQUM7RUFFNUJFLFdBQVcsR0FBRztJQUNWLEtBQUssRUFBRTtFQUNYO0FBQ0o7QUFFQSwrREFBZUQsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3VudGl0bGVkLWdhbWUtb2YtbWljcm9nYW1lcy8uL21heWhlbV9vdmVybG9hZC9sb2Fkc2NyZWVuLmpzPzA4MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9TY3JlZW5cIlxyXG5cclxuY2xhc3MgTG9hZFNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRTY3JlZW47Il0sIm5hbWVzIjpbIlNjcmVlbiIsIkxvYWRTY3JlZW4iLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./mayhem_overload/loadscreen.js\n");

/***/ }),

/***/ "./mayhem_overload/titlescreen.js":
/*!****************************************!*\
  !*** ./mayhem_overload/titlescreen.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen */ \"./mayhem_overload/Screen.js\");\n// TO-DO LIST:\n// MAKE A BUTTON THAT WORKS BY MOUSE-CURSOR OR KEYBOARD\n// Title\n// FUTURE STUFF: GITHUB ICON LINK\n\nclass TitleScreen extends _Screen__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.title = \"Mayhem Overload\";\n  }\n  createButton() {\n    const button = new Path2D();\n    let width = this.ctx.canvas.width;\n    let height = this.ctx.canvas.height;\n    let buttonWidth = Math.floor(width / 2);\n    let buttonHeight = Math.floor(height / 2);\n    button.roundRect();\n  }\n  animate() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (TitleScreen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYXloZW1fb3ZlcmxvYWQvdGl0bGVzY3JlZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUM2QjtBQUU3QixNQUFNQyxXQUFXLFNBQVNELCtDQUFNLENBQUM7RUFFN0JFLFdBQVcsR0FBRztJQUNWLEtBQUssRUFBRTtJQUNQLElBQUksQ0FBQ0MsS0FBSyxHQUFHLGlCQUFpQjtFQUNsQztFQUVBQyxZQUFZLEdBQUc7SUFDWCxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsTUFBTSxFQUFFO0lBQzNCLElBQUlDLEtBQUssR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDRixLQUFLO0lBQ2pDLElBQUlHLE1BQU0sR0FBRyxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNO0lBQ25DLElBQUlDLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNOLEtBQUssR0FBQyxDQUFDLENBQUM7SUFDckMsSUFBSU8sWUFBWSxHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBQ0gsTUFBTSxHQUFDLENBQUMsQ0FBQztJQUV2Q0wsTUFBTSxDQUFDVSxTQUFTLEVBQUU7RUFDdEI7RUFFQUMsT0FBTyxHQUFHLENBRVY7QUFFSjtBQUVBLCtEQUFlZixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQtZ2FtZS1vZi1taWNyb2dhbWVzLy4vbWF5aGVtX292ZXJsb2FkL3RpdGxlc2NyZWVuLmpzP2E5MjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVE8tRE8gTElTVDpcclxuLy8gTUFLRSBBIEJVVFRPTiBUSEFUIFdPUktTIEJZIE1PVVNFLUNVUlNPUiBPUiBLRVlCT0FSRFxyXG4vLyBUaXRsZVxyXG4vLyBGVVRVUkUgU1RVRkY6IEdJVEhVQiBJQ09OIExJTktcclxuaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9TY3JlZW5cIlxyXG5cclxuY2xhc3MgVGl0bGVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiTWF5aGVtIE92ZXJsb2FkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQnV0dG9uKCkge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBQYXRoMkQoKTtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmN0eC5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGJ1dHRvbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKTtcclxuICAgICAgICBsZXQgYnV0dG9uSGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQvMik7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5yb3VuZFJlY3QoKVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGVTY3JlZW47Il0sIm5hbWVzIjpbIlNjcmVlbiIsIlRpdGxlU2NyZWVuIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImNyZWF0ZUJ1dHRvbiIsImJ1dHRvbiIsIlBhdGgyRCIsIndpZHRoIiwiY3R4IiwiY2FudmFzIiwiaGVpZ2h0IiwiYnV0dG9uV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJidXR0b25IZWlnaHQiLCJyb3VuZFJlY3QiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./mayhem_overload/titlescreen.js\n");

/***/ }),

/***/ "./mayhem_overload/user.js":
/*!*********************************!*\
  !*** ./mayhem_overload/user.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass User {\n  constructor() {\n    this.username = \"\";\n    this.password = \"\";\n    this.currentScore = 0;\n    this.highScore = 0;\n    this.customGames = [];\n  }\n  updateScore() {\n    this.currentScore++;\n    this.updateHighScore();\n  }\n  updateHighScore() {\n    if (this.highScore < this.currentScore) this.highScore = this.currentScore;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYXloZW1fb3ZlcmxvYWQvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsSUFBSSxDQUFDO0VBRVBDLFdBQVcsR0FBRztJQUNWLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtFQUN6QjtFQUVBQyxXQUFXLEdBQUU7SUFDVCxJQUFJLENBQUNILFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNJLGVBQWUsRUFBRTtFQUMxQjtFQUVBQSxlQUFlLEdBQUc7SUFDZCxJQUFHLElBQUksQ0FBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQ0QsWUFBWSxFQUFFLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0QsWUFBWTtFQUM3RTtBQUNKO0FBRUEsK0RBQWVKLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZC1nYW1lLW9mLW1pY3JvZ2FtZXMvLi9tYXloZW1fb3ZlcmxvYWQvdXNlci5qcz80OWQ1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFVzZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXN0b21HYW1lcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NvcmUrKztcclxuICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhpZ2hTY29yZSgpIHtcclxuICAgICAgICBpZih0aGlzLmhpZ2hTY29yZSA8IHRoaXMuY3VycmVudFNjb3JlKSB0aGlzLmhpZ2hTY29yZSA9IHRoaXMuY3VycmVudFNjb3JlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJVc2VyIiwiY29uc3RydWN0b3IiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY3VycmVudFNjb3JlIiwiaGlnaFNjb3JlIiwiY3VzdG9tR2FtZXMiLCJ1cGRhdGVTY29yZSIsInVwZGF0ZUhpZ2hTY29yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./mayhem_overload/user.js\n");

/***/ }),

/***/ "./mayhem_overload/view.js":
/*!*********************************!*\
  !*** ./mayhem_overload/view.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// name: view.js\n// purpose: to create an View object for the game\n\nclass View {\n  constructor(game) {\n    this.game = game;\n    // this.ctx = ctx;\n    // this.game.setCtx(ctx);\n  }\n\n  run() {\n    this.animate();\n  }\n  animate() {\n    this.game.animate();\n    window.requestAnimationFrame(this.animate.bind(this));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYXloZW1fb3ZlcmxvYWQvdmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLENBQUM7RUFFUEMsV0FBVyxDQUFDQyxJQUFJLEVBQUU7SUFDZCxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNoQjtJQUNBO0VBQ0o7O0VBRUFDLEdBQUcsR0FBRztJQUNGLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0VBQ2xCO0VBRUFBLE9BQU8sR0FBRztJQUNOLElBQUksQ0FBQ0YsSUFBSSxDQUFDRSxPQUFPLEVBQUU7SUFDbkJDLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUMsSUFBSSxDQUFDRixPQUFPLENBQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN6RDtBQUVKO0FBQ0EsK0RBQWVQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZC1nYW1lLW9mLW1pY3JvZ2FtZXMvLi9tYXloZW1fb3ZlcmxvYWQvdmlldy5qcz9mNGE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIG5hbWU6IHZpZXcuanNcclxuLy8gcHVycG9zZTogdG8gY3JlYXRlIGFuIFZpZXcgb2JqZWN0IGZvciB0aGUgZ2FtZVxyXG5cclxuY2xhc3MgVmlldyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgLy8gdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLnNldEN0eChjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hbmltYXRlKCk7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFZpZXc7Il0sIm5hbWVzIjpbIlZpZXciLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJydW4iLCJhbmltYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./mayhem_overload/view.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mayhem_overload_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mayhem_overload/game */ \"./mayhem_overload/game.js\");\n/* harmony import */ var _mayhem_overload_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mayhem_overload/view */ \"./mayhem_overload/view.js\");\n\n\nconst canvas = document.querySelector(\"#game-canvas\");\nconst game = new _mayhem_overload_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst view = new _mayhem_overload_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game);\nview.run();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJDO0FBQ0E7QUFHM0MsTUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDckQsTUFBTUMsSUFBSSxHQUFHLElBQUlMLDZEQUFJLEVBQUU7QUFDdkIsTUFBTU0sSUFBSSxHQUFHLElBQUlMLDZEQUFJLENBQUNJLElBQUksQ0FBQztBQUMzQkMsSUFBSSxDQUFDQyxHQUFHLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZC1nYW1lLW9mLW1pY3JvZ2FtZXMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vbWF5aGVtX292ZXJsb2FkL2dhbWVcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL21heWhlbV9vdmVybG9hZC92aWV3XCI7XHJcblxyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLWNhbnZhc1wiKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbmNvbnN0IHZpZXcgPSBuZXcgVmlldyhnYW1lKTtcclxudmlldy5ydW4oKTsiXSwibmFtZXMiOlsiR2FtZSIsIlZpZXciLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lIiwidmlldyIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZC1nYW1lLW9mLW1pY3JvZ2FtZXMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;