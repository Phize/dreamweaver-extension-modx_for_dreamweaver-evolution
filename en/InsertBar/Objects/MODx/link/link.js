// Copyright(C) 2008 Phize.
// http://phize.net
// http://dxd8.com



function displayHelp() {
	var _help = dw.loadString('insertbar/modx/link/_help');

	dw.browseDocument(_help);
}



function objectTag() {
	// Strings for localize
	// var msg = dw.loadString('insertbar/modx/link/');

	var _form = document.LinkForm;
	var _params = getLinkParameters(_form, DefaultParams);

	return generateLinkTag(_params);
}



// Get & Check link's parameters.
function getLinkParameters(_form, _default) {
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



// Generate link tag.
function generateLinkTag(_params) {
	var _id = _params['id'];

	return (_id) ? '[~' + _id + '~]' : '';
}
