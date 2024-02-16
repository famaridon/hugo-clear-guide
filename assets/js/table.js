// add table class to all table after document is ready vanilla js
document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('table');
    tables.forEach((table) => {
        // add a parent div with table-responsive class
        const parent = table.parentNode;
        const wrapper = document.createElement('div');
        wrapper.classList.add('table-responsive');
        parent.replaceChild(wrapper, table);
        wrapper.appendChild(table);
        // add table classes
        table.classList.add('table', 'table-striped', 'table-bordered');
    });
});