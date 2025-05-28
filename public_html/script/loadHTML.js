
async function loadHTML(elementId, fileName) {
    try {
        const response = await fetch(fileName);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;
        } else {
            console.error('Error al cargar el archivo:', fileName);
        }
    } catch (error) {
        console.error('Error de red o en el fetch:', error);
    }
}
