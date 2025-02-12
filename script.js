window.onload = function() {
    const folders = document.querySelectorAll('.folder');

    // Make the folder draggable
    folders.forEach(folder => {
        folder.onmousedown = (e) => {
            let offsetX = e.clientX - folder.getBoundingClientRect().left;
            let offsetY = e.clientY - folder.getBoundingClientRect().top;

            // When the user moves the mouse, update the folder position
            document.onmousemove = (e) => {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                folder.style.left = `${x}px`;
                folder.style.top = `${y}px`;
            };

            // Stop moving the folder when the user releases the mouse button
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    });
};
