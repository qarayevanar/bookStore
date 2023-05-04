import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";

const DarkMode = () => {
    const setDarkTheme = () => {
        document.body.className = 'bg-dark';
        localStorage.setItem('selectedTheme','bg-dark')
        // setDarkMode(true);
    };

    const setLightTheme = () => {
        document.body.className = 'bg-light';
        localStorage.setItem('selectedTheme','bg-light')
        // setDarkMode(false);
    };

    const selectedTheme = localStorage.getItem('selectedTheme');

    if (selectedTheme === 'bg-dark') {
        setDarkTheme();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkTheme();
        else setLightTheme();
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'bg-dark'}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;