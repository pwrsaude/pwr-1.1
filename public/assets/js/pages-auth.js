/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    // Form validation for Add new record
    if (formAuthentication) {
      const fv = FormValidation.formValidation(formAuthentication, {
        fields: {
          username: {
            validators: {
              notEmpty: {
                message: 'Informe o seu CPF / Carteirinha ou E-mail'
              }
            }
          },
          email: {
            validators: {
              notEmpty: {
                message: 'Informe o seu CPF / Carteirinha ou E-mail'
              },
              emailAddress: {
                message: 'Informe um login válido'
              }
            }
          },
          'email-username': {
            validators: {
              notEmpty: {
                message: 'Informe o seu CPF / Carteirinha ou E-mail'
              },
              stringLength: {
                min: 6,
                message: 'Informe um login válido'
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: 'Insira a senha'
              },
              stringLength: {
                min: 6,
                message: 'Insira uma senha válida'
              }
            }
          },
          'confirm-password': {
            validators: {
              notEmpty: {
                message: 'Confirme a senha'
              },
              identical: {
                compare: function () {
                  return formAuthentication.querySelector('[name="password"]').value;
                },
                message: 'A senha e a confirmação não são iguais'
              },
              stringLength: {
                min: 6,
                message: 'Insira uma senha válida'
              }
            }
          },
          terms: {
            validators: {
              notEmpty: {
                message: 'Concorde com os Termos e Condições'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.mb-3'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),

          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        },
        init: instance => {
          instance.on('plugins.message.placed', function (e) {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      });
    }

    //  Two Steps Verification
    const numeralMask = document.querySelectorAll('.numeral-mask');

    // Verification masking
    if (numeralMask.length) {
      numeralMask.forEach(e => {
        new Cleave(e, {
          numeral: true
        });
      });
    }
  })();
});
