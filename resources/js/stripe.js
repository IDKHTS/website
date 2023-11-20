/* eslint-disable */
// function main(amount = 3000) {
//   const stripeForm = document.getElementById('stripeForm');
//   const element = document.getElementById('stripe-sdk');
//   if (element) {
//     // return;
//     element.parentNode.removeChild(element);
//     const btns = document.getElementsByClassName('stripe-button-el');
//     while(btns.length > 0){
//         btns[0].parentNode.removeChild(btns[0]);
//     }
//   }
//
//   const script = document.createElement('script');
//   script.id = 'stripe-sdk';
//   script.src = 'https://checkout.stripe.com/checkout.js';
//   // script.class = 'stripe-button';
//   // script['data-key'] = 'pk_test_cZPUOcHFqpb0deBpnEvgHEIC';
//   // script['data-amount'] = '1999';
//   // script['data-description'] = 'SnapmakerTest';
//   // script['data-image'] = 'https://stripe.com/img/documentation/checkout/marketplace.png';
//   // script['data-locale'] = 'auto';
//   // script['data-currency'] = 'hkd';
//
//   // About script won't work.
//   // https://www.w3schools.com/jsref/met_element_setattribute.asp
//   script.setAttribute('class', 'stripe-button');
//   script.setAttribute('data-key', 'pk_test_cZPUOcHFqpb0deBpnEvgHEIC');
//   script.setAttribute('data-amount', amount);
//   script.setAttribute('data-description', 'SnapmakerTest');
//   script.setAttribute('data-image', 'https://stripe.com/img/documentation/checkout/marketplace.png');
//   script.setAttribute('data-locale', 'auto');
//   script.setAttribute('data-currency', 'USD');
//
//   stripeForm.append(script);
// }

import $ from 'jquery';

function init(key) {
  if (window.Stripe === undefined ) {
    console.error('Stripe V3 library not loaded!')
  } else {
    return window.Stripe(key)
  }
}

let stripe = null;

if (process.env.NODE_ENV === 'development') {
  // test key
  stripe = init('pk_test_cZPUOcHFqpb0deBpnEvgHEIC');
} else {
  // public key
  stripe = init('pk_live_aoaUBVFWyR9RjXH1on63UCmK');
}

// stripe = init('pk_test_cZPUOcHFqpb0deBpnEvgHEIC');

function registerElements(elements, exampleName) {
  var formClass = '.' + exampleName;
  var example = document.querySelector(formClass);

  var form = example.querySelector('form');
  var error = form.querySelector('.error');
  var errorMessage = error.querySelector('.my-message');
  var card = example.querySelector('#card');

  function enableInputs() {
    Array.prototype.forEach.call(
      form.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel']"
      ),
      function(input) {
        input.removeAttribute('disabled');
      }
    );
  }

  function disableInputs() {
    Array.prototype.forEach.call(
      form.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel']"
      ),
      function(input) {
        input.setAttribute('disabled', 'true');
      }
    );
  }

  // Listen for errors from each Element, and show error messages in the UI.
  elements.forEach(function(element) {
    element.on('change', function(event) {
      if (event.error) {
        error.classList.add('visible');
        errorMessage.innerText = event.error.message;
      } else {
        error.classList.remove('visible');
      }
    });
  });

  // Listen on the form's 'submit' handler...
  form.addEventListener('submit', function(e) {

    // issue: when click enter in Stripe card input filed. It will trigger submit without doing standard html form validation
    // http://codetheory.in/html5-form-validation-on-javascript-submission/
    // http://codetheory.in/javascript-fire-onsubmit-by-calling-form-submit/
    if (!form.checkValidity()) {
      console.log('Warn: Not Valid Input');
      form.querySelector('input[type="submit"]').click();
      return;
    }
    e.preventDefault();

    // Show a loading screen...
    example.classList.add('submitting');

    // Disable all inputs.
    disableInputs();

    // Gather additional customer data we may have collected in our form.
    var name = form.querySelector('#' + exampleName + '-name');
    var address1 = form.querySelector('#' + exampleName + '-address');
    var city = form.querySelector('#' + exampleName + '-city');
    var state = form.querySelector('#' + exampleName + '-state');
    var zip = form.querySelector('#' + exampleName + '-zip');
    var additionalData = {
      name: name ? name.value : undefined,
      address_line1: address1 ? address1.value : undefined,
      address_city: city ? city.value : undefined,
      address_state: state ? state.value : undefined,
      address_zip: zip ? zip.value : undefined,
    };

    // Use Stripe.js to create a token. We only need to pass in one Element
    // from the Element group in order to create a token. We can also pass
    // in the additional customer data we collected in our form.
    stripe.createToken(elements[0], additionalData).then(function(result) {

      if (result.token) {
        console.log(result.token.id);
        console.log(form.querySelector('#credit-name').value);
        console.log(form.querySelector('#credit-email').value);
        console.log(form.querySelector('#stripeShipping').value);

        $.post('/api/charge?stripeToken=' + result.token.id +
         '&stripeEmail=' + form.querySelector('#credit-email').value +
         '&stripeName=' + form.querySelector('#credit-name').value +
         '&stripeShipping=' + form.querySelector('#stripeShipping').value, function(data) {
           console.log(data);
           var obj = JSON.parse(data);

           function upload() {
             const ga = window.ga;
             ga('require', 'ecommerce');

             ga('ecommerce:addTransaction', {
               'id': obj.Id,                     // Transaction ID. Required.
               'affiliation': obj.Affiliation,   // Affiliation or store name.
               'revenue': obj.Revenue,           // Grand Total.
               'shipping': obj.Shipping,         // Shipping.
               'tax': obj.Tax                    // Tax.
             });

             ga('ecommerce:addItem', {
               'id': obj.Id,                    // Transaction ID. Required.
               'name': obj.Name,                // Product name. Required.
               'sku': obj.Sku,                  // SKU/code.
               'category': obj.Category,        // Category or variation.
               'price': obj.Price,              // Unit price.
               'quantity': obj.Quantity         // Quantity.
             });

             ga('ecommerce:send');
             console.log('upload ga success[Stripe]');
           }

           // sleep to wait dependent script loaded. @hack
           if (!window.ga) {
             console.log('Sleep for 1000ms');
             window.setTimeout(() => {
               if (!window.ga) {
                 console.log('Sleep again, wait 3000ms');
                 window.setTimeout(() => {
                   if (!window.ga) {
                     console.log('Your network is too slow!!!');
                   } else {
                     upload();
                   }
                 }, 3000);
               } else {
                 upload();
               }
             }, 1000);
           } else {
             upload();
           }

           // Stop loading!
           example.classList.remove('submitting');
           example.classList.add('submitted');
           window.setTimeout(() => {
             window.location.replace('/thanks?source=stripe&txId=' + obj.Id);
           }, 10000);

         }).fail(function(resp) {
           console.log(resp)

           example.classList.remove('submitting');
           error.classList.add('visible');
           errorMessage.innerText = "Transaction failed, Please check your information.";
         });
      } else {
        // Otherwise, un-disable inputs.
        if (result.error) {
          errorMessage.innerText = result.error.message;
        }
        error.classList.add('visible');
        example.classList.remove('submitting');
        enableInputs();
      }


    });
  });
}

function main() {

  var elements = stripe.elements({
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  });

  var card = elements.create('card', {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#28A7E1',
        color: '#000',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '15px',
        fontSmoothing: 'antialiased',

        ':-webkit-autofill': {
          color: '#ab910c',
        },
        '::placeholder': {
          color: '#808080',
        },
      },
      invalid: {
        iconColor: '#E12846',
        color: '#E12846',
      },
    },
  });

  card.mount('#card');

  registerElements([card], 'credit');
}

export default main;
