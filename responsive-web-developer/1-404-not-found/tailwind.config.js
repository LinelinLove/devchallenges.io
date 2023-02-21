tailwind.config = {
    theme: {
        fontSize: {
            s: ['10px', '16px'],
            sm: ['14px', '20px'],
            base: ['16px', '24px'],
            lg: ['20px', '28px'],

            xl: ['48px', '48px'],

            head: ['24px', '24px'],

            title: ['64px', '64x'],
            text: ['18px', '18px'],
            footer: ['14px', '14px'],
            button: ['14px', '14px'],
        },
        extend: {
            fontFamily: {
                'inconsolata': ['"Inconsolata"'],
                'space-mono': ['"Space Mono"'],
                'montserrat': ['"Montserrat"']
            },
            colors: {
                'light-grey': '#333333',
                'footer-grey' : '#BDBDBD',

            },
        }
    }
}
