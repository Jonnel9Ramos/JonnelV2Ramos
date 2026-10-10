
// EDUCATECH - JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // Menú móvil 
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar el menú al hacer clic
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Formulario de registro 
  const form = document.getElementById('formularioRegistro');

  if (form) {
    const campos = {
      nombre: document.getElementById('nombre'),
      correo: document.getElementById('correo'),
      telefono: document.getElementById('telefono'),
      curso: document.getElementById('curso'),
      terminos: document.getElementById('terminos')
    };

    const mensaje = document.getElementById('mensajeForm');

    // Limpiar error al escribir
    Object.keys(campos).forEach(function (key) {
      if (campos[key]) {
        campos[key].addEventListener('input', function () {
          limpiarError(campos[key]);
        });
        campos[key].addEventListener('change', function () {
          limpiarError(campos[key]);
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Limpiar mensajes 
      ocultarMensaje();
      Object.keys(campos).forEach(function (key) {
        if (campos[key]) limpiarError(campos[key]);
      });

      let esValido = true;

      // Validar nombre
      const nombre = campos.nombre.value.trim();
      if (nombre === '') {
        mostrarError(campos.nombre, 'El nombre es obligatorio.');
        esValido = false;
      } else if (nombre.length < 3) {
        mostrarError(campos.nombre, 'El nombre debe tener al menos 3 caracteres.');
        esValido = false;
      } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(nombre)) {
        mostrarError(campos.nombre, 'El nombre solo puede contener letras y espacios.');
        esValido = false;
      }

      // Validar correo
      const correo = campos.correo.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (correo === '') {
        mostrarError(campos.correo, 'El correo electrónico es obligatorio.');
        esValido = false;
      } else if (!emailRegex.test(correo)) {
        mostrarError(campos.correo, 'Ingresa un correo electrónico válido (ejemplo@dominio.com).');
        esValido = false;
      }

      // Validar teléfono
      const telefono = campos.telefono.value.trim().replace(/\s+/g, '');
      if (telefono === '') {
        mostrarError(campos.telefono, 'El teléfono es obligatorio.');
        esValido = false;
      } else if (!/^\d{7,15}$/.test(telefono)) {
        mostrarError(campos.telefono, 'El teléfono debe tener entre 7 y 15 dígitos (solo números).');
        esValido = false;
      }

      // Validar curso
      if (campos.curso.value === '') {
        mostrarError(campos.curso, 'Selecciona un curso de interés.');
        esValido = false;
      }

      // Validar términos
      if (!campos.terminos.checked) {
        mostrarError(campos.terminos, 'Debes aceptar recibir información de EducaTech.');
        esValido = false;
      }

      if (!esValido) {
        mostrarMensaje('Por favor corrige los errores marcados en el formulario.', 'error');
        return;
      }

      // Éxito
      mostrarMensaje('¡Registro realizado correctamente! Te contactaremos pronto.', 'success');
      form.reset();
    });
  }

  //  Funciones auxiliares
  function mostrarError(campo, texto) {
    if (!campo) return;

    if (campo.type === 'checkbox') {
      const grupo = campo.closest('.checkbox-group');
      if (grupo) {
        let msg = grupo.querySelector('.error-msg');
        if (!msg) {
          msg = document.createElement('div');
          msg.className = 'error-msg show';
          msg.style.marginTop = '6px';
          grupo.appendChild(msg);
        }
        msg.textContent = texto;
        msg.classList.add('show');
      }
      return;
    }

    campo.classList.add('error');
    const grupo = campo.closest('.form-group');
    if (grupo) {
      const msg = grupo.querySelector('.error-msg');
      if (msg) {
        msg.textContent = texto;
        msg.classList.add('show');
      }
    }
  }

  function limpiarError(campo) {
    if (!campo) return;

    if (campo.type === 'checkbox') {
      const grupo = campo.closest('.checkbox-group');
      if (grupo) {
        const msg = grupo.querySelector('.error-msg');
        if (msg) msg.classList.remove('show');
      }
      return;
    }

    campo.classList.remove('error');
    const grupo = campo.closest('.form-group');
    if (grupo) {
      const msg = grupo.querySelector('.error-msg');
      if (msg) msg.classList.remove('show');
    }
  }

  function mostrarMensaje(texto, tipo) {
    const mensaje = document.getElementById('mensajeForm');
    if (!mensaje) return;
    mensaje.textContent = texto;
    mensaje.className = 'form-message ' + tipo;
  }

  function ocultarMensaje() {
    const mensaje = document.getElementById('mensajeForm');
    if (!mensaje) return;
    mensaje.className = 'form-message';
    mensaje.textContent = '';
  }
});
