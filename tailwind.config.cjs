module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            screens: {
                sm: '576px',
                'sm-max': {max: '576px'},
                md: '768px',
                'md-max': {max: '768px'},
                lg: '992px',
                'lg-max': {max: '992px'},
                xl: '1200px',
                'xl-max': {max: '1200px'},
                '2xl': '1320px',
                '2xl-max': {max: '1320px'},
                '3xl': '1600px',
                '3xl-max': {max: '1400px'},
                '4xl': '1850px',
                '4xl-max': {max: '1400px'}
            },
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
            color: () => ({
                white: '#FFFFFF',
                primaryColor: '#F4600C',
                secondaryColor: '#667085',
                orange: {
                    700: '#C34D03',
                    600: '#DC560B',
                    300: '#fab086',
                    100: '#FCCFB6',
                    50: '#FDE7DB',
                    25: '#FEF7F3'
                },
                gray: {
                    800: '#1D2939',
                    700: '#344054',
                    600: '#475467',
                    400: '#98A2B3',
                    300: '#D0D5DD',
                    200: '#EAECF0',
                    100: '#F2F4F7',
                    50: '#F9FAFB',
                    25: '#FCFCFD',
                }
            })
        }
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
