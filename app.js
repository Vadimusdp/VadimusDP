const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
const renemeElements = ['main','sidebar', 'main_content', 'photo','sidebarContacts']
const screenwidth = window.screen.width
// if (devices.test(navigator.userAgent))
if (screenwidth < 1200)
{
    // alert("Вы используете мобильное устройство (телефон или планшет).")
    renemeElements.forEach(elem => {
        try {
            renameElementClass(document.getElementById(elem), elem)
        } catch (error) {
            
        }
        document.getElementById('about_position').style.display = 'none'
        document.getElementById('about_name').style.fontSize = '35px'
       
 
    });

}
else
{
    document.getElementById('sidebar_title_position').style.display = 'none'
}

function renameElementClass(element, className) {
        element.className = className + 'Mobile'
}