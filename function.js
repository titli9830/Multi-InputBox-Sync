//Using Custom Event
function Syncing() {
    var evt = new CustomEvent('Sync', { detail: event.target.value });
    window.dispatchEvent(evt);
}

window.addEventListener('Sync', function (e) {
    let inputs = document.getElementsByClassName('copydata');

    for (let key in inputs) {
        inputs[key].value = e.detail;
    }
});