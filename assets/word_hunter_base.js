function setCharAt(str, index, chr) {
  // if(index > blankedOutHiddenWord.length-1) return blankedOutHiddenWord;
  return str.substring(0,index) + chr + str.substring(index+1);
}

function hiddenWordSetCharAt(str, index, chr) {
  // if(index > blankedOutHiddenWord.length-1) return blankedOutHiddenWord;
  return str.substring(0,index) + chr.concat(' ') + str.substring(index+1);
}

// returns the random number which is used in the selecting of the hidden word from among 59,983 possibles
function getRandomInt(fromMin, toMax) 
{
  return Math.floor(Math.random() * (toMax - fromMin + 1)) + fromMin;
}   

function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function getIndicesOf(searchStr, str, caseSensitive) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
      return [];
  }
  var startIndex = 0, index, indices = [];
  if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
  }
  return indices;
}

function buildBlankedOutHiddenWord( theHiddenWord ) {
  let blankedHiddenWord = "";
  // let theAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(index=0; index < theHiddenWord.length; index++) {
    blankedHiddenWord = blankedHiddenWord.concat( "_" ); // blank out
  }
  return blankedHiddenWord;
}

function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
