
        let count = 0;
        const tahseb = document.getElementById('tahseb');
        const stats = document.getElementById('stats');
        const modeToggle = document.getElementById('modeToggle');
        let isDarkMode = false;

        tahseb.addEventListener('click', () => {
            count++;
            tahseb.textContent = count;
            stats.textContent = `إجمالي التسبيحات: ${count}`;
            vibrateDevice();
        });

        function vibrateDevice() {
            if ('vibrate' in navigator) {
                navigator.vibrate(50); // Vibrate for 50 milliseconds
            }
        }

        modeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);
            modeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        });