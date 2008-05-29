// Copyright(C) 2008 Phize.
// http://phize.net
// http://dxd8.com



function displayHelp() {
	var _help = dw.loadString('insertbar/modx/chunk/_help');

	dw.browseDocument(_help);
}



function objectTag() {
	// Strings for localize
	// var msg = dw.loadString('insertbar/modx/chunk/');

	var _form = document.ChunkForm;
	var _params = getChunkParameters(_form, DefaultParams);

	return generateChunkTag(_params);
}



// Get & Check chunk's parameters.
function getChunkParameters(_form, _default) {
	var _newParams = {};

	var _field = getFormFields(_form);
	var _params = getParameters(_field);

	for (var _key in _params) {
		var _pName = _key;
		var _pValue = _params[_key];

		if (_default[_pName] !== undefined && _pValue != _default[_pName]) {
			_newParams[_pName] = _pValue;
		}
	}

	return _newParams;
}



// Generate chunk tag.
function generateChunkTag(_params) {
	var _name = _params['name'];

	return (_name) ? '{{' + _name + '}}' : '';
}
