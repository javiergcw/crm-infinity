module.exports = {
    animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
    },
    animation: {
        'bounce-in': 'bounceIn 0.5s ease-out',
        'bounce-out': 'bounceOut 0.5s ease-in'
    },
    keyframes: {
        fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
        },
        bounceIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '60%': { transform: 'scale(1.05)', opacity: '1' },
            '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceOut: {
            '0%': { transform: 'scale(1)', opacity: '1' },
            '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
    },
};