export function manejarTestimonio(form) {
  // Obtén los datos del formulario
  const nombre = form.name.value;
  const testimonio = form.testimonio.value;

  if (!nombre || !testimonio) {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  // Crea un elemento de testimonio y agrégalo a la lista
  const contenedorTestimonios = document.getElementById('testimoniosContainer');

  const nuevoTestimonio = document.createElement('div');
  nuevoTestimonio.className = 'bg-white p-4 rounded-lg shadow-md';
  nuevoTestimonio.innerHTML = `
    <p class="text-lg font-semibold">${nombre}</p>
    <p class="text-gray-700 mt-2">${testimonio}</p>
  `;

  contenedorTestimonios.prepend(nuevoTestimonio);

  // Resetea el formulario
  form.reset();
}
