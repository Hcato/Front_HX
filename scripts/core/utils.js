export function clearInputs(...ids) {
    ids.forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = "";
    });
}
