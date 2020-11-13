const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR")
    if (header) {
        clearInterval(interval)

        const button = document.createElement("select")
        button.innerHTML = `
            <option value="0.25">0.25</option>
            <option value="1">0.5</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            `
        button.classList.add("twoTimesButton")

        button.addEventListener('change', () => {
            const audios = document.querySelectorAll("audio");
            if (document.querySelector('.twoTimesButton').value == 1) {
                audios.forEach((audio) => {
                    audio.playbackRate = 1;
                })
            } else if (document.querySelector('.twoTimesButton').value == 0.25) {
                audios.forEach((audio) => {
                    audio.playbackRate = 0.25;
                })
            } else if (document.querySelector('.twoTimesButton').value == 0.5) {
                audios.forEach((audio) => {
                    audio.playbackRate = 0.5;
                })
            } else if (document.querySelector('.twoTimesButton').value == 1.5) {
                audios.forEach((audio) => {
                    audio.playbackRate = 1.5;
                })
            } else {
                audios.forEach((audio) => {
                    audio.playbackRate = 2;
                })
            }
        })

        header.appendChild(button)
    }

}, 1000)