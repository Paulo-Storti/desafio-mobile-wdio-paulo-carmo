import WebviewPage from '../pageobjects/webview.page.js'

export const sectionsWebviewMenu = {
    docs: {
        btn: () => WebviewPage.btnDocs,
        titleEl: () => WebviewPage.titleDocs,
        fieldEl: () => WebviewPage.fieldDocs,
        expectedTitle: 'Getting Started',
        expectedField: 'Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems, you can find help and answers on our '
    },
    api: {
        btn: () => WebviewPage.btnAPI,
        titleEl: () => WebviewPage.titleAPI,
        fieldEl: () => WebviewPage.fieldAPI,
        expectedTitle: 'Introduction',
        expectedField: 'Welcome to the WebdriverIO API docs. These pages contain reference materials for all implemented protocol bindings and convenience commands. Protocol commands, including '
    },
    blogs: {
        btn: () => WebviewPage.btnBlogs,
        titleEl: () => WebviewPage.titleBlogs,
        fieldEl: () => WebviewPage.fieldBlogs,
        expectedTitle: 'WebdriverIO v9 Released',
        expectedField: 'The whole Webdriverio development team is stoked and proud to release WebdriverIO v9 today!'
    },
    contribute: {
        btn: () => WebviewPage.btnContribute,
        titleEl: () => WebviewPage.titleContribute,
        fieldEl: () => WebviewPage.fieldContribute,
        expectedTitle: 'Contribute',
        expectedField: 'You like WebdriverIO and want to help making it better? Awesome! We are working to make this process as easy and transparent as possible. We might be not quite there yet but this guide will help you to ramp you up as a contributor and give you everything you need to make your first contribution. If there is any information missing that prevents you from sending in a pull request, please let us know. We treat these kind of issues like actual bugs.'
    },
    community: {
        btn: () => WebviewPage.btnCommunity,
        titleEl: () => WebviewPage.titleCommunity,
        fieldEl: () => WebviewPage.fieldCommunity,
        expectedTitle: 'Need Help?',
        expectedField: 'This project is maintained by a dedicated group of people.'
    },
    sponsor: {
        btn: () => WebviewPage.btnSponsor,
        titleEl: () => WebviewPage.titleSponsor,
        fieldEl: () => WebviewPage.fieldSponsor,
        expectedTitle: 'Become a WebdriverIO Sponsor',
        expectedField: 'WebdriverIO, an open-source project under the MIT license, is freely accessible for use. The sustainability of this expansive ecosystem, along with the development of innovative features, is made possible through the generous financial support of our sponsors, who contribute significantly to the maintenance and continuous growth of the project.'
    }
}

export const sectionsWebviewMenuV9 = {
    V9: {
        btn: () => WebviewPage.btnV9,
        optButton: () => WebviewPage.optV9
    },
    V8: {
        btn: () => WebviewPage.btnV9,
        optButton: () => WebviewPage.optV8
    },
    V7: {
        btn: () => WebviewPage.btnV9,
        optButton: () => WebviewPage.optV7
    },
    V6: {
        btn: () => WebviewPage.btnV9,
        optButton: () => WebviewPage.optV6
    },
    V5: {
        btn: () => WebviewPage.btnV9,
        optButton: () => WebviewPage.optV5
    },
    V4: {
        btn: () => WebviewPage.btnV9,
        optButton: () => WebviewPage.optV4
    }
}