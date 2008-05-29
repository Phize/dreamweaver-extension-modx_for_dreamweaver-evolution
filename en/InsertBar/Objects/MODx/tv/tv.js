// Copyright(C) 2008 Phize.
// http://phize.net
// http://dxd8.com



function displayHelp() {
	var _help = dw.loadString('insertbar/modx/tv/_help');

	dw.browseDocument(_help);
}



function objectTag() {
	// Strings for localize
	// var msg = dw.loadString('insertbar/modx/tv/');

	var _form = document.TemplateVarForm;
	var _params = getTemplateVarParameters(_form, DefaultParams);

	return generateTemplateVarTag(_params);
}



// Get & Check Template Variable's parameters.
function getTemplateVarParameters(_form, _default) {
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



// Generate TemplateVar tag.
function generateTemplateVarTag(_params) {
	var _name = _params['name'];

	return (_name) ? '[*' + _name + '*]' : '';
}
