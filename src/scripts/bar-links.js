
function sidebar() {
    const btnSidebar = document.getElementById('btn-sidebar');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    btnSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
        body.classList.toggle('show-sidebar');
    });

    document.addEventListener('click', (e) => {
        if (!btnSidebar.contains(e.target) && !sidebar.contains(e.target)) {
            body.classList.remove('show-sidebar');
        }
    });
    
}
sidebar();