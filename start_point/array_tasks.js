var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = arr1.concat(arr2);
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = [];
		arr.forEach(function(item) {
			var result = (item * item);
			newArray.push(result);
		})
		return newArray;
	},

	sum: function (arr) {
		var result = arr.reduce(function(sum, item){
		 return sum + item;
		}, 0);
		return result;
	},

	// findDuplicates: function (arr) {
  //   duplicateArray = arr.filter(function(item, pos) {
  //   return arr.indexOf(item) !== pos;
  //       })
  //       uniqueArray = duplicateArray.filter(function (item, pos) {
  //           return duplicateArray.indexOf(item) == pos;
  //       })
  //       return uniqueArray;
  //   },

	findDuplicates: function (arr) {
		  var result = [];
		  arr.forEach(function(element, index) {
		    // Find if there is a duplicate or not
		    if (arr.indexOf(element, index + 1) > -1) {
		      // Find if the element is already in the result array or not
		      if (result.indexOf(element) === -1) {
		        result.push(element);
		      }
		    }
		  });
		  return result;
		},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		for (item of arr) {
			if (item !== valueToRemove) {
				newArray.push(item);
			}
		}
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		arr.forEach(function(number, indexNo) {
			if (number === itemToFind) {
				newArray.push(indexNo);
			}
		})
		return newArray
	},

	getEvenNumbers: function(arr) {
		return arr.filter(function(number) {
			return number % 2 ===0;
		})
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		return this.getEvenNumbers(arr).reduce(function(sum, number) {
			console.log(sum);
			return sum + (number * number);
		}, 0)
	}

	// sumOfAllEvenNumbersSquared: function (arr) {
	// 	return this.getEvenNumbers(arr).reduce(function(soFar, number) {
	// 		return soFar + (number * number);
	// 	}, 0);
	// }

}

module.exports = arrayTasks
