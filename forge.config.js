module.exports = {
    packagerConfig: {
        icon: 'assets/images/logo',
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                authors: 'Printez',
                description: 'Printez Desktop App',
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'printez-net',
                    name: 'desktop-app'
                },
                prerelease: true
            }
        }
    ]
}
