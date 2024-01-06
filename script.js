// Obtener la edad automáticamente
document.getElementById("age").innerText = calculateAge("2019-09-06");

// Función para calcular la edad
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
document.addEventListener('DOMContentLoaded', function () {
    const confettiCanvas = document.getElementById('confetti-canvas');
    const birthdayMessageContainer = document.getElementById('birthday-message-container');

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Meses en JavaScript son de 0 a 11
    const currentDay = currentDate.getDate();

    // Verifica si es el 6 de septiembre
    if (currentMonth === 9 && currentDay === 6) {
        // Si es el cumpleaños, crea el mensaje y muestra el confeti
        const birthdayMessage = document.createElement('div');
        birthdayMessage.textContent = '¡¡HOY ES MI CUMPLEAÑOS!!';
        birthdayMessage.classList.add('birthday-message');
        birthdayMessageContainer.appendChild(birthdayMessage);

        particlesJS('confetti-canvas', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 6
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: false
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
});



