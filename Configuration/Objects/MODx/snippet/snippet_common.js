// Copyright(C) 2008 Phize.
// http://phize.net
// http://dxd8.com



// Get & Check snippet's parameters.
function getSnippetParameters(_form, _default) {
	var _newParams = {};

	var _field = getFormFields(_form);
	var _params = getParameters(_field);

	for (var _key in _params) {
		var _pName = _key;
		var _pValue = _params[_key];

		if (_pName == '_cache') continue;

		if (_default[_pName] !== undefined && _pValue != _default[_pName]) {
			_newParams[_pName] = _pValue;
		}
	}

	return _newParams;
}



// Generate snippet tag.
function generateSnippetTag(_name, _params, _cache) {
	var _tag = '';
	var _paramsExist = false;

	if (_cache) {
		var _startTag = '[[';
		var _endTag = ']]';
	} else {
		var _startTag = '[!';
		var _endTag = '!]';
	}

	_tag += _startTag + _name;

	for (var _key in _params) {
		if (!_paramsExist) {
			_tag += '?';
			_paramsExist = true;
		}

		_tag += ' &' + _key + '=`' + _params[_key] + '`';
	}

	_tag += _endTag;

	return _tag;
}
