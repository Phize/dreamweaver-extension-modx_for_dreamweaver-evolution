// Copyright(C) 2008 Phize.
// http://phize.net
// http://dxd8.com



function displayHelp() {
	var _help = dw.loadString('insertbar/modx/snippet/_help');

	dw.browseDocument(_help);
}



function objectTag() {
	// Strings for localize
	// var msg = dw.loadString('insertbar/modx/snippet/');

	var _form = document.SnippetForm;
	var _params = getSnippetParameters(_form, DefaultParams);

	return generateSnippetTag(_params, _form._cache.checked);
}



// Get & Check snippet's parameters.
function getSnippetParameters(_form, _default) {
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



// Generate snippet tag.
function generateSnippetTag(_params, _cache) {
	var _tag = '';
	var _name = _params['name'];
	var _parameter = _params['parameter'];

	if (!_name) return '';

	if (_cache) {
		var _startTag = '[[';
		var _endTag = ']]';
	} else {
		var _startTag = '[!';
		var _endTag = '!]';
	}

	_tag += _startTag + _name;

	if (_parameter) {
		_tag += '? ' + _parameter;
	}

	_tag += _endTag;

	return _tag;
}
