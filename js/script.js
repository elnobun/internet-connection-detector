/* Select elements */
const wrapper = document.querySelector('.wrapper')
const toast = document.querySelector('.toast')
const wifiIcon = document.querySelector('.icon')
const title = document.querySelector('span')
const subTitle = document.querySelector('p')
const closeIcon = document.querySelector('.close-icon')

/*
IMPLEMENTING INTERNET CONNECTION DETECTION
1. Send a GET REQUEST to a particular URL
2. Check if the URL is sending a data response.
3. If a 200 status response is sent, user is connected to the internet.
4. If no response is sent, user is not connected to the internet.
* */

// When windows Load
window.onload = () => {
    const offline = () => {
        wrapper.classList.remove('hide')
        toast.classList.add('offline')
        title.innerText = 'You are now offline'
        subTitle.innerText = 'Oops! Internet is disconnected'
        wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`
    }

    // const ajax = () => {
    //     let xhr = new XMLHttpRequest()
    //     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    //     xhr.onload = () => {
    //         if (xhr.status === 200 && xhr.status < 300) {
    //             toast.classList.remove("offline")
    //             title.innerText = "You are now online";
    //             subTitle.innerText = "Nice! You are back online";
    //             wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`
    //
    //
    //             closeIcon.onclick = () => {
    //                 wrapper.classList.add("hide")
    //             }
    //
    //             // Hide toast notification after 5 secs
    //             setTimeout(() => {
    //                 wrapper.classList.add("hide")
    //             }, 5000)
    //
    //         } else {
    //             offline()
    //         }
    //     }
    //     xhr.onerror = () => {
    //         offline()
    //     }
    //     xhr.send()
    // }
    //
    // // Refresh windows automatically
    // setInterval(() => {
    //     ajax()
    // }, 100)

    //Declare a checkData function making asynchronous requests
    const checkData = async () => {
        // Send a request to a URL
        try {
            const data = await fetch(
                'https://jsonplaceholder.typicode.com/posts')
            // If the response is 200, user is connected online
            if (data) {
                if (data.status === 200 && data.status < 300) {
                    toast.classList.remove('offline')
                    title.innerText = 'You are now online'
                    subTitle.innerText = 'Nice! You are back online'
                    wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`

                    closeIcon.onclick = () => {
                        wrapper.classList.add('hide')
                    }

                    // Hide toast notification after 5 secs
                    setTimeout(() => {
                        wrapper.classList.add('hide')
                    }, 5000)
                }
            } else {
                offline()
            }

        } catch (e) {
            // Call the offline function
            offline()
        }
    }

    //Call the function
    setInterval(() => {
        checkData()
    }, 100)
}
