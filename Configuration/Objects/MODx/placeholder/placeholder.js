// Copyright(C) 2008 Phize.
// http://phize.net
// http://dxd8.com



function displayHelp() {
	var _help = dw.loadString('insertbar/modx/placeholder/_help');

	dw.browseDocument(_help);
}



function objectTag() {
	// Strings for localize
	// var msg = dw.loadString('insertbar/modx/placeholder/');

	var _form = document.PlaceholderForm;
	var _params = getPlaceholderParameters(_form, DefaultParams);

	return generatePlaceholderTag(_params);
}



// Get & Check placeholder's parameters.
function getPlaceholderParameters(_form, _default) {
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



// Generate placeholder tag.
function generatePlaceholderTag(_params) {
	var _name = _params['name'];

	return (_name) ? '[+' + _name + '+]' : '';
}
