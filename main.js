/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fibs.js":
/*!*********************!*\
  !*** ./src/fibs.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fibs: () => (/* binding */ fibs)\n/* harmony export */ });\n// fib.js\nfunction fibs(num) {\n    if(num == 0) return [0]\n    else if(num == 1) return [1]\n    let fibArray = [0, 1]\n    for(let i = 2; i < num; i++) {\n        let oneBefore = fibArray[i-1];\n        let twoBefore = fibArray[i-2];\n        fibArray.push(oneBefore+twoBefore);\n    }\n    return fibArray\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlicy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZmlicy5qcz9mNjUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZpYi5qc1xuZXhwb3J0IGZ1bmN0aW9uIGZpYnMobnVtKSB7XG4gICAgaWYobnVtID09IDApIHJldHVybiBbMF1cbiAgICBlbHNlIGlmKG51bSA9PSAxKSByZXR1cm4gWzFdXG4gICAgbGV0IGZpYkFycmF5ID0gWzAsIDFdXG4gICAgZm9yKGxldCBpID0gMjsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIGxldCBvbmVCZWZvcmUgPSBmaWJBcnJheVtpLTFdO1xuICAgICAgICBsZXQgdHdvQmVmb3JlID0gZmliQXJyYXlbaS0yXTtcbiAgICAgICAgZmliQXJyYXkucHVzaChvbmVCZWZvcmUrdHdvQmVmb3JlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpYkFycmF5XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/fibs.js\n");

/***/ }),

/***/ "./src/fibsRec.js":
/*!************************!*\
  !*** ./src/fibsRec.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fibsRec: () => (/* binding */ fibsRec)\n/* harmony export */ });\n// fibRec.js\nfunction fibsRec(num, fibsArray = [0, 1]) {\n    if (num == 0) return [0];\n    else if (num == 1) return [0, 1];\n    else if (fibsArray.length == num) return fibsArray;\n    \n    const fib = fibsArray[fibsArray.length -1] + fibsArray[fibsArray.length -2];\n    fibsArray.push(fib);\n    return fibsRec(num, fibsArray)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlic1JlYy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2ZpYnNSZWMuanM/ODk3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWJSZWMuanNcbmV4cG9ydCBmdW5jdGlvbiBmaWJzUmVjKG51bSwgZmlic0FycmF5ID0gWzAsIDFdKSB7XG4gICAgaWYgKG51bSA9PSAwKSByZXR1cm4gWzBdO1xuICAgIGVsc2UgaWYgKG51bSA9PSAxKSByZXR1cm4gWzAsIDFdO1xuICAgIGVsc2UgaWYgKGZpYnNBcnJheS5sZW5ndGggPT0gbnVtKSByZXR1cm4gZmlic0FycmF5O1xuICAgIFxuICAgIGNvbnN0IGZpYiA9IGZpYnNBcnJheVtmaWJzQXJyYXkubGVuZ3RoIC0xXSArIGZpYnNBcnJheVtmaWJzQXJyYXkubGVuZ3RoIC0yXTtcbiAgICBmaWJzQXJyYXkucHVzaChmaWIpO1xuICAgIHJldHVybiBmaWJzUmVjKG51bSwgZmlic0FycmF5KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/fibsRec.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fibs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fibs.js */ \"./src/fibs.js\");\n/* harmony import */ var _fibsRec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fibsRec.js */ \"./src/fibsRec.js\");\n/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge.js */ \"./src/merge.js\");\n\n\n\n\nconsole.log((0,_fibs_js__WEBPACK_IMPORTED_MODULE_0__.fibs)(9));\nconsole.log((0,_fibsRec_js__WEBPACK_IMPORTED_MODULE_1__.fibsRec)(9));\nconsole.log((0,_merge_js__WEBPACK_IMPORTED_MODULE_2__.mergeSort)([105, 79, 100, 110]));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFpQztBQUNNO0FBQ0E7O0FBRXZDLFlBQVksOENBQUk7QUFDaEIsWUFBWSxvREFBTztBQUNuQixZQUFZLG9EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcz9iOTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpYnMgfSBmcm9tIFwiLi9maWJzLmpzXCI7XG5pbXBvcnQgeyBmaWJzUmVjIH0gZnJvbSBcIi4vZmlic1JlYy5qc1wiO1xuaW1wb3J0IHsgbWVyZ2VTb3J0IH0gZnJvbSBcIi4vbWVyZ2UuanNcIjtcblxuY29uc29sZS5sb2coZmlicyg5KSk7XG5jb25zb2xlLmxvZyhmaWJzUmVjKDkpKTtcbmNvbnNvbGUubG9nKG1lcmdlU29ydChbMTA1LCA3OSwgMTAwLCAxMTBdKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/merge.js":
/*!**********************!*\
  !*** ./src/merge.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mergeSort: () => (/* binding */ mergeSort)\n/* harmony export */ });\n// merge.js\nfunction mergeSort(arr) {\n    if(arr.length > 1) {\n        const mid = Math.floor((arr.length) / 2);\n        const leftArray = mergeSort(arr.slice(0, mid));\n        const rightArray = mergeSort(arr.slice(mid))\n        let sortedArray = [];\n        let i = 0, j = 0;\n        while(i < leftArray.length && j < rightArray.length) {\n            if(leftArray[i] < rightArray[j]) sortedArray.push(leftArray[i++]);\n            else sortedArray.push(rightArray[j++]);\n        }\n        for(; i < leftArray.length; i++){\n            sortedArray.push(leftArray[i]);\n        }\n        for(; j < rightArray.length; j++){\n            sortedArray.push(rightArray[j]);\n        }\n        return sortedArray;\n    }\n    return arr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVyZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21lcmdlLmpzPzdlNTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbWVyZ2UuanNcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyKSB7XG4gICAgaWYoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigoYXJyLmxlbmd0aCkgLyAyKTtcbiAgICAgICAgY29uc3QgbGVmdEFycmF5ID0gbWVyZ2VTb3J0KGFyci5zbGljZSgwLCBtaWQpKTtcbiAgICAgICAgY29uc3QgcmlnaHRBcnJheSA9IG1lcmdlU29ydChhcnIuc2xpY2UobWlkKSlcbiAgICAgICAgbGV0IHNvcnRlZEFycmF5ID0gW107XG4gICAgICAgIGxldCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHdoaWxlKGkgPCBsZWZ0QXJyYXkubGVuZ3RoICYmIGogPCByaWdodEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYobGVmdEFycmF5W2ldIDwgcmlnaHRBcnJheVtqXSkgc29ydGVkQXJyYXkucHVzaChsZWZ0QXJyYXlbaSsrXSk7XG4gICAgICAgICAgICBlbHNlIHNvcnRlZEFycmF5LnB1c2gocmlnaHRBcnJheVtqKytdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IoOyBpIDwgbGVmdEFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHNvcnRlZEFycmF5LnB1c2gobGVmdEFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IoOyBqIDwgcmlnaHRBcnJheS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKHJpZ2h0QXJyYXlbal0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3J0ZWRBcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/merge.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;