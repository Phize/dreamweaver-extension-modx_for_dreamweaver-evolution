function isDOMRequired() { 
	return false;
}



function canInsertObject() {
	return true;
}



// Initialize UI & Save default parameters.
function initialize() {
	var _field = getFormFields(document.SnippetForm);
	DefaultParams = getParameters(_field);

	if (_field.length > 0) {
		_field[0].node.focus();
		_field[0].node.select();
	}

	gDialogShown = true;
}

// Retrieve form fields and generate fields object.
function getFormFields(_form) {
	var _element = [];
	var _len = 0;
	var _i;

	var _input = _form.getElementsByTagName('input');
	var _textarea = _form.getElementsByTagName('textarea');
	var _select = _form.getElementsByTagName('select');

	// Input elements
	for (_i = 0; _i < _input.length; _i ++) {
		var _item = _input.item(_i);
		var _attr = _item.getAttribute('type');

		switch (_attr) {
			case 'text':
			case 'password':
			case 'hidden':
				_element[_len] = {
					type: _attr,
					name: _item.name,
					value: _item.value,
					node: _item
				};
				_len ++;
				break;
			case 'radio':
				if (_item.checked) {
					_element[_len] = {
						type: _attr,
						name: _item.name,
						value: _item.value,
						node: _item
					};
					_len ++;
				}
				break;
			case 'checkbox':
				_element[_len] = {
					type: _attr,
					name: _item.name,
					value: _item.checked,
					node: _item
				};
				_len ++;
				break;
			default:
				break;
		}
	}

	// Textarea elements
	for (_i = 0; _i < _textarea.length; _i ++) {
		_item = _textarea.item(_i);

		_element[_len] = {
			type: 'textarea',
			name: _item.name,
			value: _item.value,
			node: _item
		};
		_len ++;
	}

	// Select elements
	for (_i = 0; _i < _select.length; _i ++) {
		_item = _select.item(_i);

		_element[_len] = {
			type: 'select',
			name: _item.name,
			value: _item.options[_item.selectedIndex].value,
			node: _item
		};
		_len ++;
	}

	return _element;
}



// Generate parameters object from field object.
function getParameters(_fieldObject) {
	var _params = {};

	for (var _i = 0; _i < _fieldObject.length; _i ++) {
		var _fName = _fieldObject[_i].name;
		var _fValue = _fieldObject[_i].value;

		_params[_fName] = _fValue;
	}

	return _params;
}
