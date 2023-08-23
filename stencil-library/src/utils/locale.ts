function getComponentClosestLanguage(): string {
    return    localStorage.getItem("languaje") || 'en'
}

function fetchLocaleStringsForComponent(componentName: string, locale: string): Promise<{ [key: string]: string }> {
    return new Promise((resolve, reject): void => {
        fetch(`/assets/i18n/${componentName}.i18n.${locale}.json`)
            .then((result) => {
                if (result.ok) resolve(result.json());
                else reject();
            }, () => reject());
    });
}

export async function getLocaleComponentStrings(element: HTMLElement): Promise<{ [key: string]: string }> {
    let componentName = element.tagName.toLowerCase();
    let componentLanguage = getComponentClosestLanguage();
    let strings;
    try {
        strings = await fetchLocaleStringsForComponent(componentName, componentLanguage);
    } catch (e) {
        console.warn(`no locale for {componentName} (${componentLanguage}) loading default locale en.`);
        strings = await fetchLocaleStringsForComponent(componentName, 'en');
    }
    return strings;
}