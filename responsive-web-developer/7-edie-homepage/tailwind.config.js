tailwind.config = {
    theme: {
        fontSize: {
            h0: ['48px', '48px'],
            h1: ['36px', '36px'],
            h2: ['24px', '24px'],
            h3: ['22px', '22px'],
            h4: ['18px', '18px'],
            h5: ['16px', '16px'],
            p: ['14px', '14px'],
            caption: ['12px', '12px'],
            m: ['10px', '10px'],
        },
        extend: {
            fontFamily: {
                'poppins': ['"Poppins"'],
                'montserrat': ['"Montserrat"'],
                'heebo': ['"Heebo"']
            },
            colors: {
                'p-blue': '#2D9CDB',
                'p-blue-primary':'#228BC4',
                'p-blue-dark':'#1C729F',
                'p-green': '#27AE60',
                'p-red': '#EB5757',
                'grey-white': '#F2F2F2',
                'grey-white-dark': '#E0E0E0',
                'grey-light': '#828282',
                'grey-primary': '#4F4F4F',
                'grey-dark': '#333333',
                'footer-grey': '#BDBDBD',
                'bg-footer': '#100E1D'

                // 'dark-grey2': '#4E5150',
                // 'light-black': '#181719',
                // 'p-orange0': '#FEFAF6',
                // 'p-orange': '#F2994A',
                // 'p-orange2': '#EF8424',
                // 'p-orange3': '#DF7210',

                // 'error': '#dd4040',
                // 'checked': '#5ABB23',
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