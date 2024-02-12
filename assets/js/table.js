// add table class to all table after document is ready vanilla js
document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
        table.classList.add('table', 'table-striped', 'table-bordered');
    });
});