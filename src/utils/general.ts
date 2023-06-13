export const copy = (str: any) => {
    if (typeof window !== 'undefined') {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        const x = window.scrollX;
        const y = window.scrollY;
        el.focus();
        window.scrollTo(x, y);
        document.execCommand('copy');
        document.body.removeChild(el);
    }
};

export const encode = (url: string) => url.replaceAll('.html', '');

export const decode = (url: string) => url + '.html';
