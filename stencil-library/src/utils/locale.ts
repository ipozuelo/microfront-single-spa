function getComponentClosestLanguage(lang:string): string {
    return    localStorage.getItem("languaje") || lang
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

export async function getLocaleComponentStrings(element: HTMLElement, languaje: string): Promise<{ [key: string]: string }> {
    let componentName = element.tagName.toLowerCase();
    let componentLanguage = getComponentClosestLanguage(languaje);
    let strings;
    try {
        strings = await fetchLocaleStringsForComponent(componentName, componentLanguage);
    } catch (e) {
        strings = await fetchLocaleStringsForComponent(componentName, 'es');
    }
    return strings;
}