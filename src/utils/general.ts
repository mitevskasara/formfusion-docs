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

export const download = (contents: string, fileName: string) => {
    if (typeof window === 'undefined') return;
    const blob = new Blob([contents], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const el = document.createElement('a');
    el.href = url;
    el.download = fileName;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
    URL.revokeObjectURL(url);
};

export const encode = (url: string) => url.replaceAll('.html', '');

export const decode = (url: string) => url + '.html';

export const capitalize = (string: string) =>
    string ? string.charAt(0).toUpperCase() + string.slice(1) : '';

export const camelCaseToLabel = (string: string) => {
    const result = string?.replace(/([A-Z])/g, ' $1')?.trim();
    return result?.charAt(0)?.toUpperCase() + result?.slice(1);
};

export const typeToLabel = (string: string) => {
    const result = string.replace(/-/g, ' ').trim();
    return result.charAt(0).toUpperCase() + result.slice(1);
};

export const extractFirstImage = (htmlText: string) => {
    const regex = /<img\b[^>]*\bsrc="([^"]*)"/;
    const match = htmlText.match(regex);

    if (match) {
        return match[1];
    } else {
        return null;
    }
};
