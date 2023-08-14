// Developed by Eric Pan, MIT License. 

const FreeDiscordThemes_css = `
.theme-dark.custom-theme-background {
    --bg-overlay-color: 0 0 0;
    --bg-overlay-color-inverse: 255 255 255;
    --bg-overlay-opacity-1: 0.85;
    --bg-overlay-opacity-2: 0.8;
    --bg-overlay-opacity-3: 0.7;
    --bg-overlay-opacity-4: 0.5;
    --bg-overlay-opacity-5: 0.4;
    --bg-overlay-opacity-6: 0.1;
    --bg-overlay-opacity-hover: 0.5;
    --bg-overlay-opacity-hover-inverse: 0.08;
    --bg-overlay-opacity-active: 0.45;
    --bg-overlay-opacity-active-inverse: 0.1;
    --bg-overlay-opacity-selected: 0.4;
    --bg-overlay-opacity-selected-inverse: 0.15;
    --bg-overlay-opacity-chat: 0.8;
    --bg-overlay-opacity-home: 0.85;
    --bg-overlay-opacity-home-card: 0.8;
    --bg-overlay-opacity-app-frame: var(--bg-overlay-opacity-4);
}
.theme-dark.custom-theme-background {
    --__spoiler-background-color--hidden: var(--primary-630);
    --__spoiler-background-color--hidden--hover: hsl(var(--primary-630-hsl)/0.8);
}
.theme-dark, .theme-dark.custom-theme-background {
    --__spoiler-background-color--hidden: var(--primary-700);
    --__spoiler-background-color--hidden--hover: hsl(var(--primary-700-hsl)/0.8);
    --__spoiler-background-color--revealed: hsl(var(--white-500-hsl)/0.1);
    --__spoiler-text-color--hidden: transparent;
    --__spoiler-warning-text-color: var(--primary-200);
    --__spoiler-warning-text-color--hover: var(--white-500);
    --__spoiler-warning-background-color: hsl(var(--black-500-hsl)/0.6);
    --__spoiler-warning-background-color--hover: hsl(var(--black-500-hsl)/0.9);
    --__spoiler-container-box-shadow-color: hsl(var(--black-500-hsl)/0.1);
}

.custom-theme-background {
    --custom-theme-background: linear-gradient(179.14deg, var(--bg-gradient-under-the-sea-1) 1.91%, var(--bg-gradient-under-the-sea-2) 48.99%, var(--bg-gradient-under-the-sea-3) 96.35%);
}
.custom-theme-background {
    --bg-overlay-1: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-1)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-1))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-2: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-2)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-2))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-3: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-3)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-3))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-4: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-4)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-4))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-5: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-5)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-5))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-6: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-6))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-hover: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-hover-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-hover-inverse))) fixed 0 0/cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-hover)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-hover))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-active: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-active-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-active-inverse))) fixed 0 0/cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-active)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-active))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-selected: linear-gradient(rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-selected-inverse)),rgb(var(--bg-overlay-color-inverse)/var(--bg-overlay-opacity-selected-inverse))) fixed 0 0/cover,linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-selected)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-selected))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-chat: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-chat)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-chat))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-home: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-home-card: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home-card)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-home-card))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
    --bg-overlay-app-frame: linear-gradient(rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-app-frame)),rgb(var(--bg-overlay-color)/var(--bg-overlay-opacity-app-frame))) fixed 0 0/cover,var(--custom-theme-background) fixed 0 0/cover;
}
`;


const FreeDiscordThemes_style_elem = document.createElement('style');
FreeDiscordThemes_style_elem.innerHTML = FreeDiscordThemes_css;

document.head.appendChild(FreeDiscordThemes_style_elem);
document.body.classList.add("theme-dark");
document.body.classList.add("custom-theme-background");
