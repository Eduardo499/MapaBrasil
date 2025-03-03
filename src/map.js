document.addEventListener('DOMContentLoaded', () => {
    const mapSvg = document.getElementsByClassName('map')[0];

    if (mapSvg) {
        const hoverColor = '#84E0F5';
        const defaultColor = '#424949';

        mapSvg.querySelectorAll('path').forEach(path => {
            path.addEventListener('mouseover', () => {
                path.style.fill = hoverColor;
                document.getElementById('state').innerHTML = path.getAttribute('title');
            });
            path.addEventListener('mouseout', () => {
                path.style.fill = defaultColor;
                document.getElementById('state').innerHTML = '';
            });
        });
    }
});