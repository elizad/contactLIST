

var contacts = [   // contact array
	{   "name"   : "Christian",  // First element
		"email"  : "christian@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Culver City BK 90234",
		"status": "available"
	},
	{   "name"   : "Rich",
		"email"  : "rich@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Culver City NY 90234",
		"status": "available"
	},
	{   "name"   : "Scott",
		"email"  : "scott@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Culver City CC 90234",
		"status": "available"
	},
	{   "name"   : "Dany",
		"email"  : "dany@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Culver City AR 90234",
		"status": "available"
	},
	{   "name"   : "Taka",
		"email"  : "take@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Culver City CI 90234",
		"status": "busy"
	},
	{   "name"   : "Tim",
		"email"  : "tim@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Atlanta City AT 90234",
		"status": "idle"
	},
	{   "name"   : "Patrick",
		"email"  : "patrick@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Culver City NY 90234",
		"status": "available"
	},
	{   "name"   : "Jacques",  // Last element
		"email"  : "jacques@yahoo.com",
		"phone"  : "233-555-1234",
		"address": "5639 Wilton Ave. Culver City CA 90234",
		"status": "idle"
	}

]; // End "contacts" array.

var strValue;
var myValue;
for(var i=0; i < contacts.length; i++) {
	contactsdata(contacts[i], i, contacts.length);
}


var proccessedTimes = 0;
function contactsdata(contact, contactNumber, contactsLength) {
	document.addEventListener("DOMContentLoaded", function(event) {
		myValue = document.getElementById("valueSelect");
		strValue= myValue.options[myValue.selectedIndex].value;
		// console.log(strValue);
	});

	var div = document.createElement('li');

	myValue = document.getElementById("valueSelect");
	myValue.addEventListener("change", processContact);

	function processContact() {
		proccessedTimes++;
		var div = document.createElement('li');
		myValue = document.getElementById("valueSelect");
		strValue = myValue.options[myValue.selectedIndex].value;

		div.setAttribute('class', contact.status);
		//  get details - it can be  done also settion on event -- I write it jost for the demo 
		/// div.setAttribute('onmouseover', 'GetDetail()'); 
		

		if (strValue=='email'){
			div.innerHTML = '<p><span class="name">' + contact.name +
				'</span><span class="emailphone" title ="' + contact.phone + ' ' + contact.address +'">' +
				contact.email +'</span>'+'</p> <span class="closed">'+ contact.phone + ' ' + contact.address +'</span>';
                // the element span class="closed"  I added for an example 
			    // I think that using the tooltip is the most convenient  way  - the tooltip can be styled with css to much exactly the design
			   // <a href="mailto:' +contact.address'+ "> contact.address </a>
			   // I do not use let / cont due the fact I do installed a transpile 

		}
		else{
			div.innerHTML = '<p><span class="name">' + contact.name +
				'</span><span class="emailphone" title="'+  contact.email  + ' ' + contact.address +'">' +
				contact.phone +'</span>' + '</p>';
		}
		// console.log('proccessedTimes ' + proccessedTimes);

		if(proccessedTimes == contactsLength) {

			var elements = document.getElementById('myUL').getElementsByTagName('li');
			for(var j = 0; j< contactsLength; j++) {
				//  console.log("elements[j]");
				// console.log(elements[j]);
				var list = document.getElementById('myUL');
				list.removeChild(list.childNodes[1]);
			}
			proccessedTimes = 0;
		}


		document.getElementById('myUL').appendChild(div);
	}

	div.setAttribute('class', contact.status);

	if (strValue=='phone'){
		div.innerHTML = '<p><span class="name">' + contact.name + '</span><span class="emailphone" title ="' + contact.email+ ' ' + contact.address +  '"> ' +
			contact.phone + '</span>' + '</p>';
	}
	else{
		div.innerHTML = '<p><span class="name">' + contact.name + '</span><span class="emailphone" title ="' + contact.phone + ' ' + contact.address+  '"> ' +
			contact.email +'</span>' + '</p>';
	}

	document.getElementById('myUL').appendChild(div);
}



