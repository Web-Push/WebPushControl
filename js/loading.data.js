/**
 * Ingrid : sample data for Demo
 *
 * Copyright (c) 2016
 */

<!-- get Data -->
//Get Table data
function getData() {
	var sampleData = [
		{ userId: 'A000000066', subscriptionId: 'UserA', login: 0 },
	    { userId: 'B000000022', subscriptionId: 'UserB', login: 1 },
	    { userId: 'C000000023', subscriptionId: 'UserC', login: 0 },
	    { userId: 'D000000024', subscriptionId: 'UserD', login: 1 },
	    { userId: 'E000000025', subscriptionId: 'UserE', login: 0 },
	    { userId: 'F000000026', subscriptionId: 'UserF', login: 1 },
	    { userId: 'G000000027', subscriptionId: 'UserG', login: 1 },
	    { userId: 'H000000028', subscriptionId: 'UserH', login: 0 },
	    { userId: 'J000000029', subscriptionId: 'UserI', login: 0 },
	    { userId: 'K000000030', subscriptionId: 'UserJ', login: 0 },
	    { userId: 'L000000031', subscriptionId: 'UserK', login: 1 },
	    { userId: 'M000000032', subscriptionId: 'UserL', login: 1 },
	    { userId: 'N000000033', subscriptionId: 'UserM', login: 0 },
	    { userId: 'P000000034', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000034', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000034', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000034', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000035', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000036', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000037', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000038', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000039', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000040', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000041', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000042', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000043', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000044', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000045', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000046', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000047', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000048', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000049', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000050', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000051', subscriptionId: 'UserN', login: 1 },
	    { userId: 'Q000000052', subscriptionId: 'UserO', login: 0 }
	];
	return sampleData;
}

function getObjectArray() {
	var objectData = [
		{ userId: 'A000000077', subscriptionId: 'UserA', login: 1 },
	    { userId: 'B000000022', subscriptionId: 'UserB', login: 1 },
	    { userId: 'C000000023', subscriptionId: 'UserC', login: 0 },
	    { userId: 'D000000024', subscriptionId: 'UserD', login: 1 },
	    { userId: 'E000000025', subscriptionId: 'UserE', login: 0 },
	    { userId: 'F000000026', subscriptionId: 'UserF', login: 1 },
	    { userId: 'G000000027', subscriptionId: 'UserG', login: 1 },
	    { userId: 'H000000028', subscriptionId: 'UserH', login: 0 },
	    { userId: 'J000000029', subscriptionId: 'UserI', login: 0 },
	    { userId: 'K000000030', subscriptionId: 'UserJ', login: 0 },
	    { userId: 'L000000031', subscriptionId: 'UserK', login: 1 },
	    { userId: 'M000000032', subscriptionId: 'UserL', login: 1 },
	    { userId: 'N000000033', subscriptionId: 'UserM', login: 0 },
	    { userId: 'P000000034', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000035', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000036', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000037', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000038', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000039', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000040', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000041', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000042', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000043', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000044', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000045', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000046', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000047', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000048', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000049', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000050', subscriptionId: 'UserN', login: 1 },
	    { userId: 'P000000051', subscriptionId: 'UserN', login: 1 },
	    { userId: 'Q000000052', subscriptionId: 'UserO', login: 0 }
	];

	var array = new Array();
	$.each(objectData, function(index, elem) {
		array.push(new Object(elem));
	});
	return array;
}


 