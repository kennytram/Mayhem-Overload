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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/mayhem_overload/microgame_board'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nconst canvas = document.querySelector(\"#canvas\");\nconst gameContainer = document.querySelector(\"#game_container\");\ncanvas.width = gameContainer.offsetWidth;\ncanvas.height = gameContainer.offsetHeight;\nlet isMuted = false;\nvar menuAudio = new Audio('src/main_menu.mp3');\nmenuAudio.play();\nmenuAudio.volume = 0.3;\nkey('m', () => {\n  if (menuAudio) {\n    isMuted = !isMuted;\n    menuAudio.pause();\n    if (!isMuted) menuAudio.play();\n  }\n});\nkey('q', () => {\n  window.location.reload();\n});\nconst startBtn = document.querySelector(\"#startButton\");\nconst func = function () {\n  startBtn.disabled = true;\n  menuAudio.pause();\n  menuAudio = null;\n  clearInterval(dialogueTimeout);\n  const gameContainer = document.querySelector(\"#game_container\");\n  canvas.width = gameContainer.offsetWidth;\n  canvas.height = gameContainer.offsetHeight;\n  document.querySelector(\"#canvas\").style.zIndex = 2;\n  const gameBoard = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'src/mayhem_overload/microgame_board'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n  gameBoard.play();\n};\nstartBtn.addEventListener(\"click\", func);\nconst dialogues = ['Let me be your CSS to your HTML', \"Fork my heart because Im ready to commit\", \"I must be an exception because you have sure caught me\", \"If I pull and push it in, know that I am already committing\", \"If you were a function, Id call you everyday\", \"We can merge, without conflicts\", \"You are my number 0\", \"I cant wait to inject my SQL into your application layer\", \"Are you an API, because Id like to REST with you\", \"Are you garbage because I want to collect you\", \"Those who use git arent afraid to commit\", \"Are you a ES6, youve got some standards\", \"You had me at Hello World\", \"Im overflowing with love for you\", \"You wanna check out my private fields\", \"Sudo make love to me\", \"You dont have bugs, only features\", \"I will debug all your code forever\", \"Can I request a pull\", \"I can resolve my promise to love you forever\", \"... Hello World ...\"];\nlet count = 1;\nlet dialogueTimeout = setInterval(() => {\n  const randIdx = Math.floor(Math.random() * dialogues.length);\n  document.getElementById('dialogue').innerHTML = dialogues[randIdx];\n  count++;\n}, count * 4000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vdW50aXRsZWQtZ2FtZS1vZi1taWNyb2dhbWVzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1pY3JvZ2FtZUJvYXJkIGZyb20gXCJzcmMvbWF5aGVtX292ZXJsb2FkL21pY3JvZ2FtZV9ib2FyZFwiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIik7XHJcbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVfY29udGFpbmVyXCIpO1xyXG5jYW52YXMud2lkdGggPSBnYW1lQ29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gZ2FtZUNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5sZXQgaXNNdXRlZCA9IGZhbHNlO1xyXG52YXIgbWVudUF1ZGlvID0gbmV3IEF1ZGlvKCdzcmMvbWFpbl9tZW51Lm1wMycpO1xyXG5tZW51QXVkaW8ucGxheSgpO1xyXG5tZW51QXVkaW8udm9sdW1lID0gMC4zO1xyXG5cclxua2V5KCdtJywgKCkgPT4ge1xyXG4gICAgaWYobWVudUF1ZGlvKSB7XHJcbiAgICAgICAgaXNNdXRlZCA9ICFpc011dGVkO1xyXG4gICAgICAgIG1lbnVBdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIGlmKCFpc011dGVkKSBtZW51QXVkaW8ucGxheSgpO1xyXG4gICAgfVxyXG59KTtcclxua2V5KCdxJywgKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydEJ1dHRvblwiKTtcclxuY29uc3QgZnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIG1lbnVBdWRpby5wYXVzZSgpO1xyXG4gICAgbWVudUF1ZGlvID0gbnVsbDtcclxuICAgIGNsZWFySW50ZXJ2YWwoZGlhbG9ndWVUaW1lb3V0KTtcclxuICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVfY29udGFpbmVyXCIpO1xyXG4gICAgY2FudmFzLndpZHRoID0gZ2FtZUNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBnYW1lQ29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpLnN0eWxlLnpJbmRleCA9IDI7XHJcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBuZXcgTWljcm9nYW1lQm9hcmQoKTsgXHJcbiAgICBnYW1lQm9hcmQucGxheSgpO1xyXG59XHJcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jKTtcclxuXHJcbmNvbnN0IGRpYWxvZ3VlcyA9IFtcclxuICAgICdMZXQgbWUgYmUgeW91ciBDU1MgdG8geW91ciBIVE1MJyxcclxuICAgIFwiRm9yayBteSBoZWFydCBiZWNhdXNlIEltIHJlYWR5IHRvIGNvbW1pdFwiLFxyXG4gICAgXCJJIG11c3QgYmUgYW4gZXhjZXB0aW9uIGJlY2F1c2UgeW91IGhhdmUgc3VyZSBjYXVnaHQgbWVcIixcclxuICAgIFwiSWYgSSBwdWxsIGFuZCBwdXNoIGl0IGluLCBrbm93IHRoYXQgSSBhbSBhbHJlYWR5IGNvbW1pdHRpbmdcIixcclxuICAgIFwiSWYgeW91IHdlcmUgYSBmdW5jdGlvbiwgSWQgY2FsbCB5b3UgZXZlcnlkYXlcIixcclxuICAgIFwiV2UgY2FuIG1lcmdlLCB3aXRob3V0IGNvbmZsaWN0c1wiLFxyXG4gICAgXCJZb3UgYXJlIG15IG51bWJlciAwXCIsXHJcbiAgICBcIkkgY2FudCB3YWl0IHRvIGluamVjdCBteSBTUUwgaW50byB5b3VyIGFwcGxpY2F0aW9uIGxheWVyXCIsXHJcbiAgICBcIkFyZSB5b3UgYW4gQVBJLCBiZWNhdXNlIElkIGxpa2UgdG8gUkVTVCB3aXRoIHlvdVwiLFxyXG4gICAgXCJBcmUgeW91IGdhcmJhZ2UgYmVjYXVzZSBJIHdhbnQgdG8gY29sbGVjdCB5b3VcIixcclxuICAgIFwiVGhvc2Ugd2hvIHVzZSBnaXQgYXJlbnQgYWZyYWlkIHRvIGNvbW1pdFwiLFxyXG4gICAgXCJBcmUgeW91IGEgRVM2LCB5b3V2ZSBnb3Qgc29tZSBzdGFuZGFyZHNcIixcclxuICAgIFwiWW91IGhhZCBtZSBhdCBIZWxsbyBXb3JsZFwiLFxyXG4gICAgXCJJbSBvdmVyZmxvd2luZyB3aXRoIGxvdmUgZm9yIHlvdVwiLFxyXG4gICAgXCJZb3Ugd2FubmEgY2hlY2sgb3V0IG15IHByaXZhdGUgZmllbGRzXCIsXHJcbiAgICBcIlN1ZG8gbWFrZSBsb3ZlIHRvIG1lXCIsXHJcbiAgICBcIllvdSBkb250IGhhdmUgYnVncywgb25seSBmZWF0dXJlc1wiLFxyXG4gICAgXCJJIHdpbGwgZGVidWcgYWxsIHlvdXIgY29kZSBmb3JldmVyXCIsXHJcbiAgICBcIkNhbiBJIHJlcXVlc3QgYSBwdWxsXCIsXHJcbiAgICBcIkkgY2FuIHJlc29sdmUgbXkgcHJvbWlzZSB0byBsb3ZlIHlvdSBmb3JldmVyXCIsXHJcbiAgICBcIi4uLiBIZWxsbyBXb3JsZCAuLi5cIlxyXG5dO1xyXG5sZXQgY291bnQgPSAxO1xyXG5sZXQgZGlhbG9ndWVUaW1lb3V0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY29uc3QgcmFuZElkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpYWxvZ3Vlcy5sZW5ndGgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZ3VlJykuaW5uZXJIVE1MID0gZGlhbG9ndWVzW3JhbmRJZHhdO1xyXG4gICAgY291bnQrKztcclxufSwgY291bnQgKiA0MDAwKTsiXSwibmFtZXMiOlsiTWljcm9nYW1lQm9hcmQiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lQ29udGFpbmVyIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImlzTXV0ZWQiLCJtZW51QXVkaW8iLCJBdWRpbyIsInBsYXkiLCJ2b2x1bWUiLCJrZXkiLCJwYXVzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3RhcnRCdG4iLCJmdW5jIiwiZGlzYWJsZWQiLCJjbGVhckludGVydmFsIiwiZGlhbG9ndWVUaW1lb3V0Iiwic3R5bGUiLCJ6SW5kZXgiLCJnYW1lQm9hcmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlhbG9ndWVzIiwiY291bnQiLCJzZXRJbnRlcnZhbCIsInJhbmRJZHgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;