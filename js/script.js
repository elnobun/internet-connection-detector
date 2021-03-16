/* Select elements */
const wrapper = document.querySelector(".wrapper")
const toast = document.querySelector(".toast")
const wifiIcon = document.querySelector(".icon")
const title = document.querySelector("span")
const subTitle = document.querySelector("p")

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
        toast.classList.add("offline")
        title.innerText = "You are now offline";
        subTitle.innerText = "Oops! Internet is disconnected";
        wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`
    }

    const ajax = () => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 304) {
                toast.classList.remove("offline")
                title.innerText = "You are now online";
                subTitle.innerText = "Nice! You are back online";
                wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`
            } else {
                offline()
            }
        }
        xhr.onerror = () => {
            offline()
        }
        xhr.send()
    }

    setInterval(() => {
        ajax()
    }, 100)

    // Declare a checkData function making asynchronous requests
    // const checkData = async () => {
    //     // Send a request to a URL
    //     try {
    //         const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    //         // If the response is 200, user is connected online
    //         if (data.status === 200 && data.status < 300) {
    //             console.log("Online")
    //         } else {
    //             // User is not online
    //             offline()
    //         }
    //     } catch (e) {
    //         // Call the offline function
    //         offline()
    //     }
    // }

    // Call the function
    //checkData()
}
