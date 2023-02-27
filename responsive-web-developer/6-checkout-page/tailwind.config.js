tailwind.config = {
    theme: {
        fontSize: {
            h0: ['36px', '36px'],
            p2: ['24px', '24px'],
            h3: ['22px', '22px'],
            h2: ['18px', '18px'],
            h1: ['16px', '16px'],
            p: ['14px', '14px'],
            caption: ['12px', '12px'],
            m: ['10px', '10px'],
        },
        extend: {
            fontFamily: {
                'playfair-display': ['"Playfair Display"'],
                'montserrat': ['"Montserrat"']
            },
            colors: {
                'light-grey': '#F2F2F2',
                'light-grey2': '#E0E0E0',
                'light-grey3': '#828282',
                'dark-grey': '#333333',
                'dark-grey2': '#4E5150',
                'dark-grey3': '#4F4F4F',
                'footer-grey': '#BDBDBD',
                'light-black': '#181719',

                'p-orange0': '#FEFAF6',
                'p-orange': '#F2994A',
                'p-orange2': '#EF8424',
                'p-orange3': '#DF7210',

                'error': '#dd4040',
                'checked': '#5ABB23',
            },
            animation: {
                'shaking': 'shake 0.3s 1',
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'translate(0px, 0px)' },
                    '33%': { transform: 'translate(6px, 0px)' },
                    '66%': { transform: 'translate(0px, 0px)' },
                    '100%': { transform: 'translate(6px, 0px)' }
                }
            }
        }
    }
}